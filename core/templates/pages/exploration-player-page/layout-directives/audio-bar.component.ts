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
 * @fileoverview Component for a set of audio controls for a specific
 * audio translation in the learner view.
 */

import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { Voiceover } from 'domain/exploration/voiceover.model';
import { Subscription } from 'rxjs';
import { AssetsBackendApiService } from 'services/assets-backend-api.service';
import { AudioBarStatusService } from 'services/audio-bar-status.service';
import { AudioParams, AudioPlayerService } from 'services/audio-player.service';
import { AutogeneratedAudioPlayerService } from 'services/autogenerated-audio-player.service';
import { ContextService } from 'services/context.service';
import { AudioPreloaderService } from '../services/audio-preloader.service';
import { AudioTranslationLanguageService, ExplorationLanguageInfo } from '../services/audio-translation-language.service';
import { AudioTranslationManagerService } from '../services/audio-translation-manager.service';
import { PlayerPositionService } from '../services/player-position.service';

interface Track {
  progress: (progressPercentage: number) => number;
}

@Component({
  selector: 'oppia-audio-bar',
  templateUrl: './audio-bar.component.html'
})
export class AudioBarComponent {
  lastScrollTop: number = 0;
  isPaused: boolean = true;
  directiveSubscriptions: Subscription = new Subscription();
  languagesInExploration: ExplorationLanguageInfo[];
  audioBarIsExpanded: boolean;
  progressBarIsShown: boolean;
  audioLoadingIndicatorIsShown: boolean = false;
  explorationPlayerModeIsActive: boolean;
  selectedLanguage: { value: string };
  track: Track;

  constructor(
    private assetsBackendApiService: AssetsBackendApiService,
    private audioBarStatusService: AudioBarStatusService,
    private audioPlayerService: AudioPlayerService,
    private audioPreloaderService: AudioPreloaderService,
    private audioTranslationLanguageService: AudioTranslationLanguageService,
    private audioTranslationManagerService: AudioTranslationManagerService,
    private autogeneratedAudioPlayerService: AutogeneratedAudioPlayerService,
    private contextService: ContextService,
    private playerPositionService: PlayerPositionService
  ) {
    this.explorationPlayerModeIsActive =
      this.contextService.isInExplorationPlayerPage();
    this.languagesInExploration = this.audioTranslationLanguageService
      .getLanguageOptionsForDropdown();
    this.selectedLanguage = {
      value: this.audioTranslationLanguageService.getCurrentAudioLanguageCode()
    };

    this.track = {
      progress: (progressPercentage: number) => {
        if (progressPercentage) {
          this.audioPlayerService.setProgress(progressPercentage / 100);
        }
        return this.audioPlayerService.getProgress() * 100;
      }
    };
  }

  ngOnInit(): void {
    this.directiveSubscriptions.add(
      this.audioPlayerService.onAutoplayAudio.subscribe(
        (params: AudioParams) => {
          if (this.audioBarIsExpanded) {
            this.audioPlayerService.stop();
            this.autogeneratedAudioPlayerService.cancel();

            // We use a timeout to allow for any previous audio to have
            // their 'onend' callback called. This is primarily used to
            // address delays with autogenerated audio callbacks.
            setTimeout(() => {
              if (params) {
                this.audioTranslationManagerService
                  .setSecondaryAudioTranslations(
                    params.audioTranslations,
                    params.html,
                    params.componentName
                  );
                if (!this.isPaused) {
                  this.onPlayButtonClicked();
                }
              }
            }, 100);
          }
        }
      ));
    this.audioBarIsExpanded = false;
    this.progressBarIsShown = false;
    this.audioLoadingIndicatorIsShown = false;
    this.audioPreloaderService.setAudioLoadedCallback(
      this.onFinishedLoadingAudio);
  }

  ngOnDestroy(): void {
    this.directiveSubscriptions.unsubscribe();
  }

  setProgress(val: {value: number}): void {
    this.audioPlayerService.setCurrentTime(val.value);
  }

  isAudioBarAvailable(): boolean {
    return this.languagesInExploration.length > 0;
  }

  onNewLanguageSelected(): void {
    this.audioTranslationLanguageService.setCurrentAudioLanguageCode(
      this.selectedLanguage.value);
    this.audioPlayerService.stop();
    this.audioPlayerService.clear();
    this.autogeneratedAudioPlayerService.cancel();
    if (this.isAudioBarAvailable() &&
        !this.isAutogeneratedLanguageCodeSelected()) {
      let audioTranslation: Voiceover = this.getVoiceoverInCurrentLanguage();
      this.audioPreloaderService
        .setMostRecentlyRequestedAudioFilename(audioTranslation.filename);
      this.audioPreloaderService.restartAudioPreloader(
        this.playerPositionService.getCurrentStateName());
    }
  }

  expandAudioBar(): void {
    this.audioBarIsExpanded = true;
    this.audioBarStatusService.markAudioBarExpanded();
  }

  collapseAudioBar(): void {
    this.audioBarStatusService.markAudioBarCollapsed();
    this.audioBarIsExpanded = false;
    this.audioPlayerService.stop();
    this.audioPlayerService.clear();
    this.autogeneratedAudioPlayerService.cancel();
  }

