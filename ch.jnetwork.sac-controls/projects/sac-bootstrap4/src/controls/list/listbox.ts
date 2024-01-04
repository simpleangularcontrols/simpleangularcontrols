import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  Directive,
  ElementRef,
  Host,
  Injector,
  Optional,
  Renderer2,
  forwardRef,
} from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  SacListboxCommon,
  SacListboxOptionCommon,
} from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

/**
 * Listbox Komponente
 */
@Component({
  selector: 'sac-listbox',
  templateUrl: './listbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacListboxComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacListboxComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    AsyncPipe,
    forwardRef(() => SacListboxOptionDirective),
  ],
})
export class SacListboxComponent extends SacListboxCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependiency Injection Service
   */
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector
  ) {
    super(parent, injector);
  }
}

/**
 * Option Item in Listbox
 */
@Directive({
  selector: '[sacOption],option',
  standalone: true,
})
export class SacListboxOptionDirective extends SacListboxOptionCommon {
  /**
   * Konstruktor
   * @param _elementRef Referenz auf DOM Element
   * @param _renderer Angular Rendering Engine
   * @param listbox Referenz auf Listbox Komponente
   */
  constructor(
    _elementRef: ElementRef,
    _renderer: Renderer2,
    @Optional() @Host() listbox: SacListboxComponent
  ) {
    super(_elementRef, _renderer, listbox);
  }
}
