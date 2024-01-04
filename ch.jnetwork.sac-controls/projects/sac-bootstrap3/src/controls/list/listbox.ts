import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import {
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
// import { SacBaseSelectControl } from '../../common/baseselectcontrol';
import { SacFormDirective } from '../form/form';
// import { Validation } from '../../validation';
import {
  AsyncPipe,
  NgClass,
  NgFor,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import { SacListboxCommon } from '@simpleangularcontrols/sac-common';
import { SacDropdownOptionDirective } from './dropdown';

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
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    FormsModule,
    SacDropdownOptionDirective,
    NgTemplateOutlet,
    AsyncPipe,
  ],
})
export class SacListboxComponent extends SacListboxCommon {
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector
  ) {
    super(parent, injector);
  }
}
