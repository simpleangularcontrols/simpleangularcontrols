import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { SacCheckboxComponent } from './checkbox';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent],
    imports: [CommonModule, SACBootstrap3LayoutModule, SACBootstrap3TooltipModule, SACCommonUtliltiesModule],
    exports: [SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent],
})
export class SACBootstrap3CheckboxModule {}
