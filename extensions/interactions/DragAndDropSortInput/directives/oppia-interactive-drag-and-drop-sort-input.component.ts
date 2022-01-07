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

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { InteractionAttributesExtractorService } from 'interactions/interaction-attributes-extractor.service';
import { CurrentInteractionService } from 'pages/exploration-player-page/services/current-interaction.service';
import { DragAndDropSortInputRulesService } from './drag-and-drop-sort-input-rules.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/**
 * @fileoverview Component for the DragAndDropSortInput interaction.
 */

@Component({
  selector: 'oppia-interactive-drag-and-drop-sort-input',
  templateUrl: 'interactive-drag-and-drop-sort-input.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InteractiveDragAndDropSortInputComponent {
  @Input() savedSolution;
  @Input() allowMultipleItemsInSamePositionWithValue;
  @Input() choicesWithValue;
  @Input() labelForFocusTarget;
  @Input() lastAnswer;

  choices;
  answers;
  list = [];
  dataMaxDepth = 1;

  constructor(
    private currentInteractionService: CurrentInteractionService,
    private dragAndDropSortInputRulesService: DragAndDropSortInputRulesService,
    private interactionAttributesExtractorService:
    InteractionAttributesExtractorService
  ) {}

  private _getHtmlOfContentId(contentId: string): string {
    const {
      choices
    } = this.interactionAttributesExtractorService.getValuesFromAttributes(
      'DragAndDropSortInput',
      {
        allowMultipleItemsInSamePositionWithValue:
        this.allowMultipleItemsInSamePositionWithValue,
        choicesWithValue: this.choicesWithValue
      }
    );
    for (let choice of choices.value) {
      if (choice.contentId === contentId) {
        return choice.html;
      }
    }
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    const {
      choices,
      allowMultipleItemsInSamePosition
    } = this.interactionAttributesExtractorService.getValuesFromAttributes(
      'DragAndDropSortInput',
      {
        allowMultipleItemsInSamePositionWithValue:
        this.allowMultipleItemsInSamePositionWithValue,
        choicesWithValue: this.choicesWithValue
      }
    );

    this.choices = choices.value.map(choice => choice.html);
    this.allowMultipleItemsInSamePositionWithValue = (
      allowMultipleItemsInSamePosition.value);

    if (this.allowMultipleItemsInSamePositionWithValue) {
      this.dataMaxDepth = 2;
    } else {
      this.dataMaxDepth = 1;
    }

    let savedSolution = (
    this.savedSolution !== undefined ? this.savedSolution : []);

    if (savedSolution.length) {
      // Pre populate with the saved solution, if present.
      for (let contentIds of savedSolution) {
        let item = {
          title: this._getHtmlOfContentId(contentIds[0]),
          items: []
        };
        for (let i = 1; i < contentIds.length; i++) {
          item.items.push({
            title: this._getHtmlOfContentId(contentIds[i]),
            items: []
          });
        }
        this.list.push(item);
      }
    } else {
      // Make list of dicts from the list of choices.
      for (let choice of this.choices) {
        this.list.push({title: choice, items: []});
      }
    }
    this.currentInteractionService.registerCurrentInteraction(
      this.submitAnswer.bind(this), null);
  }

  private _getContentIdOfHtml(html: string): string {
    const {
      choices
    } = this.interactionAttributesExtractorService.getValuesFromAttributes(
      'DragAndDropSortInput',
      {
        allowMultipleItemsInSamePositionWithValue:
        this.allowMultipleItemsInSamePositionWithValue,
        choicesWithValue: this.choicesWithValue
      }
    );

    return choices.value[this.choices.indexOf(html)].contentId;
  }

  submitAnswer(): void {
    // Converting list of dicts to list of lists to make it consistent
    // with the ListOfSetsOfTranslatableHtmlContentIds object.
    this.answers = [];
    for (let i = 0; i < this.list.length; i++) {
      this.answers.push([this._getContentIdOfHtml(this.list[i].title)]);
      for (var j = 0; j < this.list[i].items.length; j++) {
        this.answers[i].push(
          this._getContentIdOfHtml(this.list[i].items[j].title));
      }
    }

    this.currentInteractionService.onSubmit(
      this.answers, this.dragAndDropSortInputRulesService);
  }
}

angular.module('oppia').directive('oppiaInteractiveDragAndDropSortInput',
  downgradeComponent({
    component: InteractiveDragAndDropSortInputComponent
  }));

// require(
//   'interactions/interaction-attributes-extractor.service.ts');
// require(
//   'interactions/DragAndDropSortInput/directives/' +
//   'drag-and-drop-sort-input-rules.service.ts');
// require(
//   'pages/exploration-player-page/services/current-interaction.service.ts');

// angular.module('oppia').component('oppiaInteractiveDragAndDropSortInput', {
//   bindings: {
//     savedSolution: '<'
//   },
//   template: require('./drag-and-drop-sort-input-interaction.component.html'),
//   controllerAs: '$ctrl',
//   controller: [
//     '$attrs', 'CurrentInteractionService',
//     'DragAndDropSortInputRulesService',
//     'InteractionAttributesExtractorService',
//     function(
//         $attrs, CurrentInteractionService,
//         DragAndDropSortInputRulesService,
//         InteractionAttributesExtractorService) {
//       var ctrl = this;
//       var answers = [];

//       const getContentIdOfHtml = function(html) {
//         const {
//           choices
//         } = InteractionAttributesExtractorService.getValuesFromAttributes(
//           'DragAndDropSortInput',
//           $attrs
//         );

//         return choices[ctrl.choices.indexOf(html)].contentId;
//       };

//       const getHtmlOfContentId = function(contentId) {
//         const {
//           choices
//         } = InteractionAttributesExtractorService.getValuesFromAttributes(
//           'DragAndDropSortInput',
//           $attrs
//         );
//         for (let choice of choices) {
//           if (choice.contentId === contentId) {
//             return choice.html;
//           }
//         }
//       };

//       ctrl.submitAnswer = function() {
//         // Converting list of dicts to list of lists to make it consistent
//         // with the ListOfSetsOfTranslatableHtmlContentIds object.
//         answers = [];
//         for (var i = 0; i < ctrl.list.length; i++) {
//           answers.push([getContentIdOfHtml(ctrl.list[i].title)]);
//           for (var j = 0; j < ctrl.list[i].items.length; j++) {
//             answers[i].push(
//               getContentIdOfHtml(ctrl.list[i].items[j].title));
//           }
//         }

//         console.log(answers)

//         CurrentInteractionService.onSubmit(
//           answers, DragAndDropSortInputRulesService);
//       };
//       ctrl.$onInit = function() {
//         const {
//           choices,
//           allowMultipleItemsInSamePosition
//         } = InteractionAttributesExtractorService.getValuesFromAttributes(
//           'DragAndDropSortInput',
//           $attrs
//         );
//         ctrl.choices = choices.map(choice => choice.html);
//         console.log(ctrl.choices);

//         ctrl.list = [];
//         ctrl.dataMaxDepth = 1;

//         ctrl.allowMultipleItemsInSamePosition = (
//           allowMultipleItemsInSamePosition);

//         if (ctrl.allowMultipleItemsInSamePosition) {
//           ctrl.dataMaxDepth = 2;
//         } else {
//           ctrl.dataMaxDepth = 1;
//         }

//         let savedSolution = (
//           ctrl.savedSolution !== undefined ? ctrl.savedSolution : []
//         );

//         if (savedSolution.length) {
//           // Pre populate with the saved solution, if present.
//           for (let contentIds of savedSolution) {
//             let item = {
//               title: getHtmlOfContentId(contentIds[0]),
//               items: []
//             };
//             for (let i = 1; i < contentIds.length; i++) {
//               item.items.push({
//                 title: getHtmlOfContentId(contentIds[i]),
//                 items: []
//               });
//             }
//             ctrl.list.push(item);
//           }
//         } else {
//           // Make list of dicts from the list of choices.
//           for (let choice of ctrl.choices) {
//             ctrl.list.push({title: choice, items: []});
//           }
//         }

//         ctrl.treeOptions = {
//           dragMove: function(e) {
//             // Change the color of the placeholder based on the position of
//             // the dragged item.
//             if (e.dest.nodesScope.$childNodesScope !== undefined) {
//               e.elements.placeholder[0].style.borderColor = '#add8e6';
//             } else {
//               e.elements.placeholder[0].style.borderColor = '#000000';
//             }
//           }
//         };

//         console.log(ctrl.list);

//         CurrentInteractionService.registerCurrentInteraction(
//           ctrl.submitAnswer, null);
//       };
//     }]
// });
