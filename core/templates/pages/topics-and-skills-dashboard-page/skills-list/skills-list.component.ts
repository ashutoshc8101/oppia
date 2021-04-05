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
 * @fileoverview Component for the skills list viewer.
 */

import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MergeSkillModalComponent } from 'components/skill-selector/merge-skill-modal.component';
import { SkillSelectorComponent } from 'components/skill-selector/skill-selector.component';
import { BackendChangeObject } from 'domain/editor/undo_redo/change.model';
import { SkillBackendApiService } from 'domain/skill/skill-backend-api.service';
import { EditableTopicBackendApiService } from 'domain/topic/editable-topic-backend-api.service';
import { TopicsAndSkillsDashboardBackendApiService } from 'domain/topics_and_skills_dashboard/topics-and-skills-dashboard-backend-api.service';
import { UrlInterpolationService } from 'domain/utilities/url-interpolation.service';
import { Subscription } from 'rxjs';
import { AlertsService } from 'services/alerts.service';
import { AssignSkillToTopicModalComponent } from '../modals/assign-skill-to-topic-modal.component';
import { DeleteSkillModalComponent } from '../modals/delete-skill-modal.component';
import { UnassignSkillFromTopicsModalComponent } from '../modals/unassign-skill-from-topics-modal.component';

@Component({
  selector: 'oppia-skills-list',
  templateUrl: './skills-list.component.html'
})
export class SkillsListComponent {
  @Input() skillSummaries;
  @Input() pageNumber: number;
  @Input() itemsPerPage: number;
  @Input() editableTopicSummaries;
  @Input() mergeableSkillSummaries;
  @Input() untriagedSkillSummaries;
  @Input() userCanDeleteSkill: boolean;
  @Input() userCanCreateSkill: boolean;
  @Input() unpublishedSkill;
  @Input() skillsCategorizedByTopics;
  directiveSubscriptions = new Subscription();
  selectedIndex: string;
  SKILL_HEADINGS: string[] = [
    'index', 'description', 'worked_examples_count',
    'misconception_count', 'status'];

  constructor(
    private alertsService: AlertsService,
    private urlInterpolationService: UrlInterpolationService,
    private ngbModal: NgbModal,
    private editableTopicBackendApiService: EditableTopicBackendApiService,
    private skillBackendApiService: SkillBackendApiService,
    private topicsAndSkillsDashboardBackendApiService:
    TopicsAndSkillsDashboardBackendApiService
  ) {}

  getSkillEditorUrl(skillId: string): string {
    let SKILL_EDITOR_URL_TEMPLATE: string = '/skill_editor/<skill_id>';
    return this.urlInterpolationService.interpolateUrl(
      SKILL_EDITOR_URL_TEMPLATE, {
        skill_id: skillId
      }
    );
  }

  deleteSkill(skillId: string): void {
    let modalRef: NgbModalRef =
    this.ngbModal.open(DeleteSkillModalComponent, {
      backdrop: true,
      windowClass: 'delete-skill-modal'
    });

    modalRef.componentInstance.skillId = skillId;

    modalRef.result.then(() => {
      this.skillBackendApiService.deleteSkill(skillId).then(
        () => {
          setTimeout(() => {
            this.topicsAndSkillsDashboardBackendApiService.
              onTopicsAndSkillsDashboardReinitialized.emit();
            let successToast = 'The skill has been deleted.';
            this.alertsService.addSuccessMessage(successToast, 1000);
          }, 100);
        }
      )['catch']((errorMessage) => {
        let errorToast: string = null;
        // This error is thrown as part of a final validation check in
        // the backend, hence the message does not include instructions
        // for the user to follow.
        if (errorMessage.includes('does not have any skills linked')) {
          errorToast = (
            'The skill is assigned to a subtopic in a published ' +
            'topic. Please unpublish the topic before deleting ' +
            'this skill.');
        } else {
          errorToast = errorMessage;
        }
        setTimeout(() => {
          this.topicsAndSkillsDashboardBackendApiService.
            onTopicsAndSkillsDashboardReinitialized.emit();
        }, 100);
        this.alertsService.addInfoMessage(errorToast, 5000);
      });
    }, () => {
      // Note to developers:
      // This callback is triggered when the Cancel button is clicked.
      // No further action is needed.
    }).then(() => {});
  }

