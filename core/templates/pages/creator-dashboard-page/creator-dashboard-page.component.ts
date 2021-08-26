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
 * @fileoverview Component for the creator dashboard.
 */

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { AppConstants } from 'app.constants';
import { ExplorationCreationService } from 'components/entity-creation-services/exploration-creation.service';
import { RatingComputationService } from 'components/ratings/rating-computation/rating-computation.service';
import { CollectionSummary } from 'domain/collection/collection-summary.model';
import { CreatorDashboardBackendApiService } from 'domain/creator_dashboard/creator-dashboard-backend-api.service';
import { CreatorDashboardStats } from 'domain/creator_dashboard/creator-dashboard-stats.model';
import { ThreadMessage } from 'domain/feedback_message/ThreadMessage.model';
import { CreatorExplorationSummary } from 'domain/summary/creator-exploration-summary.model';
import { ProfileSummary } from 'domain/user/profile-summary.model';
import { UrlInterpolationService } from 'domain/utilities/url-interpolation.service';
import { ThreadStatusDisplayService } from 'pages/exploration-editor-page/feedback-tab/services/thread-status-display.service';
import { AlertsService } from 'services/alerts.service';
import { WindowRef } from 'services/contextual/window-ref.service';
import { DateTimeFormatService } from 'services/date-time-format.service';
import { LoaderService } from 'services/loader.service';
import { UserService } from 'services/user.service';
import { CreatorDashboardConstants } from './creator-dashboard-page.constants';

@Component({
  selector: 'oppia-creator-dashboard-page',
  templateUrl: './creator-dashboard-page.component.html'
})
export class CreatorDashboardPageComponent {
  private _EXP_PUBLISH_TEXTS = {
    defaultText: (
      'This exploration is private. Publish it to receive statistics.'),
    smText: 'Publish the exploration to receive statistics.'
  };

  private _userDashboardDisplayPreference: string = (
    AppConstants.ALLOWED_CREATOR_DASHBOARD_DISPLAY_PREFS.CARD);

  activeTab: string;
  myExplorationsView: string;
  publishText: string;
  currentSortType;
  isCurrentSortDescending: boolean;
  currentSubscribersSortType;
  isCurrentSubscriptionSortDescending: boolean;
  mySuggestionsList;
  suggestionsToReviewList;
  activeThread;
  canReviewActiveThread: boolean;
  canCreateCollections: boolean = null;

  DEFAULT_EMPTY_TITLE: string = 'Untitled';
  EXPLORATION_DROPDOWN_STATS = (
    CreatorDashboardConstants.EXPLORATION_DROPDOWN_STATS);
  EXPLORATIONS_SORT_BY_KEYS = (
    CreatorDashboardConstants.EXPLORATIONS_SORT_BY_KEYS);
  HUMAN_READABLE_EXPLORATIONS_SORT_BY_KEYS = (
    CreatorDashboardConstants.HUMAN_READABLE_EXPLORATIONS_SORT_BY_KEYS);
  SUBSCRIPTION_SORT_BY_KEYS = (
    CreatorDashboardConstants.SUBSCRIPTION_SORT_BY_KEYS);
  HUMAN_READABLE_SUBSCRIPTION_SORT_BY_KEYS = (
    CreatorDashboardConstants.HUMAN_READABLE_SUBSCRIPTION_SORT_BY_KEYS);
  DEFAULT_TWITTER_SHARE_MESSAGE_DASHBOARD = (
    AppConstants.DEFAULT_TWITTER_SHARE_MESSAGE_EDITOR);
  explorationsList: CreatorExplorationSummary[];
  collectionsList: CollectionSummary[];
  subscribersList: ProfileSummary[];
  dashboardStats: CreatorDashboardStats;
  lastWeekStats: CreatorDashboardStats;
  relativeChangeInTotalPlays: number;
  emptyDashboardImgUrl: string;

