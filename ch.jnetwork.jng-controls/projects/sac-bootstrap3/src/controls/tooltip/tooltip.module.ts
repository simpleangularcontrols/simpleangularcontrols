import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTooltipComponent } from './tooltip';

@NgModule({
  declarations: [NgTooltipComponent],
  imports: [
    CommonModule, CommonModule
  ],
  exports: [NgTooltipComponent]
})
export class SACBootstrap3TooltipModule { }
