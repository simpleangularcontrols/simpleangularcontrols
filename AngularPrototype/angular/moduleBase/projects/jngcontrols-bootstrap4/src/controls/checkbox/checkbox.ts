import { Component, Host,  forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
// import { NgBaseModelControl } from '../../common/basemodelcontrol';
import { NgCheckboxCommon } from '@jnetwork/jngcontrols-common';
import {  NgFormularDirective } from '../form/form';


@Component({
  selector: 'ng-checkbox,ngCheckbox',
  templateUrl: './checkbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgCheckboxComponent },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgCheckboxComponent), multi: true }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})
export class NgCheckboxComponent extends NgCheckboxCommon {
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}

