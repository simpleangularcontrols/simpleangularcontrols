import { Component, forwardRef, ElementRef, Host, Injector } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from "@angular/forms";
import { NgFormular } from '../form/form';
import { NgDateTimeCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ngDateTime',
  templateUrl: './datetime.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => NgDateTime) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgDateTime) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgDateTime extends NgDateTimeCommon {
  constructor(@Host() parent: NgFormular, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  } 
}
