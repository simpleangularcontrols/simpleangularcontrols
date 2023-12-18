import { Component, forwardRef, Renderer2, ElementRef, Host, Optional, Directive, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { NgDropdownCommon, NgDropdownOptionCommon } from '@jnetwork/sac-common';

@Component({
  selector: 'sac-dropdown',
  templateUrl: './dropdown.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgDropdownComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgDropdownComponent) }
  ]
})
export class NgDropdownComponent extends NgDropdownCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector, _renderer: Renderer2, _elementRef: ElementRef) {
    super(parent, injector, _renderer, _elementRef);
  }
}

@Directive({ selector: 'option,[sacOption]' })
export class NgDropdownOptionDirective extends NgDropdownOptionCommon {

  constructor(_elementRef: ElementRef, _renderer: Renderer2, @Optional() @Host() dropdownList: NgDropdownComponent) {
    super(_elementRef, _renderer, dropdownList);
  }

}
