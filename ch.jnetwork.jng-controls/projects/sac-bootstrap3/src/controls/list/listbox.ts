import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
// import { SacBaseSelectControl } from '../../common/baseselectcontrol';
import { SacFormDirective } from '../form/form';
// import { Validation } from '../../validation';
import { SacListboxCommon } from '@jnetwork/sac-common';


@Component({
  selector: 'sac-listbox',
  templateUrl: './listbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacListboxComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacListboxComponent) }
  ]
})
export class SacListboxComponent extends SacListboxCommon {
  constructor( @Host() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
