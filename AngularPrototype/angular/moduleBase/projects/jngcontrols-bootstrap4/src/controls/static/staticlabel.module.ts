import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgStaticLabelComponent } from './staticlabel';
import { NgStaticFormContainerComponent } from './formcontainer';

@NgModule({
  declarations: [NgStaticLabelComponent, NgStaticFormContainerComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgStaticLabelComponent, NgStaticFormContainerComponent]
})
export class JNetworkBootstrap4StaticLabelModule { }
