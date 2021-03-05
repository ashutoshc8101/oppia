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
 * @fileoverview Component for a schema-based editor for multiple choice.
 */

import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'schema-based-choices-editor',
  templateUrl: './schema-based-choices-editor.component.html'
})
export class SchemaBasedChoicesEditorComponent {
  @Input() localValue;
  @Input() choices;
  @Input() schema;
  @Input() isDisabled?;

  getReadonlySchema(): object {
    let readOnlySchema = {...this.schema};
    delete readOnlySchema.choices;
    return readOnlySchema;
  }
}

angular.module('oppia').directive('schemaBasedChoicesEditor',
  downgradeComponent({ component: SchemaBasedChoicesEditorComponent }));

// Require('services/nested-directives-recursion-timeout-prevention.service.ts');

// angular.module('oppia').directive('schemaBasedChoicesEditor', [
//   'NestedDirectivesRecursionTimeoutPreventionService',
//   function(NestedDirectivesRecursionTimeoutPreventionService) {
//     return {
//       restrict: 'E',
//       scope: {},
//       bindToController: {
//         localValue: '=',
//         // The choices for the object's value.
//         choices: '&',
//         // The schema for this object.
//         // TODO(sll): Validate each choice against the schema.
//         schema: '&',
//         isDisabled: '&'
//       },
//       template: require('./schema-based-choices-editor.directive.html'),
//       controllerAs: '$ctrl',
//       compile: NestedDirectivesRecursionTimeoutPreventionService.compile,
//       controller: [function() {
//         var ctrl = this;
//         ctrl.getReadonlySchema = function() {
//           var readonlySchema = angular.copy(ctrl.schema());
//           delete readonlySchema.choices;
//           return readonlySchema;
//         };
//       }]
//     };
//   }
// ]);
