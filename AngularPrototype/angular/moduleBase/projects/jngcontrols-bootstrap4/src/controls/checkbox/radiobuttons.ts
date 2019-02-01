import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgRadiobuttonsCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngRadiobuttons',
  templateUrl: './radiobuttons.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgRadiobuttons), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRadiobuttons), multi: true }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgRadiobuttons extends NgRadiobuttonsCommon {

  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }

}
