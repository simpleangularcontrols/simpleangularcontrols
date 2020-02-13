import { NgModule } from '@angular/core';
import { NgButtonComponent } from './button';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgButtonComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgButtonComponent]
})
export class JNetworkBootstrap3ButtonModule { }
