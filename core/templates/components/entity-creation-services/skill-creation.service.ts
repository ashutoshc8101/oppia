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

import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillCreationBackendApiService } from 'domain/skill/skill-creation-backend-api.service';
import { TopicsAndSkillsDashboardBackendApiService } from 'domain/topics_and_skills_dashboard/topics-and-skills-dashboard-backend-api.service';
import { UrlInterpolationService } from 'domain/utilities/url-interpolation.service';
import { CreateNewSkillModalComponent } from 'pages/topics-and-skills-dashboard-page/create-new-skill-modal.component';
import { TopicsAndSkillsDashboardPageConstants } from 'pages/topics-and-skills-dashboard-page/topics-and-skills-dashboard-page.constants';
import { AlertsService } from 'services/alerts.service';
import { ImageLocalStorageService } from 'services/image-local-storage.service';

/**
 * @fileoverview Functionality for creating a new skill.
 */

@Injectable({
  providedIn: 'root'
})
export class SkillCreationService {
  CREATE_NEW_SKILL_URL_TEMPLATE: string = '/skill_editor/<skill_id>';
  skillCreationInProgress: boolean = false;
  skillDescriptionStatusMarker: string = (
    TopicsAndSkillsDashboardPageConstants
      .SKILL_DESCRIPTION_STATUS_VALUES.STATUS_UNCHANGED);

  constructor(
    private ngbModal: NgbModal,
    private alertsService: AlertsService,
    private imageLocalStorageService: ImageLocalStorageService,
    private skillCreationBackendApiService: SkillCreationBackendApiService,
    private topicsAndSkillsDashboardBackendApiService:
      TopicsAndSkillsDashboardBackendApiService,
      private urlInterpolationService: UrlInterpolationService
  ) {}

  markChangeInSkillDescription(): void {
    this.skillDescriptionStatusMarker = (
      TopicsAndSkillsDashboardPageConstants.SKILL_DESCRIPTION_STATUS_VALUES
        .STATUS_CHANGED);
  }

  getSkillDescriptionStatus(): string {
    return this.skillDescriptionStatusMarker;
  }

  disableSkillDescriptionStatusMarker(): void {
    this.skillDescriptionStatusMarker = (
      TopicsAndSkillsDashboardPageConstants.SKILL_DESCRIPTION_STATUS_VALUES
        .STATUS_DISABLED);
  }

  resetSkillDescriptionStatusMarker(): void {
    this.skillDescriptionStatusMarker = (
      TopicsAndSkillsDashboardPageConstants.SKILL_DESCRIPTION_STATUS_VALUES
        .STATUS_UNCHANGED);
  }

  createNewSkill(topicsIds): void {
    const modalRef = this.ngbModal.open(
      CreateNewSkillModalComponent, {
        size: 'lg',
        backdrop: 'static'
      });
  }
}

angular.module('oppia').service('SkillCreationService',
  downgradeInjectable(SkillCreationService));

// Require('domain/utilities/url-interpolation.service.ts');
// require('domain/skill/skill-creation-backend-api.service.ts');
// require(
//   'domain/topics_and_skills_dashboard/' +
//   'topics-and-skills-dashboard-backend-api.service.ts');
// require('services/alerts.service.ts');
// require('services/image-local-storage.service.ts');

// require(
//   'pages/topics-and-skills-dashboard-page/' +
//   'topics-and-skills-dashboard-page.constants.ajs.ts');

// require(
//   'pages/topics-and-skills-dashboard-page/' +
//   'create-new-skill-modal.controller.ts');
// angular.module('oppia').factory('SkillCreationService', [
//   '$timeout', '$uibModal', '$window', 'AlertsService',
//   'ImageLocalStorageService', 'SkillCreationBackendApiService',
//   'TopicsAndSkillsDashboardBackendApiService', 'UrlInterpolationService',
//   'SKILL_DESCRIPTION_STATUS_VALUES',
//   function(
//       $timeout, $uibModal, $window, AlertsService,
//       ImageLocalStorageService, SkillCreationBackendApiService,
//       TopicsAndSkillsDashboardBackendApiService, UrlInterpolationService,
//       SKILL_DESCRIPTION_STATUS_VALUES) {
//     var CREATE_NEW_SKILL_URL_TEMPLATE = (
//       '/skill_editor/<skill_id>');
//     var skillCreationInProgress = false;
//     var skillDescriptionStatusMarker = (
//       SKILL_DESCRIPTION_STATUS_VALUES.STATUS_UNCHANGED);

//     return {
//       markChangeInSkillDescription: function() {
//         skillDescriptionStatusMarker = (
//           SKILL_DESCRIPTION_STATUS_VALUES.STATUS_CHANGED);
//       },

//       getSkillDescriptionStatus: function() {
//         return skillDescriptionStatusMarker;
//       },

//       disableSkillDescriptionStatusMarker: function() {
//         skillDescriptionStatusMarker = (
//           SKILL_DESCRIPTION_STATUS_VALUES.STATUS_DISABLED);
//       },

//       resetSkillDescriptionStatusMarker: function() {
//         skillDescriptionStatusMarker = (
//           SKILL_DESCRIPTION_STATUS_VALUES.STATUS_UNCHANGED);
//       },
//       createNewSkill: function(topicIds) {
//         $uibModal.open({
//           templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
//             '/pages/topics-and-skills-dashboard-page/templates/' +
//             'create-new-skill-modal.template.html'),
//           backdrop: 'static',
//           windowClass: 'create-new-skill-modal',
//           controller: 'CreateNewSkillModalController'
//         }).result.then(function(result) {
//           if (skillCreationInProgress) {
//             return;
//           }
//           var rubrics = result.rubrics;
//           for (var idx in rubrics) {
//             rubrics[idx] = rubrics[idx].toBackendDict();
//           }
//           skillCreationInProgress = true;
//           AlertsService.clearWarnings();
//           // $window.open has to be initialized separately since if the 'open
//           // new tab' action does not directly result from a user input
//           // (which is not the case, if we wait for result from the backend
//           // before opening a new tab), some browsers block it as a popup.
//           // Here, the new tab is created as soon as the user clicks the
//           // 'Create' button and filled with URL once the details are
//           // fetched from the backend.
//           var newTab = $window.open();
//           var imagesData = ImageLocalStorageService.getStoredImagesData();
//           SkillCreationBackendApiService.createSkillAsync(
//             result.description, rubrics, result.explanation,
//             topicIds || [], imagesData).then(function(response) {
//             $timeout(function() {
//               TopicsAndSkillsDashboardBackendApiService.
//                 onTopicsAndSkillsDashboardReinitialized.emit(true);
//               skillCreationInProgress = false;
//               ImageLocalStorageService.flushStoredImagesData();
//               newTab.location.href = UrlInterpolationService.interpolateUrl(
//                 CREATE_NEW_SKILL_URL_TEMPLATE, {
//                   skill_id: response.skillId
//                 });
//             }, 150);
//           }, function(errorMessage) {
//             AlertsService.addWarning(errorMessage);
//           });
//         });
//       }
//     };
//   }
// ]);
