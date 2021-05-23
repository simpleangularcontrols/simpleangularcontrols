import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTinyMceComponent } from './tinymce';
import { jNetworkTinyMceEditorModule } from '@jnetwork/jngcontrols-common';

@NgModule({
  declarations: [NgTinyMceComponent],
  imports: [
    CommonModule, jNetworkTinyMceEditorModule
  ],
  exports: [NgTinyMceComponent]
})
export class JNetworkBootstrap3TinyMceModule { }
