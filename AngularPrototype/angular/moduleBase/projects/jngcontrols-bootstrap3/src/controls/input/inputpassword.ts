import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from "@angular/forms";
import { Component, forwardRef, Host, Injector } from "@angular/core";
import { NgFormular } from '../form/form';
import { NgInputPasswordCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ngInputPassword',
  templateUrl: './inputpassword.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputPassword },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputPassword) }
  ]
})
export class NgInputPassword extends NgInputPasswordCommon {
  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
}
