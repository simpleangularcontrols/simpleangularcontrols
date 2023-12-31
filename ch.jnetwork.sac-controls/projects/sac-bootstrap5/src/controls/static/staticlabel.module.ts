import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacStaticLabelComponent } from './staticlabel';
import { SacStaticFormContainerComponent } from './formcontainer';

@NgModule({
  declarations: [SacStaticLabelComponent, SacStaticFormContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [SacStaticLabelComponent, SacStaticFormContainerComponent]
})
export class SACBootstrap5StaticLabelModule { }
