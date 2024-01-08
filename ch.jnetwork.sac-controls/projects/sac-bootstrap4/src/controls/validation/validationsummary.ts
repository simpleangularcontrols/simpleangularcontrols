import { Component, Host, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacValidationSummaryCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

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
})
export class SacValidationSummaryComponent extends SacValidationSummaryCommon {
  // #region Constructors

  /**
   * Constructor
   * @param formControl Instance of Form Component to receive invalid form controls
   * @param injector Injector for injecting services
   */
  constructor(
    @Host() @Optional() parentForm: SacFormDirective,
    injector: Injector
  ) {
    super(parentForm, injector);
  }

  // #endregion Constructors
}
