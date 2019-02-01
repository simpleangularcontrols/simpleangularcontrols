import { NgTinyMceCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';
import { Component, forwardRef, Host, Injector } from "@angular/core";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from "@angular/forms";

@Component({
  selector: 'ngTinymce',
  templateUrl: './tinymce.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgTinyMce },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgTinyMce), multi: true }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgTinyMce extends NgTinyMceCommon {

  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }

}
