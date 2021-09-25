import { Component, forwardRef, Host, Injector } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgInputSearchCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

/**
 * Input Box für Suche
 */
@Component({
  selector: 'ng-inputsearch,ngInputSearch',
  templateUrl: './inputsearch.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInputSearchComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgInputSearchComponent),
    },
  ],
})
export class NgInputSearchComponent extends NgInputSearchCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
