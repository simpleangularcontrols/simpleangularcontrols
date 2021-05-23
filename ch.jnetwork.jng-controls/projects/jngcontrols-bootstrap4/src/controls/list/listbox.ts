import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgListboxCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ng-listbox,ngListbox',
  templateUrl: './listbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgListboxComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgListboxComponent) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})
export class NgListboxComponent extends NgListboxCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }

}
