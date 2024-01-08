import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacStaticLabelCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';

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
  // #region Constructors

  /**
   * Constructor
   * @param formLayout SacFormLayout to define scoped layout settings
   * @param injector Injector for injecting services
   */
  constructor(
    @Host() @Optional() formLayout: SacFormLayoutDirective,
    injector: Injector
  ) {
    super(formLayout, injector);
  }

  // #endregion Constructors
}
