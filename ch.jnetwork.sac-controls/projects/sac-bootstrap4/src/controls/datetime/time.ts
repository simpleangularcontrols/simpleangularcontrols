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
import { SacTimeCommon } from '@simpleangularcontrols/sac-common';
import { IMaskDirective } from 'angular-imask';
import { SacFormDirective } from '../form/form';
import { SacDateSelectorComponent } from './dateselector';

/**
 * Time Auswahl Komponente
 */
@Component({
  selector: 'sac-time',
  templateUrl: './time.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SacTimeComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacTimeComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
  standalone: true,
  imports: [NgClass, IMaskDirective, NgIf, AsyncPipe, SacDateSelectorComponent],
})
export class SacTimeComponent extends SacTimeCommon {
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
