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
 * @fileoverview Component for a schema-based editor for custom values.
 */

import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
@Component({
  selector: 'schema-based-custom-editor',
  templateUrl: './schema-based-custom-editor.component.html',
})
export class SchemaBasedCustomEditorComponent {
  @Input() localValue;
  @Input() schema;
}

angular.module('oppia').directive('schemaBasedCustomEditor',
  downgradeComponent({ component: SchemaBasedCustomEditorComponent }));

// Require('components/forms/custom-forms-directives/object-editor.directive.ts');

// require('services/nested-directives-recursion-timeout-prevention.service.ts');

// angular.module('oppia').directive('schemaBasedCustomEditor', [
//   'NestedDirectivesRecursionTimeoutPreventionService',
//   function(NestedDirectivesRecursionTimeoutPreventionService) {
//     return {
//       restrict: 'E',
//       scope: {},
//       bindToController: {
//         localValue: '=',
//         schema: '='
//       },
//       template: require('./schema-based-custom-editor.directive.html'),
//       controllerAs: '$ctrl',
//       compile: NestedDirectivesRecursionTimeoutPreventionService.compile,
//       controller: [function() {}]
//     };
//   }
// ]);
