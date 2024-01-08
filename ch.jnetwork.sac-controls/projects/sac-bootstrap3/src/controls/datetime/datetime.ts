import {
  Component,
  ElementRef,
  Host,
  Injector,
  Optional,
  forwardRef,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacDateTimeCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';

@Component({
  selector: 'sac-datetime',
  templateUrl: './datetime.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SacDateTimeComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacDateTimeComponent),
    },
  ],
})
export class SacDateTimeComponent extends SacDateTimeCommon {
  // #region Constructors

  /**
   * Constructor
   * @param formLayout SacFormLayout to define scoped layout settings
   * @param injector Injector for injecting services
   * @param elementRef Reference to html dom element
   */
  constructor(
    @Host() @Optional() formLayout: SacFormLayoutDirective,
    injector: Injector,
    elementRef: ElementRef
  ) {
    super(formLayout, injector, elementRef);
  }

  // #endregion Constructors
}
