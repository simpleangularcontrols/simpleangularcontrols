import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacTinyMceComponent } from './tinymce';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3ButtonModule } from '../buttons/button.module';
import { SACBootstrap3DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [SacTinyMceComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3DialogModule,
  ],
  exports: [SacTinyMceComponent],
})
export class SACBootstrap3TinyMceModule {}
