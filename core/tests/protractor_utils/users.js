// Copyright 2014 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Utilities for user creation, login and privileging when
 * carrying out end-to-end testing with protractor.
 */

var FirebaseAdmin = require('firebase-admin');
var HashWasm = require('hash-wasm');
var general = require('./general.js');
var waitFor = require('./waitFor.js');
var action = require('./action.js');
var AdminPage = require('./AdminPage.js');
var adminPage = new AdminPage.AdminPage();

var _createFirebaseAccount = async function(email, isSuperAdmin = false) {
  var user = await FirebaseAdmin.auth().createUser({
    email: email,
    emailVerified: true,
    // We've configured the Firebase emulator to use email/password for user
    // authentication. To save developers and end-to-end test authors the
    // trouble of providing passwords, we always use the md5 hash of the email
    // address instead. This will never be done in production, where the
    // emulator DOES NOT run. Instead, production takes the user to the Google
    // sign-in page, which eventually redirects them back to Oppia.
    password: await HashWasm.md5(email),
  });
  if (isSuperAdmin) {
    await FirebaseAdmin.auth().setCustomUserClaims(
      user.uid, {role: 'super_admin'});
  }
};

var login = async function(email) {
  // Use of element and action is not reliable, because we do not always begin
  // on an Angular page. To forgive callers from non-Angular pages (e.g., the
  // very first function call of a test), we use browser.driver instead.
  // The full url is necessary.
  await browser.driver.get(
    general.SERVER_URL_PREFIX + general.LOGIN_URL_SUFFIX);

  await general.acceptPrompt(email);

  await waitFor.pageToFullyLoad();
};

var logout = async function() {
  await browser.driver.get(general.SERVER_URL_PREFIX + '/');

  await general.openProfileDropdown();
  const logoutLink = element(by.css('.protractor-test-logout-link'));
  await action.click('Logout link', logoutLink);
  await waitFor.pageToFullyLoad();
};

// The user needs to log in immediately before this method is called. Note
// that this will fail if the user already has a username.
var _completeSignup = async function(username) {
  await waitFor.pageToFullyLoad();
  var usernameInput = element(by.css('.protractor-test-username-input'));
  var agreeToTermsCheckbox = element(
    by.css('.protractor-test-agree-to-terms-checkbox'));
  var registerUser = element(by.css('.protractor-test-register-user'));
  await action.sendKeys('Username input', usernameInput, username);
  await action.click('agreeToTerms Checkbox', agreeToTermsCheckbox);
  await action.click('Register User button', registerUser);
  await waitFor.pageToFullyLoad();
};

var createAndLoginUser = async function(email, username) {
  await _createFirebaseAccount(email);
  await login(email);
  await _completeSignup(username);
};

var createAndLoginAdminUser = async function(email, username) {
  await _createFirebaseAccount(email, true);
  await login(email);
  await _completeSignup(username);
  await adminPage.get();
  await adminPage.updateRole(username, 'admin');
};

var createAndLoginAdminUserMobile = async function(email, username) {
  await _createFirebaseAccount(email, true);
  await login(email);
  await _completeSignup(username);
};

var createAdminMobile = async function(email, username) {
  await createAndLoginAdminUserMobile(email, username);
  await logout();
};

var createUser = async function(email, username) {
  await createAndLoginUser(email, username);
  await logout();
};

var createModerator = async function(email, username) {
  await _createFirebaseAccount(email, true);
  await login(email);
  await _completeSignup(username);
  await adminPage.get();
  await adminPage.updateRole(username, 'moderator');
  await logout();
};

var createAdmin = async function(email, username) {
  await createAndLoginAdminUser(email, username);
  await logout();
};

var isAdmin = async function() {
  return await element(by.css('.protractor-test-admin-text')).isPresent();
};

exports.isAdmin = isAdmin;
exports.login = login;
exports.logout = logout;
exports.createUser = createUser;
exports.createAndLoginUser = createAndLoginUser;
exports.createModerator = createModerator;
exports.createAdmin = createAdmin;
exports.createAndLoginAdminUser = createAndLoginAdminUser;
exports.createAdminMobile = createAdminMobile;
exports.createAndLoginAdminUserMobile = createAndLoginAdminUserMobile;
