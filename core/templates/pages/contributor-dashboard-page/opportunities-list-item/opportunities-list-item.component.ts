// Copyright 2019 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Component for the item view of an opportunity.
 */
// require(
//   'components/common-layout-directives/common-elements/' +
//   'lazy-loading.component.ts');

// require(
//   'filters/string-utility-filters/wrap-text-with-ellipsis.filter.ts');

// angular.module('oppia').component('opportunitiesListItem', {
//   bindings: {
//     opportunity: '<',
//     onClickActionButton: '<',
//     labelRequired: '<',
//     progressBarRequired: '<',
//     opportunityHeadingTruncationLength: '<'
//   },
//   template: require('./opportunities-list-item.component.html'),
//   controller: [
//     function() {
//       var ctrl = this;
//       ctrl.$onInit = function() {
//         ctrl.opportunityDataIsLoading = false;
//         if (ctrl.opportunity && ctrl.labelRequired) {
//           ctrl.labelText = ctrl.opportunity.labelText;
//           ctrl.labelStyle = {
//             'background-color': ctrl.opportunity.labelColor
//           };
//         }

//         if (!ctrl.opportunityHeadingTruncationLength) {
//           ctrl.opportunityHeadingTruncationLength = 40;
//         }
//         if (ctrl.opportunity) {
//           if (ctrl.opportunity.progressPercentage) {
//             ctrl.progressPercentage = (
//               ctrl.opportunity.progressPercentage + '%');
//             ctrl.progressBarStyle = {width: ctrl.progressPercentage};
//           }
//         } else {
//           ctrl.opportunityDataIsLoading = true;
//         }
//       };
//     }
//   ]
// });


import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

export class ExplorationOpportunityDict {
  id: string;
  labelText: string;
  labelColor: string;
  progressPercentage: number;
}

@Component({
  selector: 'opportunities-list-item',
  templateUrl: './opportunities-list-item.component.html',
  styleUrls: []
})
export class OpportunitiesListItemComponent {
  @Input() opportunity: ExplorationOpportunityDict;
  @Input() clickActionButton;
  @Input() labelRequired: boolean;
  @Input() progressBarRequired: boolean;
  @Input() opportunityHeadingTruncationLength: number;

  opportunityDataIsLoading: boolean = true;
  labelText: string;
  labelStyle: { 'background-color': string; };
  progressPercentage: string;
  progressBarStyle: { width: string; };

  ngOnInit(): void {
    if (this.opportunity && this.labelRequired) {
      this.labelText = this.opportunity.labelText;
      this.labelStyle = {
        'background-color': this.opportunity.labelColor
      };
    }

    if (!this.opportunityHeadingTruncationLength) {
      this.opportunityHeadingTruncationLength = 40;
    }
    if (this.opportunity) {
      if (this.opportunity.progressPercentage) {
        this.progressPercentage = (
          this.opportunity.progressPercentage + '%');
        this.progressBarStyle = {width: this.progressPercentage};
      }
      this.opportunityDataIsLoading = false;
    } else {
      this.opportunityDataIsLoading = true;
    }
  }
}

angular.module('oppia').directive(
  'opportunitiesListItem', downgradeComponent(
    {component: OpportunitiesListItemComponent}));
