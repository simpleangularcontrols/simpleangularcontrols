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
import { SacFormDirective } from '../form/form';

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
   * @returns boostrap3 does not support file browser
   */
  overwriteDefaultSettings() {
    return { file_picker_types: undefined, file_picker_callback: undefined };
  }
}
