import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { SacDateComponent } from './date';
import { SacDateSelectorComponent } from './dateselector';
import { SacDateTimeComponent } from './datetime';
import { SacTimeComponent } from './time';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';
import { IMaskModule } from 'angular-imask';

@NgModule({
    declarations: [SacDateComponent, SacDateTimeComponent, SacTimeComponent, SacDateSelectorComponent],
    imports: [
        CommonModule,
        IMaskModule,
        SACBootstrap3LayoutModule,
        SACBootstrap3TooltipModule,
        SACCommonUtliltiesModule,
    ],
    exports: [SacDateComponent, SacDateTimeComponent, SacTimeComponent, SacDateSelectorComponent],
})
export class SACBootstrap3DateTimeModule {}
