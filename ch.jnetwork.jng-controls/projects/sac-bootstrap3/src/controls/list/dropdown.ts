import { Component, forwardRef, Renderer2, ElementRef, Host, Optional, Directive, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacDropdownCommon, SacDropdownOptionCommon } from '@jnetwork/sac-common';

@Component({
  selector: 'sac-dropdown',
  templateUrl: './dropdown.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacDropdownComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacDropdownComponent) }
  ]
})
export class SacDropdownComponent extends SacDropdownCommon {

  constructor(@Host() parent: SacFormDirective, injector: Injector, _renderer: Renderer2, _elementRef: ElementRef) {
    super(parent, injector, _renderer, _elementRef);
  }
}

@Directive({ selector: 'option,[sacOption]' })
export class SacDropdownOptionDirective extends SacDropdownOptionCommon {

  constructor(_elementRef: ElementRef, _renderer: Renderer2, @Optional() @Host() dropdownList: SacDropdownComponent) {
    super(_elementRef, _renderer, dropdownList);
  }

}
