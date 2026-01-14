import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacDateComponent } from './date';
import { SacDateSelectorComponent } from './dateselector';
import { SacDateTimeComponent } from './datetime';
import { SacTimeComponent } from './time';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';
import { IMaskModule } from 'angular-imask';

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
    SACBootstrap4LayoutModule,
    SACBootstrap4TooltipModule, SACCommonUtliltiesModule
  ],
  exports: [
    SacDateComponent,
    SacDateTimeComponent,
    SacTimeComponent,
    SacDateSelectorComponent,
  ],
})
export class SACBootstrap4DateTimeModule {}
