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
 * @fileoverview Component for a schema-based editor for integers.
 */

import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { SchemaFormSubmittedService } from 'services/schema-form-submitted.service';

@Component({
  selector: 'schema-based-int-editor',
  templateUrl: './schema-based-int-editor.component.html'
})
export class SchemaBasedIntEditor {
  @Input() localValue;
  @Input() isDisabled?;
  @Input() validators?;
  @Input() labelForFocusTarget?;
  @Input() onInputBlur?;
  @Input() onInputFocus?;

  constructor(
    private schemaFormSubmittedService : SchemaFormSubmittedService
  ) { }

  onKeypress(evt): void {
    if (evt.keyCode === 13) {
      this.schemaFormSubmittedService.onSubmittedSchemaBasedForm.emit();
    }
  }

  ngOnInit(): void {
    if (this.localValue === undefined) {
      this.localValue = 0;
    }
  }
}

angular.module('oppia').directive('schemaBasedIntEditor',
  downgradeComponent({ component: SchemaBasedIntEditor }));


// require(
//   'components/forms/custom-forms-directives/apply-validation.directive.ts');
// require('services/schema-form-submitted.service.ts');

// angular.module('oppia').directive('schemaBasedIntEditor', [
//   function() {
//     return {
//       restrict: 'E',
//       scope: {},
//       bindToController: {
//         localValue: '=',
//         isDisabled: '&',
//         validators: '&',
//         labelForFocusTarget: '&',
//         onInputBlur: '=',
//         onInputFocus: '='
//       },
//       template: require('./schema-based-int-editor.directive.html'),
//       controllerAs: '$ctrl',
//       controller: [
//         'SchemaFormSubmittedService',
//         function(SchemaFormSubmittedService) {
//           var ctrl = this;
//           ctrl.onKeypress = function(evt) {
//             if (evt.keyCode === 13) {
//               SchemaFormSubmittedService.onSubmittedSchemaBasedForm.emit();
//             }
//           };
//           ctrl.$onInit = function() {
//             if (ctrl.localValue === undefined) {
//               ctrl.localValue = 0;
//             }
//           };
//         }
//       ]
//     };
//   }]);
