import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JNetworkBootstrap4ConfirmModule } from '../confirm/confirm.module';
import { JNetworkBootstrap4ContextmenuModule } from '../contextmenu/contextmenu.module';
import { JNetworkBootstrap4FormModule } from '../form/form.module';
import { JNetworkBootstrap4UploadModule } from '../upload/upload.module';
import { NgBrowserComponent } from './browser';

@NgModule({
  declarations: [NgBrowserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    JNetworkBootstrap4ConfirmModule,
    JNetworkBootstrap4ContextmenuModule,
    JNetworkBootstrap4UploadModule,
    JNetworkBootstrap4FormModule,
    FormsModule,
  ],
  exports: [NgBrowserComponent],
  bootstrap: [NgBrowserComponent],
})
export class JNetworkBootstrap4BrowserModule {}
