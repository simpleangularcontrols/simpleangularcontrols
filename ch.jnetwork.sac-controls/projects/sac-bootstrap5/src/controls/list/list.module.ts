import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TooltipModule } from '../tooltip/tooltip.module';
import { SacListboxComponent } from './listbox';
import { SacListboxOptionDirective } from './listboxoption.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacListboxComponent, SacListboxOptionDirective],
    imports: [CommonModule, SACBootstrap5LayoutModule, SACBootstrap5TooltipModule, SACCommonUtliltiesModule],
    exports: [SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap5ListModule {}
