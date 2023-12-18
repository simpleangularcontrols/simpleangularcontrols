import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStaticLabelComponent } from './staticlabel';
import { NgStaticFormContainerComponent } from './formcontainer';

@NgModule({
  declarations: [NgStaticLabelComponent, NgStaticFormContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgStaticLabelComponent, NgStaticFormContainerComponent]
})
export class SACBootstrap4StaticLabelModule { }
