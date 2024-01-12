import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IMaskModule } from 'angular-imask';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SacDateComponent } from './date';
import { SacDateSelectorComponent } from './dateselector';
import { SacDateTimeComponent } from './datetime';
import { SacTimeComponent } from './time';

@NgModule({
  declarations: [
    SacDateComponent,
    SacDateTimeComponent,
    SacTimeComponent,
    SacDateSelectorComponent,
  ],
  imports: [CommonModule, IMaskModule, SACBootstrap3LayoutModule],
  exports: [
    SacDateComponent,
    SacDateTimeComponent,
    SacTimeComponent,
    SacDateSelectorComponent,
  ],
})
export class SACBootstrap3DateTimeModule {}
