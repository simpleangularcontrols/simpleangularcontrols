import { Component, Host } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { NgValidationSummaryCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';


@Component({
  selector: 'ngValidationSummary',
  templateUrl: './validationsummary.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgValidationSummary
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgValidationSummary extends NgValidationSummaryCommon {

  constructor(@Host() parent: NgFormular) {
    super(parent);
  }

}

