import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacCheckboxComponent } from './checkbox';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent],
    imports: [CommonModule, SACBootstrap4LayoutModule, SACBootstrap4TooltipModule, SACCommonUtliltiesModule],
    exports: [SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent],
})
export class SACBootstrap4CheckboxModule {}
