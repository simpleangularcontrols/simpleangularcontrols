import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import { SacFormDirective } from '../form/form';
import { SacInputEmailCommon } from '@simpleangularcontrols/sac-common';


@Component({
  selector: 'sac-inputemail',
  templateUrl: './inputemail.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputEmailComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacInputEmailComponent) }
  ]
})
export class SacInputEmailComponent extends SacInputEmailCommon {
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