  unassignSkill(skillId: string): void {
    let modalRef: NgbModalRef = this.ngbModal.
      open(UnassignSkillFromTopicsModalComponent, {
        backdrop: 'static'
      });
    modalRef.componentInstance.skillId = skillId;
    modalRef.result.then((topicsToUnassign) => {
      for (let topic in topicsToUnassign) {
        let changeList = [];
        if (topicsToUnassign[topic].subtopicId) {
          changeList.push({
            cmd: 'remove_skill_id_from_subtopic',
            subtopic_id: topicsToUnassign[topic].subtopicId,
            skill_id: skillId
          });
        }

        changeList.push({
          cmd: 'remove_uncategorized_skill_id',
          uncategorized_skill_id: skillId
        });

        this.editableTopicBackendApiService.updateTopic(
          topicsToUnassign[topic].topicId,
          topicsToUnassign[topic].topicVersion,
          `Unassigned skill with id ${skillId} from the topic.`,
          changeList
        ).then(() => {
          setTimeout(() => {
            this.topicsAndSkillsDashboardBackendApiService.
              onTopicsAndSkillsDashboardReinitialized.emit(true);
          }, 100);
        }).then(() => {
          let successToast: string = (
            'The skill has been unassigned to the topic.');
          this.alertsService.addSuccessMessage(successToast, 1000);
        });
      }
    }, () => {
      // Note to developers:
      // This callback is triggered when the Cancel button is clicked.
      // No further action is needed.
    });
  }

  assignSkillToTopic(skill): void {
    let skillId: string = skill.id;
    let modalRef: NgbModalRef = this.ngbModal
      .open(AssignSkillToTopicModalComponent, {
        backdrop: 'static',
        windowClass: 'assign-skill-to-topic-modal'
      });
    modalRef.componentInstance.topicSummaries = this.editableTopicSummaries;
    modalRef.result.then((topicIds: string[]) => {
      let changeList = [{
        cmd: 'add_uncategorized_skill_id',
        new_uncategorized_skill_id: skillId
      }];
      let topicSummaries = this.editableTopicSummaries;
      for (let i = 0; i < topicIds.length; i++) {
        for (let j = 0; j < topicSummaries.length; j++) {
          if (topicSummaries[j].id === topicIds[i]) {
            this.editableTopicBackendApiService.updateTopic(
              topicIds[i], topicSummaries[j].version,
              'Added skill with id ' + skillId + ' to topic.',
              changeList
            ).then(() => {
              setTimeout(() => {
                this.topicsAndSkillsDashboardBackendApiService.
                  onTopicsAndSkillsDashboardReinitialized.emit(true);
              }, 100);
            }).then(() => {
              let successToast = (
                'The skill has been assigned to the topic.');
              this.alertsService.addSuccessMessage(successToast, 1000);
            });
          }
        }
      }
    }, () => {
      // Note to developers:
      // This callback is triggered when the Cancel button is clicked.
      // No further action is needed.
    });
  }

  mergeSkill(skill): void {
    let skillSummaries = this.mergeableSkillSummaries;
    let categorizedSkills = this.skillsCategorizedByTopics;
    let untriagedSkillSummaries = this.untriagedSkillSummaries;
    let allowSkillsFromOtherTopics: boolean = true;

    let modalRef: NgbModalRef = this.ngbModal.open(MergeSkillModalComponent, {
      backdrop: 'static',
      windowClass: 'skill-select-modal',
      size: 'xl'
    });
    modalRef.componentInstance.skillSummaries = skillSummaries;
    modalRef.componentInstance.skill = skill;
    modalRef.componentInstance.categorizedSkills = categorizedSkills;
    modalRef.componentInstance.allowSkillsFromOtherTopics =
    allowSkillsFromOtherTopics;
    modalRef.componentInstance.untriagedSkillSummaries =
    untriagedSkillSummaries;

    modalRef.result.then((result) => {
      let skill = result.skill;
      let supersedingSkillId = result.supersedingSkillId;
      // Transfer questions from the old skill to the new skill.
      this.topicsAndSkillsDashboardBackendApiService.mergeSkillsAsync(
        skill.id, supersedingSkillId).then(() => {
        // Broadcast will update the skills list in the dashboard so
        // that the merged skills are not shown anymore.
        setTimeout(() => {
          this.topicsAndSkillsDashboardBackendApiService.
            onTopicsAndSkillsDashboardReinitialized.emit();
          let successToast: string = 'Merged Skills.';
          this.alertsService.addSuccessMessage(successToast, 1000);
        }, 100);
      }, (errorResponse) => {
        this.alertsService.addWarning(errorResponse.error.error);
      });
    }, () => {
      // Note to developers:
      // This callback is triggered when the Cancel button is clicked.
      // No further action is needed.
    });
  }

