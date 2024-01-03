import { Component, Host, forwardRef, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacInputIntegerCommon } from '@simpleangularcontrols/sac-common';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'sac-inputinteger',
    templateUrl: './inputinteger.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputIntegerComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacInputIntegerComponent) }
    ],
    standalone: true,
    imports: [NgClass, NgIf, AsyncPipe]
})
export class SacInputIntegerComponent extends SacInputIntegerCommon {
  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
