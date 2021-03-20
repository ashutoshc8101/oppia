(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-donate-page-donate-page-module"],{

/***/ "CQg9":
/*!************************************************************************!*\
  !*** ./core/templates/pages/donate-page/donate-page.routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DonatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageRoutingModule", function() { return DonatePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _donate_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate-page.component */ "XHuz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: '',
        component: _donate_page_component__WEBPACK_IMPORTED_MODULE_2__["DonatePageComponent"]
    }
];
let DonatePageRoutingModule = class DonatePageRoutingModule {
};
DonatePageRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ]
    })
], DonatePageRoutingModule);



/***/ }),

/***/ "PiPN":
/*!*************************************************************!*\
  !*** ./core/templates/services/user-backend-api.service.ts ***!
  \*************************************************************/
/*! exports provided: UserBackendApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBackendApiService", function() { return UserBackendApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domain/user/user-info.model */ "v1VX");
// Copyright 2018 The Oppia Authors. All Rights Reserved.
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @fileoverview Service for user data.
 */



let UserBackendApiService = class UserBackendApiService {
    constructor(http) {
        this.http = http;
        this.USER_INFO_URL = '/userinfohandler';
        this.PROFILE_PICTURE_URL = '/preferenceshandler/profile_picture';
        this.PREFERENCES_DATA_URL = '/preferenceshandler/data';
        this.USER_CONTRIBUTION_RIGHTS_DATA_URL = ('/usercontributionrightsdatahandler');
    }
    getUserInfoAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(this.USER_INFO_URL).toPromise().then((backendDict) => {
                return backendDict.user_is_logged_in ? domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_2__["UserInfo"].createFromBackendDict(backendDict) : domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_2__["UserInfo"].createDefault();
            });
        });
    }
    getProfileImageDataUrlAsync(defaultUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(this.PROFILE_PICTURE_URL).toPromise().then((backendDict) => {
                return backendDict.profile_picture_data_url || defaultUrl;
            });
        });
    }
    setProfileImageDataUrlAsync(newProfileImageDataUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileImageUpdateUrlData = {
                update_type: 'profile_picture_data_url',
                data: newProfileImageDataUrl
            };
            return this.http.put(this.PREFERENCES_DATA_URL, profileImageUpdateUrlData).toPromise();
        });
    }
    getLoginUrlAsync(currentUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlParameters = {
                current_url: currentUrl
            };
            return this.http.get('/url_handler', { params: urlParameters }).toPromise().then((backendDict) => {
                return backendDict.login_url;
            });
        });
    }
    getUserContributionRightsDataAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(this.USER_CONTRIBUTION_RIGHTS_DATA_URL).toPromise();
        });
    }
};
UserBackendApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
UserBackendApiService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], UserBackendApiService);



/***/ }),

/***/ "XHuz":
/*!*******************************************************************!*\
  !*** ./core/templates/pages/donate-page/donate-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: DonatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageComponent", function() { return DonatePageComponent; });
/* harmony import */ var _raw_loader_donate_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./donate-page.component.html */ "vhO9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/upgrade/static */ "BBPO");
/* harmony import */ var services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/page-title.service */ "VeBn");
/* harmony import */ var services_site_analytics_service_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/site-analytics.service.ts */ "YA5X");
/* harmony import */ var domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! domain/utilities/url-interpolation.service.ts */ "X9eu");
/* harmony import */ var services_contextual_window_dimensions_service_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/contextual/window-dimensions.service.ts */ "fAos");
/* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! services/contextual/window-ref.service */ "AFwG");
/* harmony import */ var services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! services/user.service */ "upnj");
// Copyright 2016 The Oppia Authors. All Rights Reserved.
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * @fileoverview Component for the donate page.
 */








