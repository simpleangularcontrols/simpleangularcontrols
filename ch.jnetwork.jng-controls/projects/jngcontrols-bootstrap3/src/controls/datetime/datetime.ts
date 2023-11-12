import { Component, forwardRef, ElementRef, Host, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgDateTimeCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'sac-datetime',
  templateUrl: './datetime.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => NgDateTimeComponent) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgDateTimeComponent) }
  ]
})

export class NgDateTimeComponent extends NgDateTimeCommon {
  constructor( @Host() parent: NgFormularDirective, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }
}
