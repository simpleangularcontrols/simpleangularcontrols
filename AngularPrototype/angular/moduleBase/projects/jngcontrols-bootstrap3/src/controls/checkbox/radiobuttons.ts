import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgRadiobuttonsCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';

@Component({
  selector: 'ngRadiobuttons',
  templateUrl: './radiobuttons.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgRadiobuttons), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRadiobuttons), multi: true }
  ]
})
export class NgRadiobuttons extends NgRadiobuttonsCommon {

  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }

}
