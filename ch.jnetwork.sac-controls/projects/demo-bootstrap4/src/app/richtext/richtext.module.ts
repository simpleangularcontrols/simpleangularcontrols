import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4BrowserModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4DialogModule,
  SACBootstrap4FormModule,
  SACBootstrap4TinyMceModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { SACBootstrap4TinyMceModuleNgFactory } from 'dist/sac-bootstrap4/controls/tinymce/tinymce.module.ngfactory';
import { RichtextRoutingModule } from './richtext-routing.module';
import { DemoRichtextComponent } from './richtext.component';
@NgModule({
  declarations: [DemoRichtextComponent],
  imports: [
    CommonModule,
    FormsModule,
    RichtextRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4DialogModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4BrowserModule,
    SACBootstrap4TinyMceModule,
    EditorModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class RichtextModule {}
