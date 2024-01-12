import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';

/**
 * Input Komponente
 */
@Component({
  selector: 'sac-input',
  templateUrl: './input.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputComponent },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacInputComponent),
    },
  ],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    AsyncPipe,
    SacToLabelWidthCssPipe,
    SacToControlWidthCssPipe,
  ],
})
export class SacInputComponent extends SacInputCommon {
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
