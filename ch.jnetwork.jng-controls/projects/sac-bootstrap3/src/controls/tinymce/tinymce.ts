import { SacTinyMceCommon } from '@jnetwork/sac-common';
import { SacFormDirective } from '../form/form';
import { Component, forwardRef, Host, Injector, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';

@Component({
  selector: 'sac-tinymce',
  templateUrl: './tinymce.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacTinyMceComponent },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => SacTinyMceComponent), multi: true }
  ]
})
export class SacTinyMceComponent extends SacTinyMceCommon {
 /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param ngZone ngZone
   */
  constructor(
    @Host() parent: SacFormDirective,
    injector: Injector,
    ngZone: NgZone
  ) {
    super(parent, injector, ngZone);
  }
}
