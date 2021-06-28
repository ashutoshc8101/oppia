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
 * @fileoverview Unit tests for DisplayHintModalComponent.
 */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularHtmlBindWrapperDirective } from 'components/angular-html-bind/angular-html-bind-wrapper.directive';
import { RecordedVoiceovers } from 'domain/exploration/recorded-voiceovers.model';
import { SubtitledHtml } from 'domain/exploration/subtitled-html.model';
import { StateCard } from 'domain/state_card/state-card.model';
import { AudioPlayerService } from 'services/audio-player.service';
import { AutogeneratedAudioPlayerService } from 'services/autogenerated-audio-player.service';
import { AudioTranslationManagerService } from '../services/audio-translation-manager.service';
import { HintsAndSolutionManagerService } from '../services/hints-and-solution-manager.service';
import { PlayerPositionService } from '../services/player-position.service';
import { PlayerTranscriptService } from '../services/player-transcript.service';
import { DisplayHintModalComponent } from './display-hint-modal.component';


describe('Display hint modal', () => {
  let fixture: ComponentFixture<DisplayHintModalComponent>;
  let componentInstance: DisplayHintModalComponent;
  let hintsAndSolutionManagerService: HintsAndSolutionManagerService;
  let playerTranscriptService: PlayerTranscriptService;
  let audioTranslationManagerService: AudioTranslationManagerService;
  let audioPlayerService: AudioPlayerService;
  let autogeneratedAudioPlayerService: AutogeneratedAudioPlayerService;
  let ngbActiveModal: NgbActiveModal;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        DisplayHintModalComponent,
        AngularHtmlBindWrapperDirective
      ],
      providers: [
        NgbActiveModal,
        AudioPlayerService,
        AudioTranslationManagerService,
        AutogeneratedAudioPlayerService,
        HintsAndSolutionManagerService,
        PlayerPositionService,
        PlayerTranscriptService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHintModalComponent);
    componentInstance = fixture.componentInstance;
    hintsAndSolutionManagerService =
    (TestBed.inject(HintsAndSolutionManagerService) as unknown) as
      jasmine.SpyObj<HintsAndSolutionManagerService>;
    playerTranscriptService = (TestBed.inject(
      PlayerTranscriptService) as unknown) as
      jasmine.SpyObj<PlayerTranscriptService>;
    audioTranslationManagerService = (TestBed.inject(
      AudioTranslationManagerService) as unknown) as
      jasmine.SpyObj<AudioTranslationManagerService>;
    audioPlayerService = (TestBed.inject(AudioPlayerService) as unknown) as
      jasmine.SpyObj<AudioPlayerService>;
    autogeneratedAudioPlayerService = (TestBed.inject(
      AutogeneratedAudioPlayerService) as unknown) as
      jasmine.SpyObj<AutogeneratedAudioPlayerService>;
    ngbActiveModal = (TestBed.inject(NgbActiveModal) as unknown) as
      jasmine.SpyObj<NgbActiveModal>;
  });

  it('should create', () => {
    expect(componentInstance).toBeDefined();
  });

  it('should intialize', () => {
    let contentId: string = 'content_id';
    let recordedVoiceovers = new RecordedVoiceovers({});
    let hint = new SubtitledHtml('html', contentId);
    let displayedCard = new StateCard(
      'test_name', 'content', 'interaction', null, [],
      recordedVoiceovers, null, contentId, null);
    spyOn(hintsAndSolutionManagerService, 'displayHint').and.returnValue(hint);
    spyOn(playerTranscriptService, 'getCard').and.returnValue(displayedCard);
    spyOn(audioTranslationManagerService, 'setSecondaryAudioTranslations');
    spyOn(audioPlayerService.onAutoplayAudio, 'emit');

    componentInstance.ngOnInit();

    expect(componentInstance.hint).toEqual(hint);
    expect(componentInstance.displayedCard).toEqual(displayedCard);
    expect(componentInstance.recordedVoiceovers)
      .toEqual(displayedCard.getRecordedVoiceovers());
    expect(componentInstance.hintContentId).toEqual(contentId);
    expect(audioTranslationManagerService.setSecondaryAudioTranslations)
      .toHaveBeenCalled();
    expect(audioPlayerService.onAutoplayAudio.emit).toHaveBeenCalled();
  });

  it('should close modal', () => {
    spyOn(audioPlayerService, 'stop');
    spyOn(autogeneratedAudioPlayerService, 'cancel');
    spyOn(audioTranslationManagerService, 'clearSecondaryAudioTranslations');
    spyOn(ngbActiveModal, 'dismiss');

    componentInstance.closeModal();

    expect(audioPlayerService.stop).toHaveBeenCalled();
    expect(autogeneratedAudioPlayerService.cancel).toHaveBeenCalled();
    expect(audioTranslationManagerService.clearSecondaryAudioTranslations)
      .toHaveBeenCalled();
    expect(ngbActiveModal.dismiss).toHaveBeenCalledWith('cancel');
  });
});
