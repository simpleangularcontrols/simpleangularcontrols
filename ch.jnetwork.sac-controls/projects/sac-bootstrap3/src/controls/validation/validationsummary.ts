import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacValidationSummaryCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

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
  viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
})
export class SacValidationSummaryComponent extends SacValidationSummaryCommon {
  // #region Constructors

  /**
   * Constructor
   * @param formControl Instance of Form Component to receive invalid form controls
   * @param injector Injector for injecting services
   */
  constructor(
    @Host() @Optional() formControl: SacFormDirective,
    injector: Injector
  ) {
    super(formControl, injector);
  }

  // #endregion Constructors
}