let DonatePageComponent = class DonatePageComponent {
    constructor(pageTitleService, siteAnalyticsService, urlInterpolationService, windowDimensionService, windowRef, userService) {
        this.pageTitleService = pageTitleService;
        this.siteAnalyticsService = siteAnalyticsService;
        this.urlInterpolationService = urlInterpolationService;
        this.windowDimensionService = windowDimensionService;
        this.windowRef = windowRef;
        this.userService = userService;
        this.windowIsNarrow = false;
        this.donateImgUrl = '';
    }
    ngOnInit() {
        this.windowIsNarrow = this.windowDimensionService.isWindowNarrow();
        this.donateImgUrl = this.urlInterpolationService.getStaticImageUrl('/general/opp_donate_text.svg');
        this.pageTitleService.setPageTitle('Donate | Make a Positive Impact | Oppia');
        this.userService.getUserInfoAsync().then((user) => {
            console.log(user);
        }, (err) => {
            console.log(err);
        });
        this.userService.getUserContributionRightsDataAsync().then((data) => {
            console.log(data);
        });
    }
    onDonateThroughAmazon() {
        this.siteAnalyticsService.registerGoToDonationSiteEvent('Amazon');
        setTimeout(() => {
            this.windowRef.nativeWindow.location.href = ('https://smile.amazon.com/ch/81-1740068');
        }, 150);
        return false;
    }
    onDonateThroughPayPal() {
        // Redirection to PayPal will be initiated at the same time as this
        // function is run, but should be slow enough to allow this function
        // time to complete. It is not possible to do $http.post() in
        // javascript after a delay because cross-site POSTing is not
        // permitted in scripts; see
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control
        // _CORS
        // for more information.
        this.siteAnalyticsService.registerGoToDonationSiteEvent('PayPal');
    }
};
DonatePageComponent.ctorParameters = () => [
    { type: services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"] },
    { type: services_site_analytics_service_ts__WEBPACK_IMPORTED_MODULE_4__["SiteAnalyticsService"] },
    { type: domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_5__["UrlInterpolationService"] },
    { type: services_contextual_window_dimensions_service_ts__WEBPACK_IMPORTED_MODULE_6__["WindowDimensionsService"] },
    { type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRef"] },
    { type: services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
DonatePageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'donate-page',
        template: _raw_loader_donate_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"],
        services_site_analytics_service_ts__WEBPACK_IMPORTED_MODULE_4__["SiteAnalyticsService"],
        domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_5__["UrlInterpolationService"],
        services_contextual_window_dimensions_service_ts__WEBPACK_IMPORTED_MODULE_6__["WindowDimensionsService"],
        services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRef"],
        services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
], DonatePageComponent);

angular.module('oppia').directive('donatePage', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__["downgradeComponent"])({ component: DonatePageComponent }));


/***/ }),

/***/ "YA5X":
/*!***********************************************************!*\
  !*** ./core/templates/services/site-analytics.service.ts ***!
  \***********************************************************/
/*! exports provided: SiteAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteAnalyticsService", function() { return SiteAnalyticsService; });
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/upgrade/static */ "BBPO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var assets_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/constants */ "g/rd");
/* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/contextual/window-ref.service */ "AFwG");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @fileoverview Utility services for explorations which may be shared by both
 * the learner and editor views.
 */




