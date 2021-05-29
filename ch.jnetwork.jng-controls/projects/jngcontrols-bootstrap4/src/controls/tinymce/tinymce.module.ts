import { NgModule } from '@angular/core';
import { jNetworkTinyMceEditorModule } from '@jnetwork/jngcontrols-common';
import { CommonModule } from '@angular/common';
import { NgTinyMceComponent } from './tinymce';

@NgModule({
  declarations: [NgTinyMceComponent],
  imports: [
    CommonModule, jNetworkTinyMceEditorModule
  ],
  exports: [NgTinyMceComponent]
})
export class JNetworkBootstrap4TinyMceModule { }
