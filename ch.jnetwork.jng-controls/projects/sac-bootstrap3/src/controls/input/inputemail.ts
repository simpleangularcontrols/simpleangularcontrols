import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { Component, forwardRef, Host, Injector } from '@angular/core';
import { NgFormularDirective } from '../form/form';
import { NgInputEmailCommon } from '@jnetwork/sac-common';


@Component({
  selector: 'sac-inputemail',
  templateUrl: './inputemail.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputEmailComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputEmailComponent) }
  ]
})
export class NgInputEmailComponent extends NgInputEmailCommon {
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
