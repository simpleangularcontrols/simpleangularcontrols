import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SacInputPasswordCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

/**
 * Input Box für Passwörter
 */
@Component({
  selector: 'sac-inputpassword',
  templateUrl: './inputpassword.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacInputPasswordComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacInputPasswordComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
  standalone: true,
  imports: [NgClass, NgIf, AsyncPipe],
})
export class SacInputPasswordComponent extends SacInputPasswordCommon {
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
