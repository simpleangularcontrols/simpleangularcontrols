import { NgModule } from '@angular/core';
import { NgValidationSummaryComponent } from './validationsummary';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgValidationSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [NgValidationSummaryComponent]
})
export class SACBootstrap3ValidationSummaryModule { }
