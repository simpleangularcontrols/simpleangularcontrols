import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { Component, forwardRef, Host, Injector } from '@angular/core';
import { NgFormularDirective } from '../form/form';
import { NgInputCurrencyCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ng-inputcurrency,ngInputCurrency',
  templateUrl: './inputcurrency.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputCurrencyComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputCurrencyComponent) }
  ]
})
export class NgInputCurrencyComponent extends NgInputCurrencyCommon {
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
