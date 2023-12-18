import { Component, forwardRef, ElementRef, Host, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgTimeCommon } from '@jnetwork/sac-common';

@Component({
  selector: 'sac-time',
  templateUrl: './time.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => NgTimeComponent) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgTimeComponent) }
  ]
})

export class NgTimeComponent extends NgTimeCommon {
  constructor( @Host() parent: NgFormularDirective, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }
}
