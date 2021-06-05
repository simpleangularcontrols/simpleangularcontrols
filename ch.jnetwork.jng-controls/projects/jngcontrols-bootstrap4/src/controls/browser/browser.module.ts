import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgBrowserComponent } from './browser';

@NgModule({
  declarations: [NgBrowserComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [NgBrowserComponent],
  bootstrap: [NgBrowserComponent],
})
export class JNetworkBootstrap4BrowserModule {}
