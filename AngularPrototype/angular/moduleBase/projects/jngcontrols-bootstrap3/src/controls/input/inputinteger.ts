import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgInputIntegerCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngInputInteger',
  templateUrl: './inputinteger.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputInteger },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputInteger) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInputInteger extends NgInputIntegerCommon {
  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  } 
}
