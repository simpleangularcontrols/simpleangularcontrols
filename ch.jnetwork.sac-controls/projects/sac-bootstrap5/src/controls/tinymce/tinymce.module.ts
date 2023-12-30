import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacTinyMceComponent } from './tinymce';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5DialogModule } from '../dialog/dialog.module';
import { SACBootstrap5BrowserModule } from '../../components/browser/browser.module';
import { SACBootstrap5ButtonModule } from '../buttons/button.module';

@NgModule({
  declarations: [SacTinyMceComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    SACBootstrap5ButtonModule,
    SACBootstrap5DialogModule,
    SACBootstrap5BrowserModule,
  ],
  exports: [SacTinyMceComponent],
})
export class SACBootstrap5TinyMceModule {}
