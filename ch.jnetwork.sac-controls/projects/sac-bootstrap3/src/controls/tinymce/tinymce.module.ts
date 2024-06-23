import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SACBootstrap3ButtonModule } from '../buttons/button.module';
import { SACBootstrap3DialogModule } from '../dialog/dialog.module';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SacTinyMceComponent } from './tinymce';

@NgModule({
  declarations: [SacTinyMceComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3DialogModule,
    SACBootstrap3LayoutModule,
  ],
  exports: [SacTinyMceComponent],
})
export class SACBootstrap3TinyMceModule {}