  getSerialNumberForSkill(skillIndex: number): number {
    const skillSerialNumber = (
      skillIndex + (this.pageNumber * this.itemsPerPage));
    return (skillSerialNumber + 1);
  }

  changeEditOptions(skillId: string): void {
    this.selectedIndex = this.selectedIndex ? '' : skillId;
  }

  showEditOptions(skillId: string): boolean {
    return this.selectedIndex === skillId;
  }

  ngOnDestroy(): void {
    this.directiveSubscriptions.unsubscribe();
  }
}

angular.module('oppia').directive('oppiaSkillsList',
  downgradeComponent({ component: SkillsListComponent }));

// Require('components/skill-selector/merge-skill-modal.controller.ts');
// require(
//   'components/skill-selector/skill-selector.component.ts');
// require(
//   'pages/topics-and-skills-dashboard-page/skills-list/' +
//   'assign-skill-to-topic-modal.controller.ts');
// require(
//   'pages/topics-and-skills-dashboard-page/' +
//   'delete-skill-modal.controller.ts');
// require(
//   'pages/topics-and-skills-dashboard-page/topic-selector/' +
//   'topic-selector.directive.ts');
// require(
//   'domain/topics_and_skills_dashboard/' +
//   'topics-and-skills-dashboard-backend-api.service.ts');
// require('domain/skill/skill-backend-api.service.ts');
// require('domain/topic/editable-topic-backend-api.service.ts');
// require('domain/utilities/url-interpolation.service.ts');
// require(
//   'pages/topics-and-skills-dashboard-page/' +
//   'skills-list/assign-skill-to-topic-modal.controller.ts');
// require(
//   'pages/topics-and-skills-dashboard-page/' +
//   'skills-list/unassign-skill-from-topics-modal.controller.ts');
// require(
//   'pages/topics-and-skills-dashboard-page/topic-selector/' +
//   'topic-selector.directive.ts');
// require('services/alerts.service.ts');

// require(
//   'pages/topics-and-skills-dashboard-page/' +
//   'topics-and-skills-dashboard-page.constants.ajs.ts');

// import { Subscription } from 'rxjs';

// angular.module('oppia').directive('skillsList', [
//   'AlertsService', 'UrlInterpolationService',
//   function(
//       AlertsService, UrlInterpolationService) {
//     return {
//       restrict: 'E',
//       scope: {
//         getSkillSummaries: '&skillSummaries',
//         getPageNumber: '&pageNumber',
//         getItemsPerPage: '&itemsPerPage',
//         getEditableTopicSummaries: '&editableTopicSummaries',
//         getMergeableSkillSummaries: '&mergeableSkillSummaries',
//         getUntriagedSkillSummaries: '&untriagedSkillSummaries',
//         canDeleteSkill: '&userCanDeleteSkill',
//         canCreateSkill: '&userCanCreateSkill',
//         isUnpublishedSkill: '&unpublishedSkill',
//         getSkillsCategorizedByTopics: '&skillsCategorizedByTopics'
//       },
//       templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
//         '/pages/topics-and-skills-dashboard-page/skills-list/' +
//         'skills-list.component.html'),
//       controllerAs: '$ctrl',
//       controller: [
//         '$rootScope', '$scope', '$timeout', '$uibModal',
//         'EditableTopicBackendApiService', 'SkillBackendApiService',
//         'TopicsAndSkillsDashboardBackendApiService',
//         function(
//             $rootScope, $scope, $timeout, $uibModal,
//             EditableTopicBackendApiService, SkillBackendApiService,
//             TopicsAndSkillsDashboardBackendApiService) {
//           var ctrl = this;
//           ctrl.directiveSubscriptions = new Subscription();
//           ctrl.getSkillEditorUrl = function(skillId) {
//             var SKILL_EDITOR_URL_TEMPLATE = '/skill_editor/<skill_id>';
//             return UrlInterpolationService.interpolateUrl(
//               SKILL_EDITOR_URL_TEMPLATE, {
//                 skill_id: skillId
//               });
//           };

