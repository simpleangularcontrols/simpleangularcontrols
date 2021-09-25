import { Component, forwardRef, Host, Injector } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgStaticLabelCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

/**
 * Komponente für statischen Text in einem Formular
 */
@Component({
  selector: 'ng-staticlabel,ngStaticLabel',
  templateUrl: './staticlabel.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgStaticLabelComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgStaticLabelComponent),
    },
  ],
})
export class NgStaticLabelComponent extends NgStaticLabelCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
