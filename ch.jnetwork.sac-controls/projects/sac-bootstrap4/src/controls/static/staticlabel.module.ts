import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacStaticFormContainerComponent } from './formcontainer';
import { SacStaticLabelComponent } from './staticlabel';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
  declarations: [SacStaticLabelComponent, SacStaticFormContainerComponent],
  imports: [
    CommonModule,
    SACBootstrap4LayoutModule,
    SACBootstrap4TooltipModule, SACCommonUtliltiesModule
  ],
  exports: [SacStaticLabelComponent, SacStaticFormContainerComponent],
})
export class SACBootstrap4StaticLabelModule {}
