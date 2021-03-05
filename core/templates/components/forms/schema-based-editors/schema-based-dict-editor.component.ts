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
 * @fileoverview Component for a schema-based editor for dicts.
 */

import { Component, Input, OnInit } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { IdGenerationService } from 'services/id-generation.service';

@Component({
  selector: 'schema-based-dict-editor',
  templateUrl: './schema-based-dict-editor.component.html'
})
export class SchemaBasedDictEditorComponent implements OnInit {
  @Input() localValue;
  @Input() isDisabled?;
  @Input() propertySchemas: [];
  @Input() labelForFocusTarget?;
  fieldIds = {};

  constructor(
    private idGenerationService: IdGenerationService
  ) { }

  getHumanReadablePropertyDescription(property): string {
    return property.description || '[' + property.name + ']';
  }

  ngOnInit(): void {
    for (let i = 0; i < this.propertySchemas.length; i++) {
      // Generate random IDs for each field.
      this.fieldIds[this.propertySchemas[i].name] = (
        this.idGenerationService.generateNewId());
    }
  }
}

angular.module('oppia').directive('schemaBasedDictEditor',
  downgradeComponent({ component: SchemaBasedDictEditorComponent }));

// require(
//   'components/forms/schema-based-editors/schema-based-editor.directive.ts');

// require('services/id-generation.service.ts');
// require('services/nested-directives-recursion-timeout-prevention.service.ts');

// angular.module('oppia').directive('schemaBasedDictEditor', [
//   'NestedDirectivesRecursionTimeoutPreventionService',
//   function(NestedDirectivesRecursionTimeoutPreventionService) {
//     return {
//       scope: {
//         localValue: '=',
//         isDisabled: '&',
//         // Read-only property. An object whose keys and values are the dict
//         // properties and the corresponding schemas.
//         propertySchemas: '&',
//         labelForFocusTarget: '&'
//       },
//       template: require('./schema-based-dict-editor.directive.html'),
//       restrict: 'E',
//       compile: NestedDirectivesRecursionTimeoutPreventionService.compile,
//       controller: [
//         '$scope', 'IdGenerationService',
//         function($scope, IdGenerationService) {
//           var ctrl = this;
//           $scope.getHumanReadablePropertyDescription = function(property) {
//             return property.description || '[' + property.name + ']';
//           };

//           ctrl.$onInit = function() {
//             $scope.fieldIds = {};
//             for (var i = 0; i < $scope.propertySchemas().length; i++) {
//               // Generate random IDs for each field.
//               $scope.fieldIds[$scope.propertySchemas()[i].name] = (
//                 IdGenerationService.generateNewId());
//             }
//           };
//         }
//       ]
//     };
//   }
// ]);
