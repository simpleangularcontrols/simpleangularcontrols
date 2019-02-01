import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
// import { NgBaseSelectControl } from '../../common/baseselectcontrol';
import { NgFormular } from '../form/form';
// import { Validation } from '../../validation';
import { NgListboxCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ngListbox',
  templateUrl: './listbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgListbox },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgListbox) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgListbox extends NgListboxCommon{
  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
}
