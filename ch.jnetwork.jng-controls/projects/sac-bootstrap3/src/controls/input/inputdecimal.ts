import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS} from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacInputDecimalCommon } from '@jnetwork/sac-common';

@Component({
  selector: 'sac-inputdecimal',
  templateUrl: './inputdecimal.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputDecimalComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacInputDecimalComponent) }
  ]
})
export class SacInputDecimalComponent extends SacInputDecimalCommon {
  constructor(@Host() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
