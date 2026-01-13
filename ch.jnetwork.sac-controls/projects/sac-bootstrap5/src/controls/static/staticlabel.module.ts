import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TooltipModule } from '../tooltip/tooltip.module';
import { SacStaticFormContainerComponent } from './formcontainer';
import { SacStaticLabelComponent } from './staticlabel';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacStaticLabelComponent, SacStaticFormContainerComponent],
    imports: [CommonModule, SACBootstrap5LayoutModule, SACBootstrap5TooltipModule, SACCommonUtliltiesModule],
    exports: [SacStaticLabelComponent, SacStaticFormContainerComponent],
})
export class SACBootstrap5StaticLabelModule {}
