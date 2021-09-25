import { Component, forwardRef, Host, Injector } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NgInputIntegerCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

/**
 * Input Komponten für Ganzzahlen
 */
@Component({
  selector: 'ng-inputinteger,ngInputInteger',
  templateUrl: './inputinteger.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInputIntegerComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgInputIntegerComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [
    { provide: ControlContainer, useExisting: NgFormularDirective },
  ],
})
export class NgInputIntegerComponent extends NgInputIntegerCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