// Service for sending events to Google Analytics.
//
// Note that events are only sent if the CAN_SEND_ANALYTICS_EVENTS flag is
// turned on. This flag must be turned on explicitly by the application
// owner in feconf.py.
let SiteAnalyticsService = class SiteAnalyticsService {
    constructor(windowRef) {
        this.windowRef = windowRef;
    }
    get CAN_SEND_ANALYTICS_EVENTS() {
        return assets_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAN_SEND_ANALYTICS_EVENTS;
    }
    // For definitions of the various arguments, please see:
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
    _sendEventToGoogleAnalytics(eventCategory, eventAction, eventLabel) {
        if (this.windowRef.nativeWindow.gtag && this.CAN_SEND_ANALYTICS_EVENTS) {
            this.windowRef.nativeWindow.gtag('event', eventAction, {
                event_category: eventCategory,
                event_label: eventLabel
            });
        }
    }
    // The srcElement refers to the element on the page that is clicked.
    registerStartLoginEvent(srcElement) {
        this._sendEventToGoogleAnalytics('LoginButton', 'click', this.windowRef.nativeWindow.location.pathname + ' ' + srcElement);
    }
    registerNewSignupEvent() {
        this._sendEventToGoogleAnalytics('OnboardingEngagement', 'signup', 'AccountSignUp');
    }
    registerClickBrowseLessonsButtonEvent() {
        this._sendEventToGoogleAnalytics('BrowseLessonsButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerClickGuideParentsButtonEvent() {
        this._sendEventToGoogleAnalytics('GuideParentsButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerClickTipforParentsButtonEvent() {
        this._sendEventToGoogleAnalytics('TipforParentsButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerClickExploreLessonsButtonEvent() {
        this._sendEventToGoogleAnalytics('ExploreLessonsButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerClickStartLearningButtonEvent() {
        this._sendEventToGoogleAnalytics('StartLearningButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerClickStartContributingButtonEvent() {
        this._sendEventToGoogleAnalytics('StartContributingButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerClickStartTeachingButtonEvent() {
        this._sendEventToGoogleAnalytics('StartTeachingButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerClickVisitClassroomButtonEvent() {
        this._sendEventToGoogleAnalytics('ClassroomButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerClickBrowseLibraryButtonEvent() {
        this._sendEventToGoogleAnalytics('BrowseLibraryButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerGoToDonationSiteEvent(donationSiteName) {
        this._sendEventToGoogleAnalytics('GoToDonationSite', 'click', donationSiteName);
    }
    registerApplyToTeachWithOppiaEvent() {
        this._sendEventToGoogleAnalytics('ApplyToTeachWithOppia', 'click', '');
    }
    registerClickCreateExplorationButtonEvent() {
        this._sendEventToGoogleAnalytics('CreateExplorationButton', 'click', this.windowRef.nativeWindow.location.pathname);
    }
    registerCreateNewExplorationEvent(explorationId) {
        this._sendEventToGoogleAnalytics('NewExploration', 'create', explorationId);
    }
    registerCreateNewExplorationInCollectionEvent(explorationId) {
        this._sendEventToGoogleAnalytics('NewExplorationFromCollection', 'create', explorationId);
    }
    registerCreateNewCollectionEvent(collectionId) {
        this._sendEventToGoogleAnalytics('NewCollection', 'create', collectionId);
    }
    registerCommitChangesToPrivateExplorationEvent(explorationId) {
        this._sendEventToGoogleAnalytics('CommitToPrivateExploration', 'click', explorationId);
    }
    registerShareExplorationEvent(network) {
        this._sendEventToGoogleAnalytics(network, 'share', this.windowRef.nativeWindow.location.pathname);
    }
    registerShareCollectionEvent(network) {
        this._sendEventToGoogleAnalytics(network, 'share', this.windowRef.nativeWindow.location.pathname);
    }
    registerOpenEmbedInfoEvent(explorationId) {
        this._sendEventToGoogleAnalytics('EmbedInfoModal', 'open', explorationId);
    }
    registerCommitChangesToPublicExplorationEvent(explorationId) {
        this._sendEventToGoogleAnalytics('CommitToPublicExploration', 'click', explorationId);
    }
    // Metrics for tutorial on first creating exploration.
    registerTutorialModalOpenEvent(explorationId) {
        this._sendEventToGoogleAnalytics('TutorialModalOpen', 'open', explorationId);
    }
    registerDeclineTutorialModalEvent(explorationId) {
        this._sendEventToGoogleAnalytics('DeclineTutorialModal', 'click', explorationId);
    }
    registerAcceptTutorialModalEvent(explorationId) {
        this._sendEventToGoogleAnalytics('AcceptTutorialModal', 'click', explorationId);
    }
    // Metrics for visiting the help center.
    registerClickHelpButtonEvent(explorationId) {
        this._sendEventToGoogleAnalytics('ClickHelpButton', 'click', explorationId);
    }
    registerVisitHelpCenterEvent(explorationId) {
        this._sendEventToGoogleAnalytics('VisitHelpCenter', 'click', explorationId);
    }
    registerOpenTutorialFromHelpCenterEvent(explorationId) {
        this._sendEventToGoogleAnalytics('OpenTutorialFromHelpCenter', 'click', explorationId);
    }
    // Metrics for exiting the tutorial.
    registerSkipTutorialEvent(explorationId) {
        this._sendEventToGoogleAnalytics('SkipTutorial', 'click', explorationId);
    }
    registerFinishTutorialEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FinishTutorial', 'click', explorationId);
    }
    // Metrics for first time editor use.
    registerEditorFirstEntryEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FirstEnterEditor', 'open', explorationId);
    }
    registerFirstOpenContentBoxEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FirstOpenContentBox', 'open', explorationId);
    }
    registerFirstSaveContentEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FirstSaveContent', 'click', explorationId);
    }
    registerFirstClickAddInteractionEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FirstClickAddInteraction', 'click', explorationId);
    }
    registerFirstSelectInteractionTypeEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FirstSelectInteractionType', 'click', explorationId);
    }
    registerFirstSaveInteractionEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FirstSaveInteraction', 'click', explorationId);
    }
    registerFirstSaveRuleEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FirstSaveRule', 'click', explorationId);
    }
    registerFirstCreateSecondStateEvent(explorationId) {
        this._sendEventToGoogleAnalytics('FirstCreateSecondState', 'create', explorationId);
    }
    // Metrics for publishing explorations.
    registerSavePlayableExplorationEvent(explorationId) {
        this._sendEventToGoogleAnalytics('SavePlayableExploration', 'save', explorationId);
    }
    registerOpenPublishExplorationModalEvent(explorationId) {
        this._sendEventToGoogleAnalytics('PublishExplorationModal', 'open', explorationId);
    }
    registerPublishExplorationEvent(explorationId) {
        this._sendEventToGoogleAnalytics('PublishExploration', 'click', explorationId);
    }
    registerVisitOppiaFromIframeEvent(explorationId) {
        this._sendEventToGoogleAnalytics('VisitOppiaFromIframe', 'click', explorationId);
    }
    registerNewCard(cardNum) {
        if (cardNum <= 10 || cardNum % 10 === 0) {
            this._sendEventToGoogleAnalytics('PlayerNewCard', 'click', cardNum.toString());
        }
    }
    registerOpenCollectionFromLandingPageEvent(collectionId) {
        this._sendEventToGoogleAnalytics('OpenFractionsFromLandingPage', 'click', collectionId);
    }
    registerStewardsLandingPageEvent(viewerType, buttonText) {
        this._sendEventToGoogleAnalytics('ClickButtonOnStewardsPage', 'click', viewerType + ':' + buttonText);
    }
    registerSaveRecordedAudioEvent(explorationId) {
        this._sendEventToGoogleAnalytics('SaveRecordedAudio', 'click', explorationId);
    }
    registerStartAudioRecordingEvent(explorationId) {
        this._sendEventToGoogleAnalytics('StartAudioRecording', 'click', explorationId);
    }
    registerUploadAudioEvent(explorationId) {
        this._sendEventToGoogleAnalytics('UploadRecordedAudio', 'click', explorationId);
    }
    // Contributor Dashboard Events.
    registerContributorDashboardSuggestEvent(contributionType) {
        this._sendEventToGoogleAnalytics('ContributorDashboardSuggest', 'click', contributionType);
    }
    registerContributorDashboardSubmitSuggestionEvent(contributionType) {
        this._sendEventToGoogleAnalytics('ContributorDashboardSubmitSuggestion', 'click', contributionType);
    }
    registerContributorDashboardViewSuggestionForReview(contributionType) {
        this._sendEventToGoogleAnalytics('ContributorDashboardViewSuggestionForReview', 'click', contributionType);
    }
    registerContributorDashboardAcceptSuggestion(contributionType) {
        this._sendEventToGoogleAnalytics('ContributorDashboardAcceptSuggestion', 'click', contributionType);
    }
    registerContributorDashboardRejectSuggestion(contributionType) {
        this._sendEventToGoogleAnalytics('ContributorDashboardRejectSuggestion', 'click', contributionType);
    }
    registerLessonActiveUse() {
        this._sendEventToGoogleAnalytics('ActiveUserStartAndSawCards', 'engage', '');
    }
    registerStartExploration(explorationId) {
        this._sendEventToGoogleAnalytics('PlayerStartExploration', 'engage', explorationId);
    }
    registerFinishExploration(explorationId) {
        this._sendEventToGoogleAnalytics('PlayerFinishExploration', 'engage', explorationId);
    }
    registerCuratedLessonCompleted(explorationId) {
        this._sendEventToGoogleAnalytics('CuratedLessonCompleted', 'engage', explorationId);
    }
    registerClassroomLessonActiveUse() {
        this._sendEventToGoogleAnalytics('ClassroomActiveUserStartAndSawCards', 'engage', '');
    }
    registerClassoomHeaderClickEvent() {
        this._sendEventToGoogleAnalytics('ClassroomEngagement', 'click', 'ClickOnClassroom');
    }
    registerClassroomPageViewed() {
        this._sendEventToGoogleAnalytics('ClassroomEngagement', 'impression', 'ViewClassroom');
    }
    registerAccountDeletion() {
        this._sendEventToGoogleAnalytics('OnboardingEngagement', 'delete', 'AccountDeletion');
    }
};
SiteAnalyticsService.ctorParameters = () => [
    { type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"] }
];
SiteAnalyticsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"]])
], SiteAnalyticsService);

