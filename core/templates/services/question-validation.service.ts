// Copyright 2020 The Oppia Authors. All Rights Reserved.
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
import { StateEditorService } from 'components/state-editor/state-editor-properties-services/state-editor.service';
import { Question } from 'domain/question/QuestionObjectFactory';
import { Misconception } from 'domain/skill/MisconceptionObjectFactory';

/**
 * @fileoverview Service to validate a question.
 *
 */

@Injectable({
  providedIn: 'root'
})
export class QuestionValidationService {
  constructor(
    private stateEditorService: StateEditorService
  ) { }

  isQuestionValid = (
      question: Question,
      misconceptionsBySkill: Misconception[]): boolean => {
    return !(
      question.getValidationErrorMessage() ||
      question.getUnaddressedMisconceptionNames(
        misconceptionsBySkill
      ).length > 0 ||
      !this.stateEditorService.isCurrentSolutionValid());
  };
}

angular.module('oppia').factory(
  'QuestionValidationService', downgradeInjectable(QuestionValidationService));


// require(
//   'components/state-editor/state-editor-properties-services/' +
//   'state-editor.service.ts');

// angular.module('oppia').factory('QuestionValidationService', [
//   'StateEditorService',
//   function(StateEditorService) {
//     return {
//       isQuestionValid: function(question, misconceptionsBySkill) {
//     console.log('\n\n\n\n\n\n\n\n\n\n');
//     console.log(StateEditorService);
//     console.log(StateEditorService.isCurrentSolutionValid());
//     console.log('\n\n\n\n\n\n\n\n');
//         return !(
//           question.getValidationErrorMessage() ||
//           question.getUnaddressedMisconceptionNames(
//             misconceptionsBySkill).length > 0 ||
//           !StateEditorService.isCurrentSolutionValid());
//       }
//     };
//   }
// ]);
