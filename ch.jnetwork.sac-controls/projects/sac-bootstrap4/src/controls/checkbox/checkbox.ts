import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { NgClass, NgIf } from '@angular/common';
import { SacCheckboxCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';

/**
 * Checkbox Kompontente
 */
@Component({
  selector: 'sac-checkbox',
  templateUrl: './checkbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacCheckboxComponent,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SacCheckboxComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [NgClass, NgIf, SacToLabelWidthCssPipe, SacToControlWidthCssPipe],
})
export class SacCheckboxComponent extends SacCheckboxCommon {
  // #region Constructors

  /**
   *
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
