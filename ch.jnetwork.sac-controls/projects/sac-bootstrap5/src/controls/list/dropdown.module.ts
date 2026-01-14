import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TooltipModule } from '../tooltip/tooltip.module';
import { SacDropdownComponent } from './dropdown';
import { SacDropdownOptionDirective } from './dropdownoption.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacDropdownComponent, SacDropdownOptionDirective],
    imports: [CommonModule, SACBootstrap5LayoutModule, SACBootstrap5TooltipModule, SACCommonUtliltiesModule],
    exports: [SacDropdownComponent, SacDropdownOptionDirective],
})
export class SACBootstrap5DropdownModule {}
