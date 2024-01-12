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

/**
 * TinyMCE Komponente
 */
@Component({
  selector: 'sac-tinymce',
  templateUrl: './tinymce.html',
  styleUrls: ['./tinymce.scss'],
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
   * @returns boostrap4 has no overwrites
   */
  public overwriteDefaultSettings() {
    return {};
  }

  // #endregion Public Methods
}
