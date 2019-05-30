import { ControlContainer, NG_VALUE_ACCESSOR, NG_VALIDATORS } from "@angular/forms";
import { NgFormular } from '../form/form';
import { Component, forwardRef, Host, Injector } from "@angular/core";
import { NgInputAreaCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngInputArea',
  templateUrl: './inputarea.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputArea },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputArea) }
  ]
})

export class NgInputArea extends NgInputAreaCommon {
 
  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
  
}
