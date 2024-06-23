import {
  Component,
  forwardRef,
  Host,
  Injector,
  NgZone,
  Optional,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacTinyMceCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';

@Component({
  selector: 'sac-tinymce',
  templateUrl: './tinymce.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacTinyMceComponent,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SacTinyMceComponent),
      multi: true,
    },
  ],
})
export class SacTinyMceComponent extends SacTinyMceCommon {
  // #region Constructors

  /**
   * Constructor
   * @param formLayout SacFormLayout to define scoped layout settings
   * @param injector Injector for injecting services
   * @param ngZone ngZone to manage external javascripts
   */
  constructor(
    @Host() @Optional() formLayout: SacFormLayoutDirective,
    injector: Injector,
    ngZone: NgZone
  ) {
    super(formLayout, injector, ngZone);
  }

  // #endregion Constructors

  // #region Public Methods

  /**
   * overwrite tinymce defaults
   * @returns boostrap3 does not support file browser
   */
  public overwriteDefaultSettings() {
    return { file_picker_types: undefined, file_picker_callback: undefined };
  }

  // #endregion Public Methods
}
