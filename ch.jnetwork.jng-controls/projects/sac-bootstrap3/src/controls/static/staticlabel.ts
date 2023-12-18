import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgStaticLabelCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'sac-staticlabel',
  templateUrl: './staticlabel.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgStaticLabelComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgStaticLabelComponent) }
  ]
})

export class NgStaticLabelComponent extends NgStaticLabelCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }

}
