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
 * @fileoverview Module for the shared components.
 */
import 'core-js/es7/reflect';
import 'zone.js';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule, USE_EMULATOR } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { BackgroundBannerComponent } from
  './common-layout-directives/common-elements/background-banner.component';
import { AttributionGuideComponent } from
  './common-layout-directives/common-elements/attribution-guide.component';
import { LazyLoadingComponent } from
  './common-layout-directives/common-elements/lazy-loading.component';
import { LoadingDotsComponent } from
  './common-layout-directives/common-elements/loading-dots.component';
import { MaterialModule } from './material.module';
import { TranslatePipe } from 'filters/translate.pipe';
import { SkillMasteryViewerComponent } from
  './skill-mastery/skill-mastery.component';
import { ExplorationEmbedButtonModalComponent } from
  './button-directives/exploration-embed-button-modal.component';
import { KeyboardShortcutHelpModalComponent } from
  'components/keyboard-shortcut-help/keyboard-shortcut-help-modal.component';
import { SharingLinksComponent } from
  './common-layout-directives/common-elements/sharing-links.component';
import { StorySummaryTileDirective } from
  './summary-tile/story-summary-tile.directive';
import { SubtopicSummaryTileDirective } from
  './summary-tile/subtopic-summary-tile.directive';
import { SocialButtonsComponent } from
  'components/button-directives/social-buttons.component';
import { NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ExplorationSummaryTileDirective } from
  './summary-tile/exploration-summary-tile.directive';
import { ProfileLinkImageComponent } from
  'components/profile-link-directives/profile-link-image.component';
import { ProfileLinkTextComponent } from
  'components/profile-link-directives/profile-link-text.component';
import { ThumbnailDisplayComponent } from './forms/custom-forms-directives/thumbnail-display.component';
import { TakeBreakModalComponent } from 'pages/exploration-player-page/templates/take-break-modal.component';
import { TopicsAndSkillsDashboardNavbarBreadcrumbComponent } from 'pages/topics-and-skills-dashboard-page/navbar/topics-and-skills-dashboard-navbar-breadcrumb.component';
import { AuthService } from 'services/auth.service';
import { AudioFileUploaderComponent } from './forms/custom-forms-directives/audio-file-uploader.component';
import { FocusOnDirective } from '../directives/focus-on.directive';
import { ThreadTableComponent } from 'pages/exploration-editor-page/feedback-tab/thread-table/thread-table.component';
import { TruncatePipe } from 'filters/string-utility-filters/truncate.pipe';
import { ToastrModule } from 'ngx-toastr';
import { SummaryListHeaderComponent } from './state-directives/answer-group-editor/summary-list-header.component';
import { PromoBarComponent } from './common-layout-directives/common-elements/promo-bar.component';
import { DynamicContentModule } from './angular-html-bind/dynamic-content.module';
import { LoadingMessageComponent } from '../base-components/loading-message.component';
import { AlertMessageComponent } from './common-layout-directives/common-elements/alert-message.component';
import { WarningsAndAlertsComponent } from '../base-components/warnings-and-alerts.component';
import { LimiToPipe } from 'filters/limit-to.pipe';
import { OppiaFooterDirective } from 'pages/OppiaFooterDirective';
import { TopNavigationBarComponent } from './common-layout-directives/navigation-bars/top-navigation-bar.directive';
import { SideNavigationBarComponent } from './common-layout-directives/navigation-bars/side-navigation-bar.component';
import { BaseContentComponent } from '../base-components/base-content.component';

// TODO(#11462): Delete these conditional values once firebase auth is launched.
const firebaseAuthModules = AuthService.firebaseAuthIsEnabled ? [
  AngularFireModule.initializeApp(AuthService.firebaseConfig),
  AngularFireAuthModule,
] : [];

const firebaseAuthProviders = AuthService.firebaseAuthIsEnabled ? [
  AngularFireAuth,
  {provide: USE_EMULATOR, useValue: AuthService.firebaseEmulatorConfig},
] : [
  {provide: AngularFireAuth, useValue: null},
];

