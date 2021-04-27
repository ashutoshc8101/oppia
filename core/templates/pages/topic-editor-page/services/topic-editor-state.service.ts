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
 * @fileoverview Service to maintain the state of a single topic shared
 * throughout the topic editor. This service provides functionality for
 * retrieving the topic, saving it, and listening for changes.
 */

import { EventEmitter, Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';
import { UndoRedoService } from 'domain/editor/undo_redo/undo-redo.service';
import { Rubric } from 'domain/skill/rubric.model';
import { EditableStoryBackendApiService } from 'domain/story/editable-story-backend-api.service';
import { StorySummary } from 'domain/story/story-summary.model';
import { EditableTopicBackendApiService } from 'domain/topic/editable-topic-backend-api.service';
import { SubtopicPage } from 'domain/topic/subtopic-page.model';
import { TopicRightsBackendApiService } from 'domain/topic/topic-rights-backend-api.service';
import { TopicRights } from 'domain/topic/topic-rights.model';
import { TopicObjectFactory } from 'domain/topic/TopicObjectFactory';
import { AlertsService } from 'services/alerts.service';

@Injectable({
  providedIn: 'root'
})
export class TopicEditorStateService {
  _topic;
  _topicRights;
  // The array that caches all the subtopic pages loaded by the user.
  _cachedSubtopicPages = [];
  // The array that stores all the ids of the subtopic pages that were not
  // loaded from the backend i.e those that correspond to newly created
  // subtopics (and not loaded from the backend).
  _newSubtopicPageIds = [];
  _subtopicPage;
  _topicIsInitialized = false;
  _topicIsLoading = false;
  _topicIsBeingSaved = false;
  _topicWithNameExists = false;
  _topicWithUrlFragmentExists = false;
  _canonicalStorySummaries = [];
  _skillIdToRubricsObject = {};
  _skillQuestionCountDict = {};
  _groupedSkillSummaries = {
    current: [],
    others: []
  };
  _skillCreationIsAllowed = false;
  _classroomUrlFragment = 'staging';
  _storySummariesInitializedEventEmitter = new EventEmitter();
  _subtopicPageLoadedEventEmitter = new EventEmitter();

  _topicInitializedEventEmitter = new EventEmitter();
  _topicReinitializedEventEmitter = new EventEmitter();

  constructor(
    private alertsService: AlertsService,
    private editableStoryBackendApiService: EditableStoryBackendApiService,
    private editableTopicBackendApiService: EditableTopicBackendApiService,
    private topicObjectFactory: TopicObjectFactory,
    private topicRightsBackendApiService: TopicRightsBackendApiService,
    private undoRedoService: UndoRedoService
  ) {}

  _getSubtopicPageId(topicId, subtopicId: number): string {
    return topicId + '-' + subtopicId.toString();
  }

  _updateGroupedSkillSummaries(groupedSkillSummaries): void {
    this._groupedSkillSummaries.current = [];
    this._groupedSkillSummaries.others = [];

    for (let idx in groupedSkillSummaries[this._topic.getName()]) {
      this._groupedSkillSummaries.current.push(
        groupedSkillSummaries[this._topic.getName()][idx]);
    }
    for (let name in groupedSkillSummaries) {
      if (name === this._topic.getName()) {
        continue;
      }
      var skillSummaries = groupedSkillSummaries[name];
      for (var idx in skillSummaries) {
        this._groupedSkillSummaries.others.push(skillSummaries[idx]);
      }
    }
  }

  _getSubtopicIdFromSubtopicPageId(subtopicPageId): number {
    // The subtopic page id consists of the topic id of length 12, a hyphen
    // and a subtopic id (which is a number).
    return parseInt(subtopicPageId.slice(13));
  }

  _setTopic(topic): void {
    this._topic.copyFromTopic(topic);
    // Reset the subtopic pages list after setting new topic.
    this._cachedSubtopicPages.length = 0;
    if (this._topicIsInitialized) {
      this._topicIsInitialized = true;
      this._topicReinitializedEventEmitter.emit();
    } else {
      this._topicIsInitialized = true;
      this._topicInitializedEventEmitter.emit();
    }
  }

  _getSubtopicPageIndex(subtopicPageId): number | null {
    for (var i = 0; i < this._cachedSubtopicPages.length; i++) {
      if (this._cachedSubtopicPages[i].getId() === subtopicPageId) {
        return i;
      }
    }
    return null;
  }

  _updateClassroomUrlFragment(classroomUrlFragment): void {
    this._classroomUrlFragment = classroomUrlFragment;
  }

  _updateTopic(newBackendTopicDict, skillIdToDescriptionDict): void {
    this._setTopic(
      this.topicObjectFactory.create(
        newBackendTopicDict, skillIdToDescriptionDict));
  }

  _updateSkillIdToRubricsObject(skillIdToRubricsObject): void {
    for (let skillId in skillIdToRubricsObject) {
      // Skips deleted skills.
      if (!skillIdToRubricsObject[skillId]) {
        continue;
      }
      var rubrics = skillIdToRubricsObject[skillId].map(function(rubric) {
        return Rubric.createFromBackendDict(rubric);
      });
      this._skillIdToRubricsObject[skillId] = rubrics;
    }
  }

  _setSubtopicPage(subtopicPage): void {
    this._subtopicPage.copyFromSubtopicPage(subtopicPage);
    this._cachedSubtopicPages.push(angular.copy(subtopicPage));
    this._subtopicPageLoadedEventEmitter.emit();
  }

  _updateSubtopicPage(newBackendSubtopicPageObject): void {
    this._setSubtopicPage(SubtopicPage.createFromBackendDict(
      newBackendSubtopicPageObject));
  }

  _setTopicRights(topicRights): void {
    this._topicRights.copyFromTopicRights(topicRights);
  }

  _updateTopicRights(newBackendTopicRightsObject): void {
    this._setTopicRights(TopicRights.createFromBackendDict(
      newBackendTopicRightsObject));
  }

  _setCanonicalStorySummaries(canonicalStorySummaries): void {
    this._canonicalStorySummaries = canonicalStorySummaries.map(
      function(storySummaryDict) {
        return StorySummary.createFromBackendDict(
          storySummaryDict);
      });
    this._storySummariesInitializedEventEmitter.emit();
  }

  _setTopicWithNameExists(topicWithNameExists): void {
    this._topicWithNameExists = topicWithNameExists;
  }

  _setTopicWithUrlFragmentExists(topicWithUrlFragmentExists): void {
    this._topicWithUrlFragmentExists = topicWithUrlFragmentExists;
  }

  /**
   * Loads, or reloads, the topic stored by this service given a
   * specified topic ID. See setTopic() for more information on
   * additional behavior of this function.
   */

  loadTopic(topicId): void {
    this._topicIsLoading = true;
    let topicDataPromise = this.editableTopicBackendApiService.fetchTopic(
      topicId);
    let storyDataPromise = this.editableTopicBackendApiService.fetchStories(
      topicId);
    let topicRightsPromise = this.topicRightsBackendApiService.fetchTopicRights(
      topicId);
    Promise.all([
      topicDataPromise,
      storyDataPromise,
      topicRightsPromise
    ]).then(([
      newBackendTopicObject,
      canonicalStorySummaries,
      newBackendTopicRightsObject
    ]) => {
      this._skillCreationIsAllowed = (
        newBackendTopicObject.skillCreationIsAllowed);
      this._skillQuestionCountDict = (
        newBackendTopicObject.skillQuestionCountDict);
      this._updateGroupedSkillSummaries(
        newBackendTopicObject.groupedSkillSummaries);
      this._updateTopic(
        newBackendTopicObject.topicDict,
        newBackendTopicObject.skillIdToDescriptionDict
      );
      this._updateGroupedSkillSummaries(
        newBackendTopicObject.groupedSkillSummaries);
      this._updateSkillIdToRubricsObject(
        newBackendTopicObject.skillIdToRubricsDict);
      this._updateClassroomUrlFragment(
        newBackendTopicObject.classroomUrlFragment);
      this._updateTopicRights(newBackendTopicRightsObject);
      this._setCanonicalStorySummaries(canonicalStorySummaries);
      this._topicIsLoading = false;
    }, (error) => {
      this.alertsService.addWarning(
        error || 'There was an error when loading the topic editor.');
      this._topicIsLoading = false;
    });
  }

  getGroupedSkillSummaries() {
    return {...this._groupedSkillSummaries};
  }

  getSkillQuestionCountDict() {
    return this._skillQuestionCountDict;
  }

  /**
   * Returns whether the topic name already exists on the server.
   */
  getTopicWithNameExists() {
    return this._topicWithNameExists;
  }

  /**
   * Returns whether the topic URL fragment already exists on the server.
   */
  getTopicWithUrlFragmentExists() {
    return this._topicWithUrlFragmentExists;
  }

  /**
   * Loads, or reloads, the subtopic page stored by this service given a
   * specified topic ID and subtopic ID.
   */
  loadSubtopicPage(topicId, subtopicId) {
    let subtopicPageId = this._getSubtopicPageId(topicId, subtopicId);
    if (this._getSubtopicPageIndex(subtopicPageId) !== null) {
      this._subtopicPage = {...
      this._cachedSubtopicPages[this._getSubtopicPageIndex(subtopicPageId)]};
      this._subtopicPageLoadedEventEmitter.emit();
      return;
    }
    this.editableTopicBackendApiService.fetchSubtopicPage(
      topicId, subtopicId).then(
      (newBackendSubtopicPageObject) => {
        this._updateSubtopicPage(newBackendSubtopicPageObject);
      },
      (error) => {
        this.alertsService.addWarning(
          error || 'There was an error when loading the topic.');
      });
  }

  /**
   * Returns whether this service is currently attempting to load the
   * topic maintained by this service.
   */
  isLoadingTopic() {
    return this._topicIsLoading;
  }

  /**
   * Returns whether a topic has yet been loaded using either
   * loadTopic() or setTopic().
   */
  hasLoadedTopic() {
    return this._topicIsInitialized;
  }

  getSkillIdToRubricsObject() {
    return this._skillIdToRubricsObject;
  }

  /**
   * Returns the current topic to be shared among the topic
   * editor. Please note any changes to this topic will be propogated
   * to all bindings to it. This topic object will be retained for the
   * lifetime of the editor. This function never returns null, though it may
   * return an empty topic object if the topic has not yet been
   * loaded for this editor instance.
   */
  getTopic() {
    return this._topic;
  }

  /**
   * Returns whether the user can create a skill via the topic editor.
   */
  isSkillCreationAllowed() {
    return this._skillCreationIsAllowed;
  }

  getCanonicalStorySummaries() {
    return this._canonicalStorySummaries;
  }

  /**
   * Returns the current subtopic page to be shared among the topic
   * editor. Please note any changes to this subtopic page will be
   * propogated to all bindings to it. This subtopic page object will be
   * retained for the lifetime of the editor. This function never returns
   * null, though it may return an empty subtopic page object if the topic
   * has not yet been loaded for this editor instance.
   */
  getSubtopicPage() {
    return this._subtopicPage;
  }

  getCachedSubtopicPages() {
    return this._cachedSubtopicPages;
  }

  /**
   * Returns the current topic rights to be shared among the topic
   * editor. Please note any changes to this topic rights will be
   * propogated to all bindings to it. This topic rights object will
   * be retained for the lifetime of the editor. This function never returns
   * null, though it may return an empty topic rights object if the
   * topic rights has not yet been loaded for this editor instance.
   */
  getTopicRights() {
    return this._topicRights;
  }

  /**
   * Sets the topic stored within this service, propogating changes to
   * all bindings to the topic returned by getTopic(). The first
   * time this is called it will fire a global event based on
   * onTopicInitialized. All subsequent
   * calls will similarly fire a onTopicReinitialized event.
   */
  setTopic(topic): void {
    this._setTopic(topic);
  }

  /**
   * Sets the updated subtopic page object in the correct position in the
   * _cachedSubtopicPages list.
   */
  setSubtopicPage(subtopicPage): void {
    if (this._getSubtopicPageIndex(subtopicPage.getId()) !== null) {
      this._cachedSubtopicPages[
        this._getSubtopicPageIndex(subtopicPage.getId())] =
        angular.copy(subtopicPage);
      this._subtopicPage.copyFromSubtopicPage(subtopicPage);
    } else {
      this._setSubtopicPage(subtopicPage);
      this._newSubtopicPageIds.push(subtopicPage.getId());
    }
  }

  deleteSubtopicPage(topicId, subtopicId): void {
    var subtopicPageId = this._getSubtopicPageId(topicId, subtopicId);
    var index = this._getSubtopicPageIndex(subtopicPageId);
    var newIndex = this._newSubtopicPageIds.indexOf(subtopicPageId);
    // If index is null, that means the corresponding subtopic page was
    // never loaded from the backend and not that the subtopic page doesn't
    // exist at all. So, not required to throw an error here.
    // Also, since newSubtopicPageIds will only have the ids of a subset of
    // the pages in the _subtopicPages array, the former need not be edited
    // either, in this case.
    if (index === null) {
      if (newIndex === -1) {
        return;
      }
    }
    this._cachedSubtopicPages.splice(index, 1);
    // If the deleted subtopic page corresponded to a newly created
    // subtopic, then the 'subtopicId' part of the id of all subsequent
    // subtopic pages should be decremented to make it in sync with the
    // their corresponding subtopic ids.
    if (newIndex !== -1) {
      this._newSubtopicPageIds.splice(newIndex, 1);
      for (var i = 0; i < this._cachedSubtopicPages.length; i++) {
        var newSubtopicId = this._getSubtopicIdFromSubtopicPageId(
          this._cachedSubtopicPages[i].getId());
        if (newSubtopicId > subtopicId) {
          newSubtopicId--;
          this._cachedSubtopicPages[i].setId(
            this._getSubtopicPageId(topicId, newSubtopicId));
        }
      }
      for (var i = 0; i < this._newSubtopicPageIds.length; i++) {
        var newSubtopicId = this._getSubtopicIdFromSubtopicPageId(
          this._newSubtopicPageIds[i]);
        if (newSubtopicId > subtopicId) {
          newSubtopicId--;
          this._newSubtopicPageIds[i] = this._getSubtopicPageId(
            topicId, newSubtopicId);
        }
      }
    }
  }

  /**
   * Sets the topic rights stored within this service, propogating
   * changes to all bindings to the topic returned by
   * getTopicRights().
   */
  setTopicRights(topicRights): void {
    this._setTopicRights(topicRights);
  }

  /**
   * Attempts to save the current topic given a commit message. This
   * function cannot be called until after a topic has been initialized
   * in this service. Returns false if a save is not performed due to no
   * changes pending, or true if otherwise. This function, upon success,
   * will clear the UndoRedoService of pending changes. This function also
   * shares behavior with setTopic(), when it succeeds.
   */
  saveTopic(commitMessage, successCallback): boolean {
    if (!this._topicIsInitialized) {
      this.alertsService.fatalWarning(
        'Cannot save a topic before one is loaded.');
    }

    // Don't attempt to save the topic if there are no changes pending.
    if (!this.undoRedoService.hasChanges()) {
      return false;
    }
    this._topicIsBeingSaved = true;
    this.editableTopicBackendApiService.updateTopic(
      this._topic.getId(), this._topic.getVersion(),
      commitMessage, this.undoRedoService.getCommittableChangeList()).then(
      (topicBackendObject) => {
        this._updateTopic(
          topicBackendObject.topicDict,
          topicBackendObject.skillIdToDescriptionDict
        );
        this._updateSkillIdToRubricsObject(
          topicBackendObject.skillIdToRubricsDict);
        var changeList = this.undoRedoService.getCommittableChangeList();
        for (var i = 0; i < changeList.length; i++) {
          if (changeList[i].cmd === 'delete_canonical_story' ||
              changeList[i].cmd === 'delete_additional_story') {
            this.editableStoryBackendApiService.deleteStory(
              changeList[i].story_id);
          }
        }
        this.undoRedoService.clearChanges();
        this._topicIsBeingSaved = false;
        if (successCallback) {
          successCallback();
        }
      }, (error) => {
        this.alertsService.addWarning(
          error || 'There was an error when saving the topic.');
        this._topicIsBeingSaved = false;
      });
    return true;
  }

  /**
   * Returns whether this service is currently attempting to save the
   * topic maintained by this service.
   */
  isSavingTopic() {
    return this._topicIsBeingSaved;
  }

  get onTopicInitialized() {
    return this._topicInitializedEventEmitter;
  }

  get onTopicReinitialized() {
    return this._topicReinitializedEventEmitter;
  }
  /**
   * Returns the classroom name for the topic.
   */
  getClassroomUrlFragment() {
    return this._classroomUrlFragment;
  }

  /**
   * Attempts to set the boolean variable _topicWithNameExists based
   * on the value returned by doesTopicWithNameExistAsync and
   * executes the success callback provided. No arguments are passed to the
   * success callback. Execution of the success callback indicates that the
   * async backend call was successful and that _topicWithNameExists
   * has been successfully updated.
   */
  updateExistenceOfTopicName(topicName, successCallback): void {
    this.editableTopicBackendApiService.doesTopicWithNameExistAsync(
      topicName).then(
      (topicNameExists) => {
        this._setTopicWithNameExists(topicNameExists);
        if (successCallback) {
          successCallback();
        }
      }, (error) => {
        this.alertsService.addWarning(
          error ||
          'There was an error when checking if the topic name ' +
          'exists for another topic.');
      });
  }

  /**
   * Attempts to set the boolean variable _topicWithUrlFragmentExists based
   * on the value returned by doesTopicWithUrlFragmentExistAsync and
   * executes the success callback provided. No arguments are passed to the
   * success callback. Execution of the success callback indicates that the
   * async backend call was successful and that _topicWithUrlFragmentExists
   * has been successfully updated.
   */
  updateExistenceOfTopicUrlFragment(
      topicUrlFragment, successCallback): void {
    this.editableTopicBackendApiService.doesTopicWithUrlFragmentExistAsync(
      topicUrlFragment).then(
      (topicUrlFragmentExists) => {
        this._setTopicWithUrlFragmentExists(topicUrlFragmentExists);
        if (successCallback) {
          successCallback();
        }
      }, function(error) {
        this.alertsService.addWarning(
          error ||
          'There was an error when checking if the topic url fragment ' +
          'exists for another topic.');
      });
  }

  get onStorySummariesInitialized() {
    return this._storySummariesInitializedEventEmitter;
  }

  get onSubtopicPageLoaded() {
    return this._subtopicPageLoadedEventEmitter;
  }
}

angular.module('oppia').factory('TopicEditorStateService',
  downgradeInjectable(TopicEditorStateService));

// Require('domain/editor/undo_redo/undo-redo.service.ts');
// require('domain/story/editable-story-backend-api.service.ts');
// require('domain/topic/editable-topic-backend-api.service.ts');
// require('domain/topic/TopicObjectFactory.ts');
// require('domain/topic/topic-rights-backend-api.service.ts');
// require('services/alerts.service.ts');
// require('services/questions-list.service.ts');

// require('pages/topic-editor-page/topic-editor-page.constants.ajs.ts');

// import { EventEmitter } from '@angular/core';
// import { Rubric } from 'domain/skill/rubric.model';

// import { StorySummary } from 'domain/story/story-summary.model';
// import { SubtopicPage } from 'domain/topic/subtopic-page.model';
// import { TopicRights } from 'domain/topic/topic-rights.model';

// angular.module('oppia').factory('TopicEditorStateService', [
//   '$rootScope', 'AlertsService',
//   'EditableStoryBackendApiService', 'EditableTopicBackendApiService',
//   'TopicObjectFactory', 'TopicRightsBackendApiService', 'UndoRedoService',
//   function(
//       $rootScope, AlertsService,
//       EditableStoryBackendApiService, EditableTopicBackendApiService,
//       TopicObjectFactory,
//       TopicRightsBackendApiService, UndoRedoService) {
//     var _topic = TopicObjectFactory.createInterstitialTopic();
//     var _topicRights = TopicRights.createInterstitialRights();
//     // The array that caches all the subtopic pages loaded by the user.
//     var _cachedSubtopicPages = [];
//     // The array that stores all the ids of the subtopic pages that were not
//     // loaded from the backend i.e those that correspond to newly created
//     // subtopics (and not loaded from the backend).
//     var _newSubtopicPageIds = [];
//     var _subtopicPage =
//       SubtopicPage.createInterstitialSubtopicPage();
//     var _topicIsInitialized = false;
//     var _topicIsLoading = false;
//     var _topicIsBeingSaved = false;
//     var _topicWithNameExists = false;
//     var _topicWithUrlFragmentExists = false;
//     var _canonicalStorySummaries = [];
//     var _skillIdToRubricsObject = {};
//     var _skillQuestionCountDict = {};
//     var _groupedSkillSummaries = {
//       current: [],
//       others: []
//     };
//     var _skillCreationIsAllowed = false;
//     var _classroomUrlFragment = 'staging';
//     var _storySummariesInitializedEventEmitter = new EventEmitter();
//     var _subtopicPageLoadedEventEmitter = new EventEmitter();

//     var _topicInitializedEventEmitter = new EventEmitter();
//     var _topicReinitializedEventEmitter = new EventEmitter();

//     var _getSubtopicPageId = function(topicId, subtopicId) {
//       return topicId + '-' + subtopicId.toString();
//     };

//     var _updateGroupedSkillSummaries = function(groupedSkillSummaries) {
//       _groupedSkillSummaries.current = [];
//       _groupedSkillSummaries.others = [];

//       for (var idx in groupedSkillSummaries[_topic.getName()]) {
//         _groupedSkillSummaries.current.push(
//           groupedSkillSummaries[_topic.getName()][idx]);
//       }
//       for (var name in groupedSkillSummaries) {
//         if (name === _topic.getName()) {
//           continue;
//         }
//         var skillSummaries = groupedSkillSummaries[name];
//         for (var idx in skillSummaries) {
//           _groupedSkillSummaries.others.push(skillSummaries[idx]);
//         }
//       }
//     };
//     var _getSubtopicIdFromSubtopicPageId = function(subtopicPageId) {
//       // The subtopic page id consists of the topic id of length 12, a hyphen
//       // and a subtopic id (which is a number).
//       return parseInt(subtopicPageId.slice(13));
//     };
//     var _setTopic = function(topic) {
//       _topic.copyFromTopic(topic);
//       // Reset the subtopic pages list after setting new topic.
//       _cachedSubtopicPages.length = 0;
//       if (_topicIsInitialized) {
//         _topicIsInitialized = true;
//         _topicReinitializedEventEmitter.emit();
//       } else {
//         _topicIsInitialized = true;
//         _topicInitializedEventEmitter.emit();
//       }
//     };
//     var _getSubtopicPageIndex = function(subtopicPageId) {
//       for (var i = 0; i < _cachedSubtopicPages.length; i++) {
//         if (_cachedSubtopicPages[i].getId() === subtopicPageId) {
//           return i;
//         }
//       }
//       return null;
//     };
//     var _updateClassroomUrlFragment = function(classroomUrlFragment) {
//       _classroomUrlFragment = classroomUrlFragment;
//     };
//     var _updateTopic = function(newBackendTopicDict, skillIdToDescriptionDict) {
//       _setTopic(
//         TopicObjectFactory.create(
//           newBackendTopicDict, skillIdToDescriptionDict));
//     };
//     var _updateSkillIdToRubricsObject = function(skillIdToRubricsObject) {
//       for (var skillId in skillIdToRubricsObject) {
//         // Skips deleted skills.
//         if (!skillIdToRubricsObject[skillId]) {
//           continue;
//         }
//         var rubrics = skillIdToRubricsObject[skillId].map(function(rubric) {
//           return Rubric.createFromBackendDict(rubric);
//         });
//         _skillIdToRubricsObject[skillId] = rubrics;
//       }
//     };
//     var _setSubtopicPage = function(subtopicPage) {
//       _subtopicPage.copyFromSubtopicPage(subtopicPage);
//       _cachedSubtopicPages.push(angular.copy(subtopicPage));
//       _subtopicPageLoadedEventEmitter.emit();
//     };
//     var _updateSubtopicPage = function(newBackendSubtopicPageObject) {
//       _setSubtopicPage(SubtopicPage.createFromBackendDict(
//         newBackendSubtopicPageObject));
//     };
//     var _setTopicRights = function(topicRights) {
//       _topicRights.copyFromTopicRights(topicRights);
//     };
//     var _updateTopicRights = function(newBackendTopicRightsObject) {
//       _setTopicRights(TopicRights.createFromBackendDict(
//         newBackendTopicRightsObject));
//     };
//     var _setCanonicalStorySummaries = function(canonicalStorySummaries) {
//       _canonicalStorySummaries = canonicalStorySummaries.map(
//         function(storySummaryDict) {
//           return StorySummary.createFromBackendDict(
//             storySummaryDict);
//         });
//       _storySummariesInitializedEventEmitter.emit();
//     };

//     var _setTopicWithNameExists = function(topicWithNameExists) {
//       _topicWithNameExists = topicWithNameExists;
//     };

//     var _setTopicWithUrlFragmentExists = function(topicWithUrlFragmentExists) {
//       _topicWithUrlFragmentExists = topicWithUrlFragmentExists;
//     };

//     return {
//       /**
//        * Loads, or reloads, the topic stored by this service given a
//        * specified topic ID. See setTopic() for more information on
//        * additional behavior of this function.
//        */
//       loadTopic: function(topicId) {
//         _topicIsLoading = true;
//         let topicDataPromise = EditableTopicBackendApiService.fetchTopic(
//           topicId);
//         let storyDataPromise = EditableTopicBackendApiService.fetchStories(
//           topicId);
//         let topicRightsPromise = TopicRightsBackendApiService.fetchTopicRights(
//           topicId);
//         Promise.all([
//           topicDataPromise,
//           storyDataPromise,
//           topicRightsPromise
//         ]).then(([
//           newBackendTopicObject,
//           canonicalStorySummaries,
//           newBackendTopicRightsObject
//         ]) => {
//           _skillCreationIsAllowed = (
//             newBackendTopicObject.skillCreationIsAllowed);
//           _skillQuestionCountDict = (
//             newBackendTopicObject.skillQuestionCountDict);
//           _updateGroupedSkillSummaries(
//             newBackendTopicObject.groupedSkillSummaries);
//           _updateTopic(
//             newBackendTopicObject.topicDict,
//             newBackendTopicObject.skillIdToDescriptionDict
//           );
//           _updateGroupedSkillSummaries(
//             newBackendTopicObject.groupedSkillSummaries);
//           _updateSkillIdToRubricsObject(
//             newBackendTopicObject.skillIdToRubricsDict);
//           _updateClassroomUrlFragment(
//             newBackendTopicObject.classroomUrlFragment);
//           _updateTopicRights(newBackendTopicRightsObject);
//           _setCanonicalStorySummaries(canonicalStorySummaries);
//           _topicIsLoading = false;
//           $rootScope.$applyAsync();
//         }, (error) => {
//           AlertsService.addWarning(
//             error || 'There was an error when loading the topic editor.');
//           _topicIsLoading = false;
//         });
//       },

//       getGroupedSkillSummaries: function() {
//         return angular.copy(_groupedSkillSummaries);
//       },

//       getSkillQuestionCountDict: function() {
//         return _skillQuestionCountDict;
//       },

//       /**
//        * Returns whether the topic name already exists on the server.
//        */
//       getTopicWithNameExists: function() {
//         return _topicWithNameExists;
//       },

//       /**
//        * Returns whether the topic URL fragment already exists on the server.
//        */
//       getTopicWithUrlFragmentExists: function() {
//         return _topicWithUrlFragmentExists;
//       },

//       /**
//        * Loads, or reloads, the subtopic page stored by this service given a
//        * specified topic ID and subtopic ID.
//        */
//       loadSubtopicPage: function(topicId, subtopicId) {
//         var subtopicPageId = _getSubtopicPageId(topicId, subtopicId);
//         if (_getSubtopicPageIndex(subtopicPageId) !== null) {
//           _subtopicPage = angular.copy(
//             _cachedSubtopicPages[_getSubtopicPageIndex(subtopicPageId)]);
//           _subtopicPageLoadedEventEmitter.emit();
//           return;
//         }
//         EditableTopicBackendApiService.fetchSubtopicPage(
//           topicId, subtopicId).then(
//           function(newBackendSubtopicPageObject) {
//             _updateSubtopicPage(newBackendSubtopicPageObject);
//             $rootScope.$applyAsync();
//           },
//           function(error) {
//             AlertsService.addWarning(
//               error || 'There was an error when loading the topic.');
//           });
//       },

//       /**
//        * Returns whether this service is currently attempting to load the
//        * topic maintained by this service.
//        */
//       isLoadingTopic: function() {
//         return _topicIsLoading;
//       },

//       /**
//        * Returns whether a topic has yet been loaded using either
//        * loadTopic() or setTopic().
//        */
//       hasLoadedTopic: function() {
//         return _topicIsInitialized;
//       },

//       getSkillIdToRubricsObject: function() {
//         return _skillIdToRubricsObject;
//       },

//       /**
//        * Returns the current topic to be shared among the topic
//        * editor. Please note any changes to this topic will be propogated
//        * to all bindings to it. This topic object will be retained for the
//        * lifetime of the editor. This function never returns null, though it may
//        * return an empty topic object if the topic has not yet been
//        * loaded for this editor instance.
//        */
//       getTopic: function() {
//         return _topic;
//       },

//       /**
//        * Returns whether the user can create a skill via the topic editor.
//        */
//       isSkillCreationAllowed: function() {
//         return _skillCreationIsAllowed;
//       },

//       getCanonicalStorySummaries: function() {
//         return _canonicalStorySummaries;
//       },

//       /**
//        * Returns the current subtopic page to be shared among the topic
//        * editor. Please note any changes to this subtopic page will be
//        * propogated to all bindings to it. This subtopic page object will be
//        * retained for the lifetime of the editor. This function never returns
//        * null, though it may return an empty subtopic page object if the topic
//        * has not yet been loaded for this editor instance.
//        */
//       getSubtopicPage: function() {
//         return _subtopicPage;
//       },

//       getCachedSubtopicPages: function() {
//         return _cachedSubtopicPages;
//       },

//       /**
//        * Returns the current topic rights to be shared among the topic
//        * editor. Please note any changes to this topic rights will be
//        * propogated to all bindings to it. This topic rights object will
//        * be retained for the lifetime of the editor. This function never returns
//        * null, though it may return an empty topic rights object if the
//        * topic rights has not yet been loaded for this editor instance.
//        */
//       getTopicRights: function() {
//         return _topicRights;
//       },


//       /**
//        * Sets the topic stored within this service, propogating changes to
//        * all bindings to the topic returned by getTopic(). The first
//        * time this is called it will fire a global event based on
//        * onTopicInitialized. All subsequent
//        * calls will similarly fire a onTopicReinitialized event.
//        */
//       setTopic: function(topic) {
//         _setTopic(topic);
//       },

//       /**
//        * Sets the updated subtopic page object in the correct position in the
//        * _cachedSubtopicPages list.
//        */
//       setSubtopicPage: function(subtopicPage) {
//         if (_getSubtopicPageIndex(subtopicPage.getId()) !== null) {
//           _cachedSubtopicPages[_getSubtopicPageIndex(subtopicPage.getId())] =
//             angular.copy(subtopicPage);
//           _subtopicPage.copyFromSubtopicPage(subtopicPage);
//         } else {
//           _setSubtopicPage(subtopicPage);
//           _newSubtopicPageIds.push(subtopicPage.getId());
//         }
//       },

//       deleteSubtopicPage: function(topicId, subtopicId) {
//         var subtopicPageId = _getSubtopicPageId(topicId, subtopicId);
//         var index = _getSubtopicPageIndex(subtopicPageId);
//         var newIndex = _newSubtopicPageIds.indexOf(subtopicPageId);
//         // If index is null, that means the corresponding subtopic page was
//         // never loaded from the backend and not that the subtopic page doesn't
//         // exist at all. So, not required to throw an error here.
//         // Also, since newSubtopicPageIds will only have the ids of a subset of
//         // the pages in the _subtopicPages array, the former need not be edited
//         // either, in this case.
//         if (index === null) {
//           if (newIndex === -1) {
//             return;
//           }
//         }
//         _cachedSubtopicPages.splice(index, 1);
//         // If the deleted subtopic page corresponded to a newly created
//         // subtopic, then the 'subtopicId' part of the id of all subsequent
//         // subtopic pages should be decremented to make it in sync with the
//         // their corresponding subtopic ids.
//         if (newIndex !== -1) {
//           _newSubtopicPageIds.splice(newIndex, 1);
//           for (var i = 0; i < _cachedSubtopicPages.length; i++) {
//             var newSubtopicId = _getSubtopicIdFromSubtopicPageId(
//               _cachedSubtopicPages[i].getId());
//             if (newSubtopicId > subtopicId) {
//               newSubtopicId--;
//               _cachedSubtopicPages[i].setId(
//                 _getSubtopicPageId(topicId, newSubtopicId));
//             }
//           }
//           for (var i = 0; i < _newSubtopicPageIds.length; i++) {
//             var newSubtopicId = _getSubtopicIdFromSubtopicPageId(
//               _newSubtopicPageIds[i]);
//             if (newSubtopicId > subtopicId) {
//               newSubtopicId--;
//               _newSubtopicPageIds[i] = _getSubtopicPageId(
//                 topicId, newSubtopicId);
//             }
//           }
//         }
//       },

//       /**
//        * Sets the topic rights stored within this service, propogating
//        * changes to all bindings to the topic returned by
//        * getTopicRights().
//        */
//       setTopicRights: function(topicRights) {
//         _setTopicRights(topicRights);
//       },


//       /**
//        * Attempts to save the current topic given a commit message. This
//        * function cannot be called until after a topic has been initialized
//        * in this service. Returns false if a save is not performed due to no
//        * changes pending, or true if otherwise. This function, upon success,
//        * will clear the UndoRedoService of pending changes. This function also
//        * shares behavior with setTopic(), when it succeeds.
//        */
//       saveTopic: function(commitMessage, successCallback) {
//         if (!_topicIsInitialized) {
//           AlertsService.fatalWarning(
//             'Cannot save a topic before one is loaded.');
//         }

//         // Don't attempt to save the topic if there are no changes pending.
//         if (!UndoRedoService.hasChanges()) {
//           return false;
//         }
//         _topicIsBeingSaved = true;
//         EditableTopicBackendApiService.updateTopic(
//           _topic.getId(), _topic.getVersion(),
//           commitMessage, UndoRedoService.getCommittableChangeList()).then(
//           function(topicBackendObject) {
//             _updateTopic(
//               topicBackendObject.topicDict,
//               topicBackendObject.skillIdToDescriptionDict
//             );
//             _updateSkillIdToRubricsObject(
//               topicBackendObject.skillIdToRubricsDict);
//             var changeList = UndoRedoService.getCommittableChangeList();
//             for (var i = 0; i < changeList.length; i++) {
//               if (changeList[i].cmd === 'delete_canonical_story' ||
//                   changeList[i].cmd === 'delete_additional_story') {
//                 EditableStoryBackendApiService.deleteStory(
//                   changeList[i].story_id);
//               }
//             }
//             UndoRedoService.clearChanges();
//             _topicIsBeingSaved = false;
//             if (successCallback) {
//               successCallback();
//             }
//             $rootScope.$applyAsync();
//           }, function(error) {
//             AlertsService.addWarning(
//               error || 'There was an error when saving the topic.');
//             _topicIsBeingSaved = false;
//           });
//         return true;
//       },

//       /**
//        * Returns whether this service is currently attempting to save the
//        * topic maintained by this service.
//        */
//       isSavingTopic: function() {
//         return _topicIsBeingSaved;
//       },

//       get onTopicInitialized() {
//         return _topicInitializedEventEmitter;
//       },

//       get onTopicReinitialized() {
//         return _topicReinitializedEventEmitter;
//       },
//       /**
//        * Returns the classroom name for the topic.
//        */
//       getClassroomUrlFragment: function() {
//         return _classroomUrlFragment;
//       },

//       /**
//        * Attempts to set the boolean variable _topicWithNameExists based
//        * on the value returned by doesTopicWithNameExistAsync and
//        * executes the success callback provided. No arguments are passed to the
//        * success callback. Execution of the success callback indicates that the
//        * async backend call was successful and that _topicWithNameExists
//        * has been successfully updated.
//        */
//       updateExistenceOfTopicName: function(topicName, successCallback) {
//         EditableTopicBackendApiService.doesTopicWithNameExistAsync(
//           topicName).then(
//           function(topicNameExists) {
//             _setTopicWithNameExists(topicNameExists);
//             if (successCallback) {
//               successCallback();
//             }
//             $rootScope.$applyAsync();
//           }, function(error) {
//             AlertsService.addWarning(
//               error ||
//               'There was an error when checking if the topic name ' +
//               'exists for another topic.');
//           });
//       },

//       /**
//        * Attempts to set the boolean variable _topicWithUrlFragmentExists based
//        * on the value returned by doesTopicWithUrlFragmentExistAsync and
//        * executes the success callback provided. No arguments are passed to the
//        * success callback. Execution of the success callback indicates that the
//        * async backend call was successful and that _topicWithUrlFragmentExists
//        * has been successfully updated.
//        */
//       updateExistenceOfTopicUrlFragment: function(
//           topicUrlFragment, successCallback) {
//         EditableTopicBackendApiService.doesTopicWithUrlFragmentExistAsync(
//           topicUrlFragment).then(
//           function(topicUrlFragmentExists) {
//             _setTopicWithUrlFragmentExists(topicUrlFragmentExists);
//             if (successCallback) {
//               successCallback();
//             }
//             $rootScope.$applyAsync();
//           }, function(error) {
//             AlertsService.addWarning(
//               error ||
//               'There was an error when checking if the topic url fragment ' +
//               'exists for another topic.');
//           });
//       },

//       get onStorySummariesInitialized() {
//         return _storySummariesInitializedEventEmitter;
//       },

//       get onSubtopicPageLoaded() {
//         return _subtopicPageLoadedEventEmitter;
//       }
//     };
//   }
// ]);
