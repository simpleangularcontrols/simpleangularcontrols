import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SACBootstrap5BrowserModule } from '../../components/browser/browser.module';
import { SACBootstrap5ButtonModule } from '../buttons/button.module';
import { SACBootstrap5DialogModule } from '../dialog/dialog.module';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacTinyMceComponent } from './tinymce';

@NgModule({
  declarations: [SacTinyMceComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    SACBootstrap5ButtonModule,
    SACBootstrap5DialogModule,
    SACBootstrap5BrowserModule,
    SACBootstrap5LayoutModule,
  ],
  exports: [SacTinyMceComponent],
})
export class SACBootstrap5TinyMceModule {}
