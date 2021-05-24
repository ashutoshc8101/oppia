// Copyright 2017 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Component for the Tutor Card.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { AppConstants } from 'app.constants';
import { StateCard } from 'domain/state_card/StateCardObjectFactory';
import { UrlInterpolationService } from 'domain/utilities/url-interpolation.service';
import cloneDeep from 'lodash/cloneDeep';
import { Subscription } from 'rxjs';
import { AudioBarStatusService } from 'services/audio-bar-status.service';
import { AudioPlayerService } from 'services/audio-player.service';
import { AutogeneratedAudioPlayerService } from 'services/autogenerated-audio-player.service';
import { ContextService } from 'services/context.service';
import { DeviceInfoService } from 'services/contextual/device-info.service';
import { UrlService } from 'services/contextual/url.service';
import { WindowDimensionsService } from 'services/contextual/window-dimensions.service';
import { UserService } from 'services/user.service';
import { ExplorationPlayerConstants } from '../exploration-player-page.constants';
import { AudioPreloaderService } from '../services/audio-preloader.service';
import { AudioTranslationManagerService } from '../services/audio-translation-manager.service';
import { CurrentInteractionService } from '../services/current-interaction.service';
import { ExplorationPlayerStateService } from '../services/exploration-player-state.service';
import { LearnerAnswerInfoService } from '../services/learner-answer-info.service';
import { PlayerPositionService } from '../services/player-position.service';

@Component({
  selector: 'oppia-tutor-card',
  templateUrl: './tutor-card.component.html'
})
export class TutorCardComponent {
  @Input() isLearnAgainButton: boolean;
  @Input() onDismiss;
  @Input() displayedCard: StateCard;
  @Input() startCardChangeAnimation;
  @Output() startCardChangeAnimationChange: EventEmitter<void> = (
    new EventEmitter());
  @Input() avatarImageIsShown: boolean;
  directiveSubscriptions = new Subscription();
  private _editorPreviewMode;
  arePreviousResponsesShown: boolean = false;
  lastAnswer;
  conceptCardIsBeingShown: boolean;
  interactionIsActive: boolean;
  waitingForOppiaFeedback: boolean = false;
  interactionInstructions;
  contentAudioTranslations;
  isIframed: boolean;
  isAudioBarExpandedOnMobileDevice: () => boolean;
  getCanAskLearnerForAnswerInfo: () => boolean;
  OPPIA_AVATAR_IMAGE_URL: string;
  OPPIA_AVATAR_LINK_URL: string;
  profilePicture: string;

  constructor(
    private audioBarStatusService: AudioBarStatusService,
    private audioPlayerService: AudioPlayerService,
    private audioPreloaderService: AudioPreloaderService,
    private audioTranslationManagerService: AudioTranslationManagerService,
    private autogeneratedAudioPlayerService: AutogeneratedAudioPlayerService,
    private contextService: ContextService,
    private currentInteractionService: CurrentInteractionService,
    private deviceInfoService: DeviceInfoService,
    private explorationPlayerStateService: ExplorationPlayerStateService,
    private learnerAnswerInfoService: LearnerAnswerInfoService,
    private playerPositionService: PlayerPositionService,
    private urlInterpolationService: UrlInterpolationService,
    private urlService: UrlService,
    private userService: UserService,
    private windowDimensionsService: WindowDimensionsService
  ) {}

  ngOnInit(): void {
    this._editorPreviewMode = this.contextService.isInExplorationEditorPage();
    this.isIframed = this.urlService.isIframed();
    this.isAudioBarExpandedOnMobileDevice = () => {
      return (
        this.deviceInfoService.isMobileDevice() &&
        this.audioBarStatusService.isAudioBarExpanded()
      );
    };
    this.getCanAskLearnerForAnswerInfo = (
      this.learnerAnswerInfoService.getCanAskLearnerForAnswerInfo);
    this.OPPIA_AVATAR_IMAGE_URL = (
      this.urlInterpolationService
        .getStaticImageUrl('/avatar/oppia_avatar_100px.svg'));
    this.OPPIA_AVATAR_LINK_URL = AppConstants.OPPIA_AVATAR_LINK_URL;
    this.profilePicture = this.urlInterpolationService
      .getStaticImageUrl('/avatar/user_blue_72px.png');

    if (!this._editorPreviewMode) {
      this.userService.getProfileImageDataUrlAsync().then((dataUrl) => {
        this.profilePicture = dataUrl;
      });
    } else {
      this.profilePicture = (
        this.urlInterpolationService.getStaticImageUrl(
          AppConstants.DEFAULT_PROFILE_IMAGE_PATH));
    }

    this.directiveSubscriptions.add(
      this.playerPositionService.onActiveCardChanged.subscribe(
        () => {
          this.updateDisplayedCard();
        }
      )
    );

    this.directiveSubscriptions.add(
      this.explorationPlayerStateService.onOppiaFeedbackAvailable.subscribe(
        () => {
          this.waitingForOppiaFeedback = false;

          // Auto scroll to the new feedback on mobile device.
          if (this.deviceInfoService.isMobileDevice()) {
            // Let latestFeedbackIndex = (
            //   this.displayedCard.getInputResponsePairs().length - 1);

            // Some work left here.
          }
        }
      )
    );
    this.updateDisplayedCard();
  }

