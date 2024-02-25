import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SacFormLayoutDirective } from './formlayout.directive';
import { SacToControlHeightPipe } from './tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from './tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from './tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from './tolabelwidthcss.pipe';

@NgModule({
  imports: [
    CommonModule,
    SacFormLayoutDirective,
    SacToControlHeightPipe,
    SacToControlWidthCssPipe,
    SacToLabelHeightPipe,
    SacToLabelWidthCssPipe,
  ],
  exports: [
    SacFormLayoutDirective,
    SacToControlHeightPipe,
    SacToControlWidthCssPipe,
    SacToLabelHeightPipe,
    SacToLabelWidthCssPipe,
  ],
})
export class SACBootstrap3LayoutModule {}
