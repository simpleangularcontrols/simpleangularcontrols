import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS,  } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgInputDecimalCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ng-inputdecimal,ngInputDecimal',
  templateUrl: './inputdecimal.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputDecimalComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputDecimalComponent) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})
export class NgInputDecimalComponent extends NgInputDecimalCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }

}
