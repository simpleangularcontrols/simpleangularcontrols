import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgTooltipComponent } from './tooltip';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgTooltipComponent],
  imports: [
    BrowserModule, CommonModule
  ],
  exports: [NgTooltipComponent]
})
export class JNetworkBootstrap3TooltipModule { }
