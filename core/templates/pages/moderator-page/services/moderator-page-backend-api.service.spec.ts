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
 * @fileoverview Unit tests for Backend Api Service for
 *  the Oppia moderator page.
 */

import { HttpClientTestingModule, HttpTestingController }
  from '@angular/common/http/testing';
import { fakeAsync, flushMicrotasks, TestBed, waitForAsync }
  from '@angular/core/testing';
import { ActivityIdTypeDict, FeaturedActivityResponse,
  ModeratorPageBackendApiService, RecentCommitResponse,
  RecentFeedbackMessages } from './moderator-page-backend-api.service';

describe('Moderator Page Backend Api Service', () => {
  let moderatorPageBackendApiService: ModeratorPageBackendApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  }));

  beforeEach(() => {
    moderatorPageBackendApiService =
      TestBed.inject(ModeratorPageBackendApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should save featured activity references', fakeAsync(() => {
    let activityReferences: ActivityIdTypeDict[] = [{
      id: 'test_id1',
      type: 'type1'
    }];
    moderatorPageBackendApiService
      .saveFeaturedActivityReferencesAsync(activityReferences)
      .then((responseData) => {
        expect(responseData).toEqual({});
      });

    let req = httpTestingController.expectOne('/moderatorhandler/featured');
    expect(req.request.method).toEqual('POST');
    req.flush({});
    flushMicrotasks();
  }));

  it('should get recent commits', fakeAsync(() => {
    let expectedResponseData: RecentCommitResponse = {
      results: [],
      cursor: 'str1',
      more: true,
      exp_ids_to_exp_data: []
    };
    moderatorPageBackendApiService
      .getRecentCommitsAsync().then((responseData) => {
        expect(responseData).toEqual(expectedResponseData);
      });

    let req = httpTestingController.expectOne(
      '/recentcommitshandler/recent_commits' +
      '?query_type=all_non_private_commits');
    req.flush(expectedResponseData);

    expect(req.request.method).toEqual('GET');
    flushMicrotasks();
  }));

  it('should get recent feedback messages', fakeAsync(() => {
    let expectedResponseData: RecentFeedbackMessages = {
      results: [],
      cursor: 'str1',
      more: true
    };
    moderatorPageBackendApiService
      .getRecentFeedbackMessagesAsync().then((responseData) => {
        expect(responseData).toEqual(expectedResponseData);
      });

    let req = httpTestingController.expectOne('/recent_feedback_messages');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponseData);
    flushMicrotasks();
  }));

  it('should get recent featured activity references', fakeAsync(() => {
    let expectedResponseData: FeaturedActivityResponse = {
      featured_activity_references: []
    };
    moderatorPageBackendApiService
      .getFeaturedActivityReferencesAsync().then((responseData) => {
        expect(responseData).toEqual(expectedResponseData);
      });

    let req = httpTestingController.expectOne('/moderatorhandler/featured');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponseData);
    flushMicrotasks();
  }));
});
