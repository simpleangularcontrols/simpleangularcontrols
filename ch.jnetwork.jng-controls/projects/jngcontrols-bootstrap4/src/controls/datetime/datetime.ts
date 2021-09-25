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
import { NgDateTimeCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

/**
 * Date und Time Komponente
 */
@Component({
  selector: 'ng-datetime,ngDateTime',
  templateUrl: './datetime.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgDateTimeComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgDateTimeComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [
    { provide: ControlContainer, useExisting: NgFormularDirective },
  ],
})
export class NgDateTimeComponent extends NgDateTimeCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param _elementRef DOM Element Referenz
   */
  constructor(
    @Host() parent: NgFormularDirective,
    injector: Injector,
    _elementRef: ElementRef
  ) {
    super(parent, injector, _elementRef);
  }
}
