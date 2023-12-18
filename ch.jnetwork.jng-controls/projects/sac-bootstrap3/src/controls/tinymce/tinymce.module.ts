import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTinyMceComponent } from './tinymce';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgTinyMceComponent],
  imports: [CommonModule, FormsModule, EditorModule],
  exports: [NgTinyMceComponent],
})
export class SACBootstrap3TinyMceModule {}
