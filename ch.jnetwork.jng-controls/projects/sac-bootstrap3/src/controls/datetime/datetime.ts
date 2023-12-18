import { Component, forwardRef, ElementRef, Host, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacDateTimeCommon } from '@jnetwork/sac-common';


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
  constructor( @Host() parent: SacFormDirective, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }
}
