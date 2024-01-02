import { Component, Host, forwardRef, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS, FormsModule } from '@angular/forms';
// import { SacBaseSelectControl } from '../../common/baseselectcontrol';
import { SacFormDirective } from '../form/form';
// import { Validation } from '../../validation';
import { SacListboxCommon } from '@simpleangularcontrols/sac-common';
import { SacDropdownOptionDirective } from './dropdown';
import { NgClass, NgIf, NgFor, NgTemplateOutlet, AsyncPipe } from '@angular/common';


@Component({
    selector: 'sac-listbox',
    templateUrl: './listbox.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacListboxComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacListboxComponent) }
    ],
    standalone: true,
    imports: [NgClass, NgIf, NgFor, FormsModule, SacDropdownOptionDirective, NgTemplateOutlet, AsyncPipe]
})
export class SacListboxComponent extends SacListboxCommon {
  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
