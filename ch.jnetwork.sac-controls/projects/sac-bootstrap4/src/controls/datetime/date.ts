import {
  Component,
  ElementRef,
  forwardRef,
  Host,
  Injector,
  Optional,
} from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SacDateCommon } from '@simpleangularcontrols/sac-common';
// Import Moment.JS
import * as moment_ from 'moment';
import { SacFormDirective } from '../form/form';
import { SacDateSelectorComponent } from './dateselector';
import { IMaskDirective } from 'angular-imask';
import { NgClass, NgIf } from '@angular/common';

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
            useExisting: forwardRef(() => SacDateComponent),
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacDateComponent),
        },
    ],
    // View Provider, damit das Formular an das Control gebunden werden kann
    viewProviders: [
        { provide: ControlContainer, useExisting: SacFormDirective },
    ],
    standalone: true,
    imports: [
        NgClass,
        IMaskDirective,
        NgIf,
        SacDateSelectorComponent,
    ],
})
export class SacDateComponent extends SacDateCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param _elementRef Referenz auf HTML DOM Element
   */
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector,
    _elementRef: ElementRef
  ) {
    super(parent, injector, _elementRef);
  }
}
