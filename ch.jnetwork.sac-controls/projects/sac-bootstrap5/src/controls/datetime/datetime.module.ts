import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IMaskModule } from 'angular-imask';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TooltipModule } from '../tooltip/tooltip.module';
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
  imports: [
    CommonModule,
    IMaskModule,
    SACBootstrap5LayoutModule,
    SACBootstrap5TooltipModule,
  ],
  exports: [
    SacDateComponent,
    SacDateTimeComponent,
    SacTimeComponent,
    SacDateSelectorComponent,
  ],
})
export class SACBootstrap5DateTimeModule {}
