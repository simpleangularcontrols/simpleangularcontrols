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
import { SacFormDirective } from '../form/form';
import {
  SacListboxCommon,
  SacListboxOptionCommon,
} from '@simpleangularcontrols/sac-common';
import { NgClass, NgIf, NgFor } from '@angular/common';

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
    viewProviders: [
        { provide: ControlContainer, useExisting: SacFormDirective },
    ],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgFor,
        forwardRef(() => SacListboxOptionDirective),
    ],
})
export class SacListboxComponent extends SacListboxCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependiency Injection Service
   */
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}

/**
 * Option Item in Listbox
 */
@Directive({
    selector: '[sacOption],option',
    standalone: true
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
