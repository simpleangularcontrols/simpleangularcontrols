import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgInputCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngInput',
  templateUrl: './input.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInput },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInput) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgInput extends NgInputCommon {

  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }

  _isAdptiveLabel = true;

}
