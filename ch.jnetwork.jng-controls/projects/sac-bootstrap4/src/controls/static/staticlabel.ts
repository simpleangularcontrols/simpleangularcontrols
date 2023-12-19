import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacStaticLabelCommon } from '@jnetwork/sac-common';
import { SacFormDirective } from '../form/form';

/**
 * Komponente für statischen Text in einem Formular
 */
@Component({
  selector: 'sac-staticlabel',
  templateUrl: './staticlabel.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacStaticLabelComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacStaticLabelComponent),
    },
  ],
})
export class SacStaticLabelComponent extends SacStaticLabelCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
