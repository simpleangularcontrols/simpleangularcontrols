import { Component, Host, forwardRef, Injector, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgMultilanguageInputCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ng-multilanguageinput,ngMultilanguageInput',
  templateUrl: './multilanguageinput.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgMultilanguageInputComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgMultilanguageInputComponent) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})

export class NgMultilanguageInputComponent extends NgMultilanguageInputCommon {

  constructor( @Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
