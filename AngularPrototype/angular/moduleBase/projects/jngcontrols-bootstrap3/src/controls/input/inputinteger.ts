import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgInputIntegerCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ng-inputinteger,ngInputInteger',
  templateUrl: './inputinteger.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputIntegerComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputIntegerComponent) }
  ]
})
export class NgInputIntegerComponent extends NgInputIntegerCommon {
  constructor( @Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
