import { Component, forwardRef, ElementRef, Host, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacDateTimeCommon } from '@simpleangularcontrols/sac-common';


@Component({
  selector: 'sac-datetime',
  templateUrl: './datetime.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => SacDateTimeComponent) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacDateTimeComponent) }
  ]
})

export class SacDateTimeComponent extends SacDateTimeCommon {
  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }
}
