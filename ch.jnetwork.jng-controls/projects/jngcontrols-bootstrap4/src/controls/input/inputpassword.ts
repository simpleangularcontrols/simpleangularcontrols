import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { Component, forwardRef, Host, Injector } from '@angular/core';
import { NgFormularDirective } from '../form/form';
import { NgInputPasswordCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ng-inputpassword,ngInputPassword',
  templateUrl: './inputpassword.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputPasswordComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputPasswordComponent) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})
export class NgInputPasswordComponent extends NgInputPasswordCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }

}
