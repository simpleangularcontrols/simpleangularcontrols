import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputAreaCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';

/**
 * Komponente für TextArea
 *
 * @example
 *
 * <ngInputArea name="ngInputArea" label="My Label" placeholder='i am input area' [isrequired]="true" customCssClass="myClass1 myClass3"></ngInputArea>
 *
 * @example
 *
 * <ngInputArea name="ngInputArea" label="My Label" height="150px" placeholder='i am input area' [islanguagespecific]="true">
 *
 */
@Component({
  selector: 'sac-inputarea',
  templateUrl: './inputarea.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacInputAreaComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacInputAreaComponent),
    },
  ],
})
export class SacInputAreaComponent extends SacInputAreaCommon {
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
