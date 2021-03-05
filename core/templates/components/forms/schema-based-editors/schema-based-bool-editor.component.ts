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
 * @fileoverview Component for a schema-based editor for booleans.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'schema-based-bool-editor',
  templateUrl: './schema-based-bool-editor.component.html'
})
export class SchemaBasedBoolEditorComponent {
  @Input() localValue: boolean;
  @Output() setLocalValue: EventEmitter<boolean> = (
    new EventEmitter()
  );
  @Input() isDisabled: boolean;
  @Input() labelForFocusTarget;

  handleChange(): void {
    this.setLocalValue.emit(this.localValue);
  }
}

angular.module('oppia').directive('schemaBasedBoolEditor',
  downgradeComponent({ component: SchemaBasedBoolEditorComponent }));

// angular.module('oppia').directive('schemaBasedBoolEditor', [
//   function() {
//     return {
//       restrict: 'E',
//       scope: {},
//       bindToController: {
//         localValue: '=',
//         isDisabled: '&',
//         labelForFocusTarget: '&'
//       },
//       template: require('./schema-based-bool-editor.directive.html'),
//       controllerAs: '$ctrl',
//       controller: [function() {}]
//     };
//   }]);
