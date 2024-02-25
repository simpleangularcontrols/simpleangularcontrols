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
import { SacBrowserComponent } from '../../public-api';
import { SacButtonComponent } from '../buttons';
import { SacDialogComponent } from '../dialog';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
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
  standalone: true,
  imports: [
    NgClass,
    EditorComponent,
    FormsModule,
    NgIf,
    SacDialogComponent,
    SacButtonComponent,
    SacBrowserComponent,
    AsyncPipe,
    SacToControlWidthCssPipe,
    SacToLabelWidthCssPipe,
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
   * @returns boostrap5 has no overwrites
   */
  public overwriteDefaultSettings() {
    return {};
  }

  // #endregion Public Methods
}