//           ctrl.deleteSkill = function(skillId) {
//             $uibModal.open({
//               templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
//                 '/pages/topics-and-skills-dashboard-page/templates/' +
//                 'delete-skill-modal.template.html'),
//               backdrop: true,
//               resolve: {
//                 skillId: () => skillId
//               },
//               windowClass: 'delete-skill-modal',
//               controller: 'DeleteSkillModalController'
//             }).result.then(() => {
//               SkillBackendApiService.deleteSkill(skillId).then(
//                 () => {
//                   setTimeout(() => {
//                     TopicsAndSkillsDashboardBackendApiService.
//                       onTopicsAndSkillsDashboardReinitialized.emit();
//                     var successToast = 'The skill has been deleted.';
//                     AlertsService.addSuccessMessage(successToast, 1000);
//                   }, 100);
//                   $rootScope.$apply();
//                 }
//               // eslint-disable-next-line dot-notation
//               ).catch(errorMessage => {
//                 var errorToast = null;
//                 // This error is thrown as part of a final validation check in
//                 // the backend, hence the message does not include instructions
//                 // for the user to follow.
//                 if (errorMessage.includes('does not have any skills linked')) {
//                   errorToast = (
//                     'The skill is assigned to a subtopic in a published ' +
//                     'topic. Please unpublish the topic before deleting ' +
//                     'this skill.');
//                 } else {
//                   errorToast = errorMessage;
//                 }
//                 setTimeout(() => {
//                   TopicsAndSkillsDashboardBackendApiService.
//                     onTopicsAndSkillsDashboardReinitialized.emit();
//                 }, 100);
//                 AlertsService.addInfoMessage(errorToast, 5000);
//                 $rootScope.$apply();
//               });
//             }, function() {
//               // Note to developers:
//               // This callback is triggered when the Cancel button is clicked.
//               // No further action is needed.
//             }).then(function() {
//             });
//           };

//           ctrl.unassignSkill = function(skillId) {
//             $uibModal.open({
//               templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
//                 '/pages/topics-and-skills-dashboard-page/templates/' +
//                   'unassign-skill-from-topics-modal.template.html'),
//               backdrop: 'static',
//               resolve: {
//                 skillId: () => skillId
//               },
//               controller: 'UnassignSkillFromTopicModalController'
//             }).result.then(function(topicsToUnassign) {
//               for (let topic in topicsToUnassign) {
//                 var changeList = [];
//                 if (topicsToUnassign[topic].subtopicId) {
//                   changeList.push({
//                     cmd: 'remove_skill_id_from_subtopic',
//                     subtopic_id: topicsToUnassign[topic].subtopicId,
//                     skill_id: skillId
//                   });
//                 }
//                 changeList.push({
//                   cmd: 'remove_uncategorized_skill_id',
//                   uncategorized_skill_id: skillId
//                 });
//                 EditableTopicBackendApiService.updateTopic(
//                   topicsToUnassign[topic].topicId,
//                   topicsToUnassign[topic].topicVersion,
//                   `Unassigned skill with id ${skillId} from the topic.`,
//                   changeList
//                 ).then(function() {
//                   $timeout(function() {
//                     TopicsAndSkillsDashboardBackendApiService.
//                       onTopicsAndSkillsDashboardReinitialized.emit(true);
//                   }, 100);
//                 }).then(function() {
//                   var successToast = (
//                     'The skill has been unassigned to the topic.');
//                   AlertsService.addSuccessMessage(successToast, 1000);
//                   $rootScope.$applyAsync();
//                 });
//               }
//             }, () => {
//               // Note to developers:
//               // This callback is triggered when the Cancel button is clicked.
//               // No further action is needed.
//             });
//           };

