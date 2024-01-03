import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import { SacFormDirective } from '../form/form';
import { SacInputCurrencyCommon } from '@simpleangularcontrols/sac-common';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';


@Component({
    selector: 'sac-inputcurrency',
    templateUrl: './inputcurrency.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputCurrencyComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacInputCurrencyComponent) }
    ],
    standalone: true,
    imports: [NgClass, NgIf, AsyncPipe]
})
export class SacInputCurrencyComponent extends SacInputCurrencyCommon {
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
