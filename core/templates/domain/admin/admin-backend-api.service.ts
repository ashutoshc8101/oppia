// Copyright 2020 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Backend api service for fetching the admin data;
 */

import { downgradeInjectable } from '@angular/upgrade/static';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AdminPageConstants } from
  'pages/admin-page/admin-page.constants';
import {
  TopicSummary,
  TopicSummaryBackendDict
} from 'domain/topic/topic-summary.model';
import {
  ComputationData,
  ComputationDataBackendDict,
} from 'domain/admin/computation-data.model';
import {
  Job,
  JobDataBackendDict,
} from 'domain/admin/job.model';
import {
  JobStatusSummary,
  JobStatusSummaryBackendDict,
} from 'domain/admin/job-status-summary.model';
import {
  PlatformParameter,
  PlatformParameterBackendDict
} from 'domain/platform_feature/platform-parameter.model';
import { UrlInterpolationService } from
  'domain/utilities/url-interpolation.service';


interface UserRoles {
  [role: string]: string;
}

interface RoleGraphData {
  nodes: {
    [role: string]: string;
  };
  links: {
    target: string;
    source: string;
  }[];
}

interface ConfigProperties {
  [property: string]: Object;
}

interface JobOutput {
  output: string[];
}

export interface AdminPageDataBackendDict {
  'demo_explorations': string[][];
  'demo_collections': string[][];
  'demo_exploration_ids': string[];
  'one_off_job_status_summaries': JobStatusSummaryBackendDict[];
  'human_readable_current_time': string;
  'audit_job_status_summaries': JobStatusSummaryBackendDict[];
  'updatable_roles': UserRoles;
  'role_graph_data': RoleGraphData;
  'config_properties': ConfigProperties;
  'viewable_roles': UserRoles;
  'unfinished_job_data': JobDataBackendDict[];
  'recent_job_data': JobDataBackendDict[];
  'continuous_computations_data': ComputationDataBackendDict[];
  'topic_summaries': TopicSummaryBackendDict[];
  'feature_flags': PlatformParameterBackendDict[];
}

export interface AdminPageData {
  demoExplorations: string[][];
  demoCollections: string[][];
  demoExplorationIds: string[];
  oneOffJobStatusSummaries: JobStatusSummary[];
  humanReadableCurrentTime: string;
  auditJobStatusSummaries: JobStatusSummary[];
  updatableRoles: UserRoles;
  roleGraphData: RoleGraphData;
  configProperties: ConfigProperties;
  viewableRoles: UserRoles;
  unfinishedJobData: Job[];
  recentJobData: Job[];
  continuousComputationsData: ComputationData[];
  topicSummaries: TopicSummary[];
  featureFlags: PlatformParameter[];
}

@Injectable({
  providedIn: 'root'
})
export class AdminBackendApiService {
  constructor(
    private http: HttpClient,
    private urlInterpolationService: UrlInterpolationService) {}

