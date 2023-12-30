import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5ConfirmModule } from '../../controls/confirm/confirm.module';
import { SACBootstrap5ContextmenuModule } from '../../controls/contextmenu/contextmenu.module';
import { SACBootstrap5FormModule } from '../../controls/form/form.module';
import { SACBootstrap5UploadModule } from '../../controls/upload/upload.module';
import { SacBrowserComponent } from './browser';

@NgModule({
  declarations: [SacBrowserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SACBootstrap5ConfirmModule,
    SACBootstrap5ContextmenuModule,
    SACBootstrap5UploadModule,
    SACBootstrap5FormModule,
    FormsModule,
  ],
  exports: [SacBrowserComponent],
  bootstrap: [SacBrowserComponent],
})
export class SACBootstrap5BrowserModule {}
