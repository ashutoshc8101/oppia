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
 * @fileoverview Component for display hint modal.
 */

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'oppia-display-hint-modal',
  templateUrl: './display-hint-modal.component.html'
})
export class DisplayHintModalComponent {
  constructor(
    private ngbActiveModal: NgbActiveModal,
    // private audioPlayerServi
  ) {}
}

// require(
//   'pages/exploration-player-page/services/' +
//   'audio-translation-manager.service.ts');
// require(
//   'pages/exploration-player-page/services/' +
//   'hints-and-solution-manager.service.ts');
// require('pages/exploration-player-page/services/player-position.service.ts');
// require('pages/exploration-player-page/services/player-transcript.service.ts');
// require('services/audio-player.service.ts');
// require('services/autogenerated-audio-player.service.ts');

// angular.module('oppia').controller('DisplayHintModalController', [
//   '$scope', '$uibModalInstance', 'AudioPlayerService',
//   'AudioTranslationManagerService', 'AutogeneratedAudioPlayerService',
//   'HintsAndSolutionManagerService', 'PlayerPositionService',
//   'PlayerTranscriptService', 'index', 'COMPONENT_NAME_HINT',
//   function(
//       $scope, $uibModalInstance, AudioPlayerService,
//       AudioTranslationManagerService, AutogeneratedAudioPlayerService,
//       HintsAndSolutionManagerService, PlayerPositionService,
//       PlayerTranscriptService, index, COMPONENT_NAME_HINT) {
//     $scope.isHint = true;
//     $scope.hint = HintsAndSolutionManagerService.displayHint(index);

//     var displayedCard = PlayerTranscriptService.getCard(
//       PlayerPositionService.getDisplayedCardIndex());
//     var recordedVoiceovers = displayedCard.getRecordedVoiceovers();
//     var hintContentId = $scope.hint.contentId;

//     AudioTranslationManagerService.setSecondaryAudioTranslations(
//       recordedVoiceovers.getBindableVoiceovers(hintContentId),
//       $scope.hint.html, COMPONENT_NAME_HINT);

//     AudioPlayerService.onAutoplayAudio.emit();

//     $scope.closeModal = function() {
//       AudioPlayerService.stop();
//       AutogeneratedAudioPlayerService.cancel();
//       AudioTranslationManagerService.clearSecondaryAudioTranslations();
//       $uibModalInstance.dismiss('cancel');
//     };
//   }
// ]);
