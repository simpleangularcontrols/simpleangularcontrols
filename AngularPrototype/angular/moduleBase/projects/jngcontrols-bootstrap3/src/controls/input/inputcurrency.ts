import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from "@angular/forms";
import { Component, forwardRef, Host, Injector } from "@angular/core";
import { NgFormular } from '../form/form';
import { NgInputCurrencyCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ngInputCurrency',
  templateUrl: './inputcurrency.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputCurrency },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputCurrency) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInputCurrency extends NgInputCurrencyCommon {
  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
}