angular.module('oppia').factory('SiteAnalyticsService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__["downgradeInjectable"])(SiteAnalyticsService));


/***/ }),

/***/ "amNk":
/*!****************************************************************!*\
  !*** ./core/templates/pages/donate-page/donate-page.module.ts ***!
  \****************************************************************/
/*! exports provided: DonatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageModule", function() { return DonatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _donate_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate-page.component */ "XHuz");
/* harmony import */ var services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/request-interceptor.service */ "Nk/g");
/* harmony import */ var services_platform_feature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/platform-feature.service */ "YL3y");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _donate_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate-page.routing.module */ "CQg9");
/* harmony import */ var _donate_page_root_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./donate-page-root.component */ "dWL0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
// Copyright 2019 The Oppia Authors. All Rights Reserved.
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @fileoverview Module for the donate page.
 */






let DonatePageModule = class DonatePageModule {
    // Empty placeholder method to satisfy the `Compiler`.
    ngDoBootstrap() { }
};
DonatePageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _donate_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["DonatePageRoutingModule"]
            // SharedComponentsModule
        ],
        declarations: [
            _donate_page_component__WEBPACK_IMPORTED_MODULE_2__["DonatePageComponent"],
        ],
        entryComponents: [
            _donate_page_component__WEBPACK_IMPORTED_MODULE_2__["DonatePageComponent"],
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_3__["RequestInterceptor"],
                multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                useFactory: services_platform_feature_service__WEBPACK_IMPORTED_MODULE_4__["platformFeatureInitFactory"],
                deps: [services_platform_feature_service__WEBPACK_IMPORTED_MODULE_4__["PlatformFeatureService"]],
                multi: true
            }
        ],
        bootstrap: [_donate_page_root_component__WEBPACK_IMPORTED_MODULE_7__["DonatePageRootComponent"]]
    })
], DonatePageModule);





Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__["platformBrowserDynamic"])()
    .bootstrapModule(DonatePageModule)
    .catch(err => console.log(err));