import { HammerGestureConfig } from '@angular/platform-browser';
import * as hammer from 'hammerjs';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <unknown>{
    swipe: { direction: hammer.DIRECTION_HORIZONTAL },
    pinch: { enable: false },
    rotate: { enable: false }
  };
}

const toastrConfig = {
  allowHtml: false,
  iconClasses: {
    error: 'toast-error',
    info: 'toast-info',
    success: 'toast-success',
    warning: 'toast-warning'
  },
  positionClass: 'toast-bottom-right',
  messageClass: 'toast-message',
  progressBar: false,
  tapToDismiss: true,
  titleClass: 'toast-title'
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    DynamicContentModule,
    NgbTooltipModule,
    NgbModalModule,
    FormsModule,
    ToastrModule.forRoot(toastrConfig),
    ...firebaseAuthModules,
  ],

  providers: [
    ...firebaseAuthProviders,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],

  declarations: [
    AlertMessageComponent,
    AudioFileUploaderComponent,
    AttributionGuideComponent,
    BackgroundBannerComponent,
    BaseContentComponent,
    ExplorationEmbedButtonModalComponent,
    ExplorationSummaryTileDirective,
    FocusOnDirective,
    OppiaFooterDirective,
    KeyboardShortcutHelpModalComponent,
    LazyLoadingComponent,
    LimiToPipe,
    LoadingDotsComponent,
    LoadingMessageComponent,
    ProfileLinkImageComponent,
    ProfileLinkTextComponent,
    SharingLinksComponent,
    SideNavigationBarComponent,
    SkillMasteryViewerComponent,
    SocialButtonsComponent,
    StorySummaryTileDirective,
    SubtopicSummaryTileDirective,
    SummaryListHeaderComponent,
    TakeBreakModalComponent,
    ThumbnailDisplayComponent,
    ThreadTableComponent,
    TopicsAndSkillsDashboardNavbarBreadcrumbComponent,
    TopNavigationBarComponent,
    TranslatePipe,
    TruncatePipe,
    WarningsAndAlertsComponent,
    PromoBarComponent
  ],

  entryComponents: [
    AlertMessageComponent,
    AudioFileUploaderComponent,
    BackgroundBannerComponent,
    BaseContentComponent,
    SharingLinksComponent,
    SkillMasteryViewerComponent, AttributionGuideComponent,
    LazyLoadingComponent, LoadingDotsComponent, LoadingMessageComponent,
    SocialButtonsComponent,
    ProfileLinkImageComponent, ProfileLinkTextComponent,
    // These elements will remain here even after migration.
    TakeBreakModalComponent,
    ExplorationEmbedButtonModalComponent,
    KeyboardShortcutHelpModalComponent,
    SideNavigationBarComponent,
    SkillMasteryViewerComponent,
    SocialButtonsComponent,
    SummaryListHeaderComponent,
    ThumbnailDisplayComponent,
    PromoBarComponent,
    ThreadTableComponent,
    TopicsAndSkillsDashboardNavbarBreadcrumbComponent,
    WarningsAndAlertsComponent,
  ],

  exports: [
    // Modules.
    DynamicContentModule,
    FormsModule,
    MaterialModule,
    NgbTooltipModule,
    NgbModalModule,
    // Components, directives, and pipes.
    AlertMessageComponent,
    AudioFileUploaderComponent,
    BackgroundBannerComponent,
    BaseContentComponent,
    ExplorationSummaryTileDirective,
    FocusOnDirective,
    OppiaFooterDirective,
    LimiToPipe,
    LoadingMessageComponent,
    SharingLinksComponent,
    SideNavigationBarComponent,
    SocialButtonsComponent,
    StorySummaryTileDirective,
    SubtopicSummaryTileDirective,
    SummaryListHeaderComponent,
    TakeBreakModalComponent,
    ThumbnailDisplayComponent,
    TopNavigationBarComponent,
    TopicsAndSkillsDashboardNavbarBreadcrumbComponent,
    TranslatePipe,
    WarningsAndAlertsComponent,
    PromoBarComponent
  ],
})

export class SharedComponentsModule { }
