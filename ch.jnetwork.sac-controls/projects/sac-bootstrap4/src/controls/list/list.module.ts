import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacListboxComponent } from './listbox';
import { SacListboxOptionDirective } from './listboxoption.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacListboxComponent, SacListboxOptionDirective],
    imports: [CommonModule, SACBootstrap4LayoutModule, SACBootstrap4TooltipModule, SACCommonUtliltiesModule],
    exports: [SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap4ListModule {}
