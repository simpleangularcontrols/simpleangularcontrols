import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SacTooltipComponent } from './tooltip';

@NgModule({
    imports: [
        CommonModule, CommonModule,
        SacTooltipComponent
    ],
    exports: [SacTooltipComponent]
})
export class SACBootstrap3TooltipModule { }
