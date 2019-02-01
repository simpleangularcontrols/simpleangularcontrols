import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from "@angular/forms";
import { Component, forwardRef, Host, Injector } from "@angular/core";
import { NgFormular } from '../form/form';
import { NgInputEmailCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ngInputEmail',
  templateUrl: './inputemail.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputEmail },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputEmail) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInputEmail extends NgInputEmailCommon {

  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }

}
