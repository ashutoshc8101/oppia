// Copyright 2021 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Component for the learner view info section of the
 * footer.
 */

import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassroomDomainConstants } from 'domain/classroom/classroom-domain.constants';
import { ReadOnlyExplorationBackendApiService } from 'domain/exploration/read-only-exploration-backend-api.service';
import { StoryViewerBackendApiService } from 'domain/story_viewer/story-viewer-backend-api.service';
import { UrlInterpolationService } from 'domain/utilities/url-interpolation.service';
import { Subscription } from 'rxjs';
import { ContextService } from 'services/context.service';
import { LoggerService } from 'services/contextual/logger.service';
import { UrlService } from 'services/contextual/url.service';
import { SiteAnalyticsService } from 'services/site-analytics.service';
import { LearnerViewInfoBackendApiService } from '../services/learner-view-info-backend-api.service';
import { StatsReportingService } from '../services/stats-reporting.service';

@Component({
  selector: 'oppia-learner-view-info',
  templateUrl: './learner-view-info.component.html'
})
export class LearnerViewInfoComponent {
  explorationId: string;
  directiveSubscriptions: Subscription = new Subscription();
  explorationTitle: string;
  isLinkedToTopic: boolean;
  storyViewBackendApiService;
  storyPlaythroughObject;
  topicName;
  expInfo;

  constructor(
    private ngbModal: NgbModal,
    private contextService: ContextService,
    private learnerViewInfoBackendApiService: LearnerViewInfoBackendApiService,
    private loggerService: LoggerService,
    private readOnlyExplorationBackendApiService:
    ReadOnlyExplorationBackendApiService,
    private siteAnalyticsService: SiteAnalyticsService,
    private statsReportingService: StatsReportingService,
    private urlInterpolationService: UrlInterpolationService,
    private urlService: UrlService,
    private storyViewerBackendApiService: StoryViewerBackendApiService
  ) {}

  ngOnInit(): void {
    let pathnameArray = this.urlService.getPathname().split('/');
    let explorationContext = false;

    for (let i = 0; i < pathnameArray.length; i++) {
      if (pathnameArray[i] === 'explore' ||
          pathnameArray[i] === 'create' ||
          pathnameArray[i] === 'skill_editor' ||
          pathnameArray[i] === 'embed') {
        explorationContext = true;
        break;
      }
    }

    this.explorationId = explorationContext ?
      this.contextService.getExplorationId() : 'test_id';

    this.explorationTitle = 'Loading...';
    this.readOnlyExplorationBackendApiService.fetchExploration(
      this.explorationId, this.urlService.getExplorationVersionFromUrl())
      .then((response) => {
        this.explorationTitle = response.exploration.title;
      });
    // To check if the exploration is linked to the topic or not.
    this.isLinkedToTopic = this.getTopicUrl() ? true : false;
    // If linked to topic then print topic name in the lesson player.
    if (this.isLinkedToTopic) {
      let topicUrlFragment = (
        this.urlService.getTopicUrlFragmentFromLearnerUrl());
      let classroomUrlFragment = (
        this.urlService.getClassroomUrlFragmentFromLearnerUrl());
      let storyUrlFragment = (
        this.urlService.getStoryUrlFragmentFromLearnerUrl());
      this.storyViewerBackendApiService.fetchStoryDataAsync(
        topicUrlFragment,
        classroomUrlFragment,
        storyUrlFragment).then((storyDataDict) => {
        this.storyPlaythroughObject = storyDataDict;
        let topicName = this.storyPlaythroughObject.topicName;
        this.topicName = topicName;
        this.statsReportingService.setTopicName(this.topicName);
        this.siteAnalyticsService.registerCuratedLessonStarted(
          this.topicName, this.explorationId);
      });
    }
  }

  getTopicUrl(): string {
    let topicUrlFragment = (
      this.urlService.getTopicUrlFragmentFromLearnerUrl());
    let classroomUrlFragment = (
      this.urlService.getClassroomUrlFragmentFromLearnerUrl());
    return topicUrlFragment &&
      classroomUrlFragment &&
      this.urlInterpolationService.interpolateUrl(
        ClassroomDomainConstants.TOPIC_VIEWER_STORY_URL_TEMPLATE, {
          topic_url_fragment: topicUrlFragment,
          classroom_url_fragment: classroomUrlFragment,
        });
  }

  openInformationCardModal(): void {
    // $uibModal.open({
    //   animation: true,
    //   template: require(
    //     'pages/exploration-player-page/templates/' +
    //     'information-card-modal.directive.html'),
    //   windowClass: 'oppia-modal-information-card',
    //   resolve: {
    //     expInfo: function() {
    //       return expInfo;
    //     }
    //   },
    //   controller: 'InformationCardModalController'
    // }).result.then(null, () => {
    //   // Note to developers:
    //   // This callback is triggered when the Cancel button is clicked.
    //   // No further action is needed.
    // });
  }

  showInformationCard(): void {
    let stringifiedExpIds = JSON.stringify(
      [this.explorationId]);
    let includePrivateExplorations = JSON.stringify(true);
    if (this.expInfo) {
      this.openInformationCardModal();
    } else {
      this.learnerViewInfoBackendApiService.fetchLearnerInfo(
        stringifiedExpIds,
        includePrivateExplorations
      ).then((response) => {
        this.expInfo = response.summaries[0];
        this.openInformationCardModal();
      }, () => {
        this.loggerService.error(
          'Information card failed to load for exploration ' +
          this.explorationId);
      });
    }
  }

