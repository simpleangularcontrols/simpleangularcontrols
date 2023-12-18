import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap4ConfirmModule } from '../../controls/confirm/confirm.module';
import { SACBootstrap4ContextmenuModule } from '../../controls/contextmenu/contextmenu.module';
import { SACBootstrap4FormModule } from '../../controls/form/form.module';
import { SACBootstrap4UploadModule } from '../../controls/upload/upload.module';
import { NgBrowserComponent } from './browser';

@NgModule({
  declarations: [NgBrowserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SACBootstrap4ConfirmModule,
    SACBootstrap4ContextmenuModule,
    SACBootstrap4UploadModule,
    SACBootstrap4FormModule,
    FormsModule,
  ],
  exports: [NgBrowserComponent],
  bootstrap: [NgBrowserComponent],
})
export class SACBootstrap4BrowserModule {}
