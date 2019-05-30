import { Component, forwardRef, ElementRef, Host, Injector } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from "@angular/forms";
import { NgFormular } from '../form/form';
import { NgTimeCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngTime',
  templateUrl: './time.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => NgTime) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgTime) }
  ]
})

export class NgTime extends NgTimeCommon {
  constructor(@Host() parent: NgFormular, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  } 
}
