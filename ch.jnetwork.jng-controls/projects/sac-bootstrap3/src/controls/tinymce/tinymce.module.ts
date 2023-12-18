import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacTinyMceComponent } from './tinymce';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SacTinyMceComponent],
  imports: [CommonModule, FormsModule, EditorModule],
  exports: [SacTinyMceComponent],
})
export class SACBootstrap3TinyMceModule {}
