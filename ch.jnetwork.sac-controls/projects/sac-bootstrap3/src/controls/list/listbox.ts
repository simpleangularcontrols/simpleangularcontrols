import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { SacBaseSelectControl } from '../../common/baseselectcontrol';
// import { Validation } from '../../validation';
import {
  AsyncPipe,
  NgClass,
  NgFor,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import { SacListboxCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacDropdownOptionDirective } from './dropdown';

@Component({
  selector: 'sac-listbox',
  templateUrl: './listbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacListboxComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacListboxComponent),
    },
  ],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    FormsModule,
    SacDropdownOptionDirective,
    NgTemplateOutlet,
    AsyncPipe,
    SacToLabelWidthCssPipe,
    SacToControlWidthCssPipe,
  ],
})
export class SacListboxComponent extends SacListboxCommon {
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
