import { Component, forwardRef, ElementRef, Host, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacTimeCommon } from '@simpleangularcontrols/sac-common';
import { SacDateSelectorComponent } from './dateselector';
import { IMaskDirective } from 'angular-imask';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'sac-time',
    templateUrl: './time.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => SacTimeComponent) },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacTimeComponent) }
    ],
    standalone: true,
    imports: [NgClass, NgIf, IMaskDirective, SacDateSelectorComponent, AsyncPipe]
})

export class SacTimeComponent extends SacTimeCommon {
  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector, _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }
}
