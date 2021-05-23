import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS, NgControl } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgInputCommon } from '@jnetwork/jngcontrols-common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ng-input,ngInput',
  templateUrl: './input.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputComponent) }
  ]
})

export class NgInputComponent extends NgInputCommon {

  constructor( @Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
