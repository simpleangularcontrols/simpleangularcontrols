import { Component, Host, forwardRef, Injector, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgMultilanguageInputAreaCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngMultilanguageInputArea',
  templateUrl: './multilanguageinputarea.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgMultilanguageInputArea },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgMultilanguageInputArea) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgMultilanguageInputArea extends NgMultilanguageInputAreaCommon {

  constructor( @Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
}
