import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgTabComponent } from './tab';
import { NgTabItemComponent } from './tabitem';

@NgModule({
  declarations: [NgTabComponent, NgTabItemComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgTabComponent, NgTabItemComponent]
})
export class JNetworkBootstrap3TabsModule { }
