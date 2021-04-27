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
 * @fileoverview Module for the Custom Form components.
 */

import 'core-js/es7/reflect';
import 'zone.js';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FocusOnDirective } from './focus-on.directive';
import { MathJaxDirective } from './mathjax.directive';
import { NgInitDirective } from './ng-init.directive';
import { OppiaFooterDirective } from 'pages/OppiaFooterDirective';
import { TopNavigationBarDirective } from 'components/common-layout-directives/navigation-bars/top-navigation-bar.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    FocusOnDirective,
    MathJaxDirective,
    NgInitDirective,
    OppiaFooterDirective,
    TopNavigationBarDirective
  ],
  entryComponents: [],
  exports: [
    FocusOnDirective,
    MathJaxDirective,
    NgInitDirective,
    OppiaFooterDirective,
    TopNavigationBarDirective
  ],
})

export class DirectivesModule { }
