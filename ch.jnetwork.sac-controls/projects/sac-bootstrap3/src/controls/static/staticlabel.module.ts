import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacStaticLabelComponent } from './staticlabel';
import { SacStaticFormContainerComponent } from './formcontainer';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [SacStaticLabelComponent, SacStaticFormContainerComponent],
  imports: [
    CommonModule, SACBootstrap3TooltipModule
  ],
  exports: [SacStaticLabelComponent, SacStaticFormContainerComponent]
})
export class SACBootstrap3StaticLabelModule { }
