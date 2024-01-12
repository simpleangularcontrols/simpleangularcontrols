import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputDecimalCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';

/**
 * Input Komponente für Zahlen
 */
@Component({
  selector: 'sac-inputdecimal',
  templateUrl: './inputdecimal.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SacInputDecimalComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacInputDecimalComponent),
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
export class SacInputDecimalComponent extends SacInputDecimalCommon {
  // #region Constructors

  /**
   * Constructor
   * @param formlayout SacFormLayoutCommon to define scoped layout settings
   * @param injector Injector for injecting services
   */
  constructor(
    @Host() @Optional() formlayout: SacFormLayoutDirective,
    injector: Injector
  ) {
    super(formlayout, injector);
  }

  // #endregion Constructors
}
