import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDialogComponent } from './dialog';

@NgModule({
  declarations: [NgDialogComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgDialogComponent]
})
export class JNetworkBootstrap4DialogModule { }
