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
 * @fileoverview Module for the about page.
 */

import { APP_INITIALIZER, ChangeDetectorRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutPageComponent } from './about-page.component';
import { RequestInterceptor } from 'services/request-interceptor.service';
// import { SharedComponentsModule } from 'components/shared-component.module';
// import { OppiaAngularRootComponent } from
//   'components/oppia-angular-root.component';
import { platformFeatureInitFactory, PlatformFeatureService } from
  'services/platform-feature.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslatePipeModule
    // SharedComponentsModule
  ],
  declarations: [
    AboutPageComponent,
    BackgroundBannerComponent,
    // OppiaAngularRootComponent
  ],
  entryComponents: [
    AboutPageComponent,
    BackgroundBannerComponent,
    // OppiaAngularRootComponent
  ],
  providers: [
    TranslateService,
    UtilsService,
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
export class AboutPageModule {
  // Empty placeholder method to satisfy the `Compiler`.
  ngDoBootstrap(): void { }
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BackgroundBannerComponent } from 'components/common-layout-directives/common-elements/background-banner.component';
import { TranslateService } from 'services/translate.service';
import { UtilsService } from 'services/utils.service';
import { TranslatePipeModule } from 'filters/translate.pipe.module';

platformBrowserDynamic()
  .bootstrapModule(AboutPageModule)
  .catch(err => console.log(err));

// Const downgradedModule = downgradeModule(bootstrapFn);

// declare var angular: ng.IAngularStatic;

// angular.module('oppia').requires.push(downgradedModule);

// angular.module('oppia').directive(
//   // This directive is the downgraded version of the Angular component to
//   // bootstrap the Angular 8.
//   'oppiaAngularRoot',
//   downgradeComponent({
//     component: OppiaAngularRootComponent
//   }) as angular.IDirectiveFactory);
