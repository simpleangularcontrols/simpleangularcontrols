import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDateComponent } from './date';
import { NgDateTimeComponent } from './datetime';
import { NgDateSelectorComponent } from './dateselector';
import { NgTimeComponent } from './time';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [NgDateComponent, NgDateTimeComponent, NgTimeComponent, NgDateSelectorComponent],
  imports: [
    BrowserModule, TextMaskModule
  ],
  exports: [NgDateComponent, NgDateTimeComponent, NgTimeComponent, NgDateSelectorComponent]
})
export class JNetworkBootstrap3DateTimeModule { }
