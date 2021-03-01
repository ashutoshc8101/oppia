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
 * @fileoverview Pipe for filtering categorized skills
 */

import { Pipe, PipeTransform } from '@angular/core';
import { SubTopic } from 'domain/skill/skill-summary.model';

interface CategorizedSkillFilterData {
  key: string,
  value: SubTopic
}

@Pipe({
  name: 'categorizedSkillFilter'
})
export class CategorizedSkillFilterPipe implements PipeTransform {
  transform(items: CategorizedSkillFilterData[], searchText: string)
  : CategorizedSkillFilterData[] {
    if (!searchText) {
      return items;
    }
    if (!items) {
      return [];
    }

    let filteredItems = [];
    items.forEach(it => {
      let newTopics = {};
      for (let key in it.value) {
        let subTopicArray = it.value[key].filter(skill => {
          return skill.description.toLowerCase().includes(searchText);
        });
        newTopics[key] = subTopicArray;
      }
      let isNotEmpty = false;
      for (let key in newTopics) {
        if (newTopics[key].length > 0) {
          isNotEmpty = true;
        }
      }
      if (isNotEmpty) {
        filteredItems.push({
          key: it.key,
          value: newTopics
        });
      }
    });
    return filteredItems;
  }
}