/***/ }),

/***/ "dWL0":
/*!************************************************************************!*\
  !*** ./core/templates/pages/donate-page/donate-page-root.component.ts ***!
  \************************************************************************/
/*! exports provided: DonatePageRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageRootComponent", function() { return DonatePageRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DonatePageRootComponent = class DonatePageRootComponent {
};
DonatePageRootComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'donate-page-root',
        template: '<router-outlet></router-outlet>',
    })
], DonatePageRootComponent);



/***/ }),

/***/ "fAos":
/*!*************************************************************************!*\
  !*** ./core/templates/services/contextual/window-dimensions.service.ts ***!
  \*************************************************************************/
/*! exports provided: WindowDimensionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowDimensionsService", function() { return WindowDimensionsService; });
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/upgrade/static */ "BBPO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/contextual/window-ref.service */ "AFwG");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @fileoverview Service for computing the window dimensions.
 */




let WindowDimensionsService = class WindowDimensionsService {
    constructor(windowRef) {
        this.windowRef = windowRef;
    }
    getResizeEvent() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.windowRef.nativeWindow, 'resize');
    }
    getWidth() {
        return (this.windowRef.nativeWindow.innerWidth ||
            this.windowRef.nativeWindow.document.documentElement.clientWidth ||
            this.windowRef.nativeWindow.document.body.clientWidth);
    }
    isWindowNarrow() {
        let NORMAL_NAVBAR_CUTOFF_WIDTH_PX = 768;
        return this.getWidth() <= NORMAL_NAVBAR_CUTOFF_WIDTH_PX;
    }
};
WindowDimensionsService.ctorParameters = () => [
    { type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"] }
];
WindowDimensionsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"]])
], WindowDimensionsService);

