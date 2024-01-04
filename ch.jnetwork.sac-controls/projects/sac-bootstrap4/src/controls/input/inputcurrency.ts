import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SacInputCurrencyCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';

/**
 * Input Control für Währungen
 */
@Component({
  selector: 'sac-inputcurrency',
  templateUrl: './inputcurrency.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SacInputCurrencyComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacInputCurrencyComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
  standalone: true,
  imports: [NgClass, NgIf, AsyncPipe],
})
export class SacInputCurrencyComponent extends SacInputCurrencyCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector
  ) {
    super(parent, injector);
  }
}