  constructor(
    private httpClient: HttpClient,
    private windowRef: WindowRef,
    private alertsService: AlertsService,
    private creatorDashboardBackendApiService:
    CreatorDashboardBackendApiService,
    private dateTimeFormatService: DateTimeFormatService,
    private explorationCreationService: ExplorationCreationService,
    private loaderService: LoaderService,
    private ratingComputationService: RatingComputationService,
    private threadStatusDisplayService: ThreadStatusDisplayService,
    private urlInterpolationService: UrlInterpolationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loaderService.showLoadingScreen('Loading');
    let userInfoPromise = this.userService.getUserInfoAsync();
    userInfoPromise.then((userInfo) => {
      this.canCreateCollections = userInfo.canCreateCollections();
    });

    let dashboardDataPromise = (
      this.creatorDashboardBackendApiService.fetchDashboardDataAsync());
    dashboardDataPromise.then((response) => {
      // The following condition is required for Karma testing. The
      // Angular HttpClient returns an Observable which when converted
      // to a promise does not have the 'data' key but the AngularJS
      // mocks of services using HttpClient use $http which return
      // promise and the content is contained in the 'data' key.
      // Therefore the following condition checks for presence of
      // 'response.data' which would be the case in AngularJS testing
      // but assigns 'response' if the former is not present which is
      // the case with HttpClient.
      this.currentSortType = (
        CreatorDashboardConstants.EXPLORATIONS_SORT_BY_KEYS.OPEN_FEEDBACK);
      this.currentSubscribersSortType =
        this.SUBSCRIPTION_SORT_BY_KEYS.USERNAME;
      this.isCurrentSortDescending = true;
      this.isCurrentSubscriptionSortDescending = true;
      this.explorationsList = response.explorationsList;
      this.collectionsList = response.collectionsList;
      this.subscribersList = response.subscribersList;
      this.dashboardStats = response.dashboardStats;
      this.lastWeekStats = response.lastWeekStats;
      this.myExplorationsView = response.displayPreference;
      this.mySuggestionsList = response.createdSuggestionThreadsList;
      this.suggestionsToReviewList = response.suggestionThreadsToReviewList;

      if (this.dashboardStats && this.lastWeekStats) {
        this.relativeChangeInTotalPlays = (
          this.dashboardStats.totalPlays - (
            this.lastWeekStats.totalPlays)
        );
      }

      if (this.explorationsList.length === 0 &&
        this.collectionsList.length > 0) {
        this.activeTab = 'myCollections';
      } else if (this.explorationsList.length === 0 && (
        this.mySuggestionsList.length > 0 ||
        this.suggestionsToReviewList.length > 0)) {
        this.activeTab = 'suggestions';
      } else {
        this.activeTab = 'myExplorations';
      }
    }, (errorResponse) => {
      if (AppConstants.FATAL_ERROR_CODES.indexOf(errorResponse.status) !== -1) {
        this.alertsService.addWarning('Failed to get dashboard data');
      }
    });

    Promise.all([userInfoPromise, dashboardDataPromise]).then(() => {
      this.loaderService.hideLoadingScreen();
    });

    this.emptyDashboardImgUrl = this.urlInterpolationService.getStaticImageUrl(
      '/general/empty_dashboard.svg');
    this.canReviewActiveThread = null;
    this.updatesGivenScreenWidth();
    this.windowRef.nativeWindow.addEventListener('resize', () => {
      this.updatesGivenScreenWidth();
    });
  }

  setActiveTab(newActiveTabName: string): void {
    this.activeTab = newActiveTabName;
  }

  getExplorationUrl(explorationId: string): string {
    return '/create/' + explorationId;
  }

  getCollectionUrl(collectionId: string): string {
    return '/collection_editor/create/' + collectionId;
  }

  setMyExplorationsView(newViewType: string): void {
    this.httpClient.post('/creatordashboardhandler/data', {
      display_preference: newViewType
    }).toPromise().then(() => {
      this.myExplorationsView = newViewType;
    });
    this._userDashboardDisplayPreference = newViewType;
  }

  checkMobileView(): boolean {
    return this.windowRef.nativeWindow.innerWidth < 500;
  }

  showUsernamePopover(subscriberUsername: string): string {
    // The popover on the subscription card is only shown if the length
    // of the subscriber username is greater than 10 and the user hovers
    // over the truncated username.
    if (subscriberUsername.length > 10) {
      return 'mouseenter';
    } else {
      return 'none';
    }
  }

  updatesGivenScreenWidth(): void {
    if (this.checkMobileView()) {
      // For mobile users, the view of the creators
      // exploration list is shown only in
      // the card view and can't be switched to list view.
      this.myExplorationsView = (
        AppConstants.ALLOWED_CREATOR_DASHBOARD_DISPLAY_PREFS.CARD);
      this.publishText = this._EXP_PUBLISH_TEXTS.smText;
    } else {
      // For computer users or users operating in larger screen size
      // the creator exploration list will come back to its previously
      // selected view (card or list) when resized from mobile view.
      this.myExplorationsView = this._userDashboardDisplayPreference;
      this.publishText = this._EXP_PUBLISH_TEXTS.defaultText;
    }
  }

