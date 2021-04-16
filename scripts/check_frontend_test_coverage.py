# Copyright 2020 The Oppia Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Check for decrease in coverage from 100% of frontend files."""

from __future__ import absolute_import  # pylint: disable=import-only-modules
from __future__ import unicode_literals  # pylint: disable=import-only-modules

import os
import re
import sys

import python_utils

LCOV_FILE_PATH = os.path.join(os.pardir, 'karma_coverage_reports', 'lcov.info')
RELEVANT_LCOV_LINE_PREFIXES = ['SF', 'LH', 'LF']

# Contains the name of all files that is not 100% coverage.
# This list must be kept up-to-date; the changes (only remove) should be done
# manually.
# Please keep the list in alphabetical order.
# NOTE TO DEVELOPERS: do not add any new files to this list without asking
# @nithusha21 first.
NOT_FULLY_COVERED_FILENAMES = [
    'admin-config-tab.directive.ts',
    'admin-misc-tab.directive.ts',
    'admin-page.directive.ts',
    'admin-roles-tab.directive.ts',
    'alert-message.directive.ts',
    'angular-html-bind.directive.ts',
    'answer-classification.service.ts',
    'answer-group-editor.directive.ts',
    'App.ts',
    'audio-bar.directive.ts',
    'audio-file-uploader.component.ts',
    'audio-player.service.ts',
    'audio-preloader.service.ts',
    'autogenerated-audio-player.service.ts',
    'background-banner.component.ts',
    'base-content.directive.ts',
    'base-interaction-validation.service.ts',
    'Base.ts',
    'boolean-editor.component.ts',
    'change-list.service.ts',
    'ck-editor-4-rte.directive.ts',
    'ck-editor-4-widgets.initializer.ts',
    'code-repl-prediction.service.ts',
    'code-string-editor.component.ts',
    'codemirror-mergeview.directive.ts',
    'collection-details-editor.directive.ts',
    'collection-editor-navbar-breadcrumb.directive.ts',
    'collection-editor-navbar.directive.ts',
    'collection-editor-page.directive.ts',
    'collection-editor-state.service.ts',
    'collection-editor-tab.directive.ts',
    'collection-footer.component.ts',
    'collection-navbar.component.ts',
    'collection-node-creator.directive.ts',
    'collection-node-editor.directive.ts',
    'collection-player-page.directive.ts',
    'collection-summary-tile.directive.ts',
    'collection-update.service.ts',
    'collection.model.ts',
    'concept-card.directive.ts',
    'ConceptCardObjectFactory.ts',
    'continue-button.directive.ts',
    'contribution-and-review.service.ts',
    'contribution-opportunities-backend-api.service.ts',
    'contribution-opportunities.service.ts',
    'contributions-and-review.component.ts',
    'conversation-skin.directive.ts',
    'conversion.ts',
    'convert-to-plain-text.pipe.ts',
    'coord-two-dim-editor.component.ts',
    'correctness-footer.directive.ts',
    'create-activity-button.directive.ts',
    'csrf-token.service.ts',
    'current-interaction.service.ts',
    'drag-and-drop-positive-int-editor.directive.ts',
    'editable-collection-backend-api.service.ts',
    'editable-story-backend-api.service.ts',
    'email-dashboard-data.service.ts',
    'entity-creation.service.ts',
    'exploration-creation.service.ts',
    'exploration-diff.service.ts',
    'exploration-engine.service.ts',
    'exploration-footer.directive.ts',
    'exploration-player-state.service.ts',
    'exploration-save.service.ts',
    'exploration-states.service.ts',
    'exploration-summary-tile.directive.ts',
    'expression-evaluator.service.ts',
    'expression-interpolation.service.ts',
    'fatigue-detection.service.ts',
    'feedback-popup.directive.ts',
    'filepath-editor.directive.ts',
    'focus-on.directive.ts',
    'format-timer.pipe.ts',
    'fraction-editor.directive.ts',
    'fraction-input-validation.service.ts',
    'generatedParser.ts',
    'google-analytics.initializer.ts',
    'graph-detail.service.ts',
    'graph-editor.directive.ts',
    'graph-input-rules.service.ts',
    'graph-input-validation.service.ts',
    'graph-layout.service.ts',
    'graph-property-editor.directive.ts',
    'graph-viz.component.ts',
    'hint-and-solution-buttons.directive.ts',
    'hint-editor.directive.ts',
    'html-editor.directive.ts',
    'html-escaper.service.ts',
    'html-select.directive.ts',
    'I18nFooter.ts',
    'image-uploader.component.ts',
    'image-with-regions-editor.directive.ts',
    'input-response-pair.directive.ts',
    'int-editor.directive.ts',
    'item-selection-input-validation.service.ts',
    'language-util.service.ts',
    'learner-answer-info-card.directive.ts',
    'learner-answer-info.service.ts',
    'learner-dashboard-icons.directive.ts',
    'learner-local-nav.directive.ts',
    'learner-view-info.directive.ts',
    'learner-view-rating.service.ts',
    'list-of-sets-of-translatable-html-content-ids-editor.component.ts',
    'list-of-tabs-editor.directive.ts',
    'list-of-unicode-string-editor.directive.ts',
    'logic-error-category-editor.directive.ts',
    'logic-question-editor.directive.ts',
    'math-expression-content-editor.directive.ts',
    'mathjax-bind.directive.ts',
    'messenger.service.ts',
    'misconception-editor.directive.ts',
    'music-notes-input-rules.service.ts',
    'music-phrase-editor.directive.ts',
    'music-phrase-player.service.ts',
    'nonnegative-int-editor.directive.ts',
    'normalize-whitespace-punctuation-and-case.pipe.ts',
    'normalized-string-editor.directive.ts',
    'number-with-units-editor.directive.ts',
    'number-with-units-validation.service.ts',
    'NumberWithUnitsObjectFactory.ts',
    'object-editor.directive.ts',
    'oppia-interactive-code-repl.directive.ts',
    'oppia-interactive-continue.component.ts',
    'oppia-interactive-drag-and-drop-sort-input.directive.ts',
    'oppia-interactive-fraction-input.component.ts',
    'oppia-interactive-graph-input.component.ts',
    'oppia-interactive-image-click-input.directive.ts',
    'oppia-interactive-interactive-map.directive.ts',
    'oppia-interactive-item-selection-input.directive.ts',
    'oppia-interactive-logic-proof.directive.ts',
    'oppia-interactive-multiple-choice-input.directive.ts',
    'oppia-interactive-music-notes-input.directive.ts',
    'oppia-interactive-number-with-units.directive.ts',
    'oppia-interactive-numeric-input.directive.ts',
    'oppia-interactive-pencil-code-editor.directive.ts',
    'oppia-interactive-set-input.directive.ts',
    'oppia-interactive-text-input.directive.ts',
    'oppia-noninteractive-collapsible.directive.ts',
    'oppia-noninteractive-image.directive.ts',
    'oppia-noninteractive-link.directive.ts',
    'oppia-noninteractive-math.directive.ts',
    'oppia-noninteractive-skillreview.directive.ts',
    'oppia-noninteractive-tabs.directive.ts',
    'oppia-noninteractive-video.directive.ts',
    'oppia-response-code-repl.directive.ts',
    'oppia-response-continue.component.ts',
    'oppia-response-drag-and-drop-sort-input.directive.ts',
    'oppia-response-fraction-input.component.ts',
    'oppia-response-graph-input.component.ts',
    'oppia-response-image-click-input.directive.ts',
    'oppia-response-interactive-map.directive.ts',
    'oppia-response-item-selection-input.directive.ts',
    'oppia-response-logic-proof.directive.ts',
    'oppia-response-multiple-choice-input.directive.ts',
    'oppia-response-music-notes-input.directive.ts',
    'oppia-response-number-with-units.directive.ts',
    'oppia-response-numeric-input.directive.ts',
    'oppia-response-pencil-code-editor.directive.ts',
    'oppia-response-set-input.directive.ts',
    'oppia-response-text-input.directive.ts',
    'oppia-root.directive.ts',
    'oppia-short-response-code-repl.directive.ts',
    'oppia-short-response-continue.component.ts',
    'oppia-short-response-drag-and-drop-sort-input.directive.ts',
    'oppia-short-response-fraction-input.component.ts',
    'oppia-short-response-graph-input.component.ts',
    'oppia-short-response-image-click-input.directive.ts',
    'oppia-short-response-interactive-map.directive.ts',
    'oppia-short-response-item-selection-input.directive.ts',
    'oppia-short-response-logic-proof.directive.ts',
    'oppia-short-response-multiple-choice-input.directive.ts',
    'oppia-short-response-music-notes-input.directive.ts',
    'oppia-short-response-number-with-units.directive.ts',
    'oppia-short-response-numeric-input.directive.ts',
    'oppia-short-response-pencil-code-editor.directive.ts',
    'oppia-short-response-set-input.directive.ts',
    'oppia-short-response-text-input.directive.ts',
    'oppia-visualization-enumerated-frequency-table.directive.ts',
    'OppiaFooterDirective.ts',
    'opportunities-list.component.ts',
    'outcome-destination-editor.directive.ts',
    'outcome-editor.directive.ts',
    'outcome-feedback-editor.component.ts',
    'parameter-name-editor.directive.ts',
    'parameterize-rule-description.filter.ts',
    'player-correctness-feedback-enabled.service.ts',
    'player-transcript.service.ts',
    'pretest-question-backend-api.service.ts',
    'profile-link-image.component.ts',
    'profile-link-text.component.ts',
    'progress-nav.directive.ts',
    'promo-bar-backend-api.service.ts',
    'python-program.tokenizer.ts',
    'question-difficulty-selector.directive.ts',
    'question-editor.directive.ts',
    'question-player-engine.service.ts',
    'question-player.directive.ts',
    'question-update.service.ts',
    'questions-list.directive.ts',
    'random-selector.directive.ts',
    'rating-display.directive.ts',
    'read-only-collection-backend-api.service.ts',
    'real-editor.directive.ts',
    'refresher-exploration-confirmation-modal.service.ts',
    'remove-duplicates-in-array.pipe.ts',
    'request-interceptor.service.ts',
    'response-header.directive.ts',
    'review-material-editor.directive.ts',
    'role-graph.directive.ts',
    'rule-editor.directive.ts',
    'rule-type-selector.directive.ts',
    'sanitized-url-editor.directive.ts',
    'schema-based-bool-editor.directive.ts',
    'schema-based-choices-editor.directive.ts',
    'schema-based-custom-editor.directive.ts',
    'schema-based-custom-viewer.directive.ts',
    'schema-based-dict-editor.directive.ts',
    'schema-based-dict-viewer.directive.ts',
    'schema-based-editor.directive.ts',
    'schema-based-expression-editor.directive.ts',
    'schema-based-float-editor.directive.ts',
    'schema-based-html-editor.directive.ts',
    'schema-based-html-viewer.directive.ts',
    'schema-based-int-editor.directive.ts',
    'schema-based-list-editor.directive.ts',
    'schema-based-list-viewer.directive.ts',
    'schema-based-primitive-viewer.directive.ts',
    'schema-based-unicode-editor.directive.ts',
    'schema-based-unicode-viewer.directive.ts',
    'schema-based-viewer.directive.ts',
    'score-ring.directive.ts',
    'select2-dropdown.directive.ts',
    'set-of-translatable-html-content-ids-editor.component.ts',
    'set-of-unicode-string-editor.directive.ts',
    'shared.ts',
    'sharing-links.component.ts',
    'side-navigation-bar.directive.ts',
    'skill-concept-card-editor.directive.ts',
    'skill-creation.service.ts',
    'skill-description-editor.directive.ts',
    'skill-editor-navbar-breadcrumb.component.ts',
    'skill-editor-navbar.directive.ts',
    'skill-editor-state.service.ts',
    'skill-misconceptions-editor.directive.ts',
    'skill-prerequisite-skills-editor.directive.ts',
    'skill-questions-tab.directive.ts',
    'skill-rubrics-editor.directive.ts',
    'skill-selector-editor.directive.ts',
    'skill-selector.component.ts',
    'SkillObjectFactory.ts',
    'skills-list.directive.ts',
    'skills-mastery-list.directive.ts',
    'social-buttons.component.ts',
    'solution-editor.directive.ts',
    'solution-explanation-editor.directive.ts',
    'state-content-editor.directive.ts',
    'state-editor.directive.ts',
    'state-editor.service.ts',
    'state-hints-editor.directive.ts',
    'state-interaction-editor.directive.ts',
    'state-property.service.ts',
    'state-responses.directive.ts',
    'state-solution-editor.directive.ts',
    'state-top-answers-stats.service.ts',
    'StateCardObjectFactory.ts',
    'stats-reporting.service.ts',
    'story-creation.service.ts',
    'story-editor-navbar-breadcrumb.directive.ts',
    'story-editor-navbar.directive.ts',
    'story-editor-state.service.ts',
    'story-editor.directive.ts',
    'story-node-editor.directive.ts',
    'story-node.model.ts',
    'story-summary-tile.directive.ts',
    'story-update.service.ts',
    'StoryContentsObjectFactory.ts',
    'student.ts',
    'subtitled-html-editor.directive.ts',
    'subtitled-unicode-editor.directive.ts',
    'subtopic-page.model.ts',
    'subtopic-preview-tab.component.ts',
    'subtopic-summary-tile.directive.ts',
    'subtopic.model.ts',
    'suggestion-modal-for-exploration-editor.service.ts',
    'summary-list-header.component.ts',
    'supplemental-card.directive.ts',
    'svm-prediction.service.ts',
    'teacher.ts',
    'teacher2.ts',
    'thumbnail-uploader.directive.ts',
    'top-navigation-bar.directive.ts',
    'topic-creation.service.ts',
    'topic-editor-navbar-breadcrumb.directive.ts',
    'topic-editor-navbar.directive.ts',
    'topic-editor-page.component.ts',
    'topic-editor-state.service.ts',
    'topic-editor-stories-list.directive.ts',
    'topic-questions-tab.directive.ts',
    'topic-summary-tile.directive.ts',
    'TopicObjectFactory.ts',
    'topics-and-skills-dashboard-backend-api.service.ts',
    'translatable-html-content-id.component.ts',
    'translate-text.service.ts',
    'translation-file-hash-loader-backend-api.service.ts',
    'truncate-and-capitalize.filter.ts',
    'truncate-and-capitalize.pipe.ts',
    'truncate-input-based-on-interaction-answer-type.filter.ts',
    'truncate.filter.ts',
    'truncate.pipe.ts',
    'tutor-card.directive.ts',
    'unicode-string-editor.directive.ts',
    'unit-test-utils.ts', # Please don't try to cover this file.
    'url-interpolation.service.ts',
    'utils.service.ts',
    'version-diff-visualization.directive.ts',
    'version-tree.service.ts',
    'voiceover-recording.service.ts',
    'warnings-and-alerts.directive.ts',
    'worked-example-editor.directive.ts',
]