//           ctrl.assignSkillToTopic = function(skill) {
//             var skillId = skill.id;
//             var topicSummaries = $scope.getEditableTopicSummaries().filter(
//               topicSummary => !skill.topicNames.includes(topicSummary.name));
//             $uibModal.open({
//               templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
//                 '/pages/topics-and-skills-dashboard-page/templates/' +
//                 'assign-skill-to-topic-modal.template.html'),
//               backdrop: 'static',
//               windowClass: 'assign-skill-to-topic-modal',
//               resolve: {
//                 topicSummaries: () => topicSummaries
//               },
//               controller: 'AssignSkillToTopicModalController'
//             }).result.then(function(topicIds) {
//               var changeList = [{
//                 cmd: 'add_uncategorized_skill_id',
//                 new_uncategorized_skill_id: skillId
//               }];
//               var topicSummaries = $scope.getEditableTopicSummaries();
// for (var i = 0; i < topicIds.length; i++) {
//   for (var j = 0; j < topicSummaries.length; j++) {
//     if (topicSummaries[j].id === topicIds[i]) {
//       EditableTopicBackendApiService.updateTopic(
//         topicIds[i], topicSummaries[j].version,
//         'Added skill with id ' + skillId + ' to topic.',
//         changeList
//       ).then(function() {
//         $timeout(function() {
//           TopicsAndSkillsDashboardBackendApiService.
//             onTopicsAndSkillsDashboardReinitialized.emit(true);
//         }, 100);
//       }).then(function() {
//         var successToast = (
//           'The skill has been assigned to the topic.');
//         AlertsService.addSuccessMessage(successToast, 1000);
//         $rootScope.$applyAsync();
//       });
//     }
//   }
// }
//             }, function() {
//               // Note to developers:
//               // This callback is triggered when the Cancel button is clicked.
//               // No further action is needed.
//             });
//           };

//           ctrl.mergeSkill = function(skill) {
//             var skillSummaries = $scope.getMergeableSkillSummaries();
//             var categorizedSkills = $scope.getSkillsCategorizedByTopics();
//             var untriagedSkillSummaries = $scope.getUntriagedSkillSummaries();
//             var allowSkillsFromOtherTopics = true;
//             $uibModal.open({
//               templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
//                 '/components/skill-selector/select-skill-modal.template.html'),
//               backdrop: 'static',
//               resolve: {
//                 skill: () => skill,
//                 skillSummaries: () => skillSummaries,
//                 categorizedSkills: () => categorizedSkills,
//                 allowSkillsFromOtherTopics: () => allowSkillsFromOtherTopics,
//                 untriagedSkillSummaries: () => untriagedSkillSummaries
//               },
//               controller: 'MergeSkillModalController',
//               windowClass: 'skill-select-modal',
//               size: 'xl'

//             }).result.then(function(result) {
//               var skill = result.skill;
//               var supersedingSkillId = result.supersedingSkillId;
//               // Transfer questions from the old skill to the new skill.
//               TopicsAndSkillsDashboardBackendApiService.mergeSkillsAsync(
//                 skill.id, supersedingSkillId).then(function() {
//                 // Broadcast will update the skills list in the dashboard so
//                 // that the merged skills are not shown anymore.
//                 $timeout(function() {
//                   TopicsAndSkillsDashboardBackendApiService.
//                     onTopicsAndSkillsDashboardReinitialized.emit();
//                   var successToast = 'Merged Skills.';
//                   AlertsService.addSuccessMessage(successToast, 1000);
//                 }, 100);
//               }, function(response) {
//                 AlertsService.addWarning(response.error.error);
//               });
//             }, function() {
//               // Note to developers:
//               // This callback is triggered when the Cancel button is clicked.
//               // No further action is needed.
//             });
//           };

//           ctrl.getSerialNumberForSkill = function(skillIndex) {
//             var skillSerialNumber = (
//               skillIndex + (ctrl.getPageNumber() * ctrl.getItemsPerPage()));
//             return (skillSerialNumber + 1);
//           };

//           ctrl.changeEditOptions = function(skillId) {
//             ctrl.selectedIndex = ctrl.selectedIndex ? null : skillId;
//           };

//           ctrl.showEditOptions = function(skillId) {
//             return ctrl.selectedIndex === skillId;
//           };

//           ctrl.$onInit = function() {
//             ctrl.getPageNumber = $scope.getPageNumber;
//             ctrl.getItemsPerPage = $scope.getItemsPerPage;
//             ctrl.SKILL_HEADINGS = [
//               'index', 'description', 'worked_examples_count',
//               'misconception_count', 'status'];
//           };

//           ctrl.$onDestroy = function() {
//             ctrl.directiveSubscriptions.unsubscribe();
//           };
//         }
//       ]
//     };
//   }]);
