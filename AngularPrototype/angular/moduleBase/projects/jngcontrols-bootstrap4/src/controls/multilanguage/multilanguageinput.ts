import { Component, Host, forwardRef, Injector, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgMultilanguageInputCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngMultilanguageInput',
  templateUrl: './multilanguageinput.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgMultilanguageInput },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgMultilanguageInput) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgMultilanguageInput extends NgMultilanguageInputCommon {

  constructor( @Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
}
