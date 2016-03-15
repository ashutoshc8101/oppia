// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Data and controllers for the Oppia contributors' gallery page.
 */

// Overwrite the default ui-bootstrap carousel template to remove the
// on-mouseover behaviour, as well as the left and right arrows.
angular.module('template/carousel/carousel.html', []).run([
    '$templateCache', function($templateCache) {
  $templateCache.put('template/carousel/carousel.html',
    '<div class=\"carousel\" ng-swipe-right=\"prev()\" ' +
    '     ng-swipe-left=\"next()\">\n' +
    '  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n' +
    '    <li ng-repeat=\"slide in slides track by $index\" ' +
    '        ng-class=\"{active: isActive(slide)}\" ' +
    '        ng-click=\"select(slide)\"></li>\n' +
    '  </ol>\n' +
    '  <div class=\"carousel-inner\" ng-transclude></div>\n' +
    '</div>\n');
}]);

oppia.constant('GALLERY_DATA_URL', '/galleryhandler/data');

oppia.factory('searchService', [
    '$http', '$rootScope', 'GALLERY_DATA_URL',
    function($http, $rootScope, GALLERY_DATA_URL) {
  var _lastQuery = null;
  var _lastSelectedCategories = {};
  var _lastSelectedLanguageCodes = {};
  var _searchCursor = null;

  // Appends a suffix to the query describing allowed category and language
  // codes to filter on.
  var _getSuffixForQuery = function(selectedCategories, selectedLanguageCodes) {
    var querySuffix = '';

    var _categories = '';
    for (var key in selectedCategories) {
      if (selectedCategories[key]) {
        if (_categories) {
          _categories += '" OR "';
        }
        _categories += key;
      }
    }
    if (_categories) {
      querySuffix += ' category=("' + _categories + '")';
    }

    var _languageCodes = '';
    for (var key in selectedLanguageCodes) {
      if (selectedLanguageCodes[key]) {
        if (_languageCodes) {
          _languageCodes += '" OR "';
        }
        _languageCodes += key;
      }
    }
    if (_languageCodes) {
      querySuffix += ' language_code=("' + _languageCodes + '")';
    }

    return querySuffix;
  };

  var hasPageFinishedLoading = function() {
    return _searchCursor === null;
  };

  var _isCurrentlyFetchingResults = false;

  return {
    // Note that an empty query results in all explorations being shown.
    executeSearchQuery: function(
        searchQuery, selectedCategories, selectedLanguageCodes,
        successCallback) {
      var queryUrl = GALLERY_DATA_URL + '?q=' + encodeURI(
        searchQuery +
        _getSuffixForQuery(selectedCategories, selectedLanguageCodes));

      _isCurrentlyFetchingResults = true;
      $http.get(queryUrl).success(function(data) {
        _lastQuery = searchQuery;
        _lastSelectedCategories = angular.copy(selectedCategories);
        _lastSelectedLanguageCodes = angular.copy(selectedLanguageCodes);
        _searchCursor = data.search_cursor;

        if ($('.oppia-splash-search-input').val() === searchQuery) {
          $rootScope.$broadcast('refreshGalleryData', data,
                                hasPageFinishedLoading());
          _isCurrentlyFetchingResults = false;
        } else {
          console.log('Mismatch');
          console.log('SearchQuery: ' + searchQuery);
          console.log('Input: ' + $('.oppia-splash-search-input').val());
        }
      });

      if (successCallback) {
        successCallback();
      }
    },
    loadMoreData: function(successCallback) {
      // If a new query is still being sent, do not fetch more results.
      if (_isCurrentlyFetchingResults) {
        return;
      }

      var queryUrl = GALLERY_DATA_URL + '?q=' + encodeURI(
        _lastQuery + _getSuffixForQuery(
          _lastSelectedCategories, _lastSelectedLanguageCodes));

      if (_searchCursor) {
        queryUrl += '&cursor=' + _searchCursor;
      }

      _isCurrentlyFetchingResults = true;
      $http.get(queryUrl).success(function(data) {
        _searchCursor = data.search_cursor;
        _isCurrentlyFetchingResults = false;

        if (successCallback) {
          successCallback(data, hasPageFinishedLoading());
        }
      });
    }
  };
}]);

