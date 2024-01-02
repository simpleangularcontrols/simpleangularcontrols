import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5BrowserModule,
  SACBootstrap5ButtonModule,
  SACBootstrap5DialogModule,
  SACBootstrap5FormModule,
  SACBootstrap5TinyMceModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { RichtextRoutingModule } from './richtext-routing.module';
import { DemoRichtextComponent } from './richtext.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RichtextRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5DialogModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5BrowserModule,
        SACBootstrap5TinyMceModule,
        EditorModule,
        DemoRichtextComponent,
    ],
    providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    ],
})
export class RichtextModule {}