  setExplorationsSortingOptions(sortType: string): void {
    if (sortType === this.currentSortType) {
      this.isCurrentSortDescending = !this.isCurrentSortDescending;
    } else {
      this.currentSortType = sortType;
    }
  }

  setSubscriptionSortingOptions(sortType: string): void {
    if (sortType === this.currentSubscribersSortType) {
      this.isCurrentSubscriptionSortDescending = (
        !this.isCurrentSubscriptionSortDescending);
    } else {
      this.currentSubscribersSortType = sortType;
    }
  }

  sortSubscriptionFunction(entity): void {
    // This function is passed as a custom comparator function to
    // `orderBy`, so that special cases can be handled while sorting
    // subscriptions.
    let value = entity[this.currentSubscribersSortType];
    if (this.currentSubscribersSortType ===
        CreatorDashboardConstants.SUBSCRIPTION_SORT_BY_KEYS.IMPACT) {
      value = (value || 0);
    }
    return value;
  }

  private _fetchMessages(threadId: string): void {
    this.httpClient.get('/threadhandler/' + threadId).toPromise()
      .then((response) => {
        let allThreads = this.mySuggestionsList.concat(
          this.suggestionsToReviewList);

        for (let i = 0; i < allThreads.length; i++) {
          if (allThreads[i].threadId === threadId) {
            allThreads[i].setMessages(response.messages.map(
              m => ThreadMessage.createFromBackendDict(m)
            ));
            break;
          }
        }
      });
  }

  clearActiveThread(): void {
    this.activeThread = null;
  }

  setActiveThread(threadId: string): void {
    this._fetchMessages(threadId);
    for (let i = 0; i < this.mySuggestionsList.length; i++) {
      if (this.mySuggestionsList[i].threadId === threadId) {
        this.activeThread = this.mySuggestionsList[i];
        this.canReviewActiveThread = false;
        break;
      }
    }
    if (!this.activeThread) {
      for (let i = 0; i < this.suggestionsToReviewList.length; i++) {
        if (this.suggestionsToReviewList[i].threadId === threadId) {
          this.activeThread = this.suggestionsToReviewList[i];
          this.canReviewActiveThread = true;
          break;
        }
      }
    }
  }

  showSuggestionModal(): void {
    // this.suggestionModalForCreatorDashboardService.showSuggestionModal(
    //   ctrl.activeThread.suggestion.suggestionType,
    //   {
    //     activeThread: ctrl.activeThread,
    //     suggestionsToReviewList: ctrl.suggestionsToReviewList,
    //     clearActiveThread: ctrl.clearActiveThread,
    //     canReviewActiveThread: ctrl.canReviewActiveThread
    //   }
    // );
  }

  sortByFunction(entity): void {
    // This function is passed as a custom comparator function to
    // `orderBy`, so that special cases can be handled while sorting
    // explorations.
    let value = entity[this.currentSortType];
    if (entity.status === 'private') {
      if (this.currentSortType ===
        CreatorDashboardConstants.EXPLORATIONS_SORT_BY_KEYS.TITLE) {
        value = (value || this.DEFAULT_EMPTY_TITLE);
      } else if (this.currentSortType !==
        CreatorDashboardConstants.EXPLORATIONS_SORT_BY_KEYS.LAST_UPDATED) {
        value = 0;
      }
    } else if (
      this.currentSortType ===
      CreatorDashboardConstants.EXPLORATIONS_SORT_BY_KEYS.RATING) {
      let averageRating = (
        this.ratingComputationService.computeAverageRating(value));
      value = (averageRating || 0);
    }
    return value;
  }

  createNewExploration(): void {
    this.explorationCreationService.createNewExploration();
  }

  getCompleteThumbnailIconUrl(iconUrl: string): string {
    return this.urlInterpolationService.getStaticImageUrl(iconUrl);
  }

  getLocaleAbbreviatedDatetimeString(millisSinceEpoch: number): string {
    return this.dateTimeFormatService.getLocaleAbbreviatedDatetimeString(
      millisSinceEpoch);
  }

  getHumanReadableStatus(status: string): string {
    return this.threadStatusDisplayService.getHumanReadableStatus(status);
  }
}

angular.module('oppia').directive('oppiaCreatorDashboardPage',
  downgradeComponent({
    component: CreatorDashboardPageComponent
  }) as angular.IDirectiveFactory);
