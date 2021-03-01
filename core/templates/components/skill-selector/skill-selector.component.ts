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
 * @fileoverview Component for the select skill viewer.
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { CategorizedSkills, SkillSummary, SubTopic } from 'domain/skill/skill-summary.model';

interface TopicFilterDict {
  topicName: string,
  checked: boolean
}

interface SubTopicNameDict {
  subTopicName: string,
  checked: boolean
}

interface SubTopicFilterDict {
  [key : string]: SubTopicNameDict[]
}

@Component({
  selector: 'oppia-select-skill',
  templateUrl: './skill-selector.component.html'
})
export class SkillSelectorComponent implements OnInit {
  @Input() sortedSkillSummaries: SkillSummary[];
  @Input() selectedSkillId: string;
  @Output() setSelectedSkillId: EventEmitter<string> = (
    new EventEmitter()
  );
  @Input() countOfSkillsToPrioritize: number;
  @Input() categorizedSkills: CategorizedSkills;
  @Input() untriagedSkillSummaries: SkillSummary[];
  @Input() allowSkillsFromOtherTopics: boolean;
  activeCategorizedSkills: CategorizedSkills;
  selectedSkill: string = null;
  topicFilterList: TopicFilterDict[] = [];
  subTopicFilterDict: SubTopicFilterDict = {};
  intialSubTopicFilterDict: SubTopicFilterDict;

  ngOnInit(): void {
    this.activeCategorizedSkills = {...this.categorizedSkills};
    for (let topicName in this.activeCategorizedSkills) {
      let topicNameDict: TopicFilterDict = {
        topicName,
        checked: false
      };
      this.topicFilterList.push(topicNameDict);
      let subTopics: SubTopic = this.activeCategorizedSkills[topicName];
      this.subTopicFilterDict[topicName] = [];
      for (let subTopic in subTopics) {
        let subTopicNameDict: SubTopicNameDict = {
          subTopicName: subTopic,
          checked: false
        };
        this.subTopicFilterDict[topicName].push(subTopicNameDict);
      }
    }
    this.intialSubTopicFilterDict = {...this.subTopicFilterDict};
  }

  checkIfEmpty(skills: SkillSummary[]): boolean {
    return (skills.length === 0);
  }

  checkIfTopicIsEmpty(topicName: string): boolean {
    for (let key in this.activeCategorizedSkills[topicName]) {
      if (
        Object.keys(
          this.activeCategorizedSkills[topicName][key]).length
      ) {
        return true;
      }
    }
    return false;
  }

  updateSelectedSkillId(): void {
    this.selectedSkillId = this.selectedSkill;
    this.setSelectedSkillId.emit(this.selectedSkill);
  }
  // The folowing function is called when the subtopic filter changes.
  // This updates the list of Skills displayed in the selector.
  updateSkillsListOnSubtopicFilterChange(): void {
    let updatedSkillsDict: CategorizedSkills = {};
    let isAnySubTopicChecked: boolean = false;
    for (let topicName in this.subTopicFilterDict) {
      let subTopics: SubTopicNameDict[] = this.subTopicFilterDict[topicName];
      for (let i = 0; i < subTopics.length; i++) {
        if (subTopics[i].checked) {
          if (!updatedSkillsDict.hasOwnProperty(topicName)) {
            updatedSkillsDict[topicName] = {};
          }
          let categorizedSkills: CategorizedSkills = this.categorizedSkills;
          let subTopicName: string = subTopics[i].subTopicName;
          updatedSkillsDict[topicName][subTopicName] = (
            categorizedSkills[topicName][subTopicName]
          );
          isAnySubTopicChecked = true;
        }
      }
    }
    if (!isAnySubTopicChecked) {
      // If no subtopics are checked in the subtop filter, we have
      // to display all the skills from checked topics.
      let isAnyTopicChecked: boolean = false;
      for (let i = 0; i < this.topicFilterList.length; i++) {
        if (this.topicFilterList[i].checked) {
          let categorizedSkills: CategorizedSkills =
          {...this.categorizedSkills};
          let topicName: string = this.topicFilterList[i].topicName;
          updatedSkillsDict[topicName] = (
            categorizedSkills[topicName]);
          isAnyTopicChecked = true;
        }
      }
      if (isAnyTopicChecked) {
        this.activeCategorizedSkills = {...updatedSkillsDict};
      } else {
        // If no filter is applied on both subtopics and topics, we
        // need to display all the skills (the original list).
        // this.categorizedSkills = this.categorizedSkills;
        this.activeCategorizedSkills =
        {...this.categorizedSkills};
      }
    } else {
      this.activeCategorizedSkills = {...updatedSkillsDict};
    }
  }

  // The folowing function is called when the topic filter changes.
  // First, the subtopic filter is updated according to the changed
  // topic filter list. Then the main Skills list is updated.
  updateSkillsListOnTopicFilterChange(): void {
    let updatedSubTopicFilterList: SubTopicFilterDict = {};
    let isAnyTopicChecked: boolean = false;
    for (let i = 0; i < this.topicFilterList.length; i++) {
      if (this.topicFilterList[i].checked) {
        let topicName: string = this.topicFilterList[i].topicName;
        updatedSubTopicFilterList[topicName] =
        this.intialSubTopicFilterDict[topicName];
        isAnyTopicChecked = true;
      }
    }
    if (!isAnyTopicChecked) {
      // If there are no topics checked on topic filter, we have to
      // display subtopics from all the topics in the subtopic filter.
      for (let topic in this.intialSubTopicFilterDict) {
        if (!this.subTopicFilterDict.hasOwnProperty(topic)) {
          this.subTopicFilterDict[topic] =
          this.intialSubTopicFilterDict[topic];
        }
      }
    } else {
      this.subTopicFilterDict = updatedSubTopicFilterList;
    }
    // After we update the subtopic filter list, we need to update
    // the main skills list.
    this.updateSkillsListOnSubtopicFilterChange();
  }

  clearAllFilters(): void {
    for (let i = 0; i < this.topicFilterList.length; i++) {
      this.topicFilterList[i].checked = false;
    }
    for (let topicName in this.subTopicFilterDict) {
      let length: number = this.subTopicFilterDict[topicName].length;
      for (let j = 0; j < length; j++) {
        this.subTopicFilterDict[topicName][j].checked = false;
      }
    }
    this.updateSkillsListOnTopicFilterChange();
  }
}

angular.module('oppia').directive('oppiaSelectSkill',
  downgradeComponent({ component: SkillSelectorComponent }));
