import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import {
  Component,
  Host,
  Injector,
  NgZone,
  Optional,
  forwardRef,
} from '@angular/core';
import { FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacTinyMceCommon } from '@simpleangularcontrols/sac-common';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { SacButtonComponent } from '../buttons/button';
import { SacDialogComponent } from '../dialog/dialog';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';

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
  standalone: true,
  imports: [
    NgClass,
    EditorComponent,
    FormsModule,
    NgIf,
    SacDialogComponent,
    SacButtonComponent,
    AsyncPipe,
    SacToLabelWidthCssPipe,
    SacToControlWidthCssPipe,
    SacToLabelHeightPipe,
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
