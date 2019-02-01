import { Component, Host,  forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer,  NG_VALIDATORS } from '@angular/forms';
// import { NgBaseModelControl } from '../../common/basemodelcontrol';
import { NgCheckboxCommon } from '@jnetwork/jngcontrols-common';
import {  NgFormular } from '../form/form';


@Component({
  selector: 'ngCheckbox',
  templateUrl: './checkbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgCheckbox },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgCheckbox), multi: true }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgCheckbox extends NgCheckboxCommon {
  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
}

