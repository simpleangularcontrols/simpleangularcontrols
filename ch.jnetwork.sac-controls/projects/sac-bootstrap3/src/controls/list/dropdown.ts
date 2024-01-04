import {
  AsyncPipe,
  NgClass,
  NgFor,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
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
import { FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  SacDropdownCommon,
  SacDropdownOptionCommon,
} from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

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
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    FormsModule,
    forwardRef(() => SacDropdownOptionDirective),
    NgFor,
    NgTemplateOutlet,
    AsyncPipe,
  ],
})
export class SacDropdownComponent extends SacDropdownCommon {
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector,
    _renderer: Renderer2,
    _elementRef: ElementRef
  ) {
    super(parent, injector, _renderer, _elementRef);
  }
}

@Directive({
  selector: 'option,[sacOption]',
  standalone: true,
})
export class SacDropdownOptionDirective extends SacDropdownOptionCommon {
  constructor(
    _elementRef: ElementRef,
    _renderer: Renderer2,
    @Optional() @Host() dropdownList: SacDropdownComponent
  ) {
    super(_elementRef, _renderer, dropdownList);
  }
}
