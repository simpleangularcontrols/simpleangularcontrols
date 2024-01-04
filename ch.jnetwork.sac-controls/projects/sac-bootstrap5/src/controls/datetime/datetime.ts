import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  Host,
  Injector,
  Optional,
  forwardRef,
} from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SacDateTimeCommon } from '@simpleangularcontrols/sac-common';
import { IMaskDirective } from 'angular-imask';
import { SacFormDirective } from '../form/form';
import { SacDateSelectorComponent } from './dateselector';

/**
 * Date und Time Komponente
 */
@Component({
  selector: 'sac-datetime',
  templateUrl: './datetime.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SacDateTimeComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacDateTimeComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
  standalone: true,
  imports: [NgClass, IMaskDirective, NgIf, AsyncPipe, SacDateSelectorComponent],
})
export class SacDateTimeComponent extends SacDateTimeCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param _elementRef DOM Element Referenz
   */
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector,
    _elementRef: ElementRef
  ) {
    super(parent, injector, _elementRef);
  }
}
