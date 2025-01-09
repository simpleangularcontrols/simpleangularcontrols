import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SacStaticFormContainerComponent } from './formcontainer';
import { SacStaticLabelComponent } from './staticlabel';

@NgModule({
  imports: [
    CommonModule,
    SacStaticLabelComponent,
    SacStaticFormContainerComponent,
  ],
  exports: [SacStaticLabelComponent, SacStaticFormContainerComponent],
})
export class SACBootstrap4StaticLabelModule {}
