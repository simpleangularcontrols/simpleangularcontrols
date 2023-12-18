import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTinyMceComponent } from './tinymce';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { JNetworkBootstrap4DialogModule } from '../dialog/dialog.module';
import { JNetworkBootstrap4BrowserModule } from '../../components/browser/browser.module';
import { JNetworkBootstrap4ButtonModule } from '../buttons/button.module';

@NgModule({
  declarations: [NgTinyMceComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4DialogModule,
    JNetworkBootstrap4BrowserModule,
  ],
  exports: [NgTinyMceComponent],
})
export class JNetworkBootstrap4TinyMceModule {}
