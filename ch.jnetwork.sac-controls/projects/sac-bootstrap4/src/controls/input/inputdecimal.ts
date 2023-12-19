import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SacInputDecimalCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

/**
 * Input Komponente für Zahlen
 */
@Component({
  selector: 'sac-inputdecimal',
  templateUrl: './inputdecimal.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SacInputDecimalComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacInputDecimalComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [
    { provide: ControlContainer, useExisting: SacFormDirective },
  ],
})
export class SacInputDecimalComponent extends SacInputDecimalCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
