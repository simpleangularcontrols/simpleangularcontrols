import { NgModule } from '@angular/core';
import { SacValidationSummaryComponent } from './validationsummary';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SacValidationSummaryComponent
    ],
    exports: [SacValidationSummaryComponent]
})
export class SACBootstrap3ValidationSummaryModule { }
