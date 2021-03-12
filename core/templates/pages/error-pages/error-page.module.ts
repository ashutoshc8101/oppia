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
 * @fileoverview Module for the error page.
 */

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ErrorPageComponent } from './error-page.component';
import { RequestInterceptor } from 'services/request-interceptor.service';
import { platformFeatureInitFactory, PlatformFeatureService } from
  'services/platform-feature.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslatePipeModule
  ],
  declarations: [
    ErrorPageComponent,
  ],
  entryComponents: [
    ErrorPageComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: platformFeatureInitFactory,
      deps: [PlatformFeatureService],
      multi: true
    }
  ]
})
export class ErrorPageModule {
  // Empty placeholder method to satisfy the `Compiler`.
  ngDoBootstrap(): void {}
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { TranslatePipeModule } from 'filters/translate.pipe.module';

platformBrowserDynamic().bootstrapModule(ErrorPageModule)
  .catch(err => console.log(err));
