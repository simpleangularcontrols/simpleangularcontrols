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
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  SacDropdownCommon,
  SacDropdownOptionCommon,
} from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';

// #region Classes

@Component({
  selector: 'sac-dropdown',
  templateUrl: './dropdown.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacDropdownComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacDropdownComponent),
    },
  ],
})
export class SacDropdownComponent extends SacDropdownCommon {
  // #region Constructors

  /**
   * Constructor
   * @param formLayout SacFormLayout to define scoped layout settings
   * @param injector Injector for injecting services
   * @param renderer Angular rendering engine
   * @param elementRef Reference to html dom element
   */
  constructor(
    @Host() @Optional() formLayout: SacFormLayoutDirective,
    injector: Injector,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    super(formLayout, injector, renderer, elementRef);
  }

  // #endregion Constructors
}

@Directive({ selector: 'option,[sacOption]' })
export class SacDropdownOptionDirective extends SacDropdownOptionCommon {
  // #region Constructors

  /**
   * Konstruktor
   * @param elementRef Referenz auf HTML DOM Element
   * @param renderer Angular Rendering Engine
   * @param dropdownList Referenz auf DropDown Komponente
   */
  constructor(
    elementRef: ElementRef,
    renderer: Renderer2,
    @Optional() @Host() dropdownList: SacDropdownComponent
  ) {
    super(elementRef, renderer, dropdownList);
  }

  // #endregion Constructors
}

// #endregion Classes
