import { Component, forwardRef, Host, ElementRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
// Import Moment.JS
import * as moment_ from 'moment';
import { NgDateCommon } from '@jnetwork/jngcontrols-common';
const moment = moment_["default"];


@Component({
  selector: 'sac-date',
  templateUrl: './date.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => NgDateComponent) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgDateComponent) }
  ]
})

export class NgDateComponent extends NgDateCommon {
  constructor( @Host() parent: NgFormularDirective, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }
}
