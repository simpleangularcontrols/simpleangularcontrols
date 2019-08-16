import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgStaticLabelCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngStaticLabel',
  templateUrl: './staticlabel.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgStaticLabel },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgStaticLabel) }
  ]
})

export class NgStaticLabel extends NgStaticLabelCommon {

  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }

}
