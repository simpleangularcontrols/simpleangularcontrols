import { Component, Host, Injector, forwardRef, Output, EventEmitter, Input, Optional } from '@angular/core';
import { SacInputSearchCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';


@Component({
    selector: 'sac-inputsearch',
    templateUrl: './inputsearch.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputSearchComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacInputSearchComponent) }
    ],
    standalone: true,
    imports: [NgClass, NgIf]
})

export class SacInputSearchComponent extends SacInputSearchCommon {

  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }


}
