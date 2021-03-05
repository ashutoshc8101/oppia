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
 * @fileoverview Component for a schema-based editor for floats.
 */

import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { NumericInputValidationService } from 'interactions/NumericInput/directives/numeric-input-validation.service';
import { SchemaFormSubmittedService } from 'services/schema-form-submitted.service';
import { FocusManagerService } from 'services/stateful/focus-manager.service';

@Component({
  selector: 'schema-based-float-editor',
  templateUrl: './schema-based-float-editor.component.html'
})

export class SchemaBasedFloatEditorComponent {
  @Input() localValue;
  @Input() isDisabled;
  @Input() validators;
  @Input() labelForFocusTarget;
  @Input() onInputBlur;
  @Input() onInputFocus;
  hasFocusedAtLeastOnce: boolean;
  isUserCurrentlyTyping: boolean;
  errorString: string;
  hasLoaded: boolean;
  labelForErrorFocusTarget: string;

  constructor(
    private focusManagerService: FocusManagerService,
    private numericInputValidationService: NumericInputValidationService,
    private schemaFormSubmittedService : SchemaFormSubmittedService
  ) { }

  validate(localValue): boolean {
    return (
      localValue === undefined &&
      localValue !== null &&
      localValue !== '' &&
      this.numericInputValidationService
        .getErrorString(localValue) === undefined
    );
  }

  onFocus(): void {
    this.hasFocusedAtLeastOnce = true;
    if (this.onInputFocus) {
      this.onInputFocus();
    }
  }

  onBlur(): void {
    this.isUserCurrentlyTyping = false;
    if (this.onInputBlur) {
      this.onInputBlur();
    }
  }

  getMinValue(): unknown {
    for (let i = 0; i < this.validators.length; i++) {
      if (this.validators[i].id === 'is_at_least') {
        return this.validators[i].min_value;
      }
    }
  }

  getMaxValue(): unknown {
    for (let i = 0; i < this.validators.length; i++) {
      if (this.validators[i].id === 'is_at_most') {
        return this.validators[i].max_value;
      }
    }
  }

  generateErrors(): void {
    this.errorString = this.numericInputValidationService
      .getErrorString(this.localValue);
  }

  onKeypress(evt): void {
    if (evt.keyCode === 13) {
      
    }
  }

  ngOnInit(): void {
    this.hasLoaded = false;
    this.isUserCurrentlyTyping = false;
    this.errorString = '';
    this.labelForErrorFocusTarget =
    this.focusManagerService.generateFocusLabel();
    if (this.localValue === undefined) {
      this.localValue = 0.0;
    }
    // This prevents the red 'invalid input' warning message from
    // flashing at the outset.
    setTimeout(() => {
      this.hasLoaded = true;
    });
  }
}

angular.module('oppia').directive('schemaBasedFloatEditor',
  downgradeComponent({ component: SchemaBasedFloatEditorComponent }));

// Require(
//   'components/forms/custom-forms-directives/apply-validation.directive.ts');
// require(
//   'components/forms/custom-forms-directives/require-is-float.directive.ts');
// require('components/forms/validators/is-float.filter.ts');
// require(
//   'interactions/NumericInput/directives/numeric-input-validation.service.ts');
// require('services/schema-form-submitted.service.ts');
// require('services/stateful/focus-manager.service.ts');

// angular.module('oppia').directive('schemaBasedFloatEditor', [
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
//       template: require('./schema-based-float-editor.directive.html'),
//       controllerAs: '$ctrl',
//       controller: [
//         '$timeout', 'FocusManagerService', 'NumericInputValidationService',
//         'SchemaFormSubmittedService',
//         function(
//             $timeout, FocusManagerService, NumericInputValidationService,
//             SchemaFormSubmittedService) {
//           var ctrl = this;
//           ctrl.validate = function(localValue) {
//             return (
//               !angular.isUndefined(localValue) &&
//               localValue !== null &&
//               localValue !== '' &&
//               angular.isUndefined(
//                 NumericInputValidationService.getErrorString(localValue)));
//           };

//           ctrl.onFocus = function() {
//             ctrl.hasFocusedAtLeastOnce = true;
//             if (ctrl.onInputFocus) {
//               ctrl.onInputFocus();
//             }
//           };

//           ctrl.onBlur = function() {
//             ctrl.isUserCurrentlyTyping = false;
//             if (ctrl.onInputBlur) {
//               ctrl.onInputBlur();
//             }
//           };

//           // TODO(sll): Move these to ng-messages when we move to Angular 1.3.
//           ctrl.getMinValue = function() {
//             for (var i = 0; i < ctrl.validators().length; i++) {
//               if (ctrl.validators()[i].id === 'is_at_least') {
//                 return ctrl.validators()[i].min_value;
//               }
//             }
//           };

//           ctrl.getMaxValue = function() {
//             for (var i = 0; i < ctrl.validators().length; i++) {
//               if (ctrl.validators()[i].id === 'is_at_most') {
//                 return ctrl.validators()[i].max_value;
//               }
//             }
//           };

//           ctrl.generateErrors = function() {
//             ctrl.errorString = (
//               NumericInputValidationService.getErrorString(ctrl.localValue));
//           };

//           ctrl.onKeypress = function(evt) {
//             if (evt.keyCode === 13) {
//               if (
//                 Object.keys(ctrl.floatForm.floatValue.$error).length !== 0) {
//                 ctrl.isUserCurrentlyTyping = false;
//                 FocusManagerService.setFocus(ctrl.labelForErrorFocusTarget);
//               } else {
//                 SchemaFormSubmittedService.onSubmittedSchemaBasedForm.emit();
//               }
//             } else {
//               ctrl.isUserCurrentlyTyping = true;
//             }
//           };
//           ctrl.$onInit = function() {
//             ctrl.hasLoaded = false;
//             ctrl.isUserCurrentlyTyping = false;
//             ctrl.hasFocusedAtLeastOnce = false;
//             ctrl.errorString = '';
//             ctrl.labelForErrorFocusTarget =
//               FocusManagerService.generateFocusLabel();
//             if (ctrl.localValue === undefined) {
//               ctrl.localValue = 0.0;
//             }
//             // This prevents the red 'invalid input' warning message from
//             // flashing at the outset.
//             $timeout(function() {
//               ctrl.hasLoaded = true;
//             });
//           };
//         }
//       ]
//     };
//   }]);
