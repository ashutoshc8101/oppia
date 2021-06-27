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
 * @fileoverview Module for the about page.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorPageModule } from 'pages/error-pages/error-page.module';
import { OppiaRootComponent } from './oppia-root.component';
import { AppRoutingModule } from './routing/app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorPageModule
  ],
  declarations: [
    OppiaRootComponent
  ],
  entryComponents: [
    OppiaRootComponent
  ],
  providers: [
  ],
  bootstrap: [OppiaRootComponent]
})
export class OppiaRootModule {}
