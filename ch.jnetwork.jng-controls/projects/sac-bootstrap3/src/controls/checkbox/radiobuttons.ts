import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { SacRadiobuttonsCommon } from '@jnetwork/sac-common';
import { SacFormDirective } from '../form/form';

@Component({
  selector: 'sac-radiobuttons',
  templateUrl: './radiobuttons.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SacRadiobuttonsComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => SacRadiobuttonsComponent), multi: true }
  ]
})
export class SacRadiobuttonsComponent extends SacRadiobuttonsCommon {

  constructor(@Host() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }

}
