import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacDropdownComponent } from './dropdown';
import { SacDropdownOptionDirective } from './dropdownoption.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacDropdownComponent, SacDropdownOptionDirective],
    imports: [CommonModule, SACBootstrap4LayoutModule, SACBootstrap4TooltipModule, SACCommonUtliltiesModule],
    exports: [SacDropdownComponent, SacDropdownOptionDirective],
})
export class SACBootstrap4DropdownModule {}