  getCurrentAudioLanguageCode(): string {
    return this.audioTranslationLanguageService
      .getCurrentAudioLanguageCode();
  }

  getCurrentAudioLanguageDescription(): string {
    return this.audioTranslationLanguageService
      .getCurrentAudioLanguageDescription();
  }

  getVoiceoverInCurrentLanguage(): Voiceover {
    return this.audioTranslationManagerService.getCurrentAudioTranslations()[
      this.audioTranslationLanguageService.getCurrentAudioLanguageCode()];
  }

  isAudioPlaying(): boolean {
    return this.audioPlayerService.isPlaying() ||
      this.autogeneratedAudioPlayerService.isPlaying();
  }

  isAudioAvailableInCurrentLanguage(): boolean {
    return Boolean(this.getVoiceoverInCurrentLanguage()) ||
      this.isAutogeneratedLanguageCodeSelected();
  }

  doesCurrentAudioTranslationNeedUpdate(): boolean {
    if (!this.isAutogeneratedLanguageCodeSelected()) {
      let audioTranslation: Voiceover = this.getVoiceoverInCurrentLanguage();
      return (audioTranslation && audioTranslation.needsUpdate);
    } else {
      return false;
    }
  }

  isAutogeneratedLanguageCodeSelected(): boolean {
    return this.audioTranslationLanguageService
      .isAutogeneratedLanguageCodeSelected();
  }

  onBackwardButtonClicked(): void {
    this.audioPlayerService.rewind(5);
  }

  onForwardButtonClicked(): void {
    this.audioPlayerService.forward(5);
  }

  onPlayButtonClicked(): void {
    this.isPaused = !this.isPaused;
    this.progressBarIsShown = !this.isAutogeneratedLanguageCodeSelected();
    if (this.isAutogeneratedLanguageCodeSelected()) {
      this.playPauseAutogeneratedAudioTranslation();
    } else {
      let audioTranslation = this.getVoiceoverInCurrentLanguage();
      if (audioTranslation) {
        this.playPauseUploadedAudioTranslation();
      }
    }
  }

  isCached(audioTranslation: Voiceover): boolean {
    return this.assetsBackendApiService.isCached(audioTranslation.filename);
  }

  playPauseAutogeneratedAudioTranslation(): void {
    // SpeechSynthesis in Chrome seems to have a bug
    // where if you pause the utterance, wait for around
    // 15 or more seconds, then try resuming, nothing
    // will sound. As a temporary fix, just restart the
    // utterance from the beginning instead of resuming.
    if (this.autogeneratedAudioPlayerService.isPlaying()) {
      this.autogeneratedAudioPlayerService.cancel();
    } else {
      this.autogeneratedAudioPlayerService.play(
        this.audioTranslationManagerService
          .getCurrentHtmlForAutogeneratedAudio(),
        this.audioTranslationLanguageService
          .getSpeechSynthesisLanguageCode(),
        () => {
          // Used to update bindings to show a silent speaker after
          // autogenerated audio has finished playing.
          this.audioTranslationManagerService
            .clearSecondaryAudioTranslations();
        });
    }
  }

  playPauseUploadedAudioTranslation(): void {
    if (!this.audioPlayerService.isPlaying()) {
      if (this.audioPlayerService.isTrackLoaded()) {
        this.audioPlayerService.play();
      } else {
        this.loadAndPlayAudioTranslation();
      }
    } else {
      this.audioPlayerService.pause();
    }
  }

  playCachedAudioTranslation(audioFilename: string): void {
    this.audioPlayerService.load(audioFilename)
      .then(() => {
        this.audioLoadingIndicatorIsShown = false;
        this.audioPlayerService.play();
      });
  }

  /**
   * Called when an audio file finishes loading.
   * @param {string} audioFilename - Filename of the audio file that
   *                                 finished loading.
   */
  onFinishedLoadingAudio(audioFilename: string): void {
    let mostRecentlyRequestedAudioFilename =
      this.audioPreloaderService.getMostRecentlyRequestedAudioFilename();
    if (this.audioLoadingIndicatorIsShown &&
        audioFilename === mostRecentlyRequestedAudioFilename) {
      this.playCachedAudioTranslation(audioFilename);
    }
  }

  loadAndPlayAudioTranslation(): void {
    this.audioLoadingIndicatorIsShown = true;
    let audioTranslation = this.getVoiceoverInCurrentLanguage();
    this.audioPreloaderService.setMostRecentlyRequestedAudioFilename(
      audioTranslation.filename);
    if (audioTranslation) {
      if (this.isCached(audioTranslation)) {
        this.playCachedAudioTranslation(
          audioTranslation.filename);
      } else if (!this.audioPreloaderService.isLoadingAudioFile(
        audioTranslation.filename)) {
        this.audioPreloaderService.restartAudioPreloader(
          this.playerPositionService.getCurrentStateName());
      }
    }
  }
}

angular.module('oppia').directive('oppiaAudioBar',
  downgradeComponent({
    component: AudioBarComponent
  }) as angular.IDirectiveFactory);
