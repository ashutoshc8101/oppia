(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!*****************************************************!*\
      !*** multi ./core/templates/pages/app-page/main.ts ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/ashutosh/Desktop/oppia_org/oppia/core/templates/pages/app-page/main.ts */
      "X0wn");
      /***/
    },

    /***/
    "02qT":
    /*!*************************************************************************************!*\
      !*** ./core/templates/domain/platform_feature/platform-feature-domain.constants.ts ***!
      \*************************************************************************************/

    /*! exports provided: PlatformFeatureDomainConstants */

    /***/
    function qT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatformFeatureDomainConstants", function () {
        return PlatformFeatureDomainConstants;
      }); // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
       * @fileoverview Constants for platform feature domain.
       */


      var PlatformFeatureDomainConstants = {
        // Url for the dummy backend handler gated by the dummy_feature.
        DUMMY_HANDLER_URL: '/platform_feature_dummy_handler',
        // Url for the backend handler for evaluation of platform features.
        PLATFORM_FEATURES_EVALUATION_HANDLER_URL: '/platform_features_evaluation_handler',
        // Action name for request to the admin handler that updates the rules
        // of feature flags.
        UPDATE_FEATURE_FLAG_RULES_ACTION: 'update_feature_flag_rules'
      };
      /***/
    },

    /***/
    "0v3l":
    /*!*************************************************************!*\
      !*** ./core/templates/pages/app-page/app.routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function v3l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! pages/about-page/about-page.component */
      "GIqX");
      /* harmony import */


      var pages_donate_page_donate_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! pages/donate-page/donate-page.component */
      "XHuz");
      /* harmony import */


      var pages_error_pages_error_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! pages/error-pages/error-page.component */
      "PG8K");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: 'donate',
        component: pages_donate_page_donate_page_component__WEBPACK_IMPORTED_MODULE_4__["DonatePageComponent"]
      }, {
        path: 'about',
        component: pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"]
      }, {
        path: 'credits',
        redirectTo: 'about'
      }, {
        path: '**',
        component: pages_error_pages_error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"],
          useValue: '/'
        }]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "3eoD":
    /*!**************************************************************!*\
      !*** ./core/templates/services/contextual/logger.service.ts ***!
      \**************************************************************/

    /*! exports provided: LoggerService */

    /***/
    function eoD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
        return LoggerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // Copyright 2014 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Service for logging.
       */


      var LoggerService = /*#__PURE__*/function () {
        function LoggerService() {
          _classCallCheck(this, LoggerService);
        }
        /**
         * Logs a message to console at the debug level.
         * @param msg - A message to log.
         */


        _createClass(LoggerService, [{
          key: "debug",
          value: function debug(msg) {
            // eslint-disable-next-line no-console
            console.debug(msg);
          }
          /**
           * Logs a message to console at the info level.
           * @param msg - A message to log.
           */

        }, {
          key: "info",
          value: function info(msg) {
            // eslint-disable-next-line no-console
            console.info(msg);
          }
          /**
           * Logs a message to console at the warning level.
           * @param msg - A message to log.
           */

        }, {
          key: "warn",
          value: function warn(msg) {
            console.warn(msg);
          }
          /**
           * Logs a message to console at the error level.
           * @param msg - A message to log.
           */

        }, {
          key: "error",
          value: function error(msg) {
            console.error(msg);
          }
          /**
           * Logs a message to console.
           * @param msg - A message to log.
           */

        }, {
          key: "log",
          value: function log(msg) {
            // eslint-disable-next-line no-console
            console.log(msg);
          }
        }]);

        return LoggerService;
      }();

      LoggerService.ctorParameters = function () {
        return [];
      };

      LoggerService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], LoggerService);
      /***/
    },

    /***/
    "AFwG":
    /*!******************************************************************!*\
      !*** ./core/templates/services/contextual/window-ref.service.ts ***!
      \******************************************************************/

    /*! exports provided: WindowRef */

    /***/
    function AFwG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindowRef", function () {
        return WindowRef;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // Copyright 2014 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      /**
       * @fileoverview Service to wrap the window object.
       */


      var WindowRef = /*#__PURE__*/function () {
        function WindowRef() {
          _classCallCheck(this, WindowRef);
        }

        _createClass(WindowRef, [{
          key: "_window",
          value:
          /**
          * @returns The global native browser window object.
          */
          function _window() {
            return window;
          }
          /**
          * @returns The global native browser window object.
          */

        }, {
          key: "nativeWindow",
          get: function get() {
            return this._window();
          }
        }]);

        return WindowRef;
      }();

      WindowRef = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })], WindowRef);
      /***/
    },

    /***/
    "BkEn":
    /*!**************************************************!*\
      !*** ./core/templates/filters/translate.pipe.ts ***!
      \**************************************************/

    /*! exports provided: TranslatePipe */

    /***/
    function BkEn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
        return TranslatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! services/translate.service */
      "lswZ");
      /* harmony import */


      var services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! services/utils.service */
      "RY2A"); // Copyright 2019 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Translate pipe for i18n translations.
       */

      /**
       * Commonly used terms in this file:
       *   key - Key for i18n translation
       *   interpolateParams or params - Key-value pairs for interpolation
       *   interpolatedValue - The final translation that is returned.
       *
       * Example: <h1 [innerHTM]="'I18N_ABOUT_PAGE_HEADING' | translate:{x: 'val'}">
       *   'I18N_ABOUT_PAGE_HEADING' is referred here as key.
       *
       *   "translate" is the pipe. Every pipe must have a transform function. The
       *   transform function is called when angular encounters the pipe in HTML.
       *
       *   The object following the pipe, i.e. {x: 'val'}, is another argument to the
       *   transform function. This object is called params or interpolationParams.
       *
       * Note: For every "| translate" angular encounters in the html, it creates a
       * separate instance of this pipe.
       */


      var TranslatePipe = /*#__PURE__*/function () {
        function TranslatePipe(translateService, changeDetectorRef, utilsService) {
          _classCallCheck(this, TranslatePipe);

          this.translateService = translateService;
          this.changeDetectorRef = changeDetectorRef;
          this.utilsService = utilsService;
          this.interpolatedValue = '';
          /**
           * Variable to keep track of the last key sent for translation. If the
           * previously sent key and params are same as the current one, the pipe
           * doesn't request for translation and interpolation again.
           */

          this.lastKey = null;
          this.onLangChange = null;
        }
        /**
         * Updates the value of interpolatedValue.
         * @param {string} key - key for i18n translation
         * @param {Object} interpolateParams - key-value pairs for interpolation
         */


        _createClass(TranslatePipe, [{
          key: "updateInterpolatedValue",
          value: function updateInterpolatedValue(key, interpolateParams) {
            this.interpolatedValue = this.translateService.getInterpolatedString(key, interpolateParams); // Storing the key to check if the key is same when the transform is invoked
            // again.

            this.lastKey = key; // Storing the params to check if the params are same when the transform is
            // invoked again.

            this.lastParams = interpolateParams;
            this.changeDetectorRef.markForCheck();
          }
          /**
           * Every pipe is supposed to have a function named "transform". This is
           * because Pipes implement the PipeTransform interface. The PipeTransform
           * interface expects a function named "transform". This "transform" function
           * is called by angular to transform input values for display in a view.
           * @param {string} key - key for i18n
           * @param {Object | undefined} params - key-value pairs for interpolation. No
           *  key-value pairs are sent when the translation does not require
           *  interpolation. In that case the params will be undefined.
           * @returns {string} - interpolated I18n value
           */

        }, {
          key: "transform",
          value: function transform(key, params) {
            var _this = this;

            if (!key || !key.length) {
              return key;
            } // If the key and params are same, return the last stored value.


            if (key === this.lastKey && this.utilsService.isEquivalent(params, this.lastParams)) {
              return this.interpolatedValue;
            } // Storing the key to check if the key is same when the transform is invoked
            // again.


            this.lastKey = key; // Storing the params to check if the params are same when the transform is
            // invoked again.

            this.lastParams = params;
            var interpolateParams;

            if (this.utilsService.isDefined(params) && !Array.isArray(params)) {
              interpolateParams = params;
            } // Update the interpolated value.


            this.updateInterpolatedValue(key, interpolateParams); // Subscribe to onLangChange event, in case the language changes.

            if (this.onLangChange === null) {
              this.onLangChange = this.translateService.onLangChange.subscribe(function (event) {
                _this.updateInterpolatedValue(key, interpolateParams);
              });
            }

            return this.interpolatedValue;
          }
          /**
           * Clean up any existing subscription to change events
           */

        }, {
          key: "disposeSubscriptions",
          value: function disposeSubscriptions() {
            if (this.onLangChange === null) {
              return;
            }

            this.onLangChange.unsubscribe();
            this.onLangChange = null;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.disposeSubscriptions();
          }
        }]);

        return TranslatePipe;
      }();

      TranslatePipe.ctorParameters = function () {
        return [{
          type: services_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]
        }];
      };

      TranslatePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'translate',
        // This option is required to update the interpolatedValue when promises are
        // resolved.
        pure: false
      }), __metadata("design:paramtypes", [services_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]])], TranslatePipe);
      /***/
    },

    /***/
    "Ci4D":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/pages/about-page/about-page.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ci4D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"oppia-about-page-container\">\n  <div class=\"oppia-static-header\">\n    <h1 [innerHTML]=\"'I18N_ABOUT_PAGE_HEADING' | translate\"></h1>\n  </div>\n  <background-banner></background-banner>\n  <div>\n    <div class=\"oppia-static-content-below-banner\">\n      <div class=\"oppia-page-card oppia-static-content\">\n        <div class=\"about-nav\">\n          <ul class=\"oppia-about-tabs\">\n            <li [ngClass]=\"{'oppia-about-tabs-active': activeTabName === TAB_ID_ABOUT}\">\n              <a (click)=\"onTabClick(TAB_ID_ABOUT)\" class=\"oppia-about-tabs-text\" id=\"about\" [innerHTML]=\"'I18N_ABOUT_PAGE_TABS_ABOUT' | translate\"></a>\n            </li>\n            <li [ngClass]=\"{'oppia-about-tabs-active':activeTabName === TAB_ID_FOUNDATION}\">\n              <a (click)=\"onTabClick(TAB_ID_FOUNDATION)\" class=\"oppia-about-tabs-text\" id=\"foundation\" [innerHTML]=\"'I18N_ABOUT_PAGE_TABS_FOUNDATION' | translate\"></a>\n            </li>\n            <li [ngClass]=\"{'oppia-about-tabs-active': activeTabName === TAB_ID_CREDITS}\">\n              <a (click)=\"onTabClick(TAB_ID_CREDITS)\" class=\"oppia-about-tabs-text\" id=\"credits\" [innerHTML]=\"'I18N_ABOUT_PAGE_TABS_CREDITS' | translate\"></a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"about-tab-container protractor-test-about-page\" dir=\"auto\">\n          <div class=\"about oppia-about-tab-content\" [ngClass]=\"{'oppia-about-visible-content': activeTabName === TAB_ID_ABOUT}\">\n            <div class=\"oppia-static-card-content oppia-static-card-content-narrow\">\n              <h2 [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_HEADING' | translate\"></h2>\n              <div class=\"oppia-about-text-align\">\n                <em>Oppia \"O-pee-yah\" (Finnish) - \"to learn\"</em>\n              </div>\n\n\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_PARAGRAPH_1' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_PARAGRAPH_2' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_PARAGRAPH_3' | translate: { numberOfExplorations: '11,000', numberofStudentsServed: '430,000' }\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_PARAGRAPH_4' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_PARAGRAPH_5' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_PARAGRAPH_6' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_PARAGRAPH_7' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_PARAGRAPH_8' | translate\">\n              </p>\n\n              <div class=\"oppia-about-three-cols-container\">\n                <div class=\"oppia-about-three-cols-layout oppia-about-three-cols-feature\">\n                  <picture>\n                    <source type=\"image/webp\" [srcset]=\"getStaticImageUrl('/general/creator-create-exp.webp')\">\n                    <source type=\"image/png\" [srcset]=\"getStaticImageUrl('/general/creator-create-exp.png')\">\n                    <img [src]=\"getStaticImageUrl('/general/creator-create-exp.png')\" alt=\"\">\n                  </picture>\n                  <h3 [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_CREATE' | translate\"></h3>\n                  <p class=\"oppia-about-tab-text\" [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_CREATE_TEXT' | translate\">\n                  </p>\n                </div>\n                <div class=\"oppia-about-three-cols-layout oppia-about-three-cols-feature\">\n                  <picture>\n                    <source type=\"image/webp\" [srcset]=\"getStaticImageUrl('/general/creator-pub-share.webp')\">\n                    <source type=\"image/png\" [srcset]=\"getStaticImageUrl('/general/creator-pub-share.png')\">\n                    <img [src]=\"getStaticImageUrl('/general/creator-pub-share.png')\" alt=\"\">\n                  </picture>\n                  <h3 [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_SHARE' | translate\"></h3>\n                  <p class=\"oppia-about-tab-text\" [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_SHARE_TEXT' | translate\">\n                  </p>\n                </div>\n                <div class=\"oppia-about-three-cols-layout oppia-about-three-cols-feature\">\n                  <picture>\n                    <source type=\"image/webp\" [srcset]=\"getStaticImageUrl('/general/creator-feedback.webp')\">\n                    <source type=\"image/png\" [srcset]=\"getStaticImageUrl('/general/creator-feedback.png')\">\n                    <img [src]=\"getStaticImageUrl('/general/creator-feedback.png')\" alt=\"\">\n                  </picture>\n                  <h3 [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_FEEDBACK' | translate\"></h3>\n                  <p class=\"oppia-about-tab-text\" [innerHTML]=\"'I18N_ABOUT_PAGE_ABOUT_TAB_FEEDBACK_TEXT' | translate\">\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"foundation oppia-about-tab-content\" [ngClass]=\"{'oppia-about-visible-content': activeTabName === TAB_ID_FOUNDATION}\">\n            <div class=\"oppia-static-card-content oppia-static-card-content-narrow\">\n              <h2 [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_HEADING' | translate\"></h2>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_PARAGRAPH_1' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_PARAGRAPH_2' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_PARAGRAPH_3' | translate\">\n              </p>\n              <h3 [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_PARAGRAPH_4_HEADING' | translate\"></h3>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_PARAGRAPH_4' | translate\">\n              </p>\n              <a id=\"license\">\n                <h1 class=\"oppia-license-link\"></h1>\n              </a>\n              <h3 [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_PARAGRAPH_5_LICENSE_HEADING' | translate\"></h3>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_PARAGRAPH_5' | translate\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_PARAGRAPH_6' | translate\">\n              </p>\n              <div class=\"text-center\">\n                <a href=\"/donate\" class=\"btn oppia-about-button oppia-about-foundation-tab-anchor\" [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_DONATE_BUTTON' | translate\">\n                </a>\n                <a href=\"/contact\" class=\"btn oppia-about-button oppia-about-foundation-tab-anchor\" [innerHTML]=\"'I18N_ABOUT_PAGE_FOUNDATION_TAB_GET_INVOLVED_BUTTON' | translate\">\n                </a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"credits oppia-about-tab-content\" [ngClass]=\"{'oppia-about-visible-content': activeTabName === TAB_ID_CREDITS}\">\n            <div class=\"oppia-static-card-content oppia-static-card-content-wide\">\n              <h2 [innerHTML]=\"'I18N_ABOUT_PAGE_CREDITS_TAB_HEADING' | translate\"></h2>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_CREDITS_TAB_TEXT' | translate\">\n              </p>\n              <div class=\"oppia-about-credits-letter-groups three-col\">\n                <div *ngFor=\"let credit of allCredits\">\n                  <span>{{ credit.letter }}</span>\n                  <ul>\n                    <li *ngFor=\"let name of credit.names\">{{ name }}</li>\n                  </ul>\n                </div>\n              </div>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_CREDITS_TAB_TEXT_BOTTOM' | translate :{listOfNames: listOfNames}\">\n              </p>\n              <p [innerHTML]=\"'I18N_ABOUT_PAGE_CREDITS_THANK_TRANSLATEWIKI' | translate\">\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"oppia-about-extra-container\">\n        <div class=\"oppia-static-extra-content oppia-about-clearfix\">\n          <div class=\"oppia-about-otter-container\">\n            <picture>\n              <source type=\"image/webp\" [srcset]=\"getStaticImageUrl('/general/about_page_mascot.webp')\">\n              <source type=\"image/png\" [srcset]=\"getStaticImageUrl('/general/about_page_mascot.png')\">\n              <img [src]=\"getStaticImageUrl('/general/about_page_mascot.png')\" class=\"oppia-about-otter\" alt=\"Otter\">\n            </picture>\n          </div>\n          <div class=\"oppia-about-otter-speech-card\">\n            <blockquote class=\"oppia-about-otter-speech-bubble\">\n              <h3 [innerHTML]=\"'I18N_ABOUT_PAGE_SPEECH_BUBBLE' | translate\"></h3>\n            </blockquote>\n          </div>\n        </div>\n\n        <div class=\"oppia-about-extra-info oppia-about-page-extra-info\">\n          <div class=\"oppia-static-content oppia-static-extra-content oppia-about-extra-content\">\n            <div class=\"oppia-static-card-content oppia-static-card-content-wide oppia-about-buttons-container\">\n              <a href=\"/community-library\" class=\"btn oppia-about-button\" [innerHTML]=\"'I18N_ABOUT_PAGE_LEARN_BUTTON' | translate\"></a>\n              <a href=\"/teach\" class=\"btn oppia-about-button\" [innerHTML]=\"'I18N_ABOUT_PAGE_TEACH_BUTTON' | translate\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"oppia-footer-padding-below-banner\">\n  </div>\n</div>\n<style>\n  .oppia-about-page-container .oppia-about-foundation-tab-anchor {\n    background-color: #00645c;\n    border-radius: 4px;\n    color: white;\n    letter-spacing: 0.7px;\n    width: 33%;\n  }\n  .oppia-about-page-container .oppia-about-foundation-tab-anchor:hover {\n    background-color: #3d9991;\n    text-decoration: none;\n  }\n  .oppia-about-page-container .oppia-about-text-align {\n    text-align: center;\n  }\n  .oppia-about-page-container .oppia-about-three-cols-layout {\n    display: inline-block;\n    margin-right: 20px;\n    width: -webkit-calc((100% - 60px) / 3);\n    width: -moz-calc((100% - 60px) / 3);\n    width: -o-calc((100% - 60px) / 3);\n    width: calc((100% - 60px) / 3);\n  }\n  .oppia-about-page-container .oppia-about-three-cols-layout:last-of-type {\n    margin-right: 0;\n  }\n  @media only screen and (max-width: 500px) {\n    .oppia-about-page-container .oppia-about-three-cols-layout {\n      width: 100%;\n    }\n  }\n  .oppia-about-page-container .oppia-about-three-cols-feature,\n  .oppia-about-page-container .oppia-about-three-cols-feature p {\n    text-align: center;\n  }\n  .oppia-about-page-container .oppia-about-three-cols-feature,\n  .oppia-about-page-container .oppia-about-three-cols-feature h3 {\n    text-align: center;\n  }\n  .oppia-about-page-container .oppia-about-credits-letter-groups.three-col {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n    -webkit-column-gap: 20px;\n    -moz-column-gap: 20px;\n    column-gap: 20px;\n    margin: 0 0 10% 0;\n  }\n  .oppia-about-page-container .oppia-about-credits-letter-groups span {\n    font-size: 1.8em;\n  }\n\n  .oppia-about-page-container .oppia-about-credits-letter-groups ul li {\n    list-style-type: none;\n  }\n  .oppia-about-page-container .oppia-about-clearfix {\n    clear: both;\n    content: \"\";\n    display: table;\n  }\n  .oppia-about-page-container .oppia-about-otter {\n    width: 200px;\n  }\n  .oppia-about-page-container .oppia-about-otter-container {\n    bottom: -2.3em;\n    display: inline-block;\n    position: absolute;\n  }\n  .oppia-about-page-container .oppia-about-tab-text {\n    margin-top: -10px;\n  }\n  .oppia-about-page-container .oppia-license-link {\n    margin-top: -80px;\n    padding-top: 70px;\n  }\n  @media only screen and (max-width: 768px) {\n    .oppia-about-page-container .oppia-about-otter-container {\n      bottom: -1.8em;\n      left: -3em;\n    }\n    .oppia-about-page-container .oppia-about-otter {\n      width: 200px;\n    }\n  }\n  .oppia-about-page-container .oppia-about-otter-speech-card {\n    float: right;\n    width: 65%;\n  }\n  @media only screen and (max-width: 500px) {\n    .oppia-about-page-container .oppia-about-otter-speech-card {\n      width: 50%;\n    }\n  }\n  .oppia-about-page-container .oppia-about-page-extra-info {\n    height: 245px;\n  }\n</style>\n";
      /***/
    },

    /***/
    "DhAQ":
    /*!*****************************************!*\
      !*** ./core/templates/app.constants.ts ***!
      \*****************************************/

    /*! exports provided: AppConstants */

    /***/
    function DhAQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
        return AppConstants;
      });
      /* harmony import */


      var assets_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! assets/constants */
      "g/rd"); // Copyright 2019 The Oppia Authors. All Rights Reserved.
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
       * @fileoverview Shared constants for the Oppia module.
       */


      var AppConstants = Object.assign(Object.assign({}, assets_constants__WEBPACK_IMPORTED_MODULE_0__["default"]), {
        DEFAULT_TRANSLATIONS: {
          I18N_LIBRARY_PAGE_TITLE_FRAGMENT_FOR_WEB: 'Library',
          I18N_LIBRARY_LOADING: 'Loading',
          I18N_SIGNUP_PAGE_SUBTITLE: 'Registration',
          I18N_SIGNUP_PAGE_TITLE_FRAGMENT_FOR_WEB: 'Oppia',
          I18N_LIBRARY_SEARCH_PLACEHOLDER: 'What are you curious about?',
          I18N_LIBRARY_ALL_LANGUAGES: 'All Languages',
          I18N_LIBRARY_LANGUAGES_EN: 'English',
          I18N_LIBRARY_ALL_CATEGORIES: 'All Categories',
          I18N_TOPNAV_SIGN_IN: 'Sign in',
          I18N_SPLASH_PAGE_TITLE_FRAGMENT_FOR_WEB: 'Oppia | Free, Online and Interactive Lessons for Anyone',
          I18N_SIGNUP_REGISTRATION: 'Registration',
          I18N_SIGNUP_LOADING: 'Loading'
        },
        ACTIVITY_STATUS_PRIVATE: 'private',
        ACTIVITY_STATUS_PUBLIC: 'public',
        RULE_SUMMARY_WRAP_CHARACTER_COUNT: 30,

        /* Called when the learner moves to a new card that they haven't seen
           before. */
        EDITABLE_EXPLORATION_DATA_DRAFT_URL_TEMPLATE: '/createhandler/data/<exploration_id>?apply_draft=<apply_draft>',
        EDITABLE_EXPLORATION_DATA_URL_TEMPLATE: '/createhandler/data/<exploration_id>',
        EXPLORATION_DATA_URL_TEMPLATE: '/explorehandler/init/<exploration_id>',
        EXPLORATION_VERSION_DATA_URL_TEMPLATE: '/explorehandler/init/<exploration_id>?v=<version>',
        WARNING_TYPES: {
          // These must be fixed before the exploration can be saved.
          CRITICAL: 'critical',
          // These must be fixed before publishing an exploration to the public
          // library.
          ERROR: 'error'
        },
        STATE_ERROR_MESSAGES: {
          ADD_INTERACTION: 'Please add an interaction to this card.',
          STATE_UNREACHABLE: 'This card is unreachable.',
          UNABLE_TO_END_EXPLORATION: "There's no way to complete the exploration starting from this card. " + 'To fix this, make sure that the last card in the chain starting from' + " this one has an 'End Exploration' question type.",
          INCORRECT_SOLUTION: 'The current solution does not lead to another card.',
          UNRESOLVED_ANSWER: 'There is an answer among the top 10 which has no explicit feedback.'
        },
        EXPLORATION_SUMMARY_DATA_URL_TEMPLATE: '/explorationsummarieshandler/data',
        EXPLORATION_AND_SKILL_ID_PATTERN: /^[a-zA-Z0-9_-]+$/,
        // We use a slash because this character is forbidden in a state name.
        PLACEHOLDER_OUTCOME_DEST: '/',
        INTERACTION_DISPLAY_MODE_INLINE: 'inline',
        LOADING_INDICATOR_URL: '/activity/loadingIndicator.gif',
        OBJECT_EDITOR_URL_PREFIX: '/object_editor_template/',
        // Feature still in development.
        // NOTE TO DEVELOPERS: This should be synchronized with the value in feconf.
        ENABLE_ML_CLASSIFIERS: false,
        // Feature still in development.
        INFO_MESSAGE_SOLUTION_IS_INVALID_FOR_EXPLORATION: 'The current solution does not lead to another card.',
        PARAMETER_TYPES: {
          REAL: 'Real',
          UNICODE_STRING: 'UnicodeString'
        },
        // The maximum number of nodes to show in a row of the state graph.
        MAX_NODES_PER_ROW: 4,
        // The following variable must be at least 3. It represents the maximum
        // length, in characters, for the name of each node label in the state graph.
        MAX_NODE_LABEL_LENGTH: 15,
        // If an $http request fails with the following error codes, a warning is
        // displayed.
        FATAL_ERROR_CODES: [400, 401, 404, 500],
        // Do not modify these, for backwards-compatibility reasons. These strings are
        // used to identify components, to generate content ids, and to determine what
        // type of content a given content id is associated with. If you wish to
        // change one of these, a state migration of all existing content ids is
        // required. The component content type should be sufficiently small such that
        // the commit messages that use the content type strings do not exceed 375
        // characters (which is the maximum length of a commit message).
        COMPONENT_NAME_CONTENT: 'content',
        COMPONENT_NAME_FEEDBACK: 'feedback',
        COMPONENT_NAME_HINT: 'hint',
        COMPONENT_NAME_INTERACTION_CUSTOMIZATION_ARGS: 'ca',
        COMPONENT_NAME_RULE_INPUT: 'rule_input',
        COMPONENT_NAME_SOLUTION: 'solution',
        COMPONENT_NAME_EXPLANATION: 'explanation',
        COMPONENT_NAME_WORKED_EXAMPLE: {
          QUESTION: 'worked_example_question',
          EXPLANATION: 'worked_example_explanation'
        },
        ACTION_TYPE_EXPLORATION_START: 'ExplorationStart',
        ACTION_TYPE_ANSWER_SUBMIT: 'AnswerSubmit',
        ACTION_TYPE_EXPLORATION_QUIT: 'ExplorationQuit',
        ISSUE_TYPE_EARLY_QUIT: 'EarlyQuit',
        ISSUE_TYPE_MULTIPLE_INCORRECT_SUBMISSIONS: 'MultipleIncorrectSubmissions',
        ISSUE_TYPE_CYCLIC_STATE_TRANSITIONS: 'CyclicStateTransitions',
        // A block refers to a set of learner actions displayed together so that
        // they are part of the same context. If two consecutive learner actions are
        // from different states, we consider them unrelated. This constant refers to
        // the maximum number of such actions that can exist in one block. (Note that
        // all related actions are shown together, regardless of how many there are.)
        MAX_UNRELATED_ACTIONS_PER_BLOCK: 4,
        SITE_NAME: 'Oppia.org',
        DEFAULT_PROFILE_IMAGE_PATH: '/avatar/user_blue_72px.webp',
        LOGOUT_URL: '/logout',
        // TODO(vojtechjelinek): Move these to separate file later, after we establish
        // process to follow for Angular constants (#6731).
        SUBTOPIC_PAGE_EDITOR_DATA_URL_TEMPLATE: '/subtopic_page_editor_handler/data/<topic_id>/<subtopic_id>',
        EDITABLE_TOPIC_DATA_URL_TEMPLATE: '/topic_editor_handler/data/<topic_id>',
        LABEL_FOR_CLEARING_FOCUS: 'labelForClearingFocus',
        // TODO(bhenning): This constant should be provided by the backend.
        COLLECTION_DATA_URL_TEMPLATE: '/collection_handler/data/<collection_id>',
        ENTITY_TYPE: {
          COLLECTION: 'collection',
          EXPLORATION: 'exploration',
          TOPIC: 'topic',
          SKILL: 'skill',
          STORY: 'story',
          QUESTION: 'question'
        },
        ASSET_TYPE_AUDIO: 'audio',
        ASSET_TYPE_IMAGE: 'image',
        ASSET_TYPE_THUMBNAIL: 'thumbnail',
        AUDIO_UPLOAD_URL_TEMPLATE: '/createhandler/audioupload/<exploration_id>',
        IMAGE_UPLOAD_URL_TEMPLATE: '/createhandler/imageupload/<entity_type>/<entity_id>',
        MAX_NUM_AUDIO_FILES_TO_DOWNLOAD_SIMULTANEOUSLY: 3,
        MAX_NUM_IMAGE_FILES_TO_DOWNLOAD_SIMULTANEOUSLY: 3,
        IMAGE_CONTEXT: {
          EXPLORATION_SUGGESTIONS: 'exploration_suggestions',
          QUESTION_SUGGESTIONS: 'question_suggestions'
        },
        IMAGE_SAVE_DESTINATION_SERVER: 'imageSaveDestinationServer',
        IMAGE_SAVE_DESTINATION_LOCAL_STORAGE: 'imageSaveDestinationLocalStorage'
      });
      /***/
    },

    /***/
    "DmN5":
    /*!********************************************************************!*\
      !*** ./core/templates/domain/utilities/browser-checker.service.ts ***!
      \********************************************************************/

    /*! exports provided: BrowserCheckerService */

    /***/
    function DmN5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserCheckerService", function () {
        return BrowserCheckerService;
      });
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! services/contextual/window-ref.service */
      "AFwG");
      /* harmony import */


      var assets_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! assets/constants */
      "g/rd"); // Copyright 2017 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Utility service for checking web browser type.
       */


      var BrowserCheckerService = /*#__PURE__*/function () {
        function BrowserCheckerService(windowRef) {
          _classCallCheck(this, BrowserCheckerService);

          this.windowRef = windowRef;
        }

        _createClass(BrowserCheckerService, [{
          key: "_supportsSpeechSynthesis",
          value: function _supportsSpeechSynthesis() {
            var _this2 = this;

            if (this.windowRef.nativeWindow.hasOwnProperty('speechSynthesis')) {
              return speechSynthesis.getVoices().some(function (voice) {
                return assets_constants__WEBPACK_IMPORTED_MODULE_3__["default"].AUTOGENERATED_AUDIO_LANGUAGES.some(function (audioLanguage) {
                  if (voice.lang === audioLanguage.speechSynthesisCode || _this2._isMobileDevice() && voice.lang === audioLanguage.speechSynthesisCodeMobile) {
                    return true;
                  }
                });
              });
            }

            return false;
          }
        }, {
          key: "_isMobileDevice",
          value: function _isMobileDevice() {
            var userAgent = navigator.userAgent;
            return Boolean(userAgent.match(/iPhone/i)) || Boolean(userAgent.match(/Android/i));
          }
        }, {
          key: "supportsSpeechSynthesis",
          value: function supportsSpeechSynthesis() {
            return this._supportsSpeechSynthesis();
          }
        }, {
          key: "isMobileDevice",
          value: function isMobileDevice() {
            return this._isMobileDevice();
          }
          /**
           * Detects the type of browser from its user agent.
           *
           * Note that the returned string of this method should not be changed
           * since they are directly used for comparison in platform parameter
           * evaluation.
           *
           * @returns {string} - The name of the browser that is being used.
           */

        }, {
          key: "detectBrowserType",
          value: function detectBrowserType() {
            var userAgent = this.windowRef.nativeWindow.navigator.userAgent; // Note: The orders of the following if statements should not be changed
            // unless there is solid reason to do so. For example, the user agent of
            // Edge browser also contains 'Chrome' so it should be checked prior to
            // Chrome.
            // Per https://docs.microsoft.com/en-us/microsoft-edge/web-platform/user-agent-string
            // there are two types of tokens, 'edg' & 'Edge', for the Edge browser in
            // its user agent.

            if (userAgent.includes('edg') || userAgent.includes('Edge')) {
              return 'Edge';
            }

            if (userAgent.includes('Chrome')) {
              return 'Chrome';
            }

            if (userAgent.includes('Firefox')) {
              return 'Firefox';
            }

            if (userAgent.includes('Safari')) {
              return 'Safari';
            }

            return 'Others';
          }
        }]);

        return BrowserCheckerService;
      }();

      BrowserCheckerService.ctorParameters = function () {
        return [{
          type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]
        }];
      };

      BrowserCheckerService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]])], BrowserCheckerService);
      angular.module('oppia').factory('BrowserCheckerService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__["downgradeInjectable"])(BrowserCheckerService));
      /***/
    },

    /***/
    "GIqX":
    /*!*****************************************************************!*\
      !*** ./core/templates/pages/about-page/about-page.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AboutPageComponent */

    /***/
    function GIqX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
        return AboutPageComponent;
      });
      /* harmony import */


      var _raw_loader_about_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./about-page.component.html */
      "Ci4D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _about_page_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-page.constants */
      "qLlN");
      /* harmony import */


      var domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! domain/utilities/url-interpolation.service.ts */
      "X9eu");
      /* harmony import */


      var services_contextual_window_ref_service_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! services/contextual/window-ref.service.ts */
      "AFwG");
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO"); // Copyright 2016 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Component for the about page.
       */


      var AboutPageComponent = /*#__PURE__*/function () {
        function AboutPageComponent(urlInterpolationService, windowRef) {
          _classCallCheck(this, AboutPageComponent);

          this.urlInterpolationService = urlInterpolationService;
          this.windowRef = windowRef;
          this.allCredits = [];
          this.listOfNamesToThank = ['Alex Kauffmann', 'Allison Barros', 'Amy Latten', 'Brett Barros', 'Crystal Kwok', 'Daniel Hernandez', 'Divya Siddarth', 'Ilwon Yoon', 'Jennifer Chen', 'John Cox', 'John Orr', 'Katie Berlent', 'Michael Wawszczak', 'Mike Gainer', 'Neil Fraser', 'Noah Falstein', 'Nupur Jain', 'Peter Norvig', 'Philip Guo', 'Piotr Mitros', 'Rachel Chen', 'Rahim Nathwani', 'Robyn Choo', 'Tricia Ngoon', 'Vikrant Nanda', 'Vinamrata Singal', 'Yarin Feigenbaum']; // Define constant for each tab on the page.

          this.TAB_ID_ABOUT = 'about';
          this.TAB_ID_FOUNDATION = 'foundation';
          this.TAB_ID_CREDITS = 'credits';
          this.ALLOWED_TABS = [this.TAB_ID_ABOUT, this.TAB_ID_FOUNDATION, this.TAB_ID_CREDITS];
        }

        _createClass(AboutPageComponent, [{
          key: "getCredits",
          value: function getCredits(startLetter) {
            var results = _about_page_constants__WEBPACK_IMPORTED_MODULE_2__["AboutPageConstants"].CREDITS_CONSTANTS.filter(function (credit) {
              return credit.startsWith(startLetter);
            }).sort();

            return results;
          }
        }, {
          key: "onTabClick",
          value: function onTabClick(tabName) {
            this.windowRef.nativeWindow.location.hash = '#' + tabName;
            this.activeTabName = tabName;
            return this.windowRef.nativeWindow;
          }
        }, {
          key: "getStaticImageUrl",
          value: function getStaticImageUrl(imagePath) {
            return this.urlInterpolationService.getStaticImageUrl(imagePath);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.activeTabName = this.TAB_ID_ABOUT;
            this.allCredits = [];
            var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

            var _iterator = _createForOfIteratorHelper(letters),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var letter = _step.value;
                var names = this.getCredits(letter);

                if (names.length > 0) {
                  this.allCredits.push({
                    letter: letter,
                    names: names
                  });
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var hash = this.windowRef.nativeWindow.location.hash.slice(1);

            if (hash === 'license') {
              this.activeTabName = this.TAB_ID_FOUNDATION;
            } else if (this.ALLOWED_TABS.includes(hash)) {
              this.activeTabName = hash;
            }

            this.listOfNames = this.listOfNamesToThank.slice(0, this.listOfNamesToThank.length - 1).join(', ') + ' & ' + this.listOfNamesToThank[this.listOfNamesToThank.length - 1];
            this.aboutPageMascotImgUrl = this.urlInterpolationService.getStaticImageUrl('/general/about_page_mascot.webp');

            this.windowRef.nativeWindow.onhashchange = function () {
              var hashChange = _this3.windowRef.nativeWindow.location.hash.slice(1);

              if (hashChange === 'license') {
                _this3.activeTabName = _this3.TAB_ID_FOUNDATION;

                _this3.windowRef.nativeWindow.location.reload(true);
              } else if (_this3.ALLOWED_TABS.includes(hashChange)) {
                _this3.activeTabName = hashChange;
              }
            };
          }
        }]);

        return AboutPageComponent;
      }();

      AboutPageComponent.ctorParameters = function () {
        return [{
          type: domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_3__["UrlInterpolationService"]
        }, {
          type: services_contextual_window_ref_service_ts__WEBPACK_IMPORTED_MODULE_4__["WindowRef"]
        }];
      };

      AboutPageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'about-page',
        template: _raw_loader_about_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_3__["UrlInterpolationService"], services_contextual_window_ref_service_ts__WEBPACK_IMPORTED_MODULE_4__["WindowRef"]])], AboutPageComponent);
      angular.module('oppia').directive('aboutPage', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_5__["downgradeComponent"])({
        component: AboutPageComponent
      }));
      /***/
    },

    /***/
    "JNAW":
    /*!***************************************************************!*\
      !*** ./core/templates/pages/error-pages/error-page.module.ts ***!
      \***************************************************************/

    /*! exports provided: ErrorPageModule */

    /***/
    function JNAW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function () {
        return ErrorPageModule;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error-page.component */
      "PG8K");
      /* harmony import */


      var services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! services/request-interceptor.service */
      "Nk/g");
      /* harmony import */


      var services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! services/platform-feature.service */
      "YL3y");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var filters_translate_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! filters/translate.pipe.module */
      "P4gF"); // Copyright 2019 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      /**
       * @fileoverview Module for the error page.
       */


      var ErrorPageModule = /*#__PURE__*/function () {
        function ErrorPageModule() {
          _classCallCheck(this, ErrorPageModule);
        }

        _createClass(ErrorPageModule, [{
          key: "ngDoBootstrap",
          value: // Empty placeholder method to satisfy the `Compiler`.
          function ngDoBootstrap() {}
        }]);

        return ErrorPageModule;
      }();

      ErrorPageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], filters_translate_pipe_module__WEBPACK_IMPORTED_MODULE_7__["TranslatePipeModule"]],
        declarations: [_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]],
        entryComponents: [_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
          useClass: services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["RequestInterceptor"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
          useFactory: services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__["platformFeatureInitFactory"],
          deps: [services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__["PlatformFeatureService"]],
          multi: true
        }]
      })], ErrorPageModule);
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__["platformBrowserDynamic"])().bootstrapModule(ErrorPageModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "NV4+":
    /*!**********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/components/common-layout-directives/common-elements/background-banner.component.html ***!
      \**********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"w-100 text-center oppia-background-banner\">\n  <img [src]=\"bannerImageFileUrl\" align=\"center\" class=\"oppia-background-image\" alt=\"\">\n</div>\n<style>\n  .oppia-background-banner {\n    background-color: #aed2e9;\n    overflow: hidden;\n    position: absolute;\n  }\n  .oppia-background-banner .oppia-background-image {\n    max-width: 3000px;\n    top: 65px;\n    width: 3000px;\n  }\n</style>\n";
      /***/
    },

    /***/
    "Navo":
    /*!*********************************************************************!*\
      !*** ./core/templates/services/translations-backend-api.service.ts ***!
      \*********************************************************************/

    /*! exports provided: TranslationsBackendApiService */

    /***/
    function Navo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationsBackendApiService", function () {
        return TranslationsBackendApiService;
      });
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // Copyright 2020 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      /**
       * @fileoverview Translations backend api service.
       */


      var TranslationsBackendApiService = /*#__PURE__*/function () {
        function TranslationsBackendApiService(http) {
          _classCallCheck(this, TranslationsBackendApiService);

          this.http = http;
          this.prefix = '/assets/i18n/';
          this.suffix = '.json';
        }

        _createClass(TranslationsBackendApiService, [{
          key: "fetchTranslationsAsync",
          value: function fetchTranslationsAsync(languageCode) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.http.get("".concat(this.prefix).concat(languageCode).concat(this.suffix)).toPromise());

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return TranslationsBackendApiService;
      }();

      TranslationsBackendApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      TranslationsBackendApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], TranslationsBackendApiService);
      angular.module('oppia').factory('TranslationsBackendApiService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__["downgradeInjectable"])(TranslationsBackendApiService));
      /***/
    },

    /***/
    "Nk/g":
    /*!****************************************************************!*\
      !*** ./core/templates/services/request-interceptor.service.ts ***!
      \****************************************************************/

    /*! exports provided: MockCsrfTokenService, RequestInterceptor */

    /***/
    function NkG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MockCsrfTokenService", function () {
        return MockCsrfTokenService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function () {
        return RequestInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // Copyright 2019 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Http Interceptor.
       */


      var MockCsrfTokenService = /*#__PURE__*/function () {
        function MockCsrfTokenService() {
          _classCallCheck(this, MockCsrfTokenService);

          this.tokenPromise = null;
        }

        _createClass(MockCsrfTokenService, [{
          key: "initializeToken",
          value: function initializeToken() {
            if (this.tokenPromise !== null) {
              throw new Error('Token request has already been made');
            } // TODO(#8035): Remove the use of $.ajax and hence the ts-ignore
            // in csrf-token.service.spec.ts once all the services are migrated
            // We use jQuery here instead of Angular's $http, since the latter creates
            // a circular dependency.


            this.tokenPromise = $.ajax({
              url: '/csrfhandler',
              type: 'GET',
              dataType: 'text',
              dataFilter: function dataFilter(data) {
                // Remove the protective XSSI (cross-site scripting inclusion) prefix.
                var actualData = data.substring(5);
                return JSON.parse(actualData);
              }
            }).then(function (response) {
              return response.token;
            });
          }
        }, {
          key: "getTokenAsync",
          value: function getTokenAsync() {
            if (this.tokenPromise === null) {
              throw new Error('Token needs to be initialized');
            }

            return this.tokenPromise;
          }
        }]);

        return MockCsrfTokenService;
      }();

      MockCsrfTokenService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MockCsrfTokenService);

      var RequestInterceptor = /*#__PURE__*/function () {
        function RequestInterceptor(csrf) {
          _classCallCheck(this, RequestInterceptor);

          this.csrf = csrf;
        }

        _createClass(RequestInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var csrf = this.csrf;

            try {
              csrf.initializeToken();
            } catch (e) {
              if (e.message !== 'Token request has already been made') {
                throw e;
              }
            }

            if (request.body) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.csrf.getTokenAsync()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (token) {
                if (request.method === 'POST' || request.method === 'PUT') {
                  // If the body of the http request created is already in FormData
                  // form, no need to create the FormData object here.
                  if (!(request.body instanceof FormData)) {
                    var body = new FormData();
                    body.append('payload', JSON.stringify(request.body)); // This throws "Cannot assign to 'body' because it is
                    // a read-only property". We need to manually suprress this
                    // error because this is a request interceptor and we need to
                    // to modify the contents of the request.
                    // @ts-ignore

                    request.body = body;
                  }

                  request.body.append('csrf_token', token);
                  request.body.append('source', document.URL);
                } else {
                  // This throws "Cannot assign to 'body' because it is
                  // a read-only property". We need to manually suprress this
                  // error because this is a request interceptor and we need to
                  // to modify the contents of the request.
                  // @ts-ignore
                  request.body = {
                    csrf_token: token,
                    source: document.URL,
                    payload: JSON.stringify(request.body)
                  };
                }

                return next.handle(request);
              }));
            } else {
              return next.handle(request);
            }
          }
        }]);

        return RequestInterceptor;
      }();

      RequestInterceptor.ctorParameters = function () {
        return [{
          type: MockCsrfTokenService
        }];
      };

      RequestInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [MockCsrfTokenService])], RequestInterceptor);
      /***/
    },

    /***/
    "ON6u":
    /*!**************************************************************!*\
      !*** ./core/templates/pages/about-page/about-page.module.ts ***!
      \**************************************************************/

    /*! exports provided: AboutPageModule */

    /***/
    function ON6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
        return AboutPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about-page.component */
      "GIqX");
      /* harmony import */


      var services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! services/request-interceptor.service */
      "Nk/g");
      /* harmony import */


      var services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! services/platform-feature.service */
      "YL3y");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var components_common_layout_directives_common_elements_background_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! components/common-layout-directives/common-elements/background-banner.component */
      "vzwN");
      /* harmony import */


      var services_translate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! services/translate.service */
      "lswZ");
      /* harmony import */


      var services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! services/utils.service */
      "RY2A");
      /* harmony import */


      var filters_translate_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! filters/translate.pipe.module */
      "P4gF"); // Copyright 2019 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      /**
       * @fileoverview Module for the about page.
       */
      // import { SharedComponentsModule } from 'components/shared-component.module';
      // import { OppiaAngularRootComponent } from
      //   'components/oppia-angular-root.component';


      var AboutPageModule = /*#__PURE__*/function () {
        function AboutPageModule() {
          _classCallCheck(this, AboutPageModule);
        }

        _createClass(AboutPageModule, [{
          key: "ngDoBootstrap",
          value: // Empty placeholder method to satisfy the `Compiler`.
          function ngDoBootstrap() {}
        }]);

        return AboutPageModule;
      }();

      AboutPageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], filters_translate_pipe_module__WEBPACK_IMPORTED_MODULE_10__["TranslatePipeModule"] // SharedComponentsModule
        ],
        declarations: [_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"], components_common_layout_directives_common_elements_background_banner_component__WEBPACK_IMPORTED_MODULE_7__["BackgroundBannerComponent"]],
        entryComponents: [_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"], components_common_layout_directives_common_elements_background_banner_component__WEBPACK_IMPORTED_MODULE_7__["BackgroundBannerComponent"]],
        providers: [services_translate_service__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["RequestInterceptor"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__["platformFeatureInitFactory"],
          deps: [services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__["PlatformFeatureService"]],
          multi: true
        }]
      })], AboutPageModule);
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__["platformBrowserDynamic"])().bootstrapModule(AboutPageModule)["catch"](function (err) {
        return console.log(err);
      }); // Const downgradedModule = downgradeModule(bootstrapFn);
      // declare var angular: ng.IAngularStatic;
      // angular.module('oppia').requires.push(downgradedModule);
      // angular.module('oppia').directive(
      //   // This directive is the downgraded version of the Angular component to
      //   // bootstrap the Angular 8.
      //   'oppiaAngularRoot',
      //   downgradeComponent({
      //     component: OppiaAngularRootComponent
      //   }) as angular.IDirectiveFactory);

      /***/
    },

    /***/
    "P4gF":
    /*!*********************************************************!*\
      !*** ./core/templates/filters/translate.pipe.module.ts ***!
      \*********************************************************/

    /*! exports provided: TranslatePipeModule */

    /***/
    function P4gF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslatePipeModule", function () {
        return TranslatePipeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _translate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./translate.pipe */
      "BkEn");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var TranslatePipeModule = function TranslatePipeModule() {
        _classCallCheck(this, TranslatePipeModule);
      };

      TranslatePipeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_translate_pipe__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        exports: [_translate_pipe__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]]
      })], TranslatePipeModule);
      /***/
    },

    /***/
    "PG8K":
    /*!******************************************************************!*\
      !*** ./core/templates/pages/error-pages/error-page.component.ts ***!
      \******************************************************************/

    /*! exports provided: ErrorPageComponent */

    /***/
    function PG8K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
        return ErrorPageComponent;
      });
      /* harmony import */


      var _raw_loader_error_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./error-page.component.html */
      "tkYy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! domain/utilities/url-interpolation.service */
      "X9eu");
      /* harmony import */


      var services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! services/page-title.service */
      "VeBn"); // Copyright 2016 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Component for the error page.
       */


      var ErrorPageComponent = /*#__PURE__*/function () {
        function ErrorPageComponent(urlInterpolationService, pageTitleService) {
          _classCallCheck(this, ErrorPageComponent);

          this.urlInterpolationService = urlInterpolationService;
          this.pageTitleService = pageTitleService;
        }

        _createClass(ErrorPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pageTitleService.setPageTitle('Error ' + this.statusCode + ' - Oppia');
          }
        }, {
          key: "getStaticImageUrl",
          value: function getStaticImageUrl(imagePath) {
            return this.urlInterpolationService.getStaticImageUrl(imagePath);
          }
        }, {
          key: "getStatusCode",
          value: function getStatusCode() {
            return Number(this.statusCode);
          }
        }]);

        return ErrorPageComponent;
      }();

      ErrorPageComponent.ctorParameters = function () {
        return [{
          type: domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_2__["UrlInterpolationService"]
        }, {
          type: services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"]
        }];
      };

      ErrorPageComponent.propDecorators = {
        statusCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ErrorPageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error-page',
        template: _raw_loader_error_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_2__["UrlInterpolationService"], services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"]])], ErrorPageComponent);
      /***/
    },

    /***/
    "RY2A":
    /*!**************************************************!*\
      !*** ./core/templates/services/utils.service.ts ***!
      \**************************************************/

    /*! exports provided: UtilsService */

    /***/
    function RY2A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
        return UtilsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO"); // Copyright 2014 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      /**
       * @fileoverview Service for storing all generic functions which have to be
       * used at multiple places in the codebase.
       */


      var UtilsService = /*#__PURE__*/function () {
        function UtilsService() {
          _classCallCheck(this, UtilsService);
        }

        _createClass(UtilsService, [{
          key: "isDefined",
          value:
          /**
           * Determines if a variable is defined and not null.
           * @param {Object, Array<Object>, string, string[], undefined, null}value
           * @return {boolean} - true if object is defined, false otherwise.
           */
          function isDefined(value) {
            return typeof value !== 'undefined' && value !== null;
          } // The function here is to check whether the argument is empty or not. So, we
          // cannot have any specific type defined for the argument and the argument
          // is given a generic type of Object.

          /**
           * @param {Object} obj - the object to be checked.
           * @return {boolean} - true if object is empty, false otherwise.
           */

        }, {
          key: "isEmpty",
          value: function isEmpty(obj) {
            for (var property in obj) {
              if (obj.hasOwnProperty(property)) {
                return false;
              }
            }

            return true;
          } // The function here is to check whether the argument is a string. So, we
          // cannot have any specific type defined for the argument and the argument
          // is given a generic type of Object.

          /**
           * @param {Object} input - the object to be checked.
           * @return {boolean} - true if input is string, false otherwise.
           */

        }, {
          key: "isString",
          value: function isString(input) {
            return typeof input === 'string' || input instanceof String;
          } // The function here is to check whether the two arguments are equivalent or
          // not empty or not. So, we cannot have any specific type defined for the
          // arguments and the arguments are given a generic type of Object.

          /**
           * @param {Object} a - the first object to be compared.
           * @param {Object} b - the second object to be compared.
           * @return {boolean} - true if a is equivalent to b, false otherwise.
           */

        }, {
          key: "isEquivalent",
          value: function isEquivalent(a, b) {
            if (a === null || b === null) {
              return a === b;
            }

            if (typeof a !== typeof b) {
              return false;
            }

            if (typeof a !== 'object') {
              return a === b;
            } // Create arrays of property names.


            var aProps = Object.getOwnPropertyNames(a);
            var bProps = Object.getOwnPropertyNames(b);

            if (aProps.length !== bProps.length) {
              return false;
            }

            for (var i = 0; i < aProps.length; i++) {
              var propName = aProps[i];

              if (!this.isEquivalent(a[propName], b[propName])) {
                return false;
              }
            }

            return true;
          } // Determines if the provided value is an Error.
          // Loosely based on https://www.npmjs.com/package/iserror

          /**
           * @param {Object} value - the object to be checked.
           * @return {boolean} - true if value is an Error object, false otherwise.
           */

        }, {
          key: "isError",
          value: function isError(value) {
            switch (Object.prototype.toString.call(value)) {
              case '[object Error]':
                return true;

              case '[object Exception]':
                return true;

              case '[object DOMException]':
                return true;

              default:
                return value instanceof Error;
            }
          }
        }, {
          key: "isOverflowing",
          value: function isOverflowing(element) {
            if (!element) {
              return false;
            } else {
              return element.offsetWidth < element.scrollWidth || element.offsetHeight < element.scrollHeight;
            }
          }
        }]);

        return UtilsService;
      }();

      UtilsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })], UtilsService);
      angular.module('oppia').factory('UtilsService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__["downgradeInjectable"])(UtilsService));
      /***/
    },

    /***/
    "RdYu":
    /*!*************************************************************!*\
      !*** ./core/templates/pages/app-page/app-root.component.ts ***!
      \*************************************************************/

    /*! exports provided: AppRootComponent */

    /***/
    function RdYu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRootComponent", function () {
        return AppRootComponent;
      });
      /* harmony import */


      var _raw_loader_app_root_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app-root.component.html */
      "lGsL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppRootComponent = function AppRootComponent() {
        _classCallCheck(this, AppRootComponent);
      };

      AppRootComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_root_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], AppRootComponent);
      /***/
    },

    /***/
    "U4ot":
    /*!***************************************************!*\
      !*** ./core/templates/services/alerts.service.ts ***!
      \***************************************************/

    /*! exports provided: AlertsService */

    /***/
    function U4ot(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertsService", function () {
        return AlertsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! services/contextual/logger.service */
      "3eoD"); // Copyright 2016 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Factory for handling warnings and info messages.
       */


      var AlertsService = /*#__PURE__*/function () {
        function AlertsService(log) {
          _classCallCheck(this, AlertsService);

          this.log = log;
          /**
           * Each element in each of the arrays here is an object with two keys:
           *   - type:  a string specifying the type of message or warning.
           *            Possible types - "warning", "info" or "success".
           *   - content: a string containing the warning or message.
           */

          /**
           * Array of "warning" messages.
           */

          this.warnings = new Array();
          /**
           * Array of "success" or "info" messages.
           */

          this.messages = new Array(); // This is to prevent infinite loops.

          this.MAX_TOTAL_WARNINGS = 10;
          this.MAX_TOTAL_MESSAGES = 10;
        }
        /**
         * Adds a warning message.
         * @param {string} warning - The warning message to display.
         */


        _createClass(AlertsService, [{
          key: "addWarning",
          value: function addWarning(warning) {
            this.log.error(warning);

            if (this.warnings.length >= this.MAX_TOTAL_WARNINGS) {
              return;
            }

            this.warnings.push({
              type: 'warning',
              content: warning
            });
          }
          /**
           * Adds a warning in the same way as addWarning(), except it also throws an
           * exception to cause a hard failure in the frontend.
           * @param {string} warning - The warning message to display.
           */

        }, {
          key: "fatalWarning",
          value: function fatalWarning(warning) {
            this.addWarning(warning);
            throw new Error(warning);
          }
          /**
           * Deletes the warning from the warnings list.
           * @param {Object} warningObject - The warning message to be deleted.
           */

        }, {
          key: "deleteWarning",
          value: function deleteWarning(warningObject) {
            var warnings = this.warnings;
            var newWarnings = [];

            for (var i = 0; i < warnings.length; i++) {
              if (warnings[i].content !== warningObject.content) {
                newWarnings.push(warnings[i]);
              }
            }

            this.warnings = newWarnings;
          }
          /**
           * Clears all warnings.
           */

        }, {
          key: "clearWarnings",
          value: function clearWarnings() {
            this.warnings = [];
          }
          /**
           * Adds a message, can be info messages or success messages.
           * @param {string} type - Type of message
           * @param {string} message - Message content
           * @param {number|undefined} timeoutMilliseconds - Timeout for the toast.
           */

        }, {
          key: "addMessage",
          value: function addMessage(type, message, timeoutMilliseconds) {
            if (this.messages.length >= this.MAX_TOTAL_MESSAGES) {
              return;
            }

            this.messages.push({
              type: type,
              content: message,
              timeout: timeoutMilliseconds
            });
          }
          /**
           * Deletes the message from the messages list.
           * @param {Object} messageObject - Message to be deleted.
           */

        }, {
          key: "deleteMessage",
          value: function deleteMessage(messageObject) {
            var messages = this.messages;
            var newMessages = [];

            for (var i = 0; i < messages.length; i++) {
              if (messages[i].type !== messageObject.type || messages[i].content !== messageObject.content) {
                newMessages.push(messages[i]);
              }
            }

            this.messages = newMessages;
          }
          /**
           * Adds an info message.
           * @param {string} message - Info message to display.
           * @param {number|undefined} timeoutMilliseconds - Timeout for the toast.
           */

        }, {
          key: "addInfoMessage",
          value: function addInfoMessage(message, timeoutMilliseconds) {
            if (timeoutMilliseconds === undefined) {
              timeoutMilliseconds = 1500;
            }

            this.addMessage('info', message, timeoutMilliseconds);
          }
          /**
           * Adds a success message.
           * @param {string} message - Success message to display
           * @param {number|undefined} timeoutMilliseconds - Timeout for the toast.
           */

        }, {
          key: "addSuccessMessage",
          value: function addSuccessMessage(message, timeoutMilliseconds) {
            if (timeoutMilliseconds === undefined) {
              timeoutMilliseconds = 1500;
            }

            this.addMessage('success', message, timeoutMilliseconds);
          }
          /**
           * Clears all messages.
           */

        }, {
          key: "clearMessages",
          value: function clearMessages() {
            this.messages = [];
          }
        }]);

        return AlertsService;
      }();

      AlertsService.ctorParameters = function () {
        return [{
          type: services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]
        }];
      };

      AlertsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])], AlertsService);
      angular.module('oppia').factory('AlertsService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__["downgradeInjectable"])(AlertsService));
      /***/
    },

    /***/
    "UB+c":
    /*!****************************************************************************************!*\
      !*** ./core/templates/domain/platform_feature/platform-feature-backend-api.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: PlatformFeatureBackendApiService */

    /***/
    function UBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatformFeatureBackendApiService", function () {
        return PlatformFeatureBackendApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var domain_platform_feature_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! domain/platform_feature/feature-status-summary.model */
      "eEg9");
      /* harmony import */


      var domain_platform_feature_platform_feature_domain_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! domain/platform_feature/platform-feature-domain.constants */
      "02qT"); // Copyright 2020 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      /**
       * @fileoverview Service to get feature flags.
       */


      var PlatformFeatureBackendApiService = /*#__PURE__*/function () {
        function PlatformFeatureBackendApiService(http) {
          _classCallCheck(this, PlatformFeatureBackendApiService);

          this.http = http;
        }
        /**
         * Gets the feature flags.
         *
         * @param {ClientContext} context - The client side context for feature flag
         * evlauation.
         *
         * @returns {Promise<FeatureStatusSummary>} - A promise that resolves to
         * the feature status summary.
         */


        _createClass(PlatformFeatureBackendApiService, [{
          key: "fetchFeatureFlags",
          value: function fetchFeatureFlags(context) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var backendDict;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.http.get(domain_platform_feature_platform_feature_domain_constants__WEBPACK_IMPORTED_MODULE_4__["PlatformFeatureDomainConstants"].PLATFORM_FEATURES_EVALUATION_HANDLER_URL, {
                        params: Object.assign({}, context.toBackendDict())
                      }).toPromise();

                    case 2:
                      backendDict = _context2.sent;
                      return _context2.abrupt("return", domain_platform_feature_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_3__["FeatureStatusSummary"].createFromBackendDict(backendDict));

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return PlatformFeatureBackendApiService;
      }();

      PlatformFeatureBackendApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      PlatformFeatureBackendApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], PlatformFeatureBackendApiService);
      angular.module('oppia').factory('PlatformFeatureBackendApiService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__["downgradeInjectable"])(PlatformFeatureBackendApiService));
      /***/
    },

    /***/
    "VeBn":
    /*!*******************************************************!*\
      !*** ./core/templates/services/page-title.service.ts ***!
      \*******************************************************/

    /*! exports provided: PageTitleService */

    /***/
    function VeBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageTitleService", function () {
        return PageTitleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO"); // Copyright 2019 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Service to set and get the title of the page.
       */


      var PageTitleService = /*#__PURE__*/function () {
        function PageTitleService(metaTagService, titleService) {
          _classCallCheck(this, PageTitleService);

          this.metaTagService = metaTagService;
          this.titleService = titleService;
          this.pageTitleForMobile = null;
          this.pageSubtitleForMobile = null;
        }

        _createClass(PageTitleService, [{
          key: "setPageTitle",
          value: function setPageTitle(title) {
            this.titleService.setTitle(title);
          }
        }, {
          key: "getPageTitle",
          value: function getPageTitle() {
            return this.titleService.getTitle();
          }
          /**
           * Updates the description meta tag in the current HTML page
           * with the provided content.
           */

        }, {
          key: "updateMetaTag",
          value: function updateMetaTag(content) {
            this.metaTagService.updateTag({
              name: 'description',
              content: content
            });
            this.metaTagService.updateTag({
              itemprop: 'description',
              content: content
            });
            this.metaTagService.updateTag({
              property: 'og:description',
              content: content
            });
          }
        }, {
          key: "setPageTitleForMobileView",
          value: function setPageTitleForMobileView(title) {
            this.pageTitleForMobile = title;
          }
        }, {
          key: "setPageSubtitleForMobileView",
          value: function setPageSubtitleForMobileView(subtitle) {
            this.pageSubtitleForMobile = subtitle;
          }
        }, {
          key: "getPageTitleForMobileView",
          value: function getPageTitleForMobileView() {
            return this.pageTitleForMobile;
          }
        }, {
          key: "getPageSubtitleForMobileView",
          value: function getPageSubtitleForMobileView() {
            return this.pageSubtitleForMobile;
          }
        }]);

        return PageTitleService;
      }();

      PageTitleService.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }];
      };

      PageTitleService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])], PageTitleService);
      angular.module('oppia').factory('PageTitleService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__["downgradeInjectable"])(PageTitleService));
      /***/
    },

    /***/
    "Wxm2":
    /*!***********************************************************!*\
      !*** ./core/templates/services/contextual/url.service.ts ***!
      \***********************************************************/

    /*! exports provided: UrlService */

    /***/
    function Wxm2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlService", function () {
        return UrlService;
      });
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var assets_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! assets/constants */
      "g/rd");
      /* harmony import */


      var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! services/contextual/window-ref.service */
      "AFwG"); // Copyright 2014 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Service for manipulating the page URL. Also allows
       * functions on $window to be mocked in unit tests.
       */


      var UrlService = /*#__PURE__*/function () {
        function UrlService(windowRef) {
          _classCallCheck(this, UrlService);

          this.windowRef = windowRef;
        }
        /**
         * This function is used to find the current location
         * of the window.
         * @return {boolean} the current location.
         */


        _createClass(UrlService, [{
          key: "getCurrentLocation",
          value: function getCurrentLocation() {
            return this.windowRef.nativeWindow.location;
          }
          /**
           * This function is used to find the current query string.
           * @return {boolean} the current query string.
           */

        }, {
          key: "getCurrentQueryString",
          value: function getCurrentQueryString() {
            return this.getCurrentLocation().search;
          }
          /* As params[key] is overwritten, if query string has multiple fieldValues
             for same fieldName, use getQueryFieldValuesAsList(fieldName) to get it
             in array form. */

          /* This function returns an object which has dynamic keys
           since the keys generated depend on the URL being provided.
          So exact type of this function can not be determined
          https://github.com/oppia/oppia/pull/7834#issuecomment-547896982 */

        }, {
          key: "getUrlParams",
          value: function getUrlParams() {
            var params = {};
            this.getCurrentQueryString().replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
              return params[decodeURIComponent(key)] = decodeURIComponent(value);
            });
            return params;
          }
          /**
           * This function is used to check whether the url is framed.
           * @return {boolean} whether the url is framed.
           */

        }, {
          key: "isIframed",
          value: function isIframed() {
            var pathname = this.getPathname();
            var urlParts = pathname.split('/');
            return urlParts[1] === 'embed';
          }
          /**
           * This function is used to find the current path name.
           * @return {string} the current path name.
           */

        }, {
          key: "getPathname",
          value: function getPathname() {
            return this.getCurrentLocation().pathname;
          }
          /**
           * This function is used to find the topic id from url.
           * @return {string} the topic id.
           * @throws Will throw an error if the url is invalid.
           */

        }, {
          key: "getTopicIdFromUrl",
          value: function getTopicIdFromUrl() {
            var pathname = this.getPathname();

            if (pathname.match(/\/topic_editor\/(\w|-){12}/g)) {
              return pathname.split('/')[2];
            }

            throw new Error('Invalid topic id url');
          }
          /**
           * This function is used to find the topic URL fragment
           * from the learner's url.
           * @return {string} the topic URL fragment.
           * @throws Will throw an error if the url is invalid.
           */

        }, {
          key: "getTopicUrlFragmentFromLearnerUrl",
          value: function getTopicUrlFragmentFromLearnerUrl() {
            var pathname = this.getPathname();

            if (pathname.startsWith('/learn')) {
              return decodeURIComponent(pathname.split('/')[3]);
            } else if (pathname.startsWith('/explore')) {
              // The following section is for getting the URL fragment from the
              // exploration player.
              if (this.getUrlParams().hasOwnProperty('topic_url_fragment') && this.getUrlParams().topic_url_fragment.match(assets_constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALID_URL_FRAGMENT_REGEX)) {
                return this.getUrlParams().topic_url_fragment;
              }
            } else {
              throw new Error('Invalid URL for topic');
            }
          }
        }, {
          key: "getStoryUrlFragmentFromLearnerUrl",
          value: function getStoryUrlFragmentFromLearnerUrl() {
            var pathname = this.getPathname(); // The following segment is for getting the fragment from the new learner
            // pages.

            if (pathname.startsWith('/learn') && pathname.match(/\/story\/|\/review-test\//g)) {
              return decodeURIComponent(pathname.split('/')[5]);
            } // The following section is for getting the URL fragment from the
            // exploration player.


            if (pathname.startsWith('/explore')) {
              if (this.getUrlParams().hasOwnProperty('story_url_fragment') && this.getUrlParams().story_url_fragment.match(assets_constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALID_URL_FRAGMENT_REGEX)) {
                return this.getUrlParams().story_url_fragment;
              }
            } // Shouldn't throw an error, since this is called whenever an exploration
            // starts, to check if it is linked to a story.


            return null;
          }
        }, {
          key: "getSubtopicUrlFragmentFromLearnerUrl",
          value: function getSubtopicUrlFragmentFromLearnerUrl() {
            var pathname = this.getPathname();

            if (pathname.startsWith('/learn') && pathname.includes('/revision')) {
              return decodeURIComponent(pathname.split('/')[5]);
            }

            throw new Error('Invalid URL for subtopic');
          }
        }, {
          key: "getClassroomUrlFragmentFromLearnerUrl",
          value: function getClassroomUrlFragmentFromLearnerUrl() {
            var pathname = this.getPathname();

            if (pathname.startsWith('/learn')) {
              return decodeURIComponent(pathname.split('/')[2]);
            } else if (pathname.startsWith('/explore')) {
              // The following section is for getting the URL fragment from the
              // exploration player.
              if (this.getUrlParams().hasOwnProperty('classroom_url_fragment') && this.getUrlParams().classroom_url_fragment.match(assets_constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALID_URL_FRAGMENT_REGEX)) {
                return this.getUrlParams().classroom_url_fragment;
              }
            } else {
              throw new Error('Invalid URL for classroom');
            }
          }
          /**
           * This function is used to find the subtopic name from the learner's URL.
           * @return {string} the subtopic name.
           * @throws Will throw an error if the url for practice session is invalid.
           */

        }, {
          key: "getSelectedSubtopicsFromUrl",
          value: function getSelectedSubtopicsFromUrl() {
            var pathname = this.getPathname();
            var queryStrings = this.getCurrentQueryString().split('=');

            if (pathname.match(/\/practice/g) && queryStrings.length === 2) {
              return decodeURIComponent(queryStrings[1]);
            }

            throw new Error('Invalid URL for practice session');
          }
          /**
           * This function is used to find the classroom URL fragment from the learner's
           * URL.
           * @return {string} the classroom URL fragment.
           * @throws Will throw an error if the URL is invalid.
           */

        }, {
          key: "getClassroomUrlFragmentFromUrl",
          value: function getClassroomUrlFragmentFromUrl() {
            var pathname = this.getPathname();
            var argumentsArray = pathname.split('/');

            if (pathname.startsWith('/learn') && argumentsArray.length === 3) {
              return decodeURIComponent(pathname.split('/')[2]);
            }

            throw new Error('Invalid URL for classroom');
          }
          /**
           * This function is used to find the subtopic id from the learner's url.
           * @return {string} the subtopic id.
           * @throws Will throw an error if the url is invalid.
           */

        }, {
          key: "getSubtopicIdFromUrl",
          value: function getSubtopicIdFromUrl() {
            var pathname = this.getPathname();
            var argumentsArray = pathname.split('/');

            if (pathname.match(/\/revision/g) && argumentsArray.length === 6) {
              return decodeURIComponent(argumentsArray[5]);
            }

            throw new Error('Invalid URL for subtopic');
          }
          /**
           * This function is used to find the story id from the learner's url.
           * @return {string} the story id.
           * @throws Will Throw an error if the url is invalid.
           */

        }, {
          key: "getStoryIdFromUrl",
          value: function getStoryIdFromUrl() {
            var pathname = this.getPathname();
            var matchedPath = pathname.match(/\/(story_editor|review-test)\/(\w|-){12}/g);

            if (matchedPath) {
              return matchedPath[0].split('/')[2];
            }

            throw new Error('Invalid story id url');
          }
          /**
           * This function is used to find the story id from the viewer's url.
           * @return {string} the story id.
           * @throws Will throw an error if the url is invalid.
           */

        }, {
          key: "getStoryIdFromViewerUrl",
          value: function getStoryIdFromViewerUrl() {
            var pathname = this.getPathname();

            if (pathname.match(/\/story\/(\w|-){12}/g)) {
              return pathname.split('/')[5];
            }

            throw new Error('Invalid story id url');
          }
          /**
           * This function is used to find the skill id from the url.
           * @return {string} the skill id.
           * @throws Will throw an error if the skill Id is invalid.
           */

        }, {
          key: "getSkillIdFromUrl",
          value: function getSkillIdFromUrl() {
            var pathname = this.getPathname();
            var skillId = pathname.split('/')[2];

            if (skillId.length !== 12) {
              throw new Error('Invalid Skill Id');
            }

            return skillId;
          }
          /**
           * This function is used to find the query values as a list.
           * @param {string} fieldName - the name of the field.
           * @return {string[]} the list of query field values.
           */

        }, {
          key: "getQueryFieldValuesAsList",
          value: function getQueryFieldValuesAsList(fieldName) {
            var fieldValues = [];

            if (this.getCurrentQueryString().indexOf('?') > -1) {
              // Each queryItem return one field-value pair in the url.
              var queryItems = this.getCurrentQueryString().slice(this.getCurrentQueryString().indexOf('?') + 1).split('&');

              for (var i = 0; i < queryItems.length; i++) {
                var currentFieldName = decodeURIComponent(queryItems[i].split('=')[0]);
                var currentFieldValue = decodeURIComponent(queryItems[i].split('=')[1]);

                if (currentFieldName === fieldName) {
                  fieldValues.push(currentFieldValue);
                }
              }
            }

            return fieldValues;
          }
          /**
           * This function is used to combine the url, the field name,
           * and the field value together.
           * @param {string} url - the url.
           * @param {string} fieldName - the field name.
           * @param {string} fieldValue - the field value.
           * @return {string[]} the list of query field values.
           */

        }, {
          key: "addField",
          value: function addField(url, fieldName, fieldValue) {
            var encodedFieldValue = encodeURIComponent(fieldValue);
            var encodedFieldName = encodeURIComponent(fieldName);
            return url + (url.indexOf('?') !== -1 ? '&' : '?') + encodedFieldName + '=' + encodedFieldValue;
          }
          /**
           * This function is used to find the hashed value
           * from the current location.
           */

        }, {
          key: "getHash",
          value: function getHash() {
            return this.getCurrentLocation().hash;
          }
          /**
           * This function is used to find the origin from the current location.
           */

        }, {
          key: "getOrigin",
          value: function getOrigin() {
            return this.getCurrentLocation().origin;
          }
          /**
           * This function is used to find the collection id from
           * the exploration url.
           * @return {string} a collection id if
           * the url parameter doesn't have a 'parent' property
           * but have a 'collection_id' property; @return {null} if otherwise.
           */

        }, {
          key: "getCollectionIdFromExplorationUrl",
          value: function getCollectionIdFromExplorationUrl() {
            var urlParams = this.getUrlParams();

            if (urlParams.hasOwnProperty('parent')) {
              return null;
            }

            if (urlParams.hasOwnProperty('collection_id')) {
              return urlParams.collection_id;
            }

            return null;
          }
          /**
           * This function is used to find the username from the profile url.
           * @return {string} the username.
           * @throws Will throw exception if the profile URL is invalid.
           */

        }, {
          key: "getUsernameFromProfileUrl",
          value: function getUsernameFromProfileUrl() {
            var pathname = this.getPathname();

            if (pathname.match(/\/(profile)/g)) {
              return decodeURIComponent(pathname.split('/')[2]);
            }

            throw new Error('Invalid profile URL');
          }
          /**
           * This function is used to find the collection id from the url.
           * @return {string} the collection id.
           * @throws Will throw exception if the profile URL is invalid.
           */

        }, {
          key: "getCollectionIdFromUrl",
          value: function getCollectionIdFromUrl() {
            var pathname = this.getPathname();

            if (pathname.match(/\/(collection)/g)) {
              return decodeURIComponent(pathname.split('/')[2]);
            }

            throw new Error('Invalid collection URL');
          }
          /**
           * This function is used to find
           * the collection id from the editor url.
           * @return {string} the collection id.
           * @throws Will throw exception if the editor URL is invalid.
           */

        }, {
          key: "getCollectionIdFromEditorUrl",
          value: function getCollectionIdFromEditorUrl() {
            var pathname = this.getPathname();

            if (pathname.match(/\/(collection_editor\/create)/g)) {
              return decodeURIComponent(pathname.split('/')[3]);
            }

            throw new Error('Invalid collection editor URL');
          }
          /**
           * This function is used to find the exploration
           * version id from the url.
           * @return {number} the exploration version from Url
           * if an exploration version can be extracted;
           * {null} if otherwise.
           */

        }, {
          key: "getExplorationVersionFromUrl",
          value: function getExplorationVersionFromUrl() {
            var urlParams = this.getUrlParams();

            if (urlParams.hasOwnProperty('v')) {
              var version = urlParams.v;

              if (version.includes('#')) {
                // For explorations played in an iframe.
                version = version.substring(0, version.indexOf('#'));
              }

              return Number(version);
            }

            return null;
          }
        }]);

        return UrlService;
      }();

      UrlService.ctorParameters = function () {
        return [{
          type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"]
        }];
      };

      UrlService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"]])], UrlService);
      angular.module('oppia').factory('UrlService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__["downgradeInjectable"])(UrlService));
      /***/
    },

    /***/
    "X0wn":
    /*!***********************************************!*\
      !*** ./core/templates/pages/app-page/main.ts ***!
      \***********************************************/

    /*! no exports provided */

    /***/
    function X0wn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! core-js/es7/reflect */
      "FZcq");
      /* harmony import */


      var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! zone.js */
      "0TWp");
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "r42+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.module */
      "i1P3"); // Copyright 2019 The Oppia Authors. All Rights Reserved.
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
       * @fileoverview Directive scripts for the about page.
       */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "X9eu":
    /*!**********************************************************************!*\
      !*** ./core/templates/domain/utilities/url-interpolation.service.ts ***!
      \**********************************************************************/

    /*! exports provided: UrlInterpolationService */

    /***/
    function X9eu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlInterpolationService", function () {
        return UrlInterpolationService;
      });
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var services_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! services/alerts.service */
      "U4ot");
      /* harmony import */


      var services_contextual_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! services/contextual/url.service */
      "Wxm2");
      /* harmony import */


      var services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! services/utils.service */
      "RY2A");
      /* harmony import */


      var app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app.constants */
      "DhAQ"); // Copyright 2015 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Service to construct URLs by inserting variables within them as
       * necessary to have a fully-qualified URL.
       */


      var hashes = __webpack_require__(
      /*! assets/hashes.json */
      "p1/J");

      var UrlInterpolationService = /*#__PURE__*/function () {
        function UrlInterpolationService(alertsService, urlService, utilsService) {
          _classCallCheck(this, UrlInterpolationService);

          this.alertsService = alertsService;
          this.urlService = urlService;
          this.utilsService = utilsService;
        }

        _createClass(UrlInterpolationService, [{
          key: "DEV_MODE",
          get: function get() {
            return app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].DEV_MODE;
          }
        }, {
          key: "validateResourcePath",
          value: function validateResourcePath(resourcePath) {
            if (!resourcePath) {
              this.alertsService.fatalWarning('Empty path passed in method.');
            }

            var RESOURCE_PATH_STARTS_WITH_FORWARD_SLASH = /^\//; // Ensure that resourcePath starts with a forward slash.

            if (!resourcePath.match(RESOURCE_PATH_STARTS_WITH_FORWARD_SLASH)) {
              this.alertsService.fatalWarning('Path must start with \'\/\': \'' + resourcePath + '\'.');
            }
          }
          /**
           * Given a resource path relative to subfolder in /,
           * returns resource path with cache slug.
           */

        }, {
          key: "_getUrlWithSlug",
          value: function _getUrlWithSlug(resourcePath) {
            if (!this.DEV_MODE) {
              if (hashes[resourcePath]) {
                var index = resourcePath.lastIndexOf('.');
                return resourcePath.slice(0, index) + '.' + hashes[resourcePath] + resourcePath.slice(index);
              }
            }

            return resourcePath;
          }
          /**
           * Given a resource path relative to subfolder in /,
           * returns complete resource path with cache slug and prefixed with url
           * depending on dev/prod mode.
           */

        }, {
          key: "_getCompleteUrl",
          value: function _getCompleteUrl(prefix, path) {
            if (this.DEV_MODE) {
              return prefix + this._getUrlWithSlug(path);
            } else {
              return '/build' + prefix + this._getUrlWithSlug(path);
            }
          }
          /**
           * Given a resource path relative to extensions folder,
           * returns the complete url path to that resource.
           */

        }, {
          key: "getExtensionResourceUrl",
          value: function getExtensionResourceUrl(resourcePath) {
            this.validateResourcePath(resourcePath);
            return this._getCompleteUrl('/extensions', resourcePath);
          }
          /**
           * Given a formatted URL, interpolates the URL by inserting values the URL
           * needs using the interpolationValues object. For example, urlTemplate
           * might be:
           *
           *   /createhandler/resolved_answers/<exploration_id>/<escaped_state_name>
           *
           * interpolationValues is an object whose keys are variables within the
           * URL. For the above example, interpolationValues may look something
           * like:
           *
           *   { 'exploration_id': '0', 'escaped_state_name': 'InputBinaryNumber' }
           *
           * If a URL requires a value which is not keyed within the
           * interpolationValues object, this will return null.
           */

        }, {
          key: "interpolateUrl",
          value: function interpolateUrl(urlTemplate, interpolationValues) {
            var _this4 = this;

            if (!urlTemplate) {
              this.alertsService.fatalWarning('Invalid or empty URL template passed in: \'' + urlTemplate + '\'');
              return null;
            } // http://stackoverflow.com/questions/4775722


            if (!(interpolationValues instanceof Object) || Object.prototype.toString.call(interpolationValues) === '[object Array]') {
              this.alertsService.fatalWarning('Expected an object of interpolation values to be passed into ' + 'interpolateUrl.');
              return null;
            } // Valid pattern: <alphanum>


            var INTERPOLATION_VARIABLE_REGEX = /<(\w+)>/; // Invalid patterns: <<stuff>>, <stuff>>>, <>

            var EMPTY_VARIABLE_REGEX = /<>/;
            var INVALID_VARIABLE_REGEX = /(<{2,})(\w*)(>{2,})/;

            if (urlTemplate.match(INVALID_VARIABLE_REGEX) || urlTemplate.match(EMPTY_VARIABLE_REGEX)) {
              this.alertsService.fatalWarning('Invalid URL template received: \'' + urlTemplate + '\'');
              return null;
            }

            var nonStringParams = Object.entries(interpolationValues).filter(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  val = _ref2[1];

              return !_this4.utilsService.isString(val);
            });

            if (nonStringParams.length > 0) {
              this.alertsService.fatalWarning('Every parameter passed into interpolateUrl must have string values, ' + 'but received: {' + nonStringParams.map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    key = _ref4[0],
                    val = _ref4[1];

                return key + ': ' + angular.toJson(val);
              }).join(', ') + '}');
            }

            var escapedInterpolationValues = {};

            for (var varName in interpolationValues) {
              var value = interpolationValues[varName];
              escapedInterpolationValues[varName] = encodeURIComponent(value);
            } // Ensure the URL has no nested brackets (which would lead to
            // indirection in the interpolated variables).


            var filledUrl = urlTemplate;
            var match = filledUrl.match(INTERPOLATION_VARIABLE_REGEX);

            while (match) {
              var currentVarName = match[1];

              if (!escapedInterpolationValues.hasOwnProperty(currentVarName)) {
                this.alertsService.fatalWarning('Expected variable \'' + currentVarName + '\' when interpolating URL.');
                return null;
              }

              filledUrl = filledUrl.replace(INTERPOLATION_VARIABLE_REGEX, escapedInterpolationValues[currentVarName]);
              match = filledUrl.match(INTERPOLATION_VARIABLE_REGEX);
            }

            return filledUrl;
          }
          /**
           * Given an image path relative to /assets/images folder,
           * returns the complete url path to that image.
           */

        }, {
          key: "getStaticImageUrl",
          value: function getStaticImageUrl(imagePath) {
            this.validateResourcePath(imagePath);
            return this._getCompleteUrl('/assets', '/images' + imagePath);
          }
          /**
           * Given a video path relative to /assets/videos folder,
           * returns the complete url path to that image.
           */

        }, {
          key: "getStaticVideoUrl",
          value: function getStaticVideoUrl(videoPath) {
            this.validateResourcePath(videoPath);
            return this._getCompleteUrl('/assets', '/videos' + videoPath);
          }
          /**
           * Given a path relative to /assets folder, returns the complete url path
           * to that asset.
           */

        }, {
          key: "getStaticAssetUrl",
          value: function getStaticAssetUrl(assetPath) {
            this.validateResourcePath(assetPath);
            return this._getCompleteUrl('/assets', assetPath);
          }
        }, {
          key: "getFullStaticAssetUrl",
          value: function getFullStaticAssetUrl(path) {
            this.validateResourcePath(path);

            if (this.DEV_MODE) {
              return this.urlService.getOrigin() + path;
            } else {
              return this.urlService.getOrigin() + '/build' + path;
            }
          }
          /**
           * Given an interaction id, returns the complete url path to
           * the thumbnail image for the interaction.
           */

        }, {
          key: "getInteractionThumbnailImageUrl",
          value: function getInteractionThumbnailImageUrl(interactionId) {
            if (!interactionId) {
              this.alertsService.fatalWarning('Empty interactionId passed in getInteractionThumbnailImageUrl.');
            }

            return this.getExtensionResourceUrl('/interactions/' + interactionId + '/static/' + interactionId + '.png');
          }
          /**
           * Given a directive path relative to head folder,
           * returns the complete url path to that directive.
           */

        }, {
          key: "getDirectiveTemplateUrl",
          value: function getDirectiveTemplateUrl(path) {
            this.validateResourcePath(path);

            if (this.DEV_MODE) {
              return '/templates' + this._getUrlWithSlug(path);
            } else {
              return '/build/templates' + this._getUrlWithSlug(path);
            }
          }
        }]);

        return UrlInterpolationService;
      }();

      UrlInterpolationService.ctorParameters = function () {
        return [{
          type: services_alerts_service__WEBPACK_IMPORTED_MODULE_2__["AlertsService"]
        }, {
          type: services_contextual_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"]
        }, {
          type: services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
        }];
      };

      UrlInterpolationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [services_alerts_service__WEBPACK_IMPORTED_MODULE_2__["AlertsService"], services_contextual_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"], services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])], UrlInterpolationService);
      angular.module('oppia').factory('UrlInterpolationService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__["downgradeInjectable"])(UrlInterpolationService));
      /***/
    },

    /***/
    "XHuz":
    /*!*******************************************************************!*\
      !*** ./core/templates/pages/donate-page/donate-page.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DonatePageComponent */

    /***/
    function XHuz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonatePageComponent", function () {
        return DonatePageComponent;
      });
      /* harmony import */


      var _raw_loader_donate_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./donate-page.component.html */
      "vhO9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! services/page-title.service */
      "VeBn");
      /* harmony import */


      var services_site_analytics_service_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! services/site-analytics.service.ts */
      "YA5X");
      /* harmony import */


      var domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! domain/utilities/url-interpolation.service.ts */
      "X9eu");
      /* harmony import */


      var services_contextual_window_dimensions_service_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! services/contextual/window-dimensions.service.ts */
      "fAos");
      /* harmony import */


      var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! services/contextual/window-ref.service */
      "AFwG"); // Copyright 2016 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Component for the donate page.
       */


      var DonatePageComponent = /*#__PURE__*/function () {
        function DonatePageComponent(pageTitleService, siteAnalyticsService, urlInterpolationService, windowDimensionService, windowRef) {
          _classCallCheck(this, DonatePageComponent);

          this.pageTitleService = pageTitleService;
          this.siteAnalyticsService = siteAnalyticsService;
          this.urlInterpolationService = urlInterpolationService;
          this.windowDimensionService = windowDimensionService;
          this.windowRef = windowRef;
          this.windowIsNarrow = false;
          this.donateImgUrl = '';
        }

        _createClass(DonatePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.windowIsNarrow = this.windowDimensionService.isWindowNarrow();
            this.donateImgUrl = this.urlInterpolationService.getStaticImageUrl('/general/opp_donate_text.svg');
            this.pageTitleService.setPageTitle('Donate | Make a Positive Impact | Oppia');
          }
        }, {
          key: "onDonateThroughAmazon",
          value: function onDonateThroughAmazon() {
            var _this5 = this;

            this.siteAnalyticsService.registerGoToDonationSiteEvent('Amazon');
            setTimeout(function () {
              _this5.windowRef.nativeWindow.location.href = 'https://smile.amazon.com/ch/81-1740068';
            }, 150);
            return false;
          }
        }, {
          key: "onDonateThroughPayPal",
          value: function onDonateThroughPayPal() {
            // Redirection to PayPal will be initiated at the same time as this
            // function is run, but should be slow enough to allow this function
            // time to complete. It is not possible to do $http.post() in
            // javascript after a delay because cross-site POSTing is not
            // permitted in scripts; see
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control
            // _CORS
            // for more information.
            this.siteAnalyticsService.registerGoToDonationSiteEvent('PayPal');
          }
        }]);

        return DonatePageComponent;
      }();

      DonatePageComponent.ctorParameters = function () {
        return [{
          type: services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"]
        }, {
          type: services_site_analytics_service_ts__WEBPACK_IMPORTED_MODULE_4__["SiteAnalyticsService"]
        }, {
          type: domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_5__["UrlInterpolationService"]
        }, {
          type: services_contextual_window_dimensions_service_ts__WEBPACK_IMPORTED_MODULE_6__["WindowDimensionsService"]
        }, {
          type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRef"]
        }];
      };

      DonatePageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'donate-page',
        template: _raw_loader_donate_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"], services_site_analytics_service_ts__WEBPACK_IMPORTED_MODULE_4__["SiteAnalyticsService"], domain_utilities_url_interpolation_service_ts__WEBPACK_IMPORTED_MODULE_5__["UrlInterpolationService"], services_contextual_window_dimensions_service_ts__WEBPACK_IMPORTED_MODULE_6__["WindowDimensionsService"], services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRef"]])], DonatePageComponent);
      angular.module('oppia').directive('donatePage', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__["downgradeComponent"])({
        component: DonatePageComponent
      }));
      /***/
    },

    /***/
    "YA5X":
    /*!***********************************************************!*\
      !*** ./core/templates/services/site-analytics.service.ts ***!
      \***********************************************************/

    /*! exports provided: SiteAnalyticsService */

    /***/
    function YA5X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteAnalyticsService", function () {
        return SiteAnalyticsService;
      });
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var assets_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! assets/constants */
      "g/rd");
      /* harmony import */


      var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! services/contextual/window-ref.service */
      "AFwG"); // Copyright 2014 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Utility services for explorations which may be shared by both
       * the learner and editor views.
       */
      // Service for sending events to Google Analytics.
      //
      // Note that events are only sent if the CAN_SEND_ANALYTICS_EVENTS flag is
      // turned on. This flag must be turned on explicitly by the application
      // owner in feconf.py.


      var SiteAnalyticsService = /*#__PURE__*/function () {
        function SiteAnalyticsService(windowRef) {
          _classCallCheck(this, SiteAnalyticsService);

          this.windowRef = windowRef;
        }

        _createClass(SiteAnalyticsService, [{
          key: "CAN_SEND_ANALYTICS_EVENTS",
          get: function get() {
            return assets_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAN_SEND_ANALYTICS_EVENTS;
          } // For definitions of the various arguments, please see:
          // https://developers.google.com/analytics/devguides/collection/analyticsjs/events

        }, {
          key: "_sendEventToGoogleAnalytics",
          value: function _sendEventToGoogleAnalytics(eventCategory, eventAction, eventLabel) {
            if (this.windowRef.nativeWindow.gtag && this.CAN_SEND_ANALYTICS_EVENTS) {
              this.windowRef.nativeWindow.gtag('event', eventAction, {
                event_category: eventCategory,
                event_label: eventLabel
              });
            }
          } // The srcElement refers to the element on the page that is clicked.

        }, {
          key: "registerStartLoginEvent",
          value: function registerStartLoginEvent(srcElement) {
            this._sendEventToGoogleAnalytics('LoginButton', 'click', this.windowRef.nativeWindow.location.pathname + ' ' + srcElement);
          }
        }, {
          key: "registerNewSignupEvent",
          value: function registerNewSignupEvent() {
            this._sendEventToGoogleAnalytics('OnboardingEngagement', 'signup', 'AccountSignUp');
          }
        }, {
          key: "registerClickBrowseLessonsButtonEvent",
          value: function registerClickBrowseLessonsButtonEvent() {
            this._sendEventToGoogleAnalytics('BrowseLessonsButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerClickGuideParentsButtonEvent",
          value: function registerClickGuideParentsButtonEvent() {
            this._sendEventToGoogleAnalytics('GuideParentsButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerClickTipforParentsButtonEvent",
          value: function registerClickTipforParentsButtonEvent() {
            this._sendEventToGoogleAnalytics('TipforParentsButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerClickExploreLessonsButtonEvent",
          value: function registerClickExploreLessonsButtonEvent() {
            this._sendEventToGoogleAnalytics('ExploreLessonsButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerClickStartLearningButtonEvent",
          value: function registerClickStartLearningButtonEvent() {
            this._sendEventToGoogleAnalytics('StartLearningButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerClickStartContributingButtonEvent",
          value: function registerClickStartContributingButtonEvent() {
            this._sendEventToGoogleAnalytics('StartContributingButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerClickStartTeachingButtonEvent",
          value: function registerClickStartTeachingButtonEvent() {
            this._sendEventToGoogleAnalytics('StartTeachingButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerClickVisitClassroomButtonEvent",
          value: function registerClickVisitClassroomButtonEvent() {
            this._sendEventToGoogleAnalytics('ClassroomButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerClickBrowseLibraryButtonEvent",
          value: function registerClickBrowseLibraryButtonEvent() {
            this._sendEventToGoogleAnalytics('BrowseLibraryButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerGoToDonationSiteEvent",
          value: function registerGoToDonationSiteEvent(donationSiteName) {
            this._sendEventToGoogleAnalytics('GoToDonationSite', 'click', donationSiteName);
          }
        }, {
          key: "registerApplyToTeachWithOppiaEvent",
          value: function registerApplyToTeachWithOppiaEvent() {
            this._sendEventToGoogleAnalytics('ApplyToTeachWithOppia', 'click', '');
          }
        }, {
          key: "registerClickCreateExplorationButtonEvent",
          value: function registerClickCreateExplorationButtonEvent() {
            this._sendEventToGoogleAnalytics('CreateExplorationButton', 'click', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerCreateNewExplorationEvent",
          value: function registerCreateNewExplorationEvent(explorationId) {
            this._sendEventToGoogleAnalytics('NewExploration', 'create', explorationId);
          }
        }, {
          key: "registerCreateNewExplorationInCollectionEvent",
          value: function registerCreateNewExplorationInCollectionEvent(explorationId) {
            this._sendEventToGoogleAnalytics('NewExplorationFromCollection', 'create', explorationId);
          }
        }, {
          key: "registerCreateNewCollectionEvent",
          value: function registerCreateNewCollectionEvent(collectionId) {
            this._sendEventToGoogleAnalytics('NewCollection', 'create', collectionId);
          }
        }, {
          key: "registerCommitChangesToPrivateExplorationEvent",
          value: function registerCommitChangesToPrivateExplorationEvent(explorationId) {
            this._sendEventToGoogleAnalytics('CommitToPrivateExploration', 'click', explorationId);
          }
        }, {
          key: "registerShareExplorationEvent",
          value: function registerShareExplorationEvent(network) {
            this._sendEventToGoogleAnalytics(network, 'share', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerShareCollectionEvent",
          value: function registerShareCollectionEvent(network) {
            this._sendEventToGoogleAnalytics(network, 'share', this.windowRef.nativeWindow.location.pathname);
          }
        }, {
          key: "registerOpenEmbedInfoEvent",
          value: function registerOpenEmbedInfoEvent(explorationId) {
            this._sendEventToGoogleAnalytics('EmbedInfoModal', 'open', explorationId);
          }
        }, {
          key: "registerCommitChangesToPublicExplorationEvent",
          value: function registerCommitChangesToPublicExplorationEvent(explorationId) {
            this._sendEventToGoogleAnalytics('CommitToPublicExploration', 'click', explorationId);
          } // Metrics for tutorial on first creating exploration.

        }, {
          key: "registerTutorialModalOpenEvent",
          value: function registerTutorialModalOpenEvent(explorationId) {
            this._sendEventToGoogleAnalytics('TutorialModalOpen', 'open', explorationId);
          }
        }, {
          key: "registerDeclineTutorialModalEvent",
          value: function registerDeclineTutorialModalEvent(explorationId) {
            this._sendEventToGoogleAnalytics('DeclineTutorialModal', 'click', explorationId);
          }
        }, {
          key: "registerAcceptTutorialModalEvent",
          value: function registerAcceptTutorialModalEvent(explorationId) {
            this._sendEventToGoogleAnalytics('AcceptTutorialModal', 'click', explorationId);
          } // Metrics for visiting the help center.

        }, {
          key: "registerClickHelpButtonEvent",
          value: function registerClickHelpButtonEvent(explorationId) {
            this._sendEventToGoogleAnalytics('ClickHelpButton', 'click', explorationId);
          }
        }, {
          key: "registerVisitHelpCenterEvent",
          value: function registerVisitHelpCenterEvent(explorationId) {
            this._sendEventToGoogleAnalytics('VisitHelpCenter', 'click', explorationId);
          }
        }, {
          key: "registerOpenTutorialFromHelpCenterEvent",
          value: function registerOpenTutorialFromHelpCenterEvent(explorationId) {
            this._sendEventToGoogleAnalytics('OpenTutorialFromHelpCenter', 'click', explorationId);
          } // Metrics for exiting the tutorial.

        }, {
          key: "registerSkipTutorialEvent",
          value: function registerSkipTutorialEvent(explorationId) {
            this._sendEventToGoogleAnalytics('SkipTutorial', 'click', explorationId);
          }
        }, {
          key: "registerFinishTutorialEvent",
          value: function registerFinishTutorialEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FinishTutorial', 'click', explorationId);
          } // Metrics for first time editor use.

        }, {
          key: "registerEditorFirstEntryEvent",
          value: function registerEditorFirstEntryEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FirstEnterEditor', 'open', explorationId);
          }
        }, {
          key: "registerFirstOpenContentBoxEvent",
          value: function registerFirstOpenContentBoxEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FirstOpenContentBox', 'open', explorationId);
          }
        }, {
          key: "registerFirstSaveContentEvent",
          value: function registerFirstSaveContentEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FirstSaveContent', 'click', explorationId);
          }
        }, {
          key: "registerFirstClickAddInteractionEvent",
          value: function registerFirstClickAddInteractionEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FirstClickAddInteraction', 'click', explorationId);
          }
        }, {
          key: "registerFirstSelectInteractionTypeEvent",
          value: function registerFirstSelectInteractionTypeEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FirstSelectInteractionType', 'click', explorationId);
          }
        }, {
          key: "registerFirstSaveInteractionEvent",
          value: function registerFirstSaveInteractionEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FirstSaveInteraction', 'click', explorationId);
          }
        }, {
          key: "registerFirstSaveRuleEvent",
          value: function registerFirstSaveRuleEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FirstSaveRule', 'click', explorationId);
          }
        }, {
          key: "registerFirstCreateSecondStateEvent",
          value: function registerFirstCreateSecondStateEvent(explorationId) {
            this._sendEventToGoogleAnalytics('FirstCreateSecondState', 'create', explorationId);
          } // Metrics for publishing explorations.

        }, {
          key: "registerSavePlayableExplorationEvent",
          value: function registerSavePlayableExplorationEvent(explorationId) {
            this._sendEventToGoogleAnalytics('SavePlayableExploration', 'save', explorationId);
          }
        }, {
          key: "registerOpenPublishExplorationModalEvent",
          value: function registerOpenPublishExplorationModalEvent(explorationId) {
            this._sendEventToGoogleAnalytics('PublishExplorationModal', 'open', explorationId);
          }
        }, {
          key: "registerPublishExplorationEvent",
          value: function registerPublishExplorationEvent(explorationId) {
            this._sendEventToGoogleAnalytics('PublishExploration', 'click', explorationId);
          }
        }, {
          key: "registerVisitOppiaFromIframeEvent",
          value: function registerVisitOppiaFromIframeEvent(explorationId) {
            this._sendEventToGoogleAnalytics('VisitOppiaFromIframe', 'click', explorationId);
          }
        }, {
          key: "registerNewCard",
          value: function registerNewCard(cardNum) {
            if (cardNum <= 10 || cardNum % 10 === 0) {
              this._sendEventToGoogleAnalytics('PlayerNewCard', 'click', cardNum.toString());
            }
          }
        }, {
          key: "registerOpenCollectionFromLandingPageEvent",
          value: function registerOpenCollectionFromLandingPageEvent(collectionId) {
            this._sendEventToGoogleAnalytics('OpenFractionsFromLandingPage', 'click', collectionId);
          }
        }, {
          key: "registerStewardsLandingPageEvent",
          value: function registerStewardsLandingPageEvent(viewerType, buttonText) {
            this._sendEventToGoogleAnalytics('ClickButtonOnStewardsPage', 'click', viewerType + ':' + buttonText);
          }
        }, {
          key: "registerSaveRecordedAudioEvent",
          value: function registerSaveRecordedAudioEvent(explorationId) {
            this._sendEventToGoogleAnalytics('SaveRecordedAudio', 'click', explorationId);
          }
        }, {
          key: "registerStartAudioRecordingEvent",
          value: function registerStartAudioRecordingEvent(explorationId) {
            this._sendEventToGoogleAnalytics('StartAudioRecording', 'click', explorationId);
          }
        }, {
          key: "registerUploadAudioEvent",
          value: function registerUploadAudioEvent(explorationId) {
            this._sendEventToGoogleAnalytics('UploadRecordedAudio', 'click', explorationId);
          } // Contributor Dashboard Events.

        }, {
          key: "registerContributorDashboardSuggestEvent",
          value: function registerContributorDashboardSuggestEvent(contributionType) {
            this._sendEventToGoogleAnalytics('ContributorDashboardSuggest', 'click', contributionType);
          }
        }, {
          key: "registerContributorDashboardSubmitSuggestionEvent",
          value: function registerContributorDashboardSubmitSuggestionEvent(contributionType) {
            this._sendEventToGoogleAnalytics('ContributorDashboardSubmitSuggestion', 'click', contributionType);
          }
        }, {
          key: "registerContributorDashboardViewSuggestionForReview",
          value: function registerContributorDashboardViewSuggestionForReview(contributionType) {
            this._sendEventToGoogleAnalytics('ContributorDashboardViewSuggestionForReview', 'click', contributionType);
          }
        }, {
          key: "registerContributorDashboardAcceptSuggestion",
          value: function registerContributorDashboardAcceptSuggestion(contributionType) {
            this._sendEventToGoogleAnalytics('ContributorDashboardAcceptSuggestion', 'click', contributionType);
          }
        }, {
          key: "registerContributorDashboardRejectSuggestion",
          value: function registerContributorDashboardRejectSuggestion(contributionType) {
            this._sendEventToGoogleAnalytics('ContributorDashboardRejectSuggestion', 'click', contributionType);
          }
        }, {
          key: "registerLessonActiveUse",
          value: function registerLessonActiveUse() {
            this._sendEventToGoogleAnalytics('ActiveUserStartAndSawCards', 'engage', '');
          }
        }, {
          key: "registerStartExploration",
          value: function registerStartExploration(explorationId) {
            this._sendEventToGoogleAnalytics('PlayerStartExploration', 'engage', explorationId);
          }
        }, {
          key: "registerFinishExploration",
          value: function registerFinishExploration(explorationId) {
            this._sendEventToGoogleAnalytics('PlayerFinishExploration', 'engage', explorationId);
          }
        }, {
          key: "registerCuratedLessonCompleted",
          value: function registerCuratedLessonCompleted(explorationId) {
            this._sendEventToGoogleAnalytics('CuratedLessonCompleted', 'engage', explorationId);
          }
        }, {
          key: "registerClassroomLessonActiveUse",
          value: function registerClassroomLessonActiveUse() {
            this._sendEventToGoogleAnalytics('ClassroomActiveUserStartAndSawCards', 'engage', '');
          }
        }, {
          key: "registerClassoomHeaderClickEvent",
          value: function registerClassoomHeaderClickEvent() {
            this._sendEventToGoogleAnalytics('ClassroomEngagement', 'click', 'ClickOnClassroom');
          }
        }, {
          key: "registerClassroomPageViewed",
          value: function registerClassroomPageViewed() {
            this._sendEventToGoogleAnalytics('ClassroomEngagement', 'impression', 'ViewClassroom');
          }
        }, {
          key: "registerAccountDeletion",
          value: function registerAccountDeletion() {
            this._sendEventToGoogleAnalytics('OnboardingEngagement', 'delete', 'AccountDeletion');
          }
        }]);

        return SiteAnalyticsService;
      }();

      SiteAnalyticsService.ctorParameters = function () {
        return [{
          type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"]
        }];
      };

      SiteAnalyticsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"]])], SiteAnalyticsService);
      angular.module('oppia').factory('SiteAnalyticsService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__["downgradeInjectable"])(SiteAnalyticsService));
      /***/
    },

    /***/
    "YL3y":
    /*!*************************************************************!*\
      !*** ./core/templates/services/platform-feature.service.ts ***!
      \*************************************************************/

    /*! exports provided: PlatformFeatureService, platformFeatureInitFactory */

    /***/
    function YL3y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatformFeatureService", function () {
        return PlatformFeatureService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "platformFeatureInitFactory", function () {
        return platformFeatureInitFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash/isEqual */
      "Y+p1");
      /* harmony import */


      var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var domain_platform_feature_platform_feature_backend_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! domain/platform_feature/platform-feature-backend-api.service */
      "UB+c");
      /* harmony import */


      var domain_platform_feature_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! domain/platform_feature/feature-status-summary.model */
      "eEg9");
      /* harmony import */


      var services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! services/contextual/logger.service */
      "3eoD");
      /* harmony import */


      var services_contextual_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! services/contextual/url.service */
      "Wxm2");
      /* harmony import */


      var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! services/contextual/window-ref.service */
      "AFwG");
      /* harmony import */


      var domain_utilities_browser_checker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! domain/utilities/browser-checker.service */
      "DmN5");
      /* harmony import */


      var domain_platform_feature_client_context_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! domain/platform_feature/client-context.model */
      "g+Dq"); // Copyright 2020 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var PlatformFeatureService_1;
      /**
       * @fileoverview A service for retriving feature flags - boolean parameters
       * that are used to determine if features should be enabled.
       *
       * Once the initialization is done, the value of each feature flag is guaranteed
       * to be constant within the page.
       * The values are also cached in SessionStorage, so that even after page
       * refreshing, the values stay the same, unless:
       *   - the cache TTL of 12 hours has been reached, or
       *   - the current account is different than the account in use when the values
       *     are loaded, i.e. a different session id is present in the cookies.
       *   - there are new features defined in the code base while the cached
       *     summary is out-of-date.
       * In such cases, the values will be re-initialized and they may be changed.
       *
       * The values in SessionStorage is not shared between tabs, we don't want
       * sudden updates in the same tab but it's okay to always load the latest
       * values in a new tab.
       */

      var PlatformFeatureService = PlatformFeatureService_1 = /*#__PURE__*/function () {
        function PlatformFeatureService(platformFeatureBackendApiService, windowRef, loggerService, urlService, browserCheckerService) {
          _classCallCheck(this, PlatformFeatureService);

          this.platformFeatureBackendApiService = platformFeatureBackendApiService;
          this.windowRef = windowRef;
          this.loggerService = loggerService;
          this.urlService = urlService;
          this.browserCheckerService = browserCheckerService;
          this.initialize();
        }
        /**
         * Inializes the PlatformFeatureService. This function guarantees that the
         * service is initialized only once for subsequent calls.
         *
         * @returns {Promise} - A promise that is resolved when the initialization
         * is done.
         */


        _createClass(PlatformFeatureService, [{
          key: "initialize",
          value: function initialize() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!PlatformFeatureService_1.initializationPromise) {
                        PlatformFeatureService_1.initializationPromise = this._initialize();
                      }

                      return _context3.abrupt("return", PlatformFeatureService_1.initializationPromise);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * Returns the status checker object for feature flags, which can be used
           * to get the value of feature flags.
           *
           * Example:
           *   platformFeatureService.status.DummyFeature.isEnabled === true.
           *
           * @returns {FeatureStatusChecker} - Status checker object for feature flags.
           * @throws {Error} - If this method is called before inialization.
           */

        }, {
          key: "status",
          get: function get() {
            if (PlatformFeatureService_1.featureStatusSummary) {
              return PlatformFeatureService_1.featureStatusSummary.toStatusChecker();
            } else {
              throw new Error('The platform feature service has not been initialized.');
            }
          }
          /**
           * Checks if there's any error, e.g. request timeout, during initialization.
           *
           * @returns {boolean} - True if there is any error during initialization.
           */

        }, {
          key: "isInitialzedWithError",
          get: function get() {
            return PlatformFeatureService_1._isInitializedWithError;
          }
          /**
           * Checks if the loading is skipped.
           *
           * @returns {boolean} - True if the loading is skipped.
           */

        }, {
          key: "isSkipped",
          get: function get() {
            return PlatformFeatureService_1._isSkipped;
          }
          /**
           * Initializes the PlatformFeatureService. It first checks if there is
           * previously saved feature flag result in the sessionStorage, if there is
           * and the result is still valid, it will be loaded. Otherwise it sends
           * a request to the server to get the feature flag result.
           *
           * @returns {Promise} - A promise that is resolved when the initialization
           * is done.
           */

        }, {
          key: "_initialize",
          value: function _initialize() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var item;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      item = this.loadSavedResults();

                      if (!(item && this.validateSavedResults(item))) {
                        _context4.next = 6;
                        break;
                      }

                      PlatformFeatureService_1.featureStatusSummary = item.featureStatusSummary;
                      this.saveResults();
                      return _context4.abrupt("return");

                    case 6:
                      this.clearSavedResults(); // The user is 'partially logged-in' at the signup page, we need to skip
                      // the loading from server otherwise the request will have the cookies
                      // erased, leading to the 'Registration session expired' error.

                      if (!(this.urlService.getPathname() === '/signup')) {
                        _context4.next = 11;
                        break;
                      }

                      PlatformFeatureService_1._isSkipped = true;
                      PlatformFeatureService_1.featureStatusSummary = domain_platform_feature_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_4__["FeatureStatusSummary"].createDefault();
                      return _context4.abrupt("return");

                    case 11:
                      _context4.next = 13;
                      return this.loadFeatureFlagsFromServer();

                    case 13:
                      PlatformFeatureService_1.featureStatusSummary = _context4.sent;
                      this.saveResults();
                      _context4.next = 23;
                      break;

                    case 17:
                      _context4.prev = 17;
                      _context4.t0 = _context4["catch"](0);
                      this.loggerService.error('Error during initialization of PlatformFeatureService: ' + "".concat(_context4.t0.message ? _context4.t0.message : _context4.t0)); // If any error, just disable all features.

                      PlatformFeatureService_1.featureStatusSummary = domain_platform_feature_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_4__["FeatureStatusSummary"].createDefault();
                      PlatformFeatureService_1._isInitializedWithError = true;
                      this.clearSavedResults();

                    case 23:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 17]]);
            }));
          }
        }, {
          key: "loadFeatureFlagsFromServer",
          value: function loadFeatureFlagsFromServer() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var context;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      context = this.generateClientContext();
                      return _context5.abrupt("return", this.platformFeatureBackendApiService.fetchFeatureFlags(context));

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * Saves the results in sessionStorage, along with current timestamp and
           * the current session id.
           */

        }, {
          key: "saveResults",
          value: function saveResults() {
            var item = {
              timestamp: this.getCurrentTimestamp(),
              sessionId: this.getSessionIdFromCookie(),
              featureStatusSummary: PlatformFeatureService_1.featureStatusSummary.toBackendDict()
            };
            this.windowRef.nativeWindow.sessionStorage.setItem(PlatformFeatureService_1.SESSION_STORAGE_KEY, JSON.stringify(item));
          }
          /**
           * Clears results from the sessionStorage, if any.
           */

        }, {
          key: "clearSavedResults",
          value: function clearSavedResults() {
            this.windowRef.nativeWindow.sessionStorage.removeItem(PlatformFeatureService_1.SESSION_STORAGE_KEY);
          }
          /**
           * Reads and parses feature flag results from the sessionStorage.
           *
           * @returns {FeatureFlagsCacheItem|null} - Saved results along with timestamp
           * and session id. Null if there isn't any saved result.
           */

        }, {
          key: "loadSavedResults",
          value: function loadSavedResults() {
            var savedStr = this.windowRef.nativeWindow.sessionStorage.getItem(PlatformFeatureService_1.SESSION_STORAGE_KEY);

            if (savedStr) {
              var savedObj = JSON.parse(savedStr);
              return {
                timestamp: savedObj.timestamp,
                sessionId: savedObj.sessionId,
                featureStatusSummary: domain_platform_feature_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_4__["FeatureStatusSummary"].createFromBackendDict(savedObj.featureStatusSummary)
              };
            }

            return null;
          }
          /**
           * Validates the result saved in sessionStorage. The result is valid only when
           * all following conditions hold:
           *   - it hasn't expired.
           *   - its session id matches the current session id.
           *   - there isn't any new feature defined in the code base that is not
           *     presented in the cached result.
           *
           * @param {FeatureFlagsCacheItem} item - The result item loaded from
           * sessionStorage.
           *
           * @returns {boolean} - True if the result is valid and can be directly used.
           */

        }, {
          key: "validateSavedResults",
          value: function validateSavedResults(item) {
            if (this.getCurrentTimestamp() - item.timestamp > PlatformFeatureService_1.SESSION_STORAGE_CACHE_TTL) {
              return false;
            }

            if (this.getSessionIdFromCookie() !== item.sessionId) {
              return false;
            }

            var storedFeatures = Array.from(item.featureStatusSummary.featureNameToFlag.keys());
            var requiredFeatures = Object.keys(domain_platform_feature_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_4__["FeatureNames"]).map(function (name) {
              return domain_platform_feature_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_4__["FeatureNames"][name];
            });

            if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(storedFeatures.sort(), requiredFeatures.sort())) {
              return false;
            }

            return true;
          }
          /**
           * Generates context containing the client side information required to
           * request feature flag values.
           *
           * @returns {ClientContext} - The ClientContext instance containing required
           * client information.
           */

        }, {
          key: "generateClientContext",
          value: function generateClientContext() {
            var platformType = 'Web';
            var browserType = this.browserCheckerService.detectBrowserType();
            return domain_platform_feature_client_context_model__WEBPACK_IMPORTED_MODULE_9__["ClientContext"].create(platformType, browserType);
          }
          /**
           * Parse session id from cookies.
           *
           * @returns {string|null} - The value of the cookie representing session id.
           */

        }, {
          key: "getSessionIdFromCookie",
          value: function getSessionIdFromCookie() {
            var cookieStrs = this.windowRef.nativeWindow.document.cookie.split('; ');
            var cookieMap = new Map(cookieStrs.map(function (cookieStr) {
              return cookieStr.split('=');
            }));

            if (cookieMap.has(PlatformFeatureService_1.COOKIE_NAME_FOR_SESSION_ID)) {
              return cookieMap.get(PlatformFeatureService_1.COOKIE_NAME_FOR_SESSION_ID);
            }

            if (cookieMap.has(PlatformFeatureService_1.COOKIE_NAME_FOR_SESSION_ID_IN_DEV)) {
              return cookieMap.get(PlatformFeatureService_1.COOKIE_NAME_FOR_SESSION_ID_IN_DEV);
            }

            return null;
          }
          /**
           * Gets the current timestamp.
           *
           * @returns {number} - The current timestamp.
           */

        }, {
          key: "getCurrentTimestamp",
          value: function getCurrentTimestamp() {
            return Date.now();
          }
        }]);

        return PlatformFeatureService;
      }();

      PlatformFeatureService.SESSION_STORAGE_KEY = 'SAVED_FEATURE_FLAGS';
      PlatformFeatureService.SESSION_STORAGE_CACHE_TTL = 12 * 3600 * 1000; // 12 hours

      PlatformFeatureService.COOKIE_NAME_FOR_SESSION_ID = 'SACSID';
      PlatformFeatureService.COOKIE_NAME_FOR_SESSION_ID_IN_DEV = 'dev_appserver_login'; // The following attributes are made static to avoid potential inconsistencies
      // caused by multi-instantiation of the service.

      PlatformFeatureService.featureStatusSummary = null;
      PlatformFeatureService.initializationPromise = null;
      PlatformFeatureService._isInitializedWithError = false;
      PlatformFeatureService._isSkipped = false;

      PlatformFeatureService.ctorParameters = function () {
        return [{
          type: domain_platform_feature_platform_feature_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["PlatformFeatureBackendApiService"]
        }, {
          type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRef"]
        }, {
          type: services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }, {
          type: services_contextual_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"]
        }, {
          type: domain_utilities_browser_checker_service__WEBPACK_IMPORTED_MODULE_8__["BrowserCheckerService"]
        }];
      };

      PlatformFeatureService = PlatformFeatureService_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [domain_platform_feature_platform_feature_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["PlatformFeatureBackendApiService"], services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRef"], services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], services_contextual_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"], domain_utilities_browser_checker_service__WEBPACK_IMPORTED_MODULE_8__["BrowserCheckerService"]])], PlatformFeatureService);

      var platformFeatureInitFactory = function platformFeatureInitFactory(service) {
        return function () {
          return service.initialize();
        };
      };

      angular.module('oppia').factory('PlatformFeatureService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__["downgradeInjectable"])(PlatformFeatureService));
      /***/
    },

    /***/
    "amNk":
    /*!****************************************************************!*\
      !*** ./core/templates/pages/donate-page/donate-page.module.ts ***!
      \****************************************************************/

    /*! exports provided: DonatePageModule */

    /***/
    function amNk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonatePageModule", function () {
        return DonatePageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _donate_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate-page.component */
      "XHuz");
      /* harmony import */


      var services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! services/request-interceptor.service */
      "Nk/g");
      /* harmony import */


      var services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! services/platform-feature.service */
      "YL3y");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg"); // Copyright 2019 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      /**
       * @fileoverview Module for the donate page.
       */


      var DonatePageModule = /*#__PURE__*/function () {
        function DonatePageModule() {
          _classCallCheck(this, DonatePageModule);
        }

        _createClass(DonatePageModule, [{
          key: "ngDoBootstrap",
          value: // Empty placeholder method to satisfy the `Compiler`.
          function ngDoBootstrap() {}
        }]);

        return DonatePageModule;
      }();

      DonatePageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        declarations: [_donate_page_component__WEBPACK_IMPORTED_MODULE_3__["DonatePageComponent"]],
        entryComponents: [_donate_page_component__WEBPACK_IMPORTED_MODULE_3__["DonatePageComponent"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["RequestInterceptor"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__["platformFeatureInitFactory"],
          deps: [services_platform_feature_service__WEBPACK_IMPORTED_MODULE_5__["PlatformFeatureService"]],
          multi: true
        }]
      })], DonatePageModule);
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__["platformBrowserDynamic"])().bootstrapModule(DonatePageModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "eEg9":
    /*!********************************************************************************!*\
      !*** ./core/templates/domain/platform_feature/feature-status-summary.model.ts ***!
      \********************************************************************************/

    /*! exports provided: FeatureNames, FeatureStatusSummary */

    /***/
    function eEg9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureNames", function () {
        return FeatureNames;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureStatusSummary", function () {
        return FeatureStatusSummary;
      }); // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
       * @fileoverview Factory model for FeatureStatusSummary.
       */

      /**
       * Names of all feature flags should be defined here, with format:
       * FeatureName = 'feature_name', where the LHS is the feature name in
       * PascalCase, and the RHS is in snake_case, which is the naming convention
       * of features in the backend.
       */


      var FeatureNames;

      (function (FeatureNames) {
        FeatureNames["DummyFeature"] = "dummy_feature";
      })(FeatureNames || (FeatureNames = {}));
      /**
       * Item of the status checker of feature flags, which represents the status of
       * one feature flag, providing the '.isEnabled' interface to check the status
       * of that feature flag.
       */


      var FeatureStatusCheckerItem = /*#__PURE__*/function () {
        /**
         * Constructor of the FeatureStatusCheckerDictItem class.
         *
         * @param {() => boolean} getterFn - Function that returns the status of
         *     the feature.
         */
        function FeatureStatusCheckerItem(getterFn) {
          _classCallCheck(this, FeatureStatusCheckerItem);

          this.getterFn = getterFn;
        }
        /**
         * Checks if the feature is enabled.
         *
         * @returns {boolean} - True if the feature is enabled.
         */


        _createClass(FeatureStatusCheckerItem, [{
          key: "isEnabled",
          get: function get() {
            return this.getterFn();
          }
        }]);

        return FeatureStatusCheckerItem;
      }();
      /**
       * Represents the evaluation result summary of all feature flags received from
       * the server. This is used only in the frontend feature value retrieval.
       */


      var FeatureStatusSummary = /*#__PURE__*/function () {
        function FeatureStatusSummary(backendDict) {
          _classCallCheck(this, FeatureStatusSummary);

          this.featureNameToFlag = new Map(Object.entries(backendDict));
        }

        _createClass(FeatureStatusSummary, [{
          key: "toBackendDict",
          value:
          /**
           * Creates a dict representation of the instance.
           *
           * @returns {FeatureStatusSummaryBackendDict} - The dict representation
           * of the instance.
           */
          function toBackendDict() {
            var backendDict = {};

            var _iterator2 = _createForOfIteratorHelper(this.featureNameToFlag.entries()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    key = _step2$value[0],
                    value = _step2$value[1];

                backendDict[key] = value;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return backendDict;
          }
          /**
           * Construct and returns the feature status checker.
           *
           * @returns {FeatureStatusChecker} - The feature status checker.
           */

        }, {
          key: "toStatusChecker",
          value: function toStatusChecker() {
            var _this6 = this;

            var checker = {};
            Object.keys(FeatureNames).forEach(function (name) {
              checker[name] = new FeatureStatusCheckerItem(function () {
                return _this6.isFeatureEnabled(FeatureNames[name]);
              });
            });
            return checker;
          }
          /**
           * Gets the value of a feature flag in the result.
           *
           * @param {string} featureName - The name of the feature.
           *
           * @returns {boolean} - The value of the feature flag, true if enabled.
           * @throws {Error} - If the feature with the specified name doesn't exist.
           */

        }, {
          key: "isFeatureEnabled",
          value: function isFeatureEnabled(featureName) {
            if (!this.featureNameToFlag.has(featureName)) {
              throw new Error("Feature '".concat(featureName, "' does not exist."));
            }

            return this.featureNameToFlag.get(featureName);
          }
        }], [{
          key: "createFromBackendDict",
          value: function createFromBackendDict(backendDict) {
            return new FeatureStatusSummary(backendDict);
          }
          /**
           * Creates a default FeatureStatusSummary object such that all features are
           * disabled.
           *
           * @returns {FeatureStatusSummary} - The FeatureStatusSummary object instance
           *     with all feature disabled.
           */

        }, {
          key: "createDefault",
          value: function createDefault() {
            var defaultDict = {};
            Object.keys(FeatureNames).forEach(function (name) {
              return defaultDict[FeatureNames[name]] = false;
            });
            return this.createFromBackendDict(defaultDict);
          }
        }]);

        return FeatureStatusSummary;
      }();
      /***/

    },

    /***/
    "fAos":
    /*!*************************************************************************!*\
      !*** ./core/templates/services/contextual/window-dimensions.service.ts ***!
      \*************************************************************************/

    /*! exports provided: WindowDimensionsService */

    /***/
    function fAos(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindowDimensionsService", function () {
        return WindowDimensionsService;
      });
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! services/contextual/window-ref.service */
      "AFwG"); // Copyright 2014 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Service for computing the window dimensions.
       */


      var WindowDimensionsService = /*#__PURE__*/function () {
        function WindowDimensionsService(windowRef) {
          _classCallCheck(this, WindowDimensionsService);

          this.windowRef = windowRef;
        }

        _createClass(WindowDimensionsService, [{
          key: "getResizeEvent",
          value: function getResizeEvent() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.windowRef.nativeWindow, 'resize');
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.windowRef.nativeWindow.innerWidth || this.windowRef.nativeWindow.document.documentElement.clientWidth || this.windowRef.nativeWindow.document.body.clientWidth;
          }
        }, {
          key: "isWindowNarrow",
          value: function isWindowNarrow() {
            var NORMAL_NAVBAR_CUTOFF_WIDTH_PX = 768;
            return this.getWidth() <= NORMAL_NAVBAR_CUTOFF_WIDTH_PX;
          }
        }]);

        return WindowDimensionsService;
      }();

      WindowDimensionsService.ctorParameters = function () {
        return [{
          type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"]
        }];
      };

      WindowDimensionsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRef"]])], WindowDimensionsService);
      angular.module('oppia').factory('WindowDimensionsService', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__["downgradeInjectable"])(WindowDimensionsService));
      /***/
    },

    /***/
    "g+Dq":
    /*!************************************************************************!*\
      !*** ./core/templates/domain/platform_feature/client-context.model.ts ***!
      \************************************************************************/

    /*! exports provided: ClientContext */

    /***/
    function gDq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientContext", function () {
        return ClientContext;
      }); // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
       * Represents the client side information that is used to evaluate the value
       * of feature flags. This is used only in the frontend feature value retrieval.
       */


      var ClientContext = /*#__PURE__*/function () {
        function ClientContext(platformType, browserType) {
          _classCallCheck(this, ClientContext);

          this.platformType = platformType;
          this.browserType = browserType;
        }

        _createClass(ClientContext, [{
          key: "toBackendDict",
          value:
          /**
           * Creates a dict representation of the instance.
           *
           * @returns {ClientContextBackendDict} - The dict representation of the
           * instance.
           */
          function toBackendDict() {
            return {
              platform_type: this.platformType,
              browser_type: this.browserType
            };
          }
        }], [{
          key: "create",
          value: function create(platformType, browserType) {
            return new ClientContext(platformType, browserType);
          }
        }]);

        return ClientContext;
      }();
      /***/

    },

    /***/
    "g/rd":
    /*!*****************************!*\
      !*** ./assets/constants.ts ***!
      \*****************************/

    /*! exports provided: default */

    /***/
    function gRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // We are using eslint disable here for multilines because we have used quotes
      // around properties at a lot of places so it is not possible to use
      // "eslint disable next line" for each of them.

      /* eslint-disable oppia/no-multiline-disable */

      /* eslint-disable quote-props */

      /* eslint-disable quotes */

      /* Don't modify anything outside the {} brackets.
       * Insides of the {} brackets should be formatted as a JSON object.
       * JSON rules:
       * 1. All keys and string values must be enclosed in double quotes.
       * 2. Each key/value pair should be on a new line.
       * 3. All values and keys must be constant, you can't use any Javascript
       *    functions.
       */

      /**
       * @fileoverview Initializes constants for the Oppia codebase.
       */

      /* harmony default export */


      __webpack_exports__["default"] = {
        // Whether to allow custom event reporting to Google Analytics.
        "CAN_SEND_ANALYTICS_EVENTS": false,
        // The term 'staging' is used instead of the classroom url fragment field
        // in the URL for topics that are not yet attached to a classroom.
        "CLASSROOM_URL_FRAGMENT_FOR_UNATTACHED_TOPICS": "staging",
        // The default classroom URL fragment to use when the provided classroom URL
        // fragment in the controller is invalid.
        "DEFAULT_CLASSROOM_URL_FRAGMENT": "math",
        "ALL_CATEGORIES": ["Algebra", "Algorithms", "Architecture", "Arithmetic", "Art", "Astronomy", "Biology", "Business", "Calculus", "Chemistry", "Combinatorics", "Computing", "Economics", "Education", "Engineering", "English", "Environment", "Gaulish", "Geography", "Geometry", "Government", "Graph Theory", "History", "Languages", "Latin", "Law", "Logic", "Mathematics", "Medicine", "Music", "Philosophy", "Physics", "Poetry", "Probability", "Programming", "Puzzles", "Reading", "Spanish", "Sport", "Statistics", "Trigonometry", "Welcome"],
        "ACTIVITY_TYPE_EXPLORATION": "exploration",
        "ACTIVITY_TYPE_COLLECTION": "collection",
        "DISABLED_EXPLORATION_IDS": ["5"],
        "TESTING_CONSTANT": "test",
        "LIBRARY_TILE_WIDTH_PX": 208,
        "DASHBOARD_TYPE_CREATOR": "creator",
        "DASHBOARD_TYPE_LEARNER": "learner",
        "DEFAULT_COLOR": "#a33f40",
        "DEFAULT_THUMBNAIL_ICON": "Lightbulb",
        "DEFAULT_CATEGORY_ICON": "Lightbulb",
        "ACTION_ACCEPT_SUGGESTION": "accept",
        "ACTION_REJECT_SUGGESTION": "reject",
        "SKILL_STATUS_OPTIONS": {
          "ALL": "All",
          "ASSIGNED": "Assigned",
          "UNASSIGNED": "Unassigned"
        },
        "TOPIC_SKILL_DASHBOARD_SORT_OPTIONS": {
          "IncreasingCreatedOn": "Newly Created",
          "DecreasingCreatedOn": "Oldest Created",
          "IncreasingUpdatedOn": "Most Recently Updated",
          "DecreasingUpdatedOn": "Least Recently Updated"
        },
        // These categories are shown in the library navbar. The categories should
        // be in sorted order.
        "SEARCH_DROPDOWN_CATEGORIES": ["Algorithms", "Architecture", "Art", "Biology", "Business", "Chemistry", "Economics", "English", "Geography", "History", "Mathematics", "Medicine", "Music", "Physics", "Programming", "Reading", "Statistics"],
        // The default language code for an exploration.
        "DEFAULT_LANGUAGE_CODE": "en",
        "ALLOWED_THUMBNAIL_BG_COLORS": {
          "chapter": ["#F8BF74", "#D68F78", "#8EBBB6", "#B3D8F1"],
          "topic": ["#C6DCDA"],
          "subtopic": ["#FFFFFF"],
          "story": ["#F8BF74", "#D68F78", "#8EBBB6", "#B3D8F1"]
        },
        "ALLOWED_IMAGE_FORMATS": ["svg", "png", "jpeg", "jpg", "gif"],
        "TASK_TYPE_HIGH_BOUNCE_RATE": "high_bounce_rate",
        "TASK_TYPE_INEFFECTIVE_FEEDBACK_LOOP": "ineffective_feedback_loop",
        "TASK_TYPE_SUCCESSIVE_INCORRECT_ANSWERS": "successive_incorrect_answers",
        "TASK_TYPE_NEEDS_GUIDING_RESPONSES": "needs_guiding_responses",
        "TASK_STATUS_OPEN": "open",
        "TASK_STATUS_OBSOLETE": "obsolete",
        "TASK_STATUS_RESOLVED": "resolved",
        "TASK_ENTITY_TYPE_EXPLORATION": "exploration",
        "TASK_TARGET_TYPE_STATE": "state",
        // Regex to validate the format of Math rich-text component SVGs. If this is
        // changed in the future, the existing filenames on the server should be
        // handled as well.
        // eslint-disable-next-line max-len
        "MATH_SVG_FILENAME_REGEX": "mathImg_[a-z0-9_]+_height_[0-9d]+_width_[0-9d]+_vertical_[0-9d]+.(svg)$",
        // The SVG tag-specific attribute whitelist is based on the list of tags and
        // and attributes specified in this project:
        // https://github.com/cure53/DOMPurify
        // The mapping of SVG tag to attribute is based on the following pages:
        // https://github.com/wooorm/svg-element-attributes/blob/master/index.json
        // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
        // https://www.w3schools.com/graphics/svg_reference.asp
        "SVG_ATTRS_WHITELIST": {
          "a": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "download", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "href", "hreflang", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "ping", "pointer-events", "property", "referrerpolicy", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "target", "text-anchor", "text-decoration", "text-rendering", "transform", "type", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "altglyph": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "dx", "dy", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "format", "glyph-orientation-horizontal", "glyph-orientation-vertical", "glyphref", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "resource", "rev", "rotate", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode", "x", "y"],
          "altglyphdef": ["about", "class", "content", "datatype", "id", "lang", "property", "rel", "resource", "rev", "style", "tabindex", "typeof"],
          "altglyphitem": ["about", "class", "content", "datatype", "id", "lang", "property", "rel", "resource", "rev", "style", "tabindex", "typeof"],
          "animatecolor": ["about", "accumulate", "additive", "alignment-baseline", "attributename", "attributetype", "baseline-shift", "begin", "by", "calcmode", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "dur", "enable-background", "end", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "from", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "keysplines", "keytimes", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "max", "min", "opacity", "overflow", "pointer-events", "property", "rel", "repeatcount", "repeatdur", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "restart", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "to", "typeof", "unicode-bidi", "values", "visibility", "word-spacing", "writing-mode"],
          "animatemotion": ["about", "accumulate", "additive", "begin", "by", "calcmode", "class", "content", "datatype", "dur", "end", "externalresourcesrequired", "fill", "from", "href", "id", "keypoints", "keysplines", "keytimes", "lang", "max", "min", "origin", "path", "property", "rel", "repeatcount", "repeatdur", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "restart", "rev", "rotate", "style", "systemlanguage", "tabindex", "to", "typeof", "values"],
          "animatetransform": ["about", "accumulate", "additive", "attributename", "attributetype", "begin", "by", "calcmode", "class", "content", "datatype", "dur", "end", "externalresourcesrequired", "fill", "from", "href", "id", "keysplines", "keytimes", "lang", "max", "min", "property", "rel", "repeatcount", "repeatdur", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "restart", "rev", "style", "systemlanguage", "tabindex", "to", "type", "typeof", "values"],
          "audio": ["about", "begin", "class", "content", "datatype", "dur", "end", "externalresourcesrequired", "fill", "id", "lang", "max", "min", "property", "rel", "repeatcount", "repeatdur", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "restart", "rev", "style", "syncbehavior", "syncmaster", "synctolerance", "systemlanguage", "tabindex", "type", "typeof"],
          "canvas": ["about", "class", "content", "datatype", "id", "lang", "preserveaspectratio", "property", "rel", "requiredextensions", "resource", "rev", "style", "systemlanguage", "tabindex", "typeof"],
          "circle": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "cx", "cy", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pathlength", "pointer-events", "property", "r", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "clippath": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "clippathunits", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "defs": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "desc": ["about", "class", "content", "datatype", "id", "lang", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "style", "systemlanguage", "tabindex", "typeof"],
          "ellipse": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "cx", "cy", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pathlength", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "rx", "ry", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "feblend": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "in2", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "mode", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "fecolormatrix": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "type", "typeof", "unicode-bidi", "values", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "fecomponenttransfer": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "fecomposite": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "in2", "k1", "k2", "k3", "k4", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "operator", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "feconvolvematrix": ["about", "alignment-baseline", "baseline-shift", "bias", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "divisor", "dominant-baseline", "edgemode", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kernelmatrix", "kernelunitlength", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "order", "overflow", "pointer-events", "preservealpha", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "targetx", "targety", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "fediffuselighting": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "diffuseconstant", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kernelunitlength", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "surfacescale", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "fedisplacementmap": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "in2", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "scale", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "xchannelselector", "y", "ychannelselector"],
          "fedistantlight": ["about", "azimuth", "class", "content", "datatype", "elevation", "id", "lang", "property", "rel", "resource", "rev", "style", "tabindex", "typeof"],
          "feflood": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "fefunca": ["about", "amplitude", "class", "content", "datatype", "exponent", "id", "intercept", "lang", "offset", "property", "rel", "resource", "rev", "slope", "style", "tabindex", "tablevalues", "type", "typeof"],
          "fefuncb": ["about", "amplitude", "class", "content", "datatype", "exponent", "id", "intercept", "lang", "offset", "property", "rel", "resource", "rev", "slope", "style", "tabindex", "tablevalues", "type", "typeof"],
          "fefuncg": ["about", "amplitude", "class", "content", "datatype", "exponent", "id", "intercept", "lang", "offset", "property", "rel", "resource", "rev", "slope", "style", "tabindex", "tablevalues", "type", "typeof"],
          "fefuncr": ["about", "amplitude", "class", "content", "datatype", "exponent", "id", "intercept", "lang", "offset", "property", "rel", "resource", "rev", "slope", "style", "tabindex", "tablevalues", "type", "typeof"],
          "fegaussianblur": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "edgemode", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stddeviation", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "femerge": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "femergenode": ["about", "class", "content", "datatype", "id", "in", "lang", "property", "rel", "resource", "rev", "style", "tabindex", "typeof"],
          "femorphology": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "operator", "overflow", "pointer-events", "property", "radius", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "feoffset": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "dx", "dy", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "fepointlight": ["about", "class", "content", "datatype", "id", "lang", "property", "rel", "resource", "rev", "style", "tabindex", "typeof", "x", "y", "z"],
          "fespecularlighting": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kernelunitlength", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "specularconstant", "specularexponent", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "surfacescale", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "fespotlight": ["about", "class", "content", "datatype", "id", "lang", "limitingconeangle", "pointsatx", "pointsaty", "pointsatz", "property", "rel", "resource", "rev", "specularexponent", "style", "tabindex", "typeof", "x", "y", "z"],
          "fetile": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "in", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "feturbulence": ["about", "alignment-baseline", "basefrequency", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "numoctaves", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "result", "rev", "seed", "shape-rendering", "stitchtiles", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "type", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "filter": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "filterres", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "primitiveunits", "property", "rel", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "font": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "vert-adv-y", "vert-origin-x", "vert-origin-y", "visibility", "word-spacing", "writing-mode"],
          "g": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "glyph": ["about", "alignment-baseline", "arabic-form", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "d", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "orientation", "overflow", "pointer-events", "property", "rel", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode", "unicode-bidi", "vert-adv-y", "vert-origin-x", "vert-origin-y", "visibility", "word-spacing", "writing-mode"],
          "glyphref": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "dx", "dy", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "format", "glyph-orientation-horizontal", "glyph-orientation-vertical", "glyphref", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode", "x", "y"],
          "hkern": ["about", "class", "content", "datatype", "g1", "g2", "id", "k", "lang", "property", "rel", "resource", "rev", "style", "tabindex", "typeof", "u1", "u2"],
          "image": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "crossorigin", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "href", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pointer-events", "preserveaspectratio", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "type", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "line": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pathlength", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode", "x1", "x2", "y1", "y2"],
          "lineargradient": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "gradienttransform", "gradientunits", "href", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "rev", "shape-rendering", "spreadmethod", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode", "x1", "x2", "y1", "y2"],
          "marker": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "mask", "opacity", "orient", "overflow", "pointer-events", "preserveaspectratio", "property", "refx", "refy", "rel", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "viewbox", "visibility", "word-spacing", "writing-mode"],
          "mask": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "maskcontentunits", "maskunits", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "metadata": ["about", "class", "content", "datatype", "id", "lang", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "style", "systemlanguage", "tabindex", "typeof"],
          "mpath": ["about", "class", "content", "datatype", "externalresourcesrequired", "href", "id", "lang", "property", "rel", "resource", "rev", "style", "tabindex", "typeof"],
          "path": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "d", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pathlength", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "pattern": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "href", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "preserveaspectratio", "property", "rel", "requiredextensions", "requiredfeatures", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "viewbox", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "polygon": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pathlength", "pointer-events", "points", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "polyline": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pathlength", "pointer-events", "points", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "radialgradient": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "cx", "cy", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fr", "fx", "fy", "glyph-orientation-horizontal", "glyph-orientation-vertical", "gradienttransform", "gradientunits", "href", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "r", "rel", "resource", "rev", "shape-rendering", "spreadmethod", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "rect": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pathlength", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "rx", "ry", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "width", "word-spacing", "writing-mode", "x", "y"],
          "stop": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "offset", "opacity", "overflow", "pointer-events", "property", "rel", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "style": ["about", "class", "content", "datatype", "id", "lang", "media", "property", "rel", "resource", "rev", "style", "tabindex", "title", "type", "typeof"],
          "svg": ["about", "alignment-baseline", "baseline-shift", "baseprofile", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "contentscripttype", "contentstyletype", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "height", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "playbackorder", "playbackorder", "pointer-events", "preserveaspectratio", "property", "rel", "requiredextensions", "requiredfeatures", "resource", "rev", "shape-rendering", "snapshottime", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "syncbehaviordefault", "synctolerancedefault", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "timelinebegin", "timelinebegin", "transform", "typeof", "unicode-bidi", "version", "viewbox", "visibility", "width", "word-spacing", "writing-mode", "x", "xmlns", "xmlns:xlink", "y", "zoomandpan"],
          "switch": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "symbol": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "preserveaspectratio", "property", "refx", "refy", "rel", "resource", "rev", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "tabindex", "text-anchor", "text-decoration", "text-rendering", "typeof", "unicode-bidi", "viewbox", "visibility", "word-spacing", "writing-mode"],
          "text": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "dx", "dy", "editable", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "lengthadjust", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "rotate", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "textlength", "transform", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode", "x", "y"],
          "textpath": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "href", "id", "image-rendering", "kerning", "lang", "lengthadjust", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "method", "opacity", "overflow", "path", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "resource", "rev", "shape-rendering", "side", "spacing", "startoffset", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "textlength", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode"],
          "title": ["about", "class", "content", "datatype", "id", "lang", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "style", "systemlanguage", "tabindex", "typeof"],
          "tref": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "dx", "dy", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "lengthadjust", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "resource", "rev", "rotate", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "textlength", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode", "x", "y"],
          "tspan": ["about", "alignment-baseline", "baseline-shift", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "content", "cursor", "datatype", "direction", "display", "dominant-baseline", "dx", "dy", "enable-background", "externalresourcesrequired", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "focusable", "focushighlight", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "id", "image-rendering", "kerning", "lang", "lengthadjust", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "opacity", "overflow", "pointer-events", "property", "rel", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "rev", "rotate", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemlanguage", "tabindex", "text-anchor", "text-decoration", "text-rendering", "textlength", "typeof", "unicode-bidi", "visibility", "word-spacing", "writing-mode", "x", "y"],
          "video": ["about", "begin", "class", "content", "datatype", "dur", "end", "externalresourcesrequired", "fill", "focusable", "focushighlight", "height", "id", "initialvisibility", "lang", "max", "min", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "overlay", "preserveaspectratio", "property", "rel", "repeatcount", "repeatdur", "requiredextensions", "requiredfeatures", "requiredfonts", "requiredformats", "resource", "restart", "rev", "style", "syncbehavior", "syncmaster", "synctolerance", "systemlanguage", "tabindex", "transform", "transformbehavior", "type", "typeof", "width", "x", "y"],
          "view": ["about", "class", "content", "datatype", "externalresourcesrequired", "id", "lang", "preserveaspectratio", "property", "rel", "resource", "rev", "style", "tabindex", "typeof", "viewbox", "viewtarget", "zoomandpan"],
          "vkern": ["about", "class", "content", "datatype", "g1", "g2", "id", "k", "lang", "property", "rel", "resource", "rev", "style", "tabindex", "typeof", "u1", "u2"]
        },
        // List of supported default categories. For now, each category has a specific
        // color associated with it. Each category also has a thumbnail icon whose
        // filename is '{{CategoryName}}.svg'.
        "CATEGORIES_TO_COLORS": {
          "Mathematics": "#cd672b",
          "Algebra": "#cd672b",
          "Arithmetic": "#d68453",
          "Calculus": "#b86330",
          "Logic": "#d68453",
          "Combinatorics": "#cf5935",
          "Graph Theory": "#cf5935",
          "Probability": "#cf5935",
          "Statistics": "#cd672b",
          "Geometry": "#d46949",
          "Trigonometry": "#d46949",
          "Algorithms": "#d0982a",
          "Computing": "#bb8b2f",
          "Programming": "#d9aa53",
          "Astronomy": "#879d6c",
          "Biology": "#97a766",
          "Chemistry": "#aab883",
          "Engineering": "#8b9862",
          "Environment": "#aba86d",
          "Medicine": "#97a766",
          "Physics": "#879d6c",
          "Architecture": "#6e3466",
          "Art": "#895a83",
          "Music": "#6a3862",
          "Philosophy": "#613968",
          "Poetry": "#7f507f",
          "English": "#193a69",
          "Languages": "#1b4174",
          "Latin": "#3d5a89",
          "Reading": "#193a69",
          "Spanish": "#405185",
          "Gaulish": "#1b4174",
          "Business": "#387163",
          "Economics": "#5d8b7f",
          "Geography": "#3c6d62",
          "Government": "#538270",
          "History": "#3d6b52",
          "Law": "#538270",
          "Education": "#942e20",
          "Puzzles": "#a8554a",
          "Sport": "#893327",
          "Welcome": "#992a2b"
        },
        // List of supported content languages in which we can create explorations or
        // other entities. Each description has a parenthetical part that may be
        // stripped out to give a shorter description.
        "SUPPORTED_CONTENT_LANGUAGES": [{
          "code": "en",
          "description": "English",
          "direction": "ltr"
        }, {
          "code": "ar",
          "description": "العربية (Arabic)",
          "direction": "rtl"
        }, {
          "code": "sq",
          "description": "shqip (Albanian)",
          "direction": "ltr"
        }, {
          "code": "bg",
          "description": "български (Bulgarian)",
          "direction": "ltr"
        }, {
          "code": "bn",
          "description": "বাংলা (Bangla)",
          "direction": "ltr"
        }, {
          "code": "ca",
          "description": "català (Catalan)",
          "direction": "ltr"
        }, {
          "code": "zh",
          "description": "中文 (Chinese)",
          "direction": "ltr"
        }, {
          "code": "hr",
          "description": "hrvatski (Croatian)",
          "direction": "ltr"
        }, {
          "code": "cs",
          "description": "čeština (Czech)",
          "direction": "ltr"
        }, {
          "code": "da",
          "description": "dansk (Danish)",
          "direction": "ltr"
        }, {
          "code": "nl",
          "description": "Nederlands (Dutch)",
          "direction": "ltr"
        }, {
          "code": "tl",
          "description": "Filipino (Filipino)",
          "direction": "ltr"
        }, {
          "code": "fi",
          "description": "suomi (Finnish)",
          "direction": "ltr"
        }, {
          "code": "fr",
          "description": "français (French)",
          "direction": "ltr"
        }, {
          "code": "de",
          "description": "Deutsch (German)",
          "direction": "ltr"
        }, {
          "code": "el",
          "description": "ελληνικά (Greek)",
          "direction": "ltr"
        }, {
          "code": "he",
          "description": "עברית (Hebrew)",
          "direction": "rtl"
        }, {
          "code": "hi",
          "description": "हिन्दी (Hindi)",
          "direction": "ltr"
        }, {
          "code": "hi-en",
          "description": "Hinglish",
          "direction": "ltr"
        }, {
          "code": "hu",
          "description": "magyar (Hungarian)",
          "direction": "ltr"
        }, {
          "code": "id",
          "description": "Bahasa Indonesia (Indonesian)",
          "direction": "ltr"
        }, {
          "code": "it",
          "description": "italiano (Italian)",
          "direction": "ltr"
        }, {
          "code": "ja",
          "description": "日本語 (Japanese)",
          "direction": "ltr"
        }, {
          "code": "kab",
          "description": "Taqbaylit (Kabyle)",
          "direction": "ltr"
        }, {
          "code": "ko",
          "description": "한국어 (Korean)",
          "direction": "ltr"
        }, {
          "code": "lv",
          "description": "latviešu (Latvian)",
          "direction": "ltr"
        }, {
          "code": "lt",
          "description": "lietuvių (Lithuanian)",
          "direction": "ltr"
        }, {
          "code": "no",
          "description": "Norsk (Norwegian)",
          "direction": "ltr"
        }, {
          "code": "fa",
          "description": "فارسی (Persian)",
          "direction": "rtl"
        }, {
          "code": "pl",
          "description": "polszczyzna (Polish)",
          "direction": "ltr"
        }, {
          "code": "pt",
          "description": "português (Portuguese)",
          "direction": "ltr"
        }, {
          "code": "ro",
          "description": "română (Romanian)",
          "direction": "ltr"
        }, {
          "code": "ru",
          "description": "pусский (Russian)",
          "direction": "ltr"
        }, {
          "code": "sr",
          "description": "cрпски (Serbian)",
          "direction": "ltr"
        }, {
          "code": "sk",
          "description": "slovenčina (Slovak)",
          "direction": "ltr"
        }, {
          "code": "sl",
          "description": "slovenščina (Slovenian)",
          "direction": "ltr"
        }, {
          "code": "es",
          "description": "español (Spanish)",
          "direction": "ltr"
        }, {
          "code": "sv",
          "description": "svenska (Swedish)",
          "direction": "ltr"
        }, {
          "code": "th",
          "description": "ภาษาไทย (Thai)",
          "direction": "ltr"
        }, {
          "code": "tr",
          "description": "Türkçe (Turkish)",
          "direction": "ltr"
        }, {
          "code": "uk",
          "description": "yкраїнська (Ukrainian)",
          "direction": "ltr"
        }, {
          "code": "vi",
          "description": "Tiếng Việt (Vietnamese)",
          "direction": "ltr"
        }],
        // NOTE TO DEVELOPERS: While adding another language, please ensure that the
        // languages are in alphabetical order.
        // List of supported site languages in which the platform is offered.
        "SUPPORTED_SITE_LANGUAGES": [{
          "id": "id",
          "text": "Bahasa Indonesia"
        }, {
          "id": "en",
          "text": "English"
        }, {
          "id": "es",
          "text": "Español"
        }, {
          "id": "fr",
          "text": "français (French)"
        }, {
          "id": "pt-br",
          "text": "Português (Brasil)"
        }, {
          "id": "ar",
          "text": "العربية"
        }, {
          "id": "kab",
          "text": "Taqbaylit (Kabyle)"
        }, {
          "id": "vi",
          "text": "Tiếng Việt"
        }, {
          "id": "tr",
          "text": "Türkçe (Turkish)"
        }, {
          "id": "hi",
          "text": "हिन्दी"
        }, {
          "id": "bn",
          "text": "বাংলা"
        }, {
          "id": "zh-hans",
          "text": "中文(简体)"
        }, {
          "id": "zh-hant",
          "text": "中文(繁體)"
        }],
        // List of supported audio languages in which we have audio and translations
        // for explorations or other entities.
        // Related languages are used to prioritize an exploration's language when
        // setting the default audio language.
        "SUPPORTED_AUDIO_LANGUAGES": [{
          "id": "en",
          "description": "English",
          "relatedLanguages": ["en"],
          "direction": "ltr"
        }, {
          "id": "ak",
          "description": "Akan",
          "relatedLanguages": ["ak"],
          "direction": "ltr"
        }, {
          "id": "sq",
          "description": "Albanian",
          "relatedLanguages": ["sq"],
          "direction": "ltr"
        }, {
          "id": "ar",
          "description": "Arabic",
          "relatedLanguages": ["ar"],
          "direction": "rtl"
        }, {
          "id": "bg",
          "description": "Bulgarian",
          "relatedLanguages": ["bg"],
          "direction": "ltr"
        }, {
          "id": "bn",
          "description": "Bangla",
          "relatedLanguages": ["bn"],
          "direction": "ltr"
        }, {
          "id": "ms",
          "description": "Bahasa Melayu",
          "relatedLanguages": ["ms"],
          "direction": "ltr"
        }, {
          "id": "ca",
          "description": "Catalan",
          "relatedLanguages": ["ca"],
          "direction": "ltr"
        }, {
          "id": "zh",
          "description": "Chinese",
          "relatedLanguages": ["zh"],
          "direction": "ltr"
        }, {
          "id": "hr",
          "description": "Croatian",
          "relatedLanguages": ["hr"],
          "direction": "ltr"
        }, {
          "id": "cs",
          "description": "Czech",
          "relatedLanguages": ["cs"],
          "direction": "ltr"
        }, {
          "id": "da",
          "description": "Danish",
          "relatedLanguages": ["da"],
          "direction": "ltr"
        }, {
          "id": "prs",
          "description": "Dari",
          "relatedLanguages": ["prs"],
          "direction": "ltr"
        }, {
          "id": "nl",
          "description": "Dutch",
          "relatedLanguages": ["nl"],
          "direction": "ltr"
        }, {
          "id": "ee",
          "description": "Ewe",
          "relatedLanguages": ["ee"],
          "direction": "ltr"
        }, {
          "id": "tl",
          "description": "Filipino",
          "relatedLanguages": ["tl"],
          "direction": "ltr"
        }, {
          "id": "fi",
          "description": "Finnish",
          "relatedLanguages": ["fi"],
          "direction": "ltr"
        }, {
          "id": "fr",
          "description": "French",
          "relatedLanguages": ["fr"],
          "direction": "ltr"
        }, {
          "id": "de",
          "description": "German",
          "relatedLanguages": ["de"],
          "direction": "ltr"
        }, {
          "id": "el",
          "description": "Greek",
          "relatedLanguages": ["el"],
          "direction": "ltr"
        }, {
          "id": "gaa",
          "description": "Ga",
          "relatedLanguages": ["gaa"],
          "direction": "ltr"
        }, {
          "id": "he",
          "description": "Hebrew",
          "relatedLanguages": ["he"],
          "direction": "rtl"
        }, {
          "id": "hi",
          "description": "Hindi",
          "relatedLanguages": ["hi"],
          "direction": "ltr"
        }, {
          "id": "hi-en",
          "description": "Hinglish",
          "relatedLanguages": ["hi", "en"],
          "direction": "ltr"
        }, {
          "id": "hu",
          "description": "Hungarian",
          "relatedLanguages": ["hu"],
          "direction": "ltr"
        }, {
          "id": "id",
          "description": "Indonesian",
          "relatedLanguages": ["id"],
          "direction": "ltr"
        }, {
          "id": "it",
          "description": "Italian",
          "relatedLanguages": ["it"],
          "direction": "ltr"
        }, {
          "id": "ja",
          "description": "Japanese",
          "relatedLanguages": ["ja"],
          "direction": "ltr"
        }, {
          "id": "kab",
          "description": "Kabyle",
          "relatedLanguages": ["kab"],
          "direction": "ltr"
        }, {
          "id": "ko",
          "description": "Korean",
          "relatedLanguages": ["ko"],
          "direction": "ltr"
        }, {
          "id": "lv",
          "description": "Latvian",
          "relatedLanguages": ["lv"],
          "direction": "ltr"
        }, {
          "id": "lt",
          "description": "Lithuanian",
          "relatedLanguages": ["lt"],
          "direction": "ltr"
        }, {
          "id": "no",
          "description": "Norwegian",
          "relatedLanguages": ["no"],
          "direction": "ltr"
        }, {
          "id": "fa",
          "description": "Persian",
          "relatedLanguages": ["fa"],
          "direction": "rtl"
        }, {
          "id": "pl",
          "description": "Polish",
          "relatedLanguages": ["pl"],
          "direction": "ltr"
        }, {
          "id": "pt",
          "description": "Portuguese",
          "relatedLanguages": ["pt"],
          "direction": "ltr"
        }, {
          "id": "ps",
          "description": "Pashto",
          "relatedLanguages": ["ps"],
          "direction": "rtl"
        }, {
          "id": "ro",
          "description": "Romanian",
          "relatedLanguages": ["ro"],
          "direction": "ltr"
        }, {
          "id": "ru",
          "description": "Russian",
          "relatedLanguages": ["ru"],
          "direction": "ltr"
        }, {
          "id": "sr",
          "description": "Serbian",
          "relatedLanguages": ["sr"],
          "direction": "ltr"
        }, {
          "id": "sk",
          "description": "Slovak",
          "relatedLanguages": ["sk"],
          "direction": "ltr"
        }, {
          "id": "sl",
          "description": "Slovenian",
          "relatedLanguages": ["sl"],
          "direction": "ltr"
        }, {
          "id": "es",
          "description": "Spanish",
          "relatedLanguages": ["es"],
          "direction": "ltr"
        }, {
          "id": "sv",
          "description": "Swedish",
          "relatedLanguages": ["sw"],
          "direction": "ltr"
        }, {
          "id": "te",
          "description": "Telugu",
          "relatedLanguages": ["te"],
          "direction": "ltr"
        }, {
          "id": "th",
          "description": "Thai",
          "relatedLanguages": ["th"],
          "direction": "ltr"
        }, {
          "id": "tr",
          "description": "Turkish",
          "relatedLanguages": ["tr"],
          "direction": "ltr"
        }, {
          "id": "uk",
          "description": "Ukrainian",
          "relatedLanguages": ["uk"],
          "direction": "ltr"
        }, {
          "id": "vi",
          "description": "Vietnamese",
          "relatedLanguages": ["vi"],
          "direction": "ltr"
        }],
        "AUTOGENERATED_AUDIO_LANGUAGES": [{
          "id": "en-auto",
          "description": "English (auto)",
          "explorationLanguage": "en",
          "speechSynthesisCode": "en-US",
          "speechSynthesisCodeMobile": "en_US"
        }],
        // Types of view in creator dashboard page.
        "ALLOWED_CREATOR_DASHBOARD_DISPLAY_PREFS": {
          "CARD": "card",
          "LIST": "list"
        },
        "ALLOWED_QUESTION_INTERACTION_CATEGORIES": [{
          "name": "Commonly Used",
          "interaction_ids": ["ImageClickInput", "ItemSelectionInput", "MultipleChoiceInput", "TextInput", "DragAndDropSortInput", "NumericInput"]
        }, {
          "name": "Math",
          "interaction_ids": ["FractionInput", "NumberWithUnits", "NumericInput"]
        }],
        // These categories and interactions are displayed in the order in which they
        // appear in the interaction selector.
        "ALLOWED_INTERACTION_CATEGORIES": [{
          "name": "Commonly Used",
          "interaction_ids": ["Continue", "EndExploration", "ImageClickInput", "ItemSelectionInput", "MultipleChoiceInput", "NumericInput", "TextInput", "DragAndDropSortInput"]
        }, {
          "name": "Math",
          "interaction_ids": ["FractionInput", "GraphInput", "LogicProof", "NumericInput", "SetInput", "NumericExpressionInput", "AlgebraicExpressionInput", "MathEquationInput", "NumberWithUnits", "RatioExpressionInput"]
        }, {
          "name": "Programming",
          "interaction_ids": ["CodeRepl", "PencilCodeEditor"]
        }, {
          "name": "Music",
          "interaction_ids": ["MusicNotesInput"]
        }, {
          "name": "Geography",
          "interaction_ids": ["InteractiveMap"]
        }],
        "CONTRIBUTION_RIGHT_CATEGORY_REVIEW_TRANSLATION": "translation",
        "CONTRIBUTION_RIGHT_CATEGORY_REVIEW_VOICEOVER": "voiceover",
        "CONTRIBUTION_RIGHT_CATEGORY_REVIEW_QUESTION": "question",
        "CONTRIBUTION_RIGHT_CATEGORY_SUBMIT_QUESTION": "submit_question",
        "ACTION_REMOVE_ALL_REVIEW_RIGHTS": "all",
        "ACTION_REMOVE_SPECIFIC_CONTRIBUTION_RIGHTS": "specific",
        "USER_FILTER_CRITERION_USERNAME": "username",
        "USER_FILTER_CRITERION_ROLE": "role",
        // Interaction IDs for which answer details cannot be solicited.
        "INTERACTION_IDS_WITHOUT_ANSWER_DETAILS": ["EndExploration", "Continue"],
        "WHITELISTED_COLLECTION_IDS_FOR_SAVING_GUEST_PROGRESS": [],
        "FEEDBACK_SUBJECT_MAX_CHAR_LIMIT": 50,
        "ACTIVITY_STATUS_PRIVATE": "private",
        "ACTIVITY_STATUS_PUBLIC": "public",
        "SITE_FEEDBACK_FORM_URL": "",
        "SYSTEM_USER_IDS": ["admin", "OppiaMigrationBot"],
        // A string containing the disallowed characters in state or exploration
        // names. The underscore is needed because spaces in names must be converted
        // to underscores when displayed as part of a URL or key. The other
        // conventions here are derived from the Wikipedia guidelines for naming
        // articles.
        "INVALID_NAME_CHARS": [":", "#", "/", "|", "_", "%", "<", ">", "[", "]", "{", "}", "\\ufffd", "\\\\", "\\u007f", "\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000b", "\\f", "\\r", "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"],
        "DEFAULT_SKILL_DIFFICULTY": 0.3,
        "INLINE_RTE_COMPONENTS": ["link", "math", "skillreview"],
        // If new difficulties are added or the names changed, only the constants
        // below need to be edited.
        "SKILL_DIFFICULTY_EASY": "Easy",
        "SKILL_DIFFICULTY_MEDIUM": "Medium",
        "SKILL_DIFFICULTY_HARD": "Hard",
        "SKILL_DIFFICULTIES": ["Easy", "Medium", "Hard"],
        "SKILL_DIFFICULTY_LABEL_TO_FLOAT": {
          "Easy": 0.3,
          "Medium": 0.6,
          "Hard": 0.9
        },
        "ENABLE_PREREQUISITE_SKILLS": false,
        "ENABLE_NEW_STRUCTURE_VIEWER_UPDATES": true,
        "ENABLE_SOLICIT_ANSWER_DETAILS_FEATURE": true,
        "MAX_SKILLS_PER_QUESTION": 3,
        "MAX_QUESTIONS_PER_SKILL": 50,
        "NUM_EXPLORATIONS_PER_REVIEW_TEST": 3,
        "NUM_QUESTIONS_PER_PAGE": 10,
        // The default number of opportunities to show on the contributor dashboard
        // page.
        "OPPORTUNITIES_PAGE_SIZE": 10,
        // The following character limit constraints follow from
        // android_validation_constants.py. Both have to be kept in sync.
        // This represents the maximum number of characters in the URL fragment for
        // classroom in the classroom page URL. E.g. in /learn/math/...,
        // 'math' is the 'classroom URL fragment'.
        "MAX_CHARS_IN_CLASSROOM_URL_FRAGMENT": 20,
        "MAX_CHARS_IN_TOPIC_NAME": 39,
        "MAX_CHARS_IN_ABBREV_TOPIC_NAME": 12,
        // This represents the maximum number of characters in the URL fragment for
        // topic in the topic page URL. E.g. in /learn/math/fractions/...,
        // 'fractions' is the 'topic URL fragment'.
        "MAX_CHARS_IN_TOPIC_URL_FRAGMENT": 20,
        "MAX_CHARS_IN_TOPIC_DESCRIPTION": 240,
        "MAX_CHARS_IN_SUBTOPIC_TITLE": 64,
        "MAX_CHARS_IN_SKILL_DESCRIPTION": 100,
        "MAX_CHARS_IN_STORY_TITLE": 39,
        "MAX_CHARS_IN_STORY_DESCRIPTION": 1000,
        "MAX_CHARS_IN_CHAPTER_TITLE": 36,
        "MAX_CHARS_IN_CHAPTER_DESCRIPTION": 152,
        "MAX_CHARS_IN_MISCONCEPTION_NAME": 100,
        // This represents the maximum number of characters in the URL fragment for
        // story in the story page URL. E.g.
        // in /learn/math/fractions/story/bakery/..., 'bakery' is the
        // 'story URL fragment'.
        "MAX_CHARS_IN_STORY_URL_FRAGMENT": 30,
        // This represents the maximum number of characters in the URL fragment for
        // subtopic in the revision page URL. E.g.
        // in /learn/math/fractions/revision/place-values, 'place-values' is the
        // 'subtopic URL fragment'.
        "MAX_CHARS_IN_SUBTOPIC_URL_FRAGMENT": 25,
        // The recommended length for meta tag contents. Search engines will truncate
        // results greater than this limit.
        "MAX_CHARS_IN_META_TAG_CONTENT": 160,
        "MAX_CHARS_IN_PAGE_TITLE_FRAGMENT_FOR_WEB": 50,
        "NEW_STATE_TEMPLATE": {
          "classifier_model_id": null,
          "content": {
            "html": "",
            "content_id": "content"
          },
          "interaction": {
            "id": null,
            "customization_args": {},
            "answer_groups": [],
            "default_outcome": {
              "dest": "Introduction",
              "feedback": {
                "content_id": "default_outcome",
                "html": ""
              },
              "labelled_as_correct": false,
              "param_changes": [],
              "refresher_exploration_id": null,
              "missing_prerequisite_skill_id": null
            },
            "confirmed_unclassified_answers": [],
            "hints": [],
            "solution": null
          },
          "next_content_id_index": 0,
          "param_changes": [],
          "recorded_voiceovers": {
            "voiceovers_mapping": {
              "content": {},
              "default_outcome": {}
            }
          },
          "solicit_answer_details": false,
          "written_translations": {
            "translations_mapping": {
              "content": {},
              "default_outcome": {}
            }
          }
        },
        // Data required for Google Analytics.
        "ANALYTICS_ID": "",
        "SITE_NAME_FOR_ANALYTICS": "",
        "FIREBASE_AUTH_ENABLED": false,
        // Data required for Firebase authentication.
        //
        // NOTE TO RELEASE COORDINATORS: Please change these to the production values,
        // and change useEmulator to be false, before deploying to production.
        "FIREBASE_CONFIG_API_KEY": "fake-api-key",
        "FIREBASE_CONFIG_APP_ID": "",
        "FIREBASE_CONFIG_AUTH_DOMAIN": "",
        "FIREBASE_CONFIG_DATABASE_URL": "",
        "FIREBASE_CONFIG_GOOGLE_CLIENT_ID": "",
        "FIREBASE_CONFIG_MESSAGING_SENDER_ID": "",
        "FIREBASE_CONFIG_PROJECT_ID": "dev-project-id",
        "FIREBASE_CONFIG_STORAGE_BUCKET": "",
        "FIREBASE_EMULATOR_ENABLED": true,
        "ALLOW_YAML_FILE_UPLOAD": false,
        // A regular expression for tags.
        "TAG_REGEX": "^[a-z ]+$",
        // A regular expression for allowed characters in URL fragment fields.
        "VALID_URL_FRAGMENT_REGEX": "^[a-z]+(-[a-z]+)*$",
        // A regular expression for valid skill misconception id.
        "VALID_SKILL_MISCONCEPTION_ID_REGEX": "[A-Za-z0-9]{12}-[0-9]+",
        // Invalid names for parameters used in expressions.
        "INVALID_PARAMETER_NAMES": ["answer", "choices", "abs", "all", "and", "any", "else", "floor", "if", "log", "or", "pow", "round", "then"],
        // Greek letters allowed in math interactions.
        "GREEK_LETTER_NAMES_TO_SYMBOLS": {
          "alpha": "α",
          "beta": "β",
          "gamma": "γ",
          "delta": "δ",
          "epsilon": "ε",
          "zeta": "ζ",
          "eta": "η",
          "theta": "θ",
          "iota": "ι",
          "kappa": "κ",
          "lambda": "λ",
          "mu": "μ",
          "nu": "ν",
          "xi": "ξ",
          "pi": "π",
          "rho": "ρ",
          "sigma": "σ",
          "tau": "τ",
          "upsilon": "υ",
          "phi": "φ",
          "chi": "χ",
          "psi": "ψ",
          "omega": "ω",
          "Gamma": "Γ",
          "Delta": "Δ",
          "Theta": "Θ",
          "Lambda": "Λ",
          "Xi": "Ξ",
          "Pi": "Π",
          "Sigma": "Σ",
          "Phi": "Φ",
          "Psi": "Ψ",
          "Omega": "Ω"
        },
        // The greek letters in the list should be in sync with the
        // GREEK_LETTER_NAMES_TO_SYMBOLS object's keys.
        "VALID_ALGEBRAIC_IDENTIFIERS": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "pi", "rho", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega", "Gamma", "Delta", "Theta", "Lambda", "Xi", "Pi", "Sigma", "Phi", "Psi", "Omega"],
        // Allowed letters in the OSK.
        "VALID_CUSTOM_OSK_LETTERS": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω", "Γ", "Δ", "Θ", "Λ", "Ξ", "Π", "Σ", "Φ", "Ψ", "Ω"],
        // Number of custom letters allowed in the on-screen keyboard for math
        // interactions.
        "MAX_CUSTOM_LETTERS_FOR_OSK": 10,
        // Functions allowed in math interactions.
        "MATH_FUNCTION_NAMES": ["log", "ln", "sqrt", "abs", "sin", "cos", "tan", "sec", "csc", "cot", "arcsin", "arccos", "arctan", "sinh", "cosh", "tanh"],
        "OSK_MAIN_TAB": "mainTab",
        "OSK_FUNCTIONS_TAB": "functionsTab",
        "OSK_LETTERS_TAB": "lettersTab",
        "CUSTOM_LETTERS_LATIN_TAB": "latinTab",
        "CUSTOM_LETTERS_GREEK_TAB": "greekTab",
        // Name to human readable form mapping of the position of terms object.
        "POSITION_OF_TERMS_MAPPING": [{
          "name": "lhs",
          "humanReadableName": "on Left Hand Side"
        }, {
          "name": "rhs",
          "humanReadableName": "on Right Hand Side"
        }, {
          "name": "both",
          "humanReadableName": "on both sides"
        }, {
          "name": "irrelevant",
          "humanReadableName": "with reordering allowed around ="
        }],
        // Placeholder texts for the math interactions.
        "MATH_INTERACTION_PLACEHOLDERS": {
          "AlgebraicExpressionInput": "Type an expression here.",
          "NumericExpressionInput": "Type an expression here, using only numbers.",
          "MathEquationInput": "Type an equation here."
        },
        // Unfinished features.
        "SHOW_TRAINABLE_UNRESOLVED_ANSWERS": false,
        // eslint-disable-next-line max-len
        "DEFAULT_TWITTER_SHARE_MESSAGE_EDITOR": "Check out this interactive lesson on Oppia - a free platform for teaching and learning!",
        "OPPORTUNITY_TYPE_SKILL": "skill",
        "OPPORTUNITY_TYPE_TRANSLATION": "translation",
        "OPPORTUNITY_TYPE_VOICEOVER": "voiceover",
        // The bucket name is set to None-resources to enable it to be used
        // in prod mode when the resource bucket name is not allowed to be null.
        "GCS_RESOURCE_BUCKET_NAME": "None-resources",
        "ENABLE_EXP_FEEDBACK_FOR_LOGGED_OUT_USERS": true,
        // Used to disable account removal until it is fully implemented.
        "ENABLE_ACCOUNT_DELETION": true,
        // Used to disable account data export until it is fully implemented.
        "ENABLE_ACCOUNT_EXPORT": true,
        // Link to open when the Oppia avatar is clicked on any page.
        "OPPIA_AVATAR_LINK_URL": null,
        // Maximum allowed length of a username.
        "MAX_USERNAME_LENGTH": 30,
        // Maximum allowed length of a state name.
        "MAX_STATE_NAME_LENGTH": 50,
        "PLATFORM_PARAMETER_ALLOWED_BROWSER_TYPES": ["Chrome", "Edge", "Safari", "Firefox", "Others"],
        "PLATFORM_PARAMETER_ALLOWED_PLATFORM_TYPES": ["Web", "Android", "Backend"],
        // The ordering of in ALLOWED_APP_VERSION_FLAVORS implies the ordering
        // of corresponding flavors, which is used in app_version_flavor filter for
        // order comparison, with ordering: 'test' < 'alpha' < 'beta' < 'release'.
        "PLATFORM_PARAMETER_ALLOWED_APP_VERSION_FLAVORS": ["test", "alpha", "beta", "release"],
        "PLATFORM_PARAMETER_APP_VERSION_WITHOUT_HASH_REGEXP": "^(\\d+(?:\\.\\d+){2})$",
        "PLATFORM_PARAMETER_APP_VERSION_WITH_HASH_REGEXP": "^(\\d+(?:\\.\\d+){2})(?:-[a-z0-9]+(?:-(.+))?)?$",
        // Maximum allowed commit message length. 375 characters because indexed
        // fields must be at most 1500 bytes, and UTF-8 encoded characters can be
        // up to 4 bytes long.
        "MAX_COMMIT_MESSAGE_LENGTH": 375,
        "DEV_MODE": true,
        "EMULATOR_MODE": true
      };
      /***/
    },

    /***/
    "i1P3":
    /*!*****************************************************!*\
      !*** ./core/templates/pages/app-page/app.module.ts ***!
      \*****************************************************/

    /*! exports provided: AppModule */

    /***/
    function i1P3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var pages_about_page_about_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! pages/about-page/about-page.module */
      "ON6u");
      /* harmony import */


      var pages_donate_page_donate_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! pages/donate-page/donate-page.module */
      "amNk");
      /* harmony import */


      var pages_error_pages_error_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! pages/error-pages/error-page.module */
      "JNAW");
      /* harmony import */


      var _app_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-root.component */
      "RdYu");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.routing.module */
      "0v3l");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = /*#__PURE__*/function () {
        function AppModule() {
          _classCallCheck(this, AppModule);
        }

        _createClass(AppModule, [{
          key: "ngDoBootstrap",
          value: function ngDoBootstrap() {}
        }]);

        return AppModule;
      }();

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], pages_donate_page_donate_page_module__WEBPACK_IMPORTED_MODULE_3__["DonatePageModule"], pages_about_page_about_page_module__WEBPACK_IMPORTED_MODULE_2__["AboutPageModule"], pages_error_pages_error_page_module__WEBPACK_IMPORTED_MODULE_4__["ErrorPageModule"]],
        declarations: [_app_root_component__WEBPACK_IMPORTED_MODULE_5__["AppRootComponent"]],
        bootstrap: [_app_root_component__WEBPACK_IMPORTED_MODULE_5__["AppRootComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "lGsL":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/pages/app-page/app-root.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lGsL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul>\n  <li><a routerLink=\"/donate\">/donate</a></li>\n  <li><a routerLink=\"/about\">/about</a></li>\n  <li><a routerLink=\"/credits\">/credits</a></li>\n</ul>\n<hr>\n<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "lswZ":
    /*!******************************************************!*\
      !*** ./core/templates/services/translate.service.ts ***!
      \******************************************************/

    /*! exports provided: TranslateService */

    /***/
    function lswZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslateService", function () {
        return TranslateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils.service */
      "RY2A");
      /* harmony import */


      var services_translations_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! services/translations-backend-api.service */
      "Navo"); // Copyright 2020 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      /**
       * @fileoverview Translate service for i18n translations
       */


      var TranslateService = /*#__PURE__*/function () {
        function TranslateService(translationsBackendApiService, utilsService) {
          _classCallCheck(this, TranslateService);

          this.translationsBackendApiService = translationsBackendApiService;
          this.utilsService = utilsService;
          this.currentLang = 'en';
          this.fallbackLang = 'en';
          this.translations = [];
          this.templateMatcher = /\<\[\s?([^{}\s]*)\s?\]\>/g;
          this.onLangChangeEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(TranslateService, [{
          key: "onLangChange",
          get: function get() {
            return this.onLangChangeEventEmitter;
          }
          /**
           * Function to fetch JSON file containing translations.
           * @param {string} languageCode - Code of the language
           * @returns {Promise<TranslationsDict>} - A promise that resolves to the
           * translations
           */

        }, {
          key: "fetchTranslationAsync",
          value: function fetchTranslationAsync(languageCode) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", this.translationsBackendApiService.fetchTranslationsAsync(languageCode));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
          /**
           * This function sets the new translations
           * @param {string} languageCode - language code of the translation to be used
           */

        }, {
          key: "use",
          value: function use(newLanguageCode) {
            var _this7 = this;

            // Check if the translations for the "lang" have been fetched before.
            this.currentLang = newLanguageCode;

            if (Object.keys(this.translations).includes(newLanguageCode)) {
              this.onLangChangeEventEmitter.emit({
                newLanguageCode: newLanguageCode
              });
              return;
            } // Otherwise fetch the translations.


            this.translations[newLanguageCode] = this.fetchTranslationAsync(newLanguageCode).then(function (translations) {
              _this7.translations[newLanguageCode] = translations;

              if (_this7.currentLang === newLanguageCode) {
                _this7.onLangChangeEventEmitter.emit({
                  newLanguageCode: newLanguageCode
                });
              }
            });
          }
          /**
           * Functions that interpolates the translatedValue
           * @param {string} translatedValue - The value corresponding to the key
           * @param {Object} params - key-value pairs for interpolation
           * @returns {string} interpolated translatedValue
           */

        }, {
          key: "interpolateTranslatedValue",
          value: function interpolateTranslatedValue(translatedValue, interpolateParams) {
            var _this8 = this;

            if (!interpolateParams) {
              return translatedValue;
            }

            return translatedValue.replace(this.templateMatcher, function (substring, interpolateParamsKey) {
              var interpolateParamsValue = interpolateParams[interpolateParamsKey];

              if (_this8.utilsService.isDefined(interpolateParamsValue)) {
                return interpolateParamsValue;
              }

              return substring;
            });
          }
          /**
           * Gets the translatedValue corresponding to the key and returns the
           * interpolated string of the translatedValue using the interpolateParams.
           * @param {string} key - key for i18n translation
           * @param {Object} interpolateParams - key-value pairs for interpolation
           * @returns {string} - interpolated string of the translatedValue
           * corresponding to the key.
           */

        }, {
          key: "getInterpolatedString",
          value: function getInterpolatedString(key, interpolateParams) {
            if (!this.utilsService.isDefined(key) || !key.length) {
              throw new Error('Parameter "key" required');
            }

            var translations = this.translations[this.currentLang];

            if (translations && translations[key]) {
              return this.interpolateTranslatedValue(translations[key], interpolateParams);
            } // If the translation for the current lang doesn't exist use fallback lang.


            translations = this.translations[this.fallbackLang];

            if (this.fallbackLang !== null && this.fallbackLang !== this.currentLang && translations && translations[key]) {
              return this.interpolateTranslatedValue(translations[key], interpolateParams);
            } // If the translation for the fallback lang doesn't exist, return the key.


            return key;
          }
        }]);

        return TranslateService;
      }();

      TranslateService.ctorParameters = function () {
        return [{
          type: services_translations_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["TranslationsBackendApiService"]
        }, {
          type: _utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
        }];
      };

      TranslateService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [services_translations_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["TranslationsBackendApiService"], _utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]])], TranslateService);
      /***/
    },

    /***/
    "p1/J":
    /*!****************************!*\
      !*** ./assets/hashes.json ***!
      \****************************/

    /*! exports provided: default */

    /***/
    function p1J(module) {
      module.exports = JSON.parse("{}");
      /***/
    },

    /***/
    "qLlN":
    /*!*****************************************************************!*\
      !*** ./core/templates/pages/about-page/about-page.constants.ts ***!
      \*****************************************************************/

    /*! exports provided: AboutPageConstants */

    /***/
    function qLlN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageConstants", function () {
        return AboutPageConstants;
      }); // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
       * @fileoverview Constants for the Oppia about page.
       */


      var AboutPageConstants = {
        // These credits should not be changed directly. If any change is
        // made to structure/formatting, the respective constants
        // CREDITS_START_LINE, CREDITS_END_LINE and CREDITS_INDENT should be
        // updated in update_changelog_and_credits.py file. If the patterns do
        // not match, update_changelog_and_credits_test will fail.
        CREDITS_CONSTANTS: ['Aadya Mishra', 'Aaron Zuspan', 'Aashish Gaba', 'Aashish Singh', 'Abeer Khan', 'Abhay Garg', 'Abhay Gupta', 'Abhay Raghuwanshi', 'Abhay Raizada', 'Abhijit Suresh', 'Abhimanyu Thakre', 'Abhishek Arya', 'Abhishek Kumar', 'Abhishek Uniyal', 'Abhith Krishna', 'Abraham Mgowano', 'Acash Mkj', 'Adarsh Kumar', 'Aditya Dubey', 'Aditya Jain', 'Aditya Sharma', 'Adrija Acharyya', 'Aishwary Saxena', 'Ajay Sharma', 'Ajo John', 'Akshath Kaushal', 'Akshay Anand', 'Akshay Nandwana', 'Alex Gower', 'Alex Lee', 'Alexandra Wu', 'Allan Zhou', 'Alluri Harshit Varma', 'Amanda Rodriguez', 'Amey Kudari', 'Amit Deutsch', 'Amulya Kumar', 'Ana Francisca Bernardo', 'Andrew Low', 'Andrey Mironyuk', 'Angela Park', 'Anggoro Dewanto', 'Anish V Badri', 'Ankita Saxena', 'Anmol Mittal', 'Anmol Shukla', 'Anshul Hudda', 'Anthony Alridge', 'Anthony Zheng', 'Anubhav Sinha', 'Anumeha Agrawal', 'Anurag Thakur', 'Apurv Bajaj', 'Apurv Botle', 'Archi Aggarwal', 'Areesha Tariq', 'Arkadyuti Bandyopadhyay', 'Arnesh Agrawal', 'Arpan Banerjee', 'Arpit Bandejiya', 'Arun Kumar', 'Arunabh Ghosh', 'Aryaman Gupta', 'Ashish Verma', 'Ashmeet Singh', 'Ashutosh Singla', 'Assem Yeskabyl', 'Aubrey Wells', 'Aung Hein Oo', 'Avijit Gupta', 'Ayush Nandi', 'Baiba Skujevska', 'Barnabas Makonda', 'Ben Henning', 'Ben Targan', 'Bill Morrisson', 'BJ Voth', 'Bolaji Fatade', 'Boyd Y. Ching', 'Brenton Briggs', 'Brian Lin', 'Brian Rodriguez', 'Cathleen Huang', 'Charisse De Torres', 'Chase Albert', 'Chen Shenyue', 'Chin Zhan Xiong', 'Chris Skalnik', 'Christopher Tao', 'Cihan Bebek', 'Connie Chow', 'Corey Hunter', 'Céline Deknop', 'Darin Nguyen', 'David Cheng', 'Dawson Eliasen', 'Debanshu Bhaumik', 'Deepam Banerjee', 'Deepank Agarwal', 'Denis Samokhvalov', 'Devi Sandeep', 'Dharmesh Poddar', 'Diana Chen', 'Divyadeep Singh', 'Domenico Vitarella', 'Dong Wook Brian Chung', 'Edward Allison', 'Elizabeth Kemp', 'Emily Glue', 'Eric Lou', 'Eric Yang', 'Estelle Lee', 'Fang You', 'Felicity Zhao', 'Florin Balint', 'Frederik Creemers', 'Gabriel Fuentes', 'Gagan Suneja', 'Gangavarapu Praneeth', 'Gautam Verma', 'Geet Choudhary', 'Grace Guo', 'Hadyn Fitzgerald', 'Hamlet Villa', 'Hamza Chandad', 'Hanan Mufti', 'Hardik Katehara', 'Haresh Khanna', 'Harsh Khajuria', 'Harsh Khilawala', 'Hasitha Kaushan', 'Hema Sundara Rao Ginni', 'Henriette Hettinga', 'Henry Phu', 'Himanshu Aggarwal', 'Himanshu Dixit', 'Hitesh Sharma', 'Hope Ngerebara', 'Huong Le', 'Ian Luttrell', 'Ishan Shanware', 'Ishan Singh', 'Jackson Wu', 'Jacob Davis', 'Jacob Li Peng Cheng', 'Jacque Li', 'Jakub Osika', 'James James John', 'James Xu', 'Jamie Lau', 'Jansen Yan', 'Jared Silver', 'Jasmine Rider', 'Jasper Deng', 'Jaswinder Singh', 'Jaysinh Shukla', 'Jenna Mandel', 'Jennifer Chen', 'Jeremy Emerson', 'Jerry Chen', 'Jerry Lau', 'Jian Fu', 'Jiazhi Chen', 'Jim Zhan', 'John Glennon', 'John Karasinski', 'John Prince Mesape', 'Jonathan Slaton', 'Jordan Cockles', 'Jordan Stapinski', 'Joseph Fedota', 'Joshua Cano', 'Joshua Lan', 'Joshua Lusk', 'Joydeep Mukherjee', 'Juan Saba', 'Justin Du', 'Jérôme', 'K.N. Anantha Nandanan', 'Kajol Kumari', 'Karen Rustad', 'Kartikey Pandey', 'Kashif Jamal Soofi', 'Kate Perkins', 'Kathryn Patterson', 'Kayla Hardie', 'Kefeh Collins', 'Kenneth Ho', 'Kerry Wang', 'Keshav Bathla', 'Keshav Gupta', 'Kevin Conner', 'Kevin Lee', 'Kevin Thomas', 'Kevin Zhang', 'Khushi Gangopadhyay', 'Kiran Konduru', 'Koji Ashida', 'Konstantinos Kagkelidis', 'Krishita Jain', 'Krishna Rao', 'Kristin Anthony', 'Kumari Shalini', 'Kunal Garg', 'Kyriaki Velliniati', 'Lakshay Angrish', 'Lara Davies', 'Laura Kinkead', 'Linn Hallonqvist', 'Lorrany Azevedo', 'Lucklita Theng', 'Luis Ulloa', 'Lunrong Chen', 'Madhav Sainanee', 'Madiyar Aitbayev', 'Mamat Rahmat', 'Manas Tungare', 'Manoj Mohan', 'Marcel Schmittfull', 'Mariana Zangrossi', 'Mark Cabanero', 'Mark Halpin', 'Martin Smithurst', 'Matt Higgins', 'Maurício Meneghini Fauth', 'Md Shahbaz Alam', 'Meet Vyas', 'Mert Degirmenci', 'Michael Anuzis', 'Michael Mossey', 'Michael Orwin', 'Michael Wagner', 'Michael Wu', 'Milagro Teruel', 'Min Tan', 'Mohammad Shahebaz', 'Mohammad Zaman', 'Mohit Gupta', 'Mohit Musaddi', 'Mozammel Haque', 'Mridul Setia', 'Mungo Dewar', 'Nadin Tamer', 'Nalin Bhardwaj', 'Nalin Chhibber', 'Namuli Joyce', 'Naveen Kumar Shukla', 'Netaji Kancharapu', 'Nicolas Skirkey', 'Nikhil Handa', 'Nikhil Nair', 'Nikhil Prakash', 'Nikhil Sangwan', 'Nikhil Agarwal', 'Nimalen Sivapalan', 'Nishant Mittal', 'Nisheal John', 'Nithesh N. Hariharan', 'Nitish Bansal', 'Omshi Samal', 'Oskar Cieslik', 'Oswell Chan', 'Owen Parry', 'Ozan Filiz', 'Paloma Oliveira', 'Pankaj Dahiya', 'Parth Bhoiwala', 'Parul Priyedarshani', 'Phil Wagner', 'Philip Hayes', 'Phillip Moulton', 'Piyush Agrawal', 'Prakash Subedi', 'Pranav Siddharth S', 'Prasanna Patil', 'Pratik Katte', 'Prayush Dawda', 'Pulkit Aggarwal', 'Pulkit Gera', 'Purhan', 'Purvi Misal', 'Radesh Kumar', 'Rafay Ghafoor', 'Rafał Kaszuba', 'Rahul Gurung', 'Rahul Modi', 'Raine Hoover', 'Rajan Garg', 'Rajat Kumar', 'Rajat Patwa', 'Rajat Talesra', 'Rajendra Kadam', 'Rajitha Warusavitarana', 'Rakshit Kumar', 'Ramin Izadpanah', 'Raymond Tso', 'Rebekah Houser', 'Reinaldo Aguiar', 'Reshu Kumari', 'Reto Brunner', 'Ria Arora', 'Richard Cho', 'Rijuta Singh', 'Rishabh Rawat', 'Rishav Chakraborty', 'Ritik Kumar', 'Rizky Riyaldhi', 'Rohan Batra', 'Rohan Gulati', 'Rohit Katlaa', 'Ross Strader', 'Rudra Sadhu', 'Rémi Gourdon', 'Sachin Gopal', 'Saeed Jassani', 'Safwan Mansuri', 'Sagang Wee', 'Sagar Manohar', 'Sajal Asati', 'Sajna Kadalikat', 'Samara Trilling', 'Samriddhi Mishra', 'Sandeep Dubey', 'Sandeep Patel', 'Sankranti Joshi', 'Santos Hernandez', 'Sanyam Khurana', 'Sasa Cocic-Banjanac', 'Satish Boggarapu', 'Satmeet Ubhi', 'Satwik Kansal', 'Satyam Bhalla', 'Satyam Yadav', 'Saurav Pratihar', 'Savitha K Jayasankar', 'Scott Brenner', 'Scott Junner', 'Scott Roberts', 'Sean Anthony Riordan', 'Sean Lip', 'Sebastian Zangaro', 'Seth Beckman', 'Seth Saloni', 'Shafqat Dulal', 'Shantanu Bhowmik', 'Sharif Shaker', 'Shiqi Wu', 'Shitong Shou', 'Shiva Krishna Yadav', 'Shivan Trivedi', 'Shivansh Bajaj', 'Shivansh Dhiman', 'Shivansh Rakesh', 'Shouvik Roy', 'Shruti Grover', 'Shruti Satish', 'Shubha Gupta', 'Shubha Rajan', 'Shubham Bansal', 'Shubham Korde', 'Shuta Suzuki', 'Siddhant Khandelwal', 'Siddhant Srivastav', 'Siddharth Batra', 'Simran Mahindrakar', 'Soumyo Dey', 'Sourab Jha', 'Sourav Badami', 'Sourav Singh', 'Sreenivasulu Giritheja', 'Srijan Reddy', 'Srikar Ch', 'Stefanie Muroya Lei', 'Stephanie Federwisch', 'Stephen Chiang', 'Sudhanva MG', 'Sudipta Gyan Prakash Pradhan', 'Sumit Paroothi', 'Surya Siriki', 'Tanmay Mathur', 'Tarashish Mishra', 'Teddy Marchildon', 'Tezuesh Varshney', 'Theo Lipeles', 'Tia Jin', 'Tianqi Wu', 'Timothy Cyrus', 'Tonatiuh Garcia', 'Tony Afula', 'Tony Jiang', 'Tracy Homer', 'Travis Shafer', 'Truong Kim', 'Tuguldur Baigalmaa', 'Tushar Mohan', 'Tyler Ishikawa', 'Ujjwal Gulecha', 'Umesh Singla', 'Utkarsh Dixit', 'Varazdat Manukyan', 'Varun Tandon', 'Vasu Tomar', 'Vibhor Agarwal', 'Viet Tran Quoc Hoang', 'Vijay Patel', 'Viktor Pishuk', 'Vinayak Vishwanath Gosain', 'Vinit Dantkale', 'Vinita Murthi', 'Viraj Prabhu', 'Vishal Desai', 'Vishal Gupta', 'Vuyisile Ndlovu', 'Vishal Joisar', 'Vishnu M', 'Vojtěch Jelínek', 'Vuyisile Ndlovu', 'Wiktor Idzikowski', 'Will Li', 'Wilson Hong', 'Xinyu Wu', 'Xuân (Sean) Lương', 'Yana Malysheva', 'Yang Lu', 'Yash Jipkate', 'Yash Ladha', 'Yi Yan', 'Yiming Pan', 'Yogesh Sharma', 'Yousef Hamza', 'Yuan Gu', 'Yuliang', 'Zach Puller', 'Zach Wiebesiek', 'Zachery Vekovius', 'Zhu Chu', 'Zoe Madden-Wood']
      };
      /***/
    },

    /***/
    "r42+":
    /*!*******************************************************************!*\
      !*** ./core/templates/pages/app-page/environments/environment.ts ***!
      \*******************************************************************/

    /*! exports provided: environment */

    /***/
    function r42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "tkYy":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/pages/error-pages/error-page.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tkYy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"oppia-content oppia-error-page-main-content\">\n  <br>\n\n  <div class=\"oppia-wide-panel oppia-error-wide-container\">\n    <div class=\"oppia-wide-panel-content protractor-test-error-container\">\n      <h1 class=\"oppia-error-h1\">\n        <div *ngIf=\"getStatusCode() === 400\">\n          <span [innerHTML]=\"'I18N_ERROR_HEADER_400' | translate\"></span>\n          - Bad Request\n        </div>\n        <div *ngIf=\"getStatusCode() === 401\">\n          <span [innerHTML]=\"'I18N_ERROR_HEADER_401' | translate\"></span>\n          - Unauthorized\n        </div>\n        <div *ngIf=\"getStatusCode() === 404\" class=\"protractor-test-error-page\">\n          <span [innerHTML]=\"'I18N_ERROR_HEADER_404' | translate\"></span>\n          - Page Not Found\n        </div>\n        <div *ngIf=\"getStatusCode() === 500\">\n          <span [innerHTML]=\"'I18N_ERROR_HEADER_500' | translate\"></span>\n          - System Error\n        </div>\n      </h1>\n\n      <br>\n      <picture>\n        <source type=\"image/webp\" [srcset]=\"getStaticImageUrl('/general/oops_mint.webp')\">\n        <source type=\"image/png\" [srcset]=\"getStaticImageUrl('/general/oops_mint.png')\">\n        <img [src]=\"getStaticImageUrl('/general/oops_mint.png')\" alt=\"Oops!\" width=\"299\" height=\"142\">\n      </picture>\n\n      <div>\n        <h2 *ngIf=\"statusCode === 400\" class=\"oppia-error-h2\" [innerHTML]=\"'I18N_ERROR_MESSAGE_400' | translate\"></h2>\n        <h2 *ngIf=\"statusCode === 401\" class=\"oppia-error-h2\" [innerHTML]=\"'I18N_ERROR_MESSAGE_401' | translate\"></h2>\n        <h2 *ngIf=\"statusCode === 404\" class=\"oppia-error-h2\" [innerHTML]=\"'I18N_ERROR_MESSAGE_404' | translate\"></h2>\n        <h2 *ngIf=\"statusCode === 500\" class=\"oppia-error-h2\" [innerHTML]=\"'I18N_ERROR_MESSAGE_500' | translate\"></h2>\n      </div>\n      <p><span [innerHTML]=\"'I18N_ERROR_NEXT_STEPS' | translate: {issueTrackerUrl: 'https://github.com/oppia/oppia/issues/new', homeUrl: '/'}\"></span></p>\n    </div>\n  </div>\n</div>\n<style>\n  .oppia-error-h1 {\n    font-size: 1em;\n    margin: 1.33em 0;\n  }\n  .oppia-error-h2 {\n    font-size: 1.17em;\n    font-weight: 700;\n  }\n  @media screen and (min-width: 768px) {\n    .oppia-footer {\n      position: relative;\n    }\n  }\n</style>\n";
      /***/
    },

    /***/
    "vhO9":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/pages/donate-page/donate-page.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vhO9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"donate-page\">\n  <div class=\"oppia-page-card oppia-static-content protractor-test-donate-page\">\n    <div class=\"oppia-donation-card-content-wide\">\n      <div class=\"oppia-donate-options\">\n        <div *ngIf=\"windowIsNarrow\">\n          <h1 class=\"oppia-donate-h1\">Donate to the <br>\n          Oppia Foundation</h1>\n          <a routerLink=\"\"></a>\n        </div>\n        <div *ngIf=\"!windowIsNarrow\">\n          <h1 class=\"oppia-donate-h1\">Donate to <br>\n          The Oppia Foundation</h1>\n        </div>\n        <div class=\"text-center\">\n          <form ngNoForm action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n            <input type=\"hidden\" name=\"hosted_button_id\" value=\"UWKTY87SYU766\">\n            <button type=\"submit\" class=\"btn oppia-donate-options-button protractor-test-paypal-donate-button\" tabindex=\"0\" (click)=\"onDonateThroughPayPal()\">\n              PayPal\n            </button>\n          </form>\n        </div>\n        <div class=\"text-center\">\n          <form ngNoForm action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n            <input type=\"hidden\" name=\"hosted_button_id\" value=\"UWKTY87SYU766\">\n            <button class=\"btn oppia-donate-options-button protractor-test-credit-card-donate-button\" tabindex=\"0\" (click)=\"onDonateThroughPayPal()\">\n              Credit Card\n            </button>\n          </form>\n        </div>\n        <div class=\"text-center\">\n          <a (click)=\"onDonateThroughAmazon()\" class=\"btn oppia-donate-options-button\" tabindex=\"0\">Amazon Smile</a>\n        </div>\n        <h2 class=\"oppia-gift-funds-text\">\n          Your generous gift funds:\n        </h2>\n        <div class=\"oppia-donate-img-container text-center\">\n          <img [src]=\"donateImgUrl\" alt=\"Server costs, student outreach, marketing\">\n        </div>\n      </div>\n      <div class=\"oppia-donate-info\">\n        <div class=\"position-relative oppia-meet-contributors-iframe-container\">\n          <iframe title=\"Meet Oppia's Contributors\"\n                  width=\"100%\"\n                  height=\"100%\"\n                  src=\"https://www.youtube.com/embed/OConyxG7HaM?rel=0&cc_lang_pref=en&cc_load_policy=1\"\n                  frameborder=\"0\"\n                  allowfullscreen\n                  class=\"position-absolute w-100 h-100 oppia-meet-contributors-iframe\">\n          </iframe>\n        </div>\n        <h3 class=\"oppia-donate-h3\"><em>Hear from our Oppia community</em></h3>\n        <div class=\"oppia-vision-text-container\">\n          <p class=\"oppia-vision-text\">\n            In 2012, Oppia started with a simple idea: to improve the education of\n            students around the world while improving the quality of teaching.\n            This vision has since turned into an educational platform with over\n            11,000 explorations that have been used by more than 430,000 users\n            worldwide.\n          </p>\n          <p class=\"oppia-vision-text\">\n            Please donate to The Oppia Foundation, a registered 501(c)(3) nonprofit,\n            and join us in bringing the joys of teaching and learning to people\n            everywhere.\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<style>\n  h1.oppia-donate-h1 {\n    color: #fff;\n    font-size: 1.5em;\n    line-height: 1.7em;\n    margin-top: 60px;\n    text-align: center;\n  }\n  h3.oppia-donate-h3 {\n    font-size: .80em;\n    font-weight: normal;\n    margin: 2.33em 0;\n    text-align: center;\n  }\n  .donate-page .oppia-donation-card-content-wide {\n    margin: 40px auto 80px;\n    min-height: 670px;\n    overflow: auto;\n  }\n  .donate-page .oppia-donate-options {\n    background-color: #009688;\n    display: block;\n    float: right;\n    font-family: \"Capriola\", \"Roboto\", Arial, sans-serif;\n    padding: 10px 10px 35px 10px;\n    width: 340px;\n  }\n  .donate-page .btn.oppia-donate-options-button {\n    background-color: #00645c;\n    border-radius: 4px;\n    color: rgba(255,255,255,1.0);\n    font-family: \"Roboto\", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 500;\n    height: 40px;\n    letter-spacing: 0.7px;\n    margin: 10px auto;\n    width: 180px;\n  }\n  .donate-page .btn.oppia-donate-options-button:hover,\n  .donate-page .btn.oppia-donate-options-button:focus {\n    background-color: #3d9991;\n    color: rgba(255,255,255,1);\n  }\n  .donate-page .oppia-donate-info {\n    float: left;\n    padding-bottom: 30px;\n    width: calc(100% - 340px);\n  }\n  .donate-page .oppia-gift-funds-text {\n    color: #fff;\n    font-size: 20px;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  .donate-page .oppia-donate-img-container {\n    margin-bottom: 16px;\n  }\n  .donate-page .oppia-meet-contributors-iframe-container {\n    height: 0;\n    margin: 60px auto 0 auto;\n    padding-bottom: 56.25%;\n    width: 70%;\n  }\n  .donate-page .oppia-meet-contributors-iframe {\n    left: 0;\n    top: 0;\n  }\n  .donate-page .oppia-vision-text-container {\n    margin: 0 auto;\n    width: 70%;\n  }\n  .donate-page .oppia-vision-text {\n    font-size: 0.825em;\n  }\n\n  @media only screen and (max-width: 1160px) {\n    .oppia-donation-card-content-wide {\n      display: flex;\n      flex-direction: row-reverse;\n      width: 100%;\n    }\n\n    .oppia-donate-info, .oppia-donate-options {\n      flex: 1;\n    }\n  }\n</style>\n";
      /***/
    },

    /***/
    "vzwN":
    /*!***********************************************************************************************************!*\
      !*** ./core/templates/components/common-layout-directives/common-elements/background-banner.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: BackgroundBannerComponent */

    /***/
    function vzwN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackgroundBannerComponent", function () {
        return BackgroundBannerComponent;
      });
      /* harmony import */


      var _raw_loader_background_banner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./background-banner.component.html */
      "NV4+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! domain/utilities/url-interpolation.service */
      "X9eu");
      /* harmony import */


      var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/upgrade/static */
      "BBPO"); // Copyright 2015 The Oppia Authors. All Rights Reserved.
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


      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * @fileoverview Component for the background banner.
       */


      var BackgroundBannerComponent = /*#__PURE__*/function () {
        function BackgroundBannerComponent(urlInterpolationService) {
          _classCallCheck(this, BackgroundBannerComponent);

          this.urlInterpolationService = urlInterpolationService;
          this.bannerImageFileUrl = '';
        }

        _createClass(BackgroundBannerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var possibleBannerFilenames = ['bannerA.svg', 'bannerB.svg', 'bannerC.svg', 'bannerD.svg'];
            var bannerImageFilename = possibleBannerFilenames[Math.floor(Math.random() * possibleBannerFilenames.length)];
            this.bannerImageFileUrl = this.urlInterpolationService.getStaticImageUrl('/background/' + bannerImageFilename);
          }
        }]);

        return BackgroundBannerComponent;
      }();

      BackgroundBannerComponent.ctorParameters = function () {
        return [{
          type: domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_2__["UrlInterpolationService"]
        }];
      };

      BackgroundBannerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'background-banner',
        template: _raw_loader_background_banner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_2__["UrlInterpolationService"]])], BackgroundBannerComponent);
      angular.module('oppia').directive('backgroundBanner', Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_3__["downgradeComponent"])({
        component: BackgroundBannerComponent
      }));
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map