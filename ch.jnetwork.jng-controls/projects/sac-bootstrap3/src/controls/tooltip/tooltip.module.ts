import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SacTooltipComponent } from './tooltip';

@NgModule({
  declarations: [SacTooltipComponent],
  imports: [
    CommonModule, CommonModule
  ],
  exports: [SacTooltipComponent]
})
export class SACBootstrap3TooltipModule { }