oppia.controller('Gallery', [
  '$scope', '$http', '$rootScope', '$modal', '$window', '$timeout',
  'ExplorationCreationButtonService', 'oppiaDatetimeFormatter',
  'oppiaDebouncer', 'urlService', 'GALLERY_DATA_URL', 'CATEGORY_LIST',
  'searchService', 'siteAnalyticsService',
  function(
      $scope, $http, $rootScope, $modal, $window, $timeout,
      ExplorationCreationButtonService, oppiaDatetimeFormatter,
      oppiaDebouncer, urlService, GALLERY_DATA_URL, CATEGORY_LIST,
      searchService, siteAnalyticsService) {
    $window.addEventListener('scroll', function() {
      var oppiaBanner = $('.oppia-gallery-banner-container');
      var oppiaTagline = $('.oppia-gallery-banner-tagline');
      var bannerVanishRate = oppiaBanner.height();
      var taglineVanishRate = oppiaBanner.height() * 0.3;

      oppiaBanner.css({
        opacity: (bannerVanishRate - $(window).scrollTop()) / bannerVanishRate
      });
      oppiaTagline.css({
        opacity: (taglineVanishRate - $(window).scrollTop()) / taglineVanishRate
      });
    });

    $scope.CAROUSEL_INTERVAL = 3500;
    $scope.CAROUSEL_SLIDES = GLOBALS.CAROUSEL_SLIDES_CONFIG || [];

    // Preload images, otherwise they will only start showing up some time after
    // the carousel slide comes into view. See:
    //
    //     http://stackoverflow.com/q/1373142
    for (var i = 0; i < $scope.CAROUSEL_SLIDES.length; i++) {
      var pic = new Image();
      pic.src = '/images/splash/' + $scope.CAROUSEL_SLIDES[i].image_filename;
    }

    $scope.getLocaleAbbreviatedDatetimeString = function(millisSinceEpoch) {
      return oppiaDatetimeFormatter.getLocaleAbbreviatedDatetimeString(
        millisSinceEpoch);
    };

    $rootScope.loadingMessage = 'Loading';

    $scope.showCreateExplorationModal = function() {
      ExplorationCreationButtonService.showCreateExplorationModal(
        CATEGORY_LIST);
    };

    $scope.currentUserIsModerator = false;

    $scope.inSplashMode = ($scope.CAROUSEL_SLIDES.length > 0);
    $scope.$on('hasChangedSearchQuery', function() {
      if ($scope.inSplashMode) {
        $('.oppia-gallery-container').fadeOut(function() {
          $scope.inSplashMode = false;
          $timeout(function() {
            $('.oppia-gallery-container').fadeIn();
          }, 50);
        });
      }
    });

    // SEARCH FUNCTIONALITY

    $scope.allExplorationsInOrder = [];

    // Called when the page loads, and after every search query.
    var _refreshGalleryData = function(data, hasPageFinishedLoading) {
      $scope.searchIsLoading = false;
      $scope.allExplorationsInOrder = data.explorations_list;
      $scope.finishedLoadingPage = hasPageFinishedLoading;
      $rootScope.loadingMessage = '';
    };

    $scope.pageLoaderIsBusy = false;
    $scope.showMoreExplorations = function() {
      if (!$rootScope.loadingMessage) {
        $scope.pageLoaderIsBusy = true;

        searchService.loadMoreData(function(data, hasPageFinishedLoading) {
          $scope.allExplorationsInOrder = $scope.allExplorationsInOrder.concat(
            data.explorations_list);
          $scope.finishedLoadingPage = hasPageFinishedLoading;
          $scope.pageLoaderIsBusy = false;
        });
      }
    };

    $scope.$on(
      'refreshGalleryData',
      function(evt, data, hasPageFinishedLoading) {
        _refreshGalleryData(data, hasPageFinishedLoading);
      }
    );

    // Retrieves gallery data from the server.
    $http.get(GALLERY_DATA_URL).success(function(data) {
      $scope.currentUserIsModerator = Boolean(data.is_moderator);

      // Note that this will cause an initial search query to be sent.
      $rootScope.$broadcast(
        'preferredLanguageCodesLoaded', data.preferred_language_codes);

      if (data.username) {
        if (urlService.getUrlParams().mode === 'create') {
          $scope.showCreateExplorationModal(CATEGORY_LIST);
        }
      }
    });

    $scope.onRedirectToLogin = function(destinationUrl) {
      siteAnalyticsService.registerStartLoginEvent('noSearchResults');
      $timeout(function() {
        $window.location = destinationUrl;
      }, 150);
      return false;
    };
  }
]);
