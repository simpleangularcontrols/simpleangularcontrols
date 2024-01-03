import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputSearchCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NgIf, NgClass } from '@angular/common';

/**
 * Input Box für Suche
 */
@Component({
    selector: 'sac-inputsearch',
    templateUrl: './inputsearch.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacInputSearchComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacInputSearchComponent),
        },
    ],
    standalone: true,
    imports: [NgIf, NgClass],
})
export class SacInputSearchComponent extends SacInputSearchCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