angular.module('oppia').factory('WindowDimensionsService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__["downgradeInjectable"])(WindowDimensionsService));


/***/ }),

/***/ "upnj":
/*!*************************************************!*\
  !*** ./core/templates/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/upgrade/static */ "BBPO");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app.constants */ "DhAQ");
/* harmony import */ var domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domain/user/user-info.model */ "v1VX");
/* harmony import */ var domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! domain/utilities/url-interpolation.service */ "X9eu");
/* harmony import */ var services_contextual_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/contextual/url.service */ "Wxm2");
/* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/contextual/window-ref.service */ "AFwG");
/* harmony import */ var services_user_backend_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! services/user-backend-api.service */ "PiPN");
// Copyright 2018 The Oppia Authors. All Rights Reserved.
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @fileoverview Service for user data.
 */








let UserService = class UserService {
    constructor(urlInterpolationService, urlService, windowRef, userBackendApiService) {
        this.urlInterpolationService = urlInterpolationService;
        this.urlService = urlService;
        this.windowRef = windowRef;
        this.userBackendApiService = userBackendApiService;
        this.userContributionRightsInfo = null;
        this.userInfo = null;
        this.returnUrl = '';
    }
    getUserInfoAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.urlService.getPathname() === '/signup') {
                return new Promise((resolve, reject) => {
                    resolve(domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_3__["UserInfo"].createDefault());
                });
            }
            if (this.userInfo) {
                return new Promise((resolve, reject) => {
                    resolve(this.userInfo);
                });
            }
            return this.userBackendApiService.getUserInfoAsync().then((userInfo) => {
                this.userInfo = userInfo;
                return this.userInfo;
            });
        });
    }
    getProfileImageDataUrlAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            let defaultUrl = (this.urlInterpolationService.getStaticImageUrl(app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].DEFAULT_PROFILE_IMAGE_PATH));
            return this.getUserInfoAsync().then((userInfo) => {
                if (userInfo.isLoggedIn()) {
                    return this.userBackendApiService.getProfileImageDataUrlAsync(defaultUrl);
                }
                else {
                    return new Promise((resolve, reject) => {
                        resolve(defaultUrl);
                    });
                }
            });
        });
    }
    setProfileImageDataUrlAsync(newProfileImageDataUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userBackendApiService.setProfileImageDataUrlAsync(newProfileImageDataUrl);
        });
    }
    getLoginUrlAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userBackendApiService.getLoginUrlAsync(this.returnUrl ||
                this.windowRef.nativeWindow.location.pathname);
        });
    }
    setReturnUrl(newReturnUrl) {
        this.returnUrl = newReturnUrl;
    }
    getUserContributionRightsDataAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.userContributionRightsInfo) {
                return new Promise((resolve, reject) => {
                    resolve(this.userContributionRightsInfo);
                });
            }
            return this.userBackendApiService.getUserContributionRightsDataAsync()
                .then((userContributionRightsInfo) => {
                this.userContributionRightsInfo = userContributionRightsInfo;
                return this.userContributionRightsInfo;
            });
        });
    }
};
UserService.ctorParameters = () => [
    { type: domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_4__["UrlInterpolationService"] },
    { type: services_contextual_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"] },
    { type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_6__["WindowRef"] },
    { type: services_user_backend_api_service__WEBPACK_IMPORTED_MODULE_7__["UserBackendApiService"] }
];
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_4__["UrlInterpolationService"],
        services_contextual_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"],
        services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_6__["WindowRef"],
        services_user_backend_api_service__WEBPACK_IMPORTED_MODULE_7__["UserBackendApiService"]])
], UserService);

