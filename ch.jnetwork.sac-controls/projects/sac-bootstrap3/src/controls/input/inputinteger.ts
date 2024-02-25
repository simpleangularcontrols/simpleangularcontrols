import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputIntegerCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';

@Component({
  selector: 'sac-inputinteger',
  templateUrl: './inputinteger.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacInputIntegerComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacInputIntegerComponent),
    },
  ],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    AsyncPipe,
    SacToLabelWidthCssPipe,
    SacToControlWidthCssPipe,
    SacToLabelHeightPipe,
    SacToControlHeightPipe,
  ],
})
export class SacInputIntegerComponent extends SacInputIntegerCommon {
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
