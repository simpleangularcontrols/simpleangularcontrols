import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4BrowserModule, JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4DialogModule,
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4ValidationSummaryModule
} from '@jnetwork/jngcontrols-bootstrap4';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { QuillModule } from 'ngx-quill';
import { RichtextRoutingModule } from './richtext-routing.module';
import { DemoRichtextComponent } from './richtext.component';
@NgModule({
  declarations: [DemoRichtextComponent],
  imports: [
    CommonModule,
    FormsModule,
    RichtextRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4DialogModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4BrowserModule,
    QuillModule,
    EditorModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class RichtextModule {}
