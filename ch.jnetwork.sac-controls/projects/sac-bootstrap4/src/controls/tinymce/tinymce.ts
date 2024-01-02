import {
  Component,
  forwardRef,
  Host,
  Injector,
  NgZone,
  Optional,
} from '@angular/core';
import {
  ControlContainer,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SacTinyMceCommon } from '@simpleangularcontrols/sac-common';
import { SacButtonComponent } from '../buttons/button';
import { SacFormDirective } from '../form/form';

import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { SacBrowserComponent } from '../../components/browser/browser';
import { SacDialogComponent } from '../dialog/dialog';

/**
 * TinyMCE Komponente
 */
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
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
  standalone: true,
  imports: [
    NgClass,
    EditorComponent,
    FormsModule,
    NgIf,
    SacDialogComponent,
    SacBrowserComponent,
    SacButtonComponent,
    AsyncPipe,
  ],
})
export class SacTinyMceComponent extends SacTinyMceCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param ngZone ngZone
   */
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector,
    ngZone: NgZone
  ) {
    super(parent, injector, ngZone);
  }

  /**
   * overwrite tinymce defaults
   * @returns boostrap4 has no overwrites
   */
  overwriteDefaultSettings() {
    return {};
  }
}
