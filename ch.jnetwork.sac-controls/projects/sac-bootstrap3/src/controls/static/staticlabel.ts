import { Component, Host, forwardRef, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacStaticLabelCommon } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'sac-staticlabel',
  templateUrl: './staticlabel.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacStaticLabelComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacStaticLabelComponent) }
  ]
})

export class SacStaticLabelComponent extends SacStaticLabelCommon {

  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }

}
