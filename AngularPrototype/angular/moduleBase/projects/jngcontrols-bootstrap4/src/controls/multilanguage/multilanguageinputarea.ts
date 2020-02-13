import { Component, Host, forwardRef, Injector, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgMultilanguageInputAreaCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ng-multilanguageinputarea,ngMultilanguageInputArea',
  templateUrl: './multilanguageinputarea.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgMultilanguageInputAreaComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgMultilanguageInputAreaComponent) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})

export class NgMultilanguageInputAreaComponent extends NgMultilanguageInputAreaCommon {

  constructor( @Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