angular.module('oppia')
    .factory('UserService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__["downgradeInjectable"])(UserService));


/***/ }),

/***/ "v1VX":
/*!*******************************************************!*\
  !*** ./core/templates/domain/user/user-info.model.ts ***!
  \*******************************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
// Copyright 2018 The Oppia Authors. All Rights Reserved.
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
class UserInfo {
    constructor(isModerator, isAdmin, isSuperAdmin, isTopicManager, canCreateCollections, preferredSiteLanguageCode, username, email, isLoggedIn) {
        this._isModerator = isModerator;
        this._isAdmin = isAdmin;
        this._isTopicManager = isTopicManager;
        this._isSuperAdmin = isSuperAdmin;
        this._canCreateCollections = canCreateCollections;
        this._preferredSiteLanguageCode = preferredSiteLanguageCode;
        this._username = username;
        this._email = email;
        this._isLoggedIn = isLoggedIn;
    }
    static createFromBackendDict(data) {
        return new UserInfo(data.is_moderator, data.is_admin, data.is_super_admin, data.is_topic_manager, data.can_create_collections, data.preferred_site_language_code, data.username, data.email, data.user_is_logged_in);
    }
    static createDefault() {
        return new UserInfo(false, false, false, false, false, null, null, null, false);
    }
    isModerator() {
        return this._isModerator;
    }
    isAdmin() {
        return this._isAdmin;
    }
    isTopicManager() {
        return this._isTopicManager;
    }
    isSuperAdmin() {
        return this._isSuperAdmin;
    }
    canCreateCollections() {
        return this._canCreateCollections;
    }
    getPreferredSiteLanguageCode() {
        return this._preferredSiteLanguageCode;
    }
    getUsername() {
        return this._username;
    }
    getEmail() {
        return this._email;
    }
    isLoggedIn() {
        return this._isLoggedIn;
    }
}


/***/ }),

