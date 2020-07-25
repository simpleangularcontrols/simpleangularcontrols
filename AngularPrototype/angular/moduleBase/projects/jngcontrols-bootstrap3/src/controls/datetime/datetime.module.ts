import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDateComponent } from './date';
import { NgDateTimeComponent } from './datetime';
import { NgDateSelectorComponent } from './dateselector';
import { NgTimeComponent } from './time';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [NgDateComponent, NgDateTimeComponent, NgTimeComponent, NgDateSelectorComponent],
  imports: [
    CommonModule, TextMaskModule
  ],
  exports: [NgDateComponent, NgDateTimeComponent, NgTimeComponent, NgDateSelectorComponent]
})
export class JNetworkBootstrap3DateTimeModule { }
