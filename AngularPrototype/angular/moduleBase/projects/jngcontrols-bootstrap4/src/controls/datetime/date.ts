import { Component, forwardRef, Host, ElementRef, Injector } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from "@angular/forms";
import { NgFormular } from '../form/form';
// Import Moment.JS
import * as moment_ from 'moment';
import { NgDateCommon } from '@jnetwork/jngcontrols-common';
const moment = moment_;


@Component({
  selector: 'ngDate',
  templateUrl: './date.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => NgDate) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgDate) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgDate extends NgDateCommon {
  constructor(@Host() parent: NgFormular, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }
}