/***/ "vhO9":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/pages/donate-page/donate-page.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"donate-page\">\n  <div class=\"oppia-page-card oppia-static-content protractor-test-donate-page\">\n    <div class=\"oppia-donation-card-content-wide\">\n      <div class=\"oppia-donate-options\">\n        <div *ngIf=\"windowIsNarrow\">\n          <h1 class=\"oppia-donate-h1\">Donate to the <br>\n          Oppia Foundation</h1>\n          <a routerLink=\"\"></a>\n        </div>\n        <div *ngIf=\"!windowIsNarrow\">\n          <h1 class=\"oppia-donate-h1\">Donate to <br>\n          The Oppia Foundation</h1>\n        </div>\n        <div class=\"text-center\">\n          <form ngNoForm action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n            <input type=\"hidden\" name=\"hosted_button_id\" value=\"UWKTY87SYU766\">\n            <button type=\"submit\" class=\"btn oppia-donate-options-button protractor-test-paypal-donate-button\" tabindex=\"0\" (click)=\"onDonateThroughPayPal()\">\n              PayPal\n            </button>\n          </form>\n        </div>\n        <div class=\"text-center\">\n          <form ngNoForm action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n            <input type=\"hidden\" name=\"hosted_button_id\" value=\"UWKTY87SYU766\">\n            <button class=\"btn oppia-donate-options-button protractor-test-credit-card-donate-button\" tabindex=\"0\" (click)=\"onDonateThroughPayPal()\">\n              Credit Card\n            </button>\n          </form>\n        </div>\n        <div class=\"text-center\">\n          <a (click)=\"onDonateThroughAmazon()\" class=\"btn oppia-donate-options-button\" tabindex=\"0\">Amazon Smile</a>\n        </div>\n        <h2 class=\"oppia-gift-funds-text\">\n          Your generous gift funds:\n        </h2>\n        <div class=\"oppia-donate-img-container text-center\">\n          <img [src]=\"donateImgUrl\" alt=\"Server costs, student outreach, marketing\">\n        </div>\n      </div>\n      <div class=\"oppia-donate-info\">\n        <div class=\"position-relative oppia-meet-contributors-iframe-container\">\n          <iframe title=\"Meet Oppia's Contributors\"\n                  width=\"100%\"\n                  height=\"100%\"\n                  src=\"https://www.youtube.com/embed/OConyxG7HaM?rel=0&cc_lang_pref=en&cc_load_policy=1\"\n                  frameborder=\"0\"\n                  allowfullscreen\n                  class=\"position-absolute w-100 h-100 oppia-meet-contributors-iframe\">\n          </iframe>\n        </div>\n        <h3 class=\"oppia-donate-h3\"><em>Hear from our Oppia community</em></h3>\n        <div class=\"oppia-vision-text-container\">\n          <p class=\"oppia-vision-text\">\n            In 2012, Oppia started with a simple idea: to improve the education of\n            students around the world while improving the quality of teaching.\n            This vision has since turned into an educational platform with over\n            11,000 explorations that have been used by more than 430,000 users\n            worldwide.\n          </p>\n          <p class=\"oppia-vision-text\">\n            Please donate to The Oppia Foundation, a registered 501(c)(3) nonprofit,\n            and join us in bringing the joys of teaching and learning to people\n            everywhere.\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<style>\n  h1.oppia-donate-h1 {\n    color: #fff;\n    font-size: 1.5em;\n    line-height: 1.7em;\n    margin-top: 60px;\n    text-align: center;\n  }\n  h3.oppia-donate-h3 {\n    font-size: .80em;\n    font-weight: normal;\n    margin: 2.33em 0;\n    text-align: center;\n  }\n  .donate-page .oppia-donation-card-content-wide {\n    margin: 40px auto 80px;\n    min-height: 670px;\n    overflow: auto;\n  }\n  .donate-page .oppia-donate-options {\n    background-color: #009688;\n    display: block;\n    float: right;\n    font-family: \"Capriola\", \"Roboto\", Arial, sans-serif;\n    padding: 10px 10px 35px 10px;\n    width: 340px;\n  }\n  .donate-page .btn.oppia-donate-options-button {\n    background-color: #00645c;\n    border-radius: 4px;\n    color: rgba(255,255,255,1.0);\n    font-family: \"Roboto\", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 500;\n    height: 40px;\n    letter-spacing: 0.7px;\n    margin: 10px auto;\n    width: 180px;\n  }\n  .donate-page .btn.oppia-donate-options-button:hover,\n  .donate-page .btn.oppia-donate-options-button:focus {\n    background-color: #3d9991;\n    color: rgba(255,255,255,1);\n  }\n  .donate-page .oppia-donate-info {\n    float: left;\n    padding-bottom: 30px;\n    width: calc(100% - 340px);\n  }\n  .donate-page .oppia-gift-funds-text {\n    color: #fff;\n    font-size: 20px;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  .donate-page .oppia-donate-img-container {\n    margin-bottom: 16px;\n  }\n  .donate-page .oppia-meet-contributors-iframe-container {\n    height: 0;\n    margin: 60px auto 0 auto;\n    padding-bottom: 56.25%;\n    width: 70%;\n  }\n  .donate-page .oppia-meet-contributors-iframe {\n    left: 0;\n    top: 0;\n  }\n  .donate-page .oppia-vision-text-container {\n    margin: 0 auto;\n    width: 70%;\n  }\n  .donate-page .oppia-vision-text {\n    font-size: 0.825em;\n  }\n\n  @media only screen and (max-width: 1160px) {\n    .oppia-donation-card-content-wide {\n      display: flex;\n      flex-direction: row-reverse;\n      width: 100%;\n    }\n\n    .oppia-donate-info, .oppia-donate-options {\n      flex: 1;\n    }\n  }\n</style>\n");

/***/ })

}]);
//# sourceMappingURL=pages-donate-page-donate-page-module.js.map