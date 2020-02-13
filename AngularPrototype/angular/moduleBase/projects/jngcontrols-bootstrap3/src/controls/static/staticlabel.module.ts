import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgStaticLabelComponent } from './staticlabel';
import { NgStaticFormContainerComponent } from './formcontainer';
import { JNetworkBootstrap3TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [NgStaticLabelComponent, NgStaticFormContainerComponent],
  imports: [
    BrowserModule, JNetworkBootstrap3TooltipModule
  ],
  exports: [NgStaticLabelComponent, NgStaticFormContainerComponent]
})
export class JNetworkBootstrap3StaticLabelModule { }