class LcovStanzaRelevantLines(python_utils.OBJECT):
    """Gets the relevant lines from a lcov stanza."""

    def __init__(self, stanza):
        """Initialize the object which provides relevant data of a lcov
        stanza in order to calculate any decrease in frontend test coverage.

        Args:
            stanza: list(str). Contains all the lines from a lcov stanza.

        Raises:
            Exception. The file_path is empty.
            Exception. Total lines number is not found.
            Exception. Covered lines number is not found.
        """

        match = re.search('SF:(.+)\n', stanza)
        if match is None:
            raise Exception(
                'The test path is empty or null. '
                'It\'s not possible to diff the test coverage correctly.')
        _, file_name = os.path.split(match.group(1))
        self.file_name = file_name
        self.file_path = match.group(1)

        match = re.search(r'LF:(\d+)\n', stanza)
        if match is None:
            raise Exception(
                'It wasn\'t possible to get the total lines of {} file.'
                'It\'s not possible to diff the test coverage correctly.'
                .format(file_name))
        self.total_lines = int(match.group(1))

        match = re.search(r'LH:(\d+)\n', stanza)
        if match is None:
            raise Exception(
                'It wasn\'t possible to get the covered lines of {} file.'
                'It\'s not possible to diff the test coverage correctly.'
                .format(file_name))
        self.covered_lines = int(match.group(1))


