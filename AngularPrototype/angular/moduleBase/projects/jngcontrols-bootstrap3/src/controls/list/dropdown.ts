import { Component, forwardRef, Renderer2, ElementRef, Host, Optional, Directive, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgDropdownCommon, NgDropdownOptionCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngDropdown',
  templateUrl: './dropdown.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgDropdown },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgDropdown) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgDropdown extends NgDropdownCommon {

  constructor(@Host() parent: NgFormular, injector: Injector, _renderer: Renderer2, _elementRef: ElementRef) {
    super(parent, injector, _renderer, _elementRef);
  }
}

@Directive({ selector: 'option' })
export class NgDropdownOption extends NgDropdownOptionCommon {

  constructor(_elementRef: ElementRef, _renderer: Renderer2, @Optional() @Host() dropdownList: NgDropdown) {
    super(_elementRef, _renderer, dropdownList)
  }

}
