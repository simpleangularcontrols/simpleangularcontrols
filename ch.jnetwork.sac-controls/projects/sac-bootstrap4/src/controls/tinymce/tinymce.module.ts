import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacTinyMceComponent } from './tinymce';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { SACBootstrap4DialogModule } from '../dialog/dialog.module';
import { SACBootstrap4BrowserModule } from '../../components/browser/browser.module';
import { SACBootstrap4ButtonModule } from '../buttons/button.module';

@NgModule({
  declarations: [SacTinyMceComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4DialogModule,
    SACBootstrap4BrowserModule,
  ],
  exports: [SacTinyMceComponent],
})
export class SACBootstrap4TinyMceModule {}
