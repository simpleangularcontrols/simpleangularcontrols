import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacDateComponent } from './date';
import { SacDateTimeComponent } from './datetime';
import { SacDateSelectorComponent } from './dateselector';
import { SacTimeComponent } from './time';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [SacDateComponent, SacDateTimeComponent, SacTimeComponent, SacDateSelectorComponent],
  imports: [
    CommonModule, IMaskModule
  ],
  exports: [SacDateComponent, SacDateTimeComponent, SacTimeComponent, SacDateSelectorComponent]
})
export class SACBootstrap4DateTimeModule { }
