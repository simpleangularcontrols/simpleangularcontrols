import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStaticLabelComponent } from './staticlabel';
import { NgStaticFormContainerComponent } from './formcontainer';
import { JNetworkBootstrap3TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [NgStaticLabelComponent, NgStaticFormContainerComponent],
  imports: [
    CommonModule, JNetworkBootstrap3TooltipModule
  ],
  exports: [NgStaticLabelComponent, NgStaticFormContainerComponent]
})
export class JNetworkBootstrap3StaticLabelModule { }
