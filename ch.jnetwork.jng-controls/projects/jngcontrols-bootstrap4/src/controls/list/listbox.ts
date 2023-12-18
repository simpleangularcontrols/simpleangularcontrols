import {
  Component,
  Host,
  forwardRef,
  Injector,
  Directive,
  Renderer2,
  ElementRef,
  Optional,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlContainer,
  NG_VALIDATORS,
} from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import {
  NgListboxCommon,
  NgListboxOptionCommon,
} from '@jnetwork/jngcontrols-common';

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
      useExisting: NgListboxComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgListboxComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [
    { provide: ControlContainer, useExisting: NgFormularDirective },
  ],
})
export class NgListboxComponent extends NgListboxCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependiency Injection Service
   */
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}

/**
 * Option Item in Listbox
 */
@Directive({ selector: '[sacOption],option' })
export class NgListboxOptionDirective extends NgListboxOptionCommon {
  /**
   * Konstruktor
   * @param _elementRef Referenz auf DOM Element
   * @param _renderer Angular Rendering Engine
   * @param listbox Referenz auf Listbox Komponente
   */
  constructor(
    _elementRef: ElementRef,
    _renderer: Renderer2,
    @Optional() @Host() listbox: NgListboxComponent
  ) {
    super(_elementRef, _renderer, listbox);
  }
}