  ngOnDestroy(): void {
    this.directiveSubscriptions.unsubscribe();
  }

  updateDisplayedCard(): void {
    this.arePreviousResponsesShown = false;
    this.lastAnswer = null;
    this.conceptCardIsBeingShown = Boolean(
      !this.displayedCard.getInteraction());
    this.interactionIsActive =
      !this.displayedCard.isCompleted();
    this.directiveSubscriptions.add(
      this.playerPositionService.onNewCardAvailable.subscribe(
        (data) => this.interactionIsActive = false
      )
    );
    this.currentInteractionService.registerPresubmitHook(() => {
      this.waitingForOppiaFeedback = true;
    });
    if (!this.interactionIsActive) {
      this.lastAnswer = this.displayedCard.getLastAnswer();
    }
    if (!this.conceptCardIsBeingShown) {
      this.interactionInstructions = (
        this.displayedCard.getInteractionInstructions());
      this.contentAudioTranslations = (
        this.displayedCard.getVoiceovers());
      this.audioTranslationManagerService
        .clearSecondaryAudioTranslations();
      this.audioTranslationManagerService.setContentAudioTranslations(
        cloneDeep(this.contentAudioTranslations),
        this.displayedCard.getContentHtml(),
        AppConstants.COMPONENT_NAME_CONTENT);
      this.audioPlayerService.stop();
      this.audioPreloaderService.clearMostRecentlyRequestedAudioFilename();
      this.autogeneratedAudioPlayerService.cancel();
    }
  }

  isInteractionInline(): boolean {
    if (this.conceptCardIsBeingShown) {
      return true;
    }
    return this.displayedCard.isInteractionInline();
  }

  getContentAudioHighlightClass(): Object {
    if (this.audioTranslationManagerService
      .getCurrentComponentName() ===
      AppConstants.COMPONENT_NAME_CONTENT &&
      (this.audioPlayerService.isPlaying() ||
      this.autogeneratedAudioPlayerService.isPlaying())) {
      return ExplorationPlayerConstants.AUDIO_HIGHLIGHT_CSS_CLASS;
    }
  }

  getContentFocusLabel(index: number): string {
    return ExplorationPlayerConstants.CONTENT_FOCUS_LABEL_PREFIX + index;
  }

  toggleShowPreviousResponses(): void {
    this.arePreviousResponsesShown =
      !this.arePreviousResponsesShown;
  }

  isWindowNarrow(): boolean {
    return this.windowDimensionsService.isWindowNarrow();
  }

  canWindowShowTwoCards(): boolean {
    return this.windowDimensionsService.getWidth() >
    ExplorationPlayerConstants.TWO_CARD_THRESHOLD_PX;
  }

  showAudioBar(): boolean {
    return (
      !this.isIframed &&
      !this.explorationPlayerStateService.isInQuestionMode());
  }

  isContentAudioTranslationAvailable(): boolean {
    if (this.conceptCardIsBeingShown) {
      return false;
    }
    return (
      this.displayedCard.isContentAudioTranslationAvailable());
  }

  isCurrentCardAtEndOfTranscript(): boolean {
    return !this.displayedCard.isCompleted();
  }

  isOnTerminalCard(): boolean {
    return this.displayedCard.isTerminal();
  }

  getInputResponsePairId(index: number): string {
    return 'input-response-pair-' + index;
  }
}

angular.module('oppia').directive('oppiaTutorCard',
  downgradeComponent({
    component: TutorCardComponent
  }) as angular.IDirectiveFactory);
