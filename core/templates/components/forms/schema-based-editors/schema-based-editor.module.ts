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
 * @fileoverview Module for a schema-based editor components
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SchemaBasedBoolEditorComponent } from './schema-based-bool-editor.component';
import { SchemaBasedChoicesEditorComponent } from './schema-based-choices-editor.component';
import { SchemaBasedDictEditorComponent } from './schema-based-dict-editor.component';
import { SchemaBasedEditorComponent } from './schema-based-editor.component';
import { SchemaBasedExpressionEditorComponent } from './schema-based-expression-editor.component';
import { SchemaBasedFloatEditorComponent } from './schema-based-float-editor.component';
import { SchemaBasedHtmlEditorComponent } from './schema-based-html-editor.component';
import { SchemaBasedIntEditor } from './schema-based-int-editor.component';
// import { SchemaBasedCustomEditorComponent } from './schema-based-custom-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SchemaBasedBoolEditorComponent,
    SchemaBasedChoicesEditorComponent,
    // SchemaBasedCustomEditorComponent,
    SchemaBasedExpressionEditorComponent,
    SchemaBasedHtmlEditorComponent,
    SchemaBasedIntEditor,
    SchemaBasedEditorComponent,
    SchemaBasedDictEditorComponent,
    SchemaBasedFloatEditorComponent,
  ],
  entryComponents: [
    SchemaBasedBoolEditorComponent,
    SchemaBasedChoicesEditorComponent,
    // SchemaBasedCustomEditorComponent,
    SchemaBasedExpressionEditorComponent,
    SchemaBasedHtmlEditorComponent,
    SchemaBasedIntEditor,
    SchemaBasedEditorComponent,
    SchemaBasedDictEditorComponent,
    SchemaBasedFloatEditorComponent,
  ],
  exports: [
    SchemaBasedBoolEditorComponent,
    SchemaBasedChoicesEditorComponent,
    // SchemaBasedCustomEditorComponent,
    SchemaBasedExpressionEditorComponent,
    SchemaBasedHtmlEditorComponent,
    SchemaBasedIntEditor,
    SchemaBasedEditorComponent,
    SchemaBasedDictEditorComponent,
    SchemaBasedFloatEditorComponent,
  ],
})
export class SchemaBasedEditorModule {

}
