import { SacValidationSummaryComponent } from './validationsummary';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
  declarations: [SacValidationSummaryComponent],
  imports: [
    CommonModule, SACCommonUtliltiesModule
  ],
  exports: [SacValidationSummaryComponent]
})
export class SACBootstrap4ValidationSummaryModule { }
