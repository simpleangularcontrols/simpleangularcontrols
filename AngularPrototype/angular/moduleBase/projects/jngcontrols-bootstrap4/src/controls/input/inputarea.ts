import { ControlContainer, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { Component, forwardRef, Host, Injector } from '@angular/core';
import { NgInputAreaCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ng-inputarea,ngInputArea',
  templateUrl: './inputarea.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputAreaComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputAreaComponent) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})

export class NgInputAreaComponent extends NgInputAreaCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }

}
