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
 * @fileoverview Component for a schema-based editor for HTML.
 */

import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'schema-based-html-editor',
  templateUrl: './schema-based-html-editor.component.html'
})
export class SchemaBasedHtmlEditorComponent {
  @Input() localValue;
  @Input() isDisabled;
  @Input() labelForFocusTarget;
  @Input() uiConfig;
}

angular.module('oppia').directive('schemaBasedHtmlEditor',
  downgradeComponent({ component: SchemaBasedHtmlEditorComponent }));


// Require('components/ck-editor-helpers/ck-editor-4-rte.directive.ts');
// require('components/ck-editor-helpers/ck-editor-4-widgets.initializer.ts');

// angular.module('oppia').directive('schemaBasedHtmlEditor', [
//   function() {
//     return {
//       restrict: 'E',
//       scope: {},
//       bindToController: {
//         localValue: '=',
//         isDisabled: '&',
//         labelForFocusTarget: '&',
//         uiConfig: '&'
//       },
//       template: require('./schema-based-html-editor.directive.html'),
//       controllerAs: '$ctrl',
//       controller: [function() {}]
//     };
//   }]);
