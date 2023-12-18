import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
// import { NgBaseSelectControl } from '../../common/baseselectcontrol';
import { NgFormularDirective } from '../form/form';
// import { Validation } from '../../validation';
import { NgListboxCommon } from '@jnetwork/sac-common';


@Component({
  selector: 'sac-listbox',
  templateUrl: './listbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgListboxComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgListboxComponent) }
  ]
})
export class NgListboxComponent extends NgListboxCommon {
  constructor( @Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
