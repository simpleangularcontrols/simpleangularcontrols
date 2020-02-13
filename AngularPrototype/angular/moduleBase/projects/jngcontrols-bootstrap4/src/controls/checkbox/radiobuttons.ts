import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgRadiobuttonsCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ng-radiobuttons,ngRadiobuttons',
  templateUrl: './radiobuttons.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgRadiobuttonsComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRadiobuttonsComponent), multi: true }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})
export class NgRadiobuttonsComponent extends NgRadiobuttonsCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }

}
