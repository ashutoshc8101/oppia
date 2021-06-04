// Copyright 2018 The Oppia Authors. All Rights Reserved.
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

import constants from "assets/constants";

/**
 * @fileoverview Frontend Model for user info.
 */

export interface UserInfoBackendDict {
  'is_moderator': boolean;
  'is_admin': boolean;
  'is_super_admin': boolean;
  'is_topic_manager': boolean;
  'can_create_collections': boolean;
  'preferred_site_language_code': string;
  'username': string;
  'email': string;
  'user_is_logged_in': boolean;
}

export class UserInfo {
  private _roles: string[];
  private _preferredSiteLanguageCode: string;
  private _username: string;
  private _email: string;
  private _isLoggedIn: boolean;
  constructor(
      roles: string[], preferredSiteLanguageCode: string,
      username: string, email: string, isLoggedIn: boolean) {
    this._roles = roles;
    this._preferredSiteLanguageCode = preferredSiteLanguageCode;
    this._username = username;
    this._email = email;
    this._isLoggedIn = isLoggedIn;
  }

  static createFromBackendDict(
      data: UserInfoBackendDict): UserInfo {
    return new UserInfo(
      data.roles, data.preferred_site_language_code, data.username,
      data.email, data.user_is_logged_in);
  }
  static createDefault(): UserInfo {
    return new UserInfo([], null, null, null, false);
  }

  isModerator(): boolean {
    return this._roles.indexOf(constants.ROLES_DATA.ROLE_ID_MODERATOR) > -1;
  }

  isAdmin(): boolean {
    return this._roles.indexOf(constants.ROLES_DATA.ROLE_ID_ADMIN) > -1;
  }

  isTopicManager(): boolean {
    return this._roles.indexOf(constants.ROLES_DATA.ROLE_ID_TOPIC_MANAGER) > -1;
  }

  isSuperAdmin(): boolean {
    return this._roles.indexOf(constants.ROLES_DATA.ROLE_ID_SUPERADMIN) > -1;
  }

  canCreateCollections(): boolean {
    return this._roles.indexOf(
      constants.ROLES_DATA.ROLE_ID_COLLECTION_EDITOR) > -1;
  }

  getPreferredSiteLanguageCode(): string {
    return this._preferredSiteLanguageCode;
  }

  getUsername(): string {
    return this._username;
  }

  getEmail(): string {
    return this._email;
  }

  getRoles(): string[] {
    return this._roles;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
