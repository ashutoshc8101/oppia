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

/**
 * @fileoverview Modal and functionality for the create topic button.
 */

import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopicCreationBackendApiService } from 'domain/topic/topic-creation-backend-api.service';
import { TopicsAndSkillsDashboardBackendApiService } from 'domain/topics_and_skills_dashboard/topics-and-skills-dashboard-backend-api.service';
import { UrlInterpolationService } from 'domain/utilities/url-interpolation.service';
import { CreateNewTopicModalComponent } from 'pages/topics-and-skills-dashboard-page/modals/create-new-topic-modal.component';
import { AlertsService } from 'services/alerts.service';
import { ContextService } from 'services/context.service';
import { WindowRef } from 'services/contextual/window-ref.service';
import { ImageLocalStorageService } from 'services/image-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TopicCreationService {
  TOPIC_EDITOR_URL_TEMPLATE: string = '/topic_editor/<topic_id>';
  topicCreationInProgress: boolean = false;

  constructor(
    private ngbModal: NgbModal,
    private windowRef: WindowRef,
    private alertsService: AlertsService,
    private contextService: ContextService,
    private imageLocalStorageService: ImageLocalStorageService,
    private topicCreationBackendApiService: TopicCreationBackendApiService,
    private topicsAndSkillsDashboardBackendApiService:
    TopicsAndSkillsDashboardBackendApiService,
    private urlInterpolationService: UrlInterpolationService
  ) {}

  createNewTopic(): void {
    if (this.topicCreationInProgress) {
      return;
    }
    this.contextService.setImageSaveDestinationToLocalStorage();
    let modalRef = this.ngbModal.open(CreateNewTopicModalComponent, {
      backdrop: 'static',
      windowClass: 'create-new-topic',
    });

    modalRef.result.then((newlyCreatedTopic) => {
      if (!newlyCreatedTopic.isValid()) {
        throw new Error('Topic fields cannot be empty');
      }
      this.topicCreationInProgress = true;
      this.alertsService.clearWarnings();
      // The window.open has to be initialized separately since if the 'open
      // new tab' action does not directly result from a user input (which
      // is not the case, if we wait for result from the backend before
      // opening a new tab), some browsers block it as a popup. Here, the
      // new tab is created as soon as the user clicks the 'Create' button
      // and filled with URL once the details are fetched from the backend.
      let newTab = this.windowRef.nativeWindow.open();
      let imagesData = this.imageLocalStorageService.getStoredImagesData();
      let bgColor = this.imageLocalStorageService.getThumbnailBgColor();
      this.topicCreationBackendApiService.createTopicAsync(
        newlyCreatedTopic, imagesData, bgColor).then((response) => {
        this.topicsAndSkillsDashboardBackendApiService
          .onTopicsAndSkillsDashboardReinitialized.emit();
        this.topicCreationInProgress = false;
        this.imageLocalStorageService.flushStoredImagesData();
        this.contextService.resetImageSaveDestination();
        newTab.location.href = this.urlInterpolationService.interpolateUrl(
          this.TOPIC_EDITOR_URL_TEMPLATE, {
            topic_id: response.topicId
          });
      }, (errorResponse) => {
        newTab.close();
        this.topicCreationInProgress = false;
        this.alertsService.addWarning(errorResponse.error);
      });
    }, () => {
      // Note to developers:
      // This callback is triggered when the Cancel button is
      // clicked. No further action is needed.
    });
  }
}

angular.module('oppia').factory('TopicCreationService',
  downgradeInjectable(TopicCreationService));

// Require(
//   'components/forms/custom-forms-directives/select2-dropdown.directive.ts');
// require(
//   'components/forms/custom-forms-directives/thumbnail-uploader.directive.ts');
// require('domain/topic/topic-update.service.ts');
// require('domain/utilities/url-interpolation.service.ts');
// require('domain/topic/topic-creation-backend-api.service.ts');
// require('pages/topic-editor-page/services/topic-editor-state.service.ts');
// require(
//   'domain/topics_and_skills_dashboard/' +
//   'topics-and-skills-dashboard-backend-api.service.ts');
// require(
//   'pages/topics-and-skills-dashboard-page/' +
//     'create-new-topic-modal.controller.ts');
// require('services/alerts.service.ts');
// require('services/context.service.ts');
// require('services/image-local-storage.service.ts');
// require('services/image-upload-helper.service.ts');

// angular.module('oppia').factory('TopicCreationService', [
//   '$uibModal', '$window', 'AlertsService', 'ContextService',
//   'ImageLocalStorageService', 'TopicCreationBackendApiService',
//   'TopicsAndSkillsDashboardBackendApiService', 'UrlInterpolationService',
//   function(
//       $uibModal, $window, AlertsService, ContextService,
//       ImageLocalStorageService, TopicCreationBackendApiService,
//       TopicsAndSkillsDashboardBackendApiService, UrlInterpolationService) {
//     var TOPIC_EDITOR_URL_TEMPLATE = '/topic_editor/<topic_id>';
//     var topicCreationInProgress = false;

//     return {
//       createNewTopic: function() {
//         if (topicCreationInProgress) {
//           return;
//         }
//         ContextService.setImageSaveDestinationToLocalStorage();
//         $uibModal.open({
//           templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
//             '/pages/topics-and-skills-dashboard-page/templates/' +
//             'create-new-topic-modal.template.html'),
//           backdrop: 'static',
//           windowClass: 'create-new-topic',
//           controller: 'CreateNewTopicModalController'
//         }).result.then(function(newlyCreatedTopic) {
//           if (!newlyCreatedTopic.isValid()) {
//             throw new Error('Topic fields cannot be empty');
//           }
//           topicCreationInProgress = true;
//           AlertsService.clearWarnings();
//           // $window.open has to be initialized separately since if the 'open
//           // new tab' action does not directly result from a user input (which
//           // is not the case, if we wait for result from the backend before
//           // opening a new tab), some browsers block it as a popup. Here, the
//           // new tab is created as soon as the user clicks the 'Create' button
//           // and filled with URL once the details are fetched from the backend.
//           var newTab = $window.open();
//           var imagesData = ImageLocalStorageService.getStoredImagesData();
//           var bgColor = ImageLocalStorageService.getThumbnailBgColor();
//           TopicCreationBackendApiService.createTopicAsync(
//             newlyCreatedTopic, imagesData, bgColor).then(
//             function(response) {
//               TopicsAndSkillsDashboardBackendApiService.
//                 onTopicsAndSkillsDashboardReinitialized.emit();
//               topicCreationInProgress = false;
//               ImageLocalStorageService.flushStoredImagesData();
//               ContextService.resetImageSaveDestination();
//               newTab.location.href = UrlInterpolationService.interpolateUrl(
//                 TOPIC_EDITOR_URL_TEMPLATE, {
//                   topic_id: response.topicId
//                 });
//             }, function(errorResponse) {
//               newTab.close();
//               topicCreationInProgress = false;
//               AlertsService.addWarning(errorResponse.error);
//             });
//         }, function() {
//           // Note to developers:
//           // This callback is triggered when the Cancel button is
//           // clicked. No further action is needed.
//         });
//       }
//     };
//   }
// ]);
