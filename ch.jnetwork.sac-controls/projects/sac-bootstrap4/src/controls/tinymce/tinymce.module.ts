import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SACBootstrap4BrowserModule } from '../../components/browser/browser.module';
import { SACBootstrap4ButtonModule } from '../buttons/button.module';
import { SACBootstrap4DialogModule } from '../dialog/dialog.module';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SacTinyMceComponent } from './tinymce';

@NgModule({
  declarations: [SacTinyMceComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    SACBootstrap4LayoutModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4DialogModule,
    SACBootstrap4BrowserModule,
  ],
  exports: [SacTinyMceComponent],
})
export class SACBootstrap4TinyMceModule {}