  ngOnDestory(): void {
    this.directiveSubscriptions.unsubscribe();
  }
}

angular.module('oppia').directive('oppiaLearnerViewInfo',
  downgradeComponent({
    component: LearnerViewInfoComponent
  }) as angular.IDirectiveFactory);

// Angular.module('oppia').directive('learnerViewInfo', [
//   function() {
//     return {
//       restrict: 'E',
//       scope: {},
//       template: require('./learner-view-info.directive.html'),
//       controllerAs: '$ctrl',
//       controller: [
//         '$log', '$rootScope', '$uibModal', 'ContextService',
//         'LearnerViewInfoBackendApiService',
//         'ReadOnlyExplorationBackendApiService', 'SiteAnalyticsService',
//         'StatsReportingService', 'UrlInterpolationService', 'UrlService',
//         'TOPIC_VIEWER_STORY_URL_TEMPLATE',
//         function(
//             $log, $rootScope, $uibModal, ContextService,
//             LearnerViewInfoBackendApiService,
//             ReadOnlyExplorationBackendApiService, SiteAnalyticsService,
//             StatsReportingService, UrlInterpolationService, UrlService,
//             TOPIC_VIEWER_STORY_URL_TEMPLATE
//         ) {
//           var ctrl = this;
//           var explorationId = ContextService.getExplorationId();
//           var expInfo = null;
//           ctrl.directiveSubscriptions = new Subscription();

//           ctrl.showInformationCard = function() {
//             let stringifiedExpIds = JSON.stringify(
//               [explorationId]);
//             let includePrivateExplorations = JSON.stringify(true);
//             if (expInfo) {
//               openInformationCardModal();
//             } else {
//               LearnerViewInfoBackendApiService.fetchLearnerInfo(
//                 stringifiedExpIds,
//                 includePrivateExplorations
//               ).then(function(response) {
//                 expInfo = response.summaries[0];
//                 openInformationCardModal();
//                 $rootScope.$applyAsync();
//               }, function() {
//                 $log.error(
//                   'Information card failed to load for exploration ' +
//                   explorationId);
//                 $rootScope.$applyAsync();
//               });
//             }
//           };

//           var openInformationCardModal = function() {
//             $uibModal.open({
//               animation: true,
//               template: require(
//                 'pages/exploration-player-page/templates/' +
//                 'information-card-modal.directive.html'),
//               windowClass: 'oppia-modal-information-card',
//               resolve: {
//                 expInfo: function() {
//                   return expInfo;
//                 }
//               },
//               controller: 'InformationCardModalController'
//             }).result.then(null, () => {
//               // Note to developers:
//               // This callback is triggered when the Cancel button is clicked.
//               // No further action is needed.
//             });
//           };

//           ctrl.getTopicUrl = function() {
//             var topicUrlFragment = (
//               UrlService.getTopicUrlFragmentFromLearnerUrl());
//             var classroomUrlFragment = (
//               UrlService.getClassroomUrlFragmentFromLearnerUrl());
//             return topicUrlFragment &&
//              classroomUrlFragment &&
//               UrlInterpolationService.interpolateUrl(
//                 TOPIC_VIEWER_STORY_URL_TEMPLATE, {
//                   topic_url_fragment: topicUrlFragment,
//                   classroom_url_fragment: classroomUrlFragment,
//                 });
//           };

//           ctrl.$onInit = function() {
//             ctrl.explorationTitle = 'Loading...';
//             ReadOnlyExplorationBackendApiService.fetchExploration(
//               explorationId, UrlService.getExplorationVersionFromUrl())
//               .then(function(response) {
//                 ctrl.explorationTitle = response.exploration.title;
//                 $rootScope.$applyAsync();
//               });
//             // To check if the exploration is linked to the topic or not.
//             ctrl.isLinkedToTopic = ctrl.getTopicUrl() ? true : false;
//             // If linked to topic then print topic name in the lesson player.
//             if (ctrl.isLinkedToTopic) {
//               ctrl.storyViewerBackendApiService = (
//                 OppiaAngularRootComponent.storyViewerBackendApiService);
//               var topicUrlFragment = (
//                 UrlService.getTopicUrlFragmentFromLearnerUrl());
//               var classroomUrlFragment = (
//                 UrlService.getClassroomUrlFragmentFromLearnerUrl());
//               var storyUrlFragment = (
//                 UrlService.getStoryUrlFragmentFromLearnerUrl());
//               ctrl.storyViewerBackendApiService.fetchStoryDataAsync(
//                 topicUrlFragment,
//                 classroomUrlFragment,
//                 storyUrlFragment).then(
//                 function(storyDataDict) {
//                   ctrl.storyPlaythroughObject = storyDataDict;
//                   var topicName = ctrl.storyPlaythroughObject.topicName;
//                   ctrl.topicName = topicName;
//                   StatsReportingService.setTopicName(ctrl.topicName);
//                   SiteAnalyticsService.registerCuratedLessonStarted(
//                     ctrl.topicName, explorationId);
//                 });
//             }
//           };
//           ctrl.$onDestroy = function() {
//             ctrl.directiveSubscriptions.unsubscribe();
//           };
//         }
//       ]
//     };
//   }]);
