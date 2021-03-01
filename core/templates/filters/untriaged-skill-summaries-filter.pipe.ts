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
 * @fileoverview Pipe for filtering untriaged skill data
 */


import { Pipe, PipeTransform } from '@angular/core';
import { SkillSummary } from 'domain/skill/skill-summary.model';

@Pipe({
  name: 'untriagedSkillSummariesFilter'
})
export class UntriagedSkillSummariesFilter implements PipeTransform {
  transform(items: SkillSummary[], searchText: string): SkillSummary[] {
    if (!searchText) {
      return items;
    }

    if (!items) {
      return [];
    }

    return items.filter(it => {
      return it.description.toLowerCase().includes(searchText);
    });
  }
}