def get_stanzas_from_lcov_file():
    """Get all stanzas from a lcov file. The lcov file gather all the frontend
    files that has tests and each one has the following structure:
    TN: test name
    SF: file path
    FNF: total functions
    FNH: functions covered
    LF: total lines
    LH: lines covered
    BRF: total branches
    BRH: branches covered
    end_of_record

    Returns:
        list(LcovStanzaRelevantLines). A list with all stanzas.
    """
    f = python_utils.open_file(LCOV_FILE_PATH, 'r')
    lcov_items_list = f.read().split('end_of_record')
    stanzas_list = []

    for item in lcov_items_list:
        if item.strip('\n'):
            stanza = LcovStanzaRelevantLines(item)
            stanzas_list.append(stanza)

    return stanzas_list


def check_not_fully_covered_filenames_list_is_sorted():
    """Check if NOT_FULLY_COVERED_FILENAMES list is in alphabetical order."""
    if NOT_FULLY_COVERED_FILENAMES != sorted(
            NOT_FULLY_COVERED_FILENAMES, key=lambda s: s.lower()):
        sys.exit(
            'The \033[1mNOT_FULLY_COVERED_FILENAMES\033[0m list must be'
            ' kept in alphabetical order.')


def check_coverage_changes():
    """Checks if the denylist for not fully covered files needs to be changed
    by:
    - File renaming
    - File deletion

    Raises:
        Exception. LCOV_FILE_PATH doesn't exist.
    """
    if not os.path.exists(LCOV_FILE_PATH):
        raise Exception(
            'Expected lcov file to be available at {}, but the'
            ' file does not exist.'.format(LCOV_FILE_PATH))

    stanzas = get_stanzas_from_lcov_file()
    remaining_denylisted_files = list(NOT_FULLY_COVERED_FILENAMES)
    errors = ''

    for stanza in stanzas:
        file_name = stanza.file_name
        total_lines = stanza.total_lines
        covered_lines = stanza.covered_lines
        if stanza.file_path.startswith('node_modules/'):
            continue
        if file_name not in remaining_denylisted_files:
            if total_lines != covered_lines:
                errors += (
                    '\033[1m{}\033[0m seems to be not completely tested.'
                    ' Make sure it\'s fully covered.\n'.format(file_name))
        else:
            if total_lines == covered_lines:
                errors += (
                    '\033[1m{}\033[0m seems to be fully covered!'
                    ' Before removing it manually from the denylist'
                    ' in the file'
                    ' scripts/check_frontend_test_coverage.py, please'
                    ' make sure you\'ve followed the unit tests rules'
                    ' correctly on:'
                    ' https://github.com/oppia/oppia/wiki/Frontend'
                    '-unit-tests-guide#rules\n'.format(file_name))

            remaining_denylisted_files.remove(file_name)

    if remaining_denylisted_files:
        for test_name in remaining_denylisted_files:
            errors += (
                '\033[1m{}\033[0m is in the frontend test coverage'
                ' denylist but it doesn\'t exist anymore. If you have'
                ' renamed it, please make sure to remove the old file'
                ' name and add the new file name in the denylist in'
                ' the file scripts/check_frontend_test_coverage.py.\n'
                .format(test_name))

    if errors:
        python_utils.PRINT('------------------------------------')
        python_utils.PRINT('Frontend Coverage Checks Not Passed.')
        python_utils.PRINT('------------------------------------')
        sys.exit(errors)
    else:
        python_utils.PRINT('------------------------------------')
        python_utils.PRINT('All Frontend Coverage Checks Passed.')
        python_utils.PRINT('------------------------------------')

    check_not_fully_covered_filenames_list_is_sorted()


def main():
    """Runs all the steps for checking if there is any decrease of 100% covered
    files in the frontend.
    """
    check_coverage_changes()


# The 'no coverage' pragma is used as this line is un-testable. This is because
# it will only be called when check_frontend_test_coverage.py
# is used as a script.
if __name__ == '__main__': # pragma: no cover
    main()
