import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { SacDropdownComponent } from './dropdown';
import { SacDropdownOptionDirective } from './dropdownoption.directive';
import { SacListboxComponent } from './listbox';
import { SacListboxOptionDirective } from './listboxoption.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonListboxOptionModule, SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacDropdownComponent, SacDropdownOptionDirective, SacListboxComponent, SacListboxOptionDirective],
    imports: [
        CommonModule,
        SACCommonListboxOptionModule,
        SACBootstrap3TooltipModule,
        SACBootstrap3LayoutModule,
        SACCommonUtliltiesModule,
    ],
    exports: [SacDropdownComponent, SacDropdownOptionDirective, SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap3ListModule {}
