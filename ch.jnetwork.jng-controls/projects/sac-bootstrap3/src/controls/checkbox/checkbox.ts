import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import {SacCheckboxCommon } from '@jnetwork/sac-common';
import {SacFormDirective } from '../form/form';


@Component({
  selector: 'sac-checkbox',
  templateUrl: './checkbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting:SacCheckboxComponent },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() =>SacCheckboxComponent), multi: true }
  ]
})
export class SacCheckboxComponent extends SacCheckboxCommon {
  constructor(@Host() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}

