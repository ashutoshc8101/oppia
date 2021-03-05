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
 * @fileoverview Component for general schema-based editors.
 */

import { Component, Input, Output } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'schema-based-editor',
  templateUrl: './schema-based-editor.component.html'
})
export class SchemaBasedEditorComponent {
  @Input() schema?;
  @Input() isDisabled?;
  @Input() localValue;
  // @Output() setLocalValue;
  @Input() labelForFocusTarget;
  @Input() onInputBlur;
  @Input() onINputFocus;

  localValueChange($event): void {
    this.localValue = $event;
    this.setLocalValue.emit($event);
  }

  ngOnInit(): void {
    console.log(this.schema);
    console.log(this.isDisabled);
    console.log(this.localValue);
    console.log(this.labelForFocusTarget);
  }
}

angular.module('oppia').directive('schemaBasedEditor',
  downgradeComponent({ component: SchemaBasedEditorComponent }));

// require(
//   'components/forms/custom-forms-directives/apply-validation.directive.ts');
// require(
//   'components/forms/schema-based-editors/' +
//   'schema-based-bool-editor.directive.ts');
// require(
//   'components/forms/schema-based-editors/' +
//   'schema-based-choices-editor.directive.ts');
// require(
//   'components/forms/schema-based-editors/' +
//   'schema-based-custom-editor.directive.ts');
// require(
//   'components/forms/schema-based-editors/' +
//   'schema-based-dict-editor.directive.ts');
// require(
//   'components/forms/schema-based-editors/' +
//   'schema-based-float-editor.directive.ts');
// require(
//   'components/forms/schema-based-editors/' +
//   'schema-based-html-editor.directive.ts');
// require(
//   'components/forms/schema-based-editors/schema-based-int-editor.directive.ts');
// require(
//   'components/forms/schema-based-editors/' +
//   'schema-based-list-editor.directive.ts');
// require(
//   'components/forms/schema-based-editors/' +
//   'schema-based-unicode-editor.directive.ts');
// require('components/forms/validators/is-at-least.filter.ts');
// require('components/forms/validators/is-at-most.filter.ts');
// require('components/forms/validators/is-float.filter.ts');
// require('components/forms/validators/is-integer.filter.ts');
// require('components/forms/validators/is-nonempty.filter.ts');
// require('components/forms/validators/is-url-fragment.filter.ts');

// angular.module('oppia').directive('schemaBasedEditor', [
//   function() {
//     return {
//       restrict: 'E',
//       scope: {},
//       bindToController: {
//         schema: '&',
//         isDisabled: '&',
//         localValue: '=',
//         labelForFocusTarget: '&',
//         onInputBlur: '=',
//         onInputFocus: '='
//       },
//       template: require('./schema-based-editor.directive.html'),
//       controllerAs: '$ctrl',
//       controller: [function() {
//         let ctrl = this;
//         ctrl.setLocalValue = function($event) {
//           ctrl.localValue = $event;
//         };

//         ctrl.$onInit = function() {
//           console.log(ctrl.schema());
//           console.log(ctrl.isDisabled());
//           console.log(ctrl.localValue);
//           console.log(ctrl.labelForFocusTarget());
//         };
//       }]
//     };
//   }]);
