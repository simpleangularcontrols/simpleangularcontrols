import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS} from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgInputDecimalCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngInputDecimal',
  templateUrl: './inputdecimal.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputDecimal },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputDecimal) }
  ]
})
export class NgInputDecimal extends NgInputDecimalCommon {
  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
}
