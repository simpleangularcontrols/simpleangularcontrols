import { Component, forwardRef, Host, Injector, NgZone } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NgTinyMceCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

/**
 * TinyMCE Komponente
 */
@Component({
  selector: 'ng-tinymce,ngTinymce',
  templateUrl: './tinymce.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgTinyMceComponent,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NgTinyMceComponent),
      multi: true,
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [
    { provide: ControlContainer, useExisting: NgFormularDirective },
  ],
})
export class NgTinyMceComponent extends NgTinyMceCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param ngZone ngZone
   */
  constructor(
    @Host() parent: NgFormularDirective,
    injector: Injector,
    ngZone: NgZone
  ) {
    super(parent, injector, ngZone);
  }
}
