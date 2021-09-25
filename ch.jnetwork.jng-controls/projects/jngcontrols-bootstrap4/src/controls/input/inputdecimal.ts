import { Component, forwardRef, Host, Injector } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NgInputDecimalCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

/**
 * Input Komponente für Zahlen
 */
@Component({
  selector: 'ng-inputdecimal,ngInputDecimal',
  templateUrl: './inputdecimal.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInputDecimalComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgInputDecimalComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [
    { provide: ControlContainer, useExisting: NgFormularDirective },
  ],
})
export class NgInputDecimalComponent extends NgInputDecimalCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
