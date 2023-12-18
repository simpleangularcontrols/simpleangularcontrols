import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStaticLabelComponent } from './staticlabel';
import { NgStaticFormContainerComponent } from './formcontainer';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [NgStaticLabelComponent, NgStaticFormContainerComponent],
  imports: [
    CommonModule, SACBootstrap3TooltipModule
  ],
  exports: [NgStaticLabelComponent, NgStaticFormContainerComponent]
})
export class SACBootstrap3StaticLabelModule { }
