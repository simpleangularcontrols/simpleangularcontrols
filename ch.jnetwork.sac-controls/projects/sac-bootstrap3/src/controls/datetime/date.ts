import {
  Component,
  ElementRef,
  Host,
  Injector,
  Optional,
  forwardRef,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
// Import Moment.JS
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { SacDateCommon } from '@simpleangularcontrols/sac-common';
import { IMaskDirective } from 'angular-imask';
import * as moment_ from 'moment';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacDateSelectorComponent } from './dateselector';
const moment = moment_['default'];

@Component({
  selector: 'sac-date',
  templateUrl: './date.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SacDateComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacDateComponent),
    },
  ],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    IMaskDirective,
    SacDateSelectorComponent,
    AsyncPipe,
    SacToLabelWidthCssPipe,
    SacToControlWidthCssPipe,
    SacToLabelHeightPipe,
    SacToControlHeightPipe,
  ],
})
export class SacDateComponent extends SacDateCommon {
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
