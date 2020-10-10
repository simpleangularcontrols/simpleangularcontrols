import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDateComponent } from './date';
import { NgDateTimeComponent } from './datetime';
import { NgDateSelectorComponent } from './dateselector';
import { NgTimeComponent } from './time';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [NgDateComponent, NgDateTimeComponent, NgTimeComponent, NgDateSelectorComponent],
  imports: [
    CommonModule, IMaskModule
  ],
  exports: [NgDateComponent, NgDateTimeComponent, NgTimeComponent, NgDateSelectorComponent]
})
export class JNetworkBootstrap4DateTimeModule { }
