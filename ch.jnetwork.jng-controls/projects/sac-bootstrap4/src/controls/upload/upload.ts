import {
  Component,
  forwardRef,
  Host,
  Injector,
  NgZone,
  Renderer2,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgUploadSingleCommon } from '@jnetwork/sac-common';
import { NgFormularDirective } from '../form/form';

/**
 * Upload Komponten
 * @see https://github.com/kukhariev/ngx-uploadx/
 */
@Component({
  selector: 'sac-upload',
  templateUrl: './upload.html',
  styleUrls: ['./upload.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgUploadComponent },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgUploadComponent),
    },
  ],
})
export class NgUploadComponent extends NgUploadSingleCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param renderer Angular Rendering Engine
   * @param ngZone ngZone Referenz
   */
  constructor(
    @Host() parent: NgFormularDirective,
    injector: Injector,
    renderer: Renderer2,
    ngZone: NgZone
  ) {
    super(parent, injector, renderer, ngZone);
  }
}
