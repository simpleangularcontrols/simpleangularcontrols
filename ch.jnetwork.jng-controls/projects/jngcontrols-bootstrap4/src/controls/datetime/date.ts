import {
  Component,
  ElementRef,
  forwardRef,
  Host,
  Injector,
} from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NgDateCommon } from '@jnetwork/jngcontrols-common';
// Import Moment.JS
import * as moment_ from 'moment';
import { NgFormularDirective } from '../form/form';

/**
 * Referenz auf Moment.JS
 */
const moment = moment_["default"];

/**
 * Komponente für Datumauswahl
 */
@Component({
  selector: 'sac-date',
  templateUrl: './date.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgDateComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgDateComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [
    { provide: ControlContainer, useExisting: NgFormularDirective },
  ],
})
export class NgDateComponent extends NgDateCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param _elementRef Referenz auf HTML DOM Element
   */
  constructor(
    @Host() parent: NgFormularDirective,
    injector: Injector,
    _elementRef: ElementRef
  ) {
    super(parent, injector, _elementRef);
  }
}
