import { NgModule } from '@angular/core';
import { SacValidationSummaryComponent } from './validationsummary';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SacValidationSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [SacValidationSummaryComponent]
})
export class SACBootstrap4ValidationSummaryModule { }