  async getDataAsync(): Promise<AdminPageData> {
    return new Promise((resolve, reject) => {
      this.http.get<AdminPageDataBackendDict>(
        AdminPageConstants.ADMIN_HANDLER_URL).toPromise().then(response => {
        resolve({
          demoExplorations: response.demo_explorations,
          demoCollections: response.demo_collections,
          demoExplorationIds: response.demo_exploration_ids,
          oneOffJobStatusSummaries: response.one_off_job_status_summaries.map(
            JobStatusSummary.createFromBackendDict),
          humanReadableCurrentTime: response.human_readable_current_time,
          auditJobStatusSummaries: response.audit_job_status_summaries.map(
            JobStatusSummary.createFromBackendDict),
          updatableRoles: response.updatable_roles,
          roleGraphData: response.role_graph_data,
          configProperties: response.config_properties,
          viewableRoles: response.viewable_roles,
          unfinishedJobData: response.unfinished_job_data.map(
            Job.createFromBackendDict),
          recentJobData: response.recent_job_data.map(
            Job.createFromBackendDict),
          continuousComputationsData: response.continuous_computations_data.map(
            ComputationData.createFromBackendDict),
          topicSummaries: response.topic_summaries.map(
            TopicSummary.createFromBackendDict),
          featureFlags: response.feature_flags.map(
            dict => PlatformParameter.createFromBackendDict(
              dict)
          )
        });
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  private _postRequestAsync(
      handlerUrl: string, payload?: Object, action?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post<void>(
        handlerUrl, { action, ...payload }).toPromise()
        .then(response => {
          resolve(response);
        }, errorResonse => {
          reject(errorResonse.error.error);
        });
    });
  }

  async startNewJobAsync(jobType: string): Promise<void> {
    let action = 'start_new_job';
    let payload = {
      job_type: jobType
    };
    return this._postAdminActionAsync(action, payload);
  }

  async cancelJobAsync(jobId: string, jobType: string): Promise<void> {
    let action = 'cancel_job';
    let payload = {
      job_id: jobId,
      job_type: jobType
    };
    return this._postAdminActionAsync(action, payload);
  }

  async startComputationAsync(computationType: string): Promise<void> {
    let action = 'start_computation';
    let payload = {
      computation_type: computationType
    };
    return this._postAdminActionAsync(action, payload);
  }

  async stopComputationAsync(computationType: string): Promise<void> {
    let action = 'stop_computation';
    let payload = {
      computation_type: computationType
    };
    return this._postAdminActionAsync(action, payload);
  }

  async fetchJobOutputAsync(jobId: string): Promise<string[]> {
    let adminJobOutputUrl = this.urlInterpolationService.interpolateUrl(
      AdminPageConstants.ADMIN_JOB_OUTPUT_URL_TEMPLATE, {
        jobId: jobId
      });
    return new Promise((resolve, reject) => {
      this.http.get<JobOutput>(
        adminJobOutputUrl).toPromise().then(response => {
        resolve(Array.isArray(response.output) ? response.output.sort() : []);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  // Admin Roles Tab Services.
  async viewUsersRoleAsync(
      filterCriterion: string, role: string, username: string
  ): Promise<UserRolesBackendResponse> {
    return new Promise((resolve, reject) => {
      this.http.get<UserRolesBackendResponse>(
        AdminPageConstants.ADMIN_ROLE_HANDLER_URL, {
          params: {
            filter_criterion: filterCriterion,
            role: role,
            username: username
          }
        }
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async updateUserRoleAsync(
      newRole: string, username: string, topicId: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post<void>(
        AdminPageConstants.ADMIN_ROLE_HANDLER_URL, {
          role: newRole,
          username: username,
          topic_id: topicId
        }
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async addContributionReviewerAsync(
      category: string, username: string, languageCode: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post<void>(
        AdminPageConstants.ADMIN_ADD_CONTRIBUTION_RIGHTS_HANDLER, {
          category: category,
          username: username,
          language_code: languageCode
        }
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async viewContributionReviewersAsync(
      category: string, languageCode: string
  ): Promise<ViewContributionBackendResponse> {
    return new Promise((resolve, reject) => {
      this.http.get<ViewContributionBackendResponse>(
        AdminPageConstants.ADMIN_GET_CONTRIBUTOR_USERS_HANDLER, {
          params: {
            category: category,
            language_code: languageCode
          }
        }
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async contributionReviewerRightsAsync(
      username: string): Promise<ContributionRightsBackendResponse> {
    return new Promise((resolve, reject) => {
      this.http.get<ContributionRightsBackendResponse>(
        AdminPageConstants.ADMIN_CONTRIBUTION_RIGHTS_HANDLER, {
          params: {
            username: username
          }
        }
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async removeContributionReviewerAsync(
      username: string, method: string,
      category: string, languageCode: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.put<void>(
        AdminPageConstants.ADMIN_REMOVE_CONTRIBUTION_RIGHTS_HANDLER, {
          username: username,
          removal_type: method,
          category: category,
          language_code: languageCode
        }
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  // Admin Misc Tab Services.
  async flushMemoryCacheAsync(): Promise<void> {
    return this._postRequestAsync (
      AdminPageConstants.ADMIN_MEMORY_CACHE_HANDLER_URL);
  }

  async clearSearchIndexAsync(): Promise<void> {
    return this._postRequestAsync (
      AdminPageConstants.ADMIN_HANDLER_URL);
  }

  async populateExplorationStatsRegenerationCsvResultAsync(
      expIdToRegenerate: string): Promise<void> {
    let action = 'regenerate_missing_exploration_stats';
    let payload = {
      exp_id: expIdToRegenerate
    };
    return this._postRequestAsync (
      AdminPageConstants.ADMIN_HANDLER_URL, payload, action);
  }

  async regenerateOpportunitiesRelatedToTopicAsync(
      topicId: string): Promise<void> {
    let action = 'regenerate_topic_related_opportunities';
    let payload = {
      topic_id: topicId
    };
    return this._postRequestAsync (
      AdminPageConstants.ADMIN_HANDLER_URL, payload, action);
  }

  async uploadTopicSimilaritiesAsync(data: string): Promise<void> {
    let action = 'upload_topic_similarities';
    let payload = {
      data: data
    };
    return this._postRequestAsync (
      AdminPageConstants.ADMIN_HANDLER_URL, payload, action);
  }

  async sendDummyMailToAdminAsync(): Promise<void> {
    return this._postRequestAsync (
      AdminPageConstants.ADMIN_SEND_DUMMY_MAIL_HANDLER_URL);
  }

  async getMemoryCacheProfileAsync(
  ): Promise<MemoryCacheProfileBackendResponse> {
    return new Promise((resolve, reject) => {
      this.http.get<MemoryCacheProfileBackendResponse>(
        AdminPageConstants.ADMIN_MEMORY_CACHE_HANDLER_URL, {}
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async updateUserNameAsync(
      oldUsername: string, newUsername: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.put<void>(
        AdminPageConstants.ADMIN_UPDATE_USERNAME_HANDLER_URL, {
          old_username: oldUsername,
          new_username: newUsername
        }
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async getNumberOfPendingDeletionRequestAsync(
  ): Promise<PendingDeletionRequestBackendResponse> {
    return new Promise((resolve, reject) => {
      this.http.get<PendingDeletionRequestBackendResponse>(
        AdminPageConstants.ADMIN_NUMBER_OF_DELETION_REQUEST_HANDLER_URL, {}
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async grantSuperAdminPrivilegesAsync(username: string): Promise<void> {
    return this.http.put<void>(
      AdminPageConstants.ADMIN_SUPER_ADMIN_PRIVILEGES_HANDLER_URL, {username}
    ).toPromise();
  }

  async revokeSuperAdminPrivilegesAsync(username: string): Promise<void> {
    return this.http['delete']<void>(
      AdminPageConstants.ADMIN_SUPER_ADMIN_PRIVILEGES_HANDLER_URL, {
        params: {username},
      }
    ).toPromise();
  }

  async getModelsRelatedToUserAsync(userId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get<ModelsRelatedToUserBackendResponse>(
        AdminPageConstants.ADMIN_VERIFY_USER_MODELS_DELETED_HANDLER_URL, {
          params: {
            user_id: userId
          }
        }
      ).toPromise().then(response => {
        resolve(response.related_models_exist);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  async deleteUserAsync(userId: string, username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line dot-notation
      this.http.delete<void>(
        AdminPageConstants.ADMIN_DELETE_USER_HANDLER_URL, {
          params: {
            user_id: userId,
            username: username
          }
        }
      ).toPromise().then(response => {
        resolve(response);
      }, errorResponse => {
        reject(errorResponse.error.error);
      });
    });
  }

  // Admin Config Tab Services.
  async revertConfigPropertyAsync(configPropertyId: string): Promise<void> {
    let action = 'revert_config_property';
    let payload = {
      config_property_id: configPropertyId
    };
    return this._postRequestAsync (
      AdminPageConstants.ADMIN_HANDLER_URL, payload, action);
  }

  async saveConfigPropertiesAsync(
      newConfigPropertyValues: ConfigPropertyValues): Promise<void> {
    let action = 'save_config_properties';
    let payload = {
      new_config_property_values: newConfigPropertyValues
    };
    return this._postRequestAsync (
      AdminPageConstants.ADMIN_HANDLER_URL, payload, action);
  }

  // Admin Dev Mode Activities Tab Services.
  async generateDummyExplorationsAsync(
      numDummyExpsToGenerate: number,
      numDummyExpsToPublish: number): Promise<void> {
    return this._postRequestAsync(AdminPageConstants.ADMIN_HANDLER_URL, {
      action: 'generate_dummy_explorations',
      num_dummy_exps_to_generate: numDummyExpsToGenerate,
      num_dummy_exps_to_publish: numDummyExpsToPublish
    });
  }

  async reloadExplorationAsync(explorationId: string): Promise<void> {
    return this._postRequestAsync(AdminPageConstants.ADMIN_HANDLER_URL, {
      action: 'reload_exploration',
      exploration_id: String(explorationId)
    });
  }

  async generateDummyNewStructuresDataAsync(): Promise<void> {
    return this._postRequestAsync(AdminPageConstants.ADMIN_HANDLER_URL, {
      action: 'generate_dummy_new_structures_data'
    });
  }

  async generateDummyNewSkillDataAsync(): Promise<void> {
    return this._postRequestAsync(AdminPageConstants.ADMIN_HANDLER_URL, {
      action: 'generate_dummy_new_skill_data'
    });
  }

  async reloadCollectionAsync(collectionId: string): Promise<void> {
    return this._postRequestAsync(AdminPageConstants.ADMIN_HANDLER_URL, {
      action: 'reload_collection',
      collection_id: String(collectionId)
    });
  }
}

angular.module('oppia').factory(
  'AdminBackendApiService',
  downgradeInjectable(AdminBackendApiService));
