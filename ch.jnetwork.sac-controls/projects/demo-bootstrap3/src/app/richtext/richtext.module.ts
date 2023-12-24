import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  // SACBootstrap3BrowserModule,
  SACBootstrap3ButtonModule,
  SACBootstrap3DialogModule,
  SACBootstrap3FormModule,
  SACBootstrap3TinyMceModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { RichtextRoutingModule } from './richtext-routing.module';
import { DemoRichtextComponent } from './richtext.component';
@NgModule({
  declarations: [DemoRichtextComponent],
  imports: [
    CommonModule,
    FormsModule,
    RichtextRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3DialogModule,
    SACBootstrap3ButtonModule,
    // SACBootstrap3BrowserModule,
    SACBootstrap3TinyMceModule,
    EditorModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class RichtextModule {}
