import { Component, forwardRef, Host, ElementRef, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { SacFormDirective } from '../form/form';
// Import Moment.JS
import * as moment_ from 'moment';
import { SacDateCommon } from '@jnetwork/sac-common';
const moment = moment_["default"];


@Component({
  selector: 'sac-date',
  templateUrl: './date.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => SacDateComponent) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacDateComponent) }
  ]
})

export class SacDateComponent extends SacDateCommon {
  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }
}
