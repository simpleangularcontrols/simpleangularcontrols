import { Component, Host, Injector, Optional } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacValidationSummaryCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

/**
 * Validation Summary Kompontente
 */
@Component({
    selector: 'sac-validationsummary',
    templateUrl: './validationsummary.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacValidationSummaryComponent,
        },
    ],
    // View Provider, damit das Formular an das Control gebunden werden kann
    viewProviders: [
        { provide: ControlContainer, useExisting: SacFormDirective },
    ],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        AsyncPipe,
    ],
})
export class SacValidationSummaryComponent extends SacValidationSummaryCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
