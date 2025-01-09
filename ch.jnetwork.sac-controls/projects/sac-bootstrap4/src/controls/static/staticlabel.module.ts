import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacStaticFormContainerComponent } from './formcontainer';
import { SacStaticLabelComponent } from './staticlabel';

@NgModule({
  declarations: [SacStaticLabelComponent, SacStaticFormContainerComponent],
  imports: [
    CommonModule,
    SACBootstrap4LayoutModule,
    SACBootstrap4TooltipModule,
  ],
  exports: [SacStaticLabelComponent, SacStaticFormContainerComponent],
})
export class SACBootstrap4StaticLabelModule {}
