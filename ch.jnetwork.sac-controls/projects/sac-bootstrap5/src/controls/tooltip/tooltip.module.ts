import { SacTooltipComponent } from './tooltip';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacTooltipComponent],
    imports: [CommonModule, SACCommonUtliltiesModule],
    exports: [SacTooltipComponent],
})
export class SACBootstrap5TooltipModule {}
