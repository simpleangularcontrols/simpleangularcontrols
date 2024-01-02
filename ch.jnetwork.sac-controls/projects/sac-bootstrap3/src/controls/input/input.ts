import { Component, Host, forwardRef, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS, NgControl } from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacInputCommon } from '@simpleangularcontrols/sac-common';
import { NgForm } from '@angular/forms';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'sac-input',
    templateUrl: './input.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacInputComponent) }
    ],
    standalone: true,
    imports: [NgClass, NgIf, AsyncPipe]
})

export class SacInputComponent extends SacInputCommon {

  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
