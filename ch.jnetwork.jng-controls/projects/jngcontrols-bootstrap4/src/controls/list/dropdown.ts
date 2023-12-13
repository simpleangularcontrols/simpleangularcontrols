import {
  Component,
  Directive,
  ElementRef,
  forwardRef,
  Host,
  Injector,
  Optional,
  Renderer2,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  NgDropdownCommon,
  NgDropdownOptionCommon,
} from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

/**
 * Dropdown Komponente
 */
@Component({
  selector: 'sac-dropdown',
  templateUrl: './dropdown.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgDropdownComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgDropdownComponent),
    },
  ],
})
export class NgDropdownComponent extends NgDropdownCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Dependency Injection Service
   * @param _renderer Angular Rendering Engine
   * @param _elementRef Referenz auf HTML DOM Element
   */
  constructor(
    @Host() parent: NgFormularDirective,
    injector: Injector,
    _renderer: Renderer2,
    _elementRef: ElementRef
  ) {
    super(parent, injector, _renderer, _elementRef);
  }
}

/**
 * Direktive für Dropdown Option List
 */
@Directive({ selector: '[sac-option],option' })
export class NgDropdownOptionDirective extends NgDropdownOptionCommon {
  /**
   * Konstruktor
   * @param _elementRef Referenz auf HTML DOM Element
   * @param _renderer Angular Rendering Engine
   * @param dropdownList Referenz auf DropDown Komponente
   */
  constructor(
    _elementRef: ElementRef,
    _renderer: Renderer2,
    @Optional() @Host() dropdownList: NgDropdownComponent
  ) {
    super(_elementRef, _renderer, dropdownList);
  }
}
