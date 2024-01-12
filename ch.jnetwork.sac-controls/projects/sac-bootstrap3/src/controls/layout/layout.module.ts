import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SacFormLayoutDirective } from './formlayout.directive';
import { SacToControlWidthCssPipe } from './tocontrolwidthcss.pipe';
import { SacToLabelWidthCssPipe } from './tolabelwidthcss.pipe';

@NgModule({
  imports: [
    CommonModule,
    SacFormLayoutDirective,
    SacToControlWidthCssPipe,
    SacToLabelWidthCssPipe,
  ],
  exports: [
    SacFormLayoutDirective,
    SacToControlWidthCssPipe,
    SacToLabelWidthCssPipe,
  ],
})
export class SACBootstrap3LayoutModule {}
