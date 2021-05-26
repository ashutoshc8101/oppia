// Copyright 2015 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Translation functions for Oppia.
 */

import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { AppConstants } from 'app.constants';
import { I18nLanguageCodeService } from 'services/i18n-language-code.service';
import { UserService } from 'services/user.service';

@Component({
  selector: 'oppia-i18n-footer',
  templateUrl: './i18n-footer.component.html'
})
export class I18nFooterComponent {
  private _siteLanguageUrl = '/save_site_language';
  currentLanguageCode: string;
  supportedSiteLanguages;

  constructor(
    private i18nLanguageCodeService: I18nLanguageCodeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentLanguageCode = this.i18nLanguageCodeService
      .getCurrentI18nLanguageCode();
    this.supportedSiteLanguages = AppConstants.SUPPORTED_SITE_LANGUAGES;
  }

  changeLanguage(): void {
    this.i18nLanguageCodeService.setI18nLanguageCode(this.currentLanguageCode);
    this.userService.getUserInfoAsync().then((userInfo) => {
      if (userInfo.isLoggedIn()) {
    }
    });
    console.log('change langauge');
  }
}

angular.module('oppia').directive('i18nFooter', downgradeComponent({
  component: I18nFooterComponent
}));

// angular.module('oppia').directive('i18nFooter', [
//   function() {
//     return {
//       restrict: 'E',
//       scope: {},
//       bindToController: {},
//       template: require('./i18n-footer.directive.html'),
//       controllerAs: '$ctrl',
//       controller: [
//         '$http', '$rootScope', '$translate',
//         'I18nLanguageCodeService', 'UserService',
//         'SUPPORTED_SITE_LANGUAGES',
//         function(
//             $http, $rootScope, $translate,
//             I18nLanguageCodeService, UserService,
//             SUPPORTED_SITE_LANGUAGES) {
//           var ctrl = this;
//           // Changes the language of the translations.
//           var siteLanguageUrl = '/save_site_language';
//           ctrl.changeLanguage = function() {
//             $translate.use(ctrl.currentLanguageCode);
//             I18nLanguageCodeService.setI18nLanguageCode(
//               ctrl.currentLanguageCode);
//             UserService.getUserInfoAsync().then(function(userInfo) {
//               if (userInfo.isLoggedIn()) {
//                 $http.put(siteLanguageUrl, {
//                   site_language_code: ctrl.currentLanguageCode
//                 });
//               }
//               // TODO(#8521): Remove the use of $rootScope.$apply()
//               // once the controller is migrated to angular.
//               $rootScope.$applyAsync();
//             });
//           };
//           ctrl.$onInit = function() {
//             ctrl.supportedSiteLanguages = SUPPORTED_SITE_LANGUAGES;
//           };
//         }
//       ]
//     };
//   }]);
