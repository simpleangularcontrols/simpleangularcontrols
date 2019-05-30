import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS, NgControl } from '@angular/forms';
// import { NgBaseModelControl } from '../../common/basemodelcontrol';
// import { NgInputBase } from '../../common/baseinputcontrol';
import { NgFormular } from '../form/form';
// import { Validation } from '../../validation';
// import { error } from 'util';
import { NgInputCommon } from '@jnetwork/jngcontrols-common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngInput',
  templateUrl: './input.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInput },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInput) }
  ]
})

export class NgInput extends NgInputCommon {

  constructor( @Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }
}
