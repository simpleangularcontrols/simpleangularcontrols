import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { SacStaticFormContainerComponent } from './formcontainer';
import { SacStaticLabelComponent } from './staticlabel';

@NgModule({
  declarations: [SacStaticLabelComponent, SacStaticFormContainerComponent],
  imports: [
    CommonModule,
    SACBootstrap3TooltipModule,
    SACBootstrap3LayoutModule,
  ],
  exports: [SacStaticLabelComponent, SacStaticFormContainerComponent],
})
export class SACBootstrap3StaticLabelModule {}
