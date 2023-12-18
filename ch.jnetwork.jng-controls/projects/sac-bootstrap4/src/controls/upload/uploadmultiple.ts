import {
  Component,
  forwardRef,
  Host,
  Injector,
  NgZone,
  Renderer2,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgUploadMultipleCommon } from '@jnetwork/sac-common';
import { NgFormularDirective } from '../form/form';

/**
 * Upload Komponente für den Upload mehrer Files
 * @see https://github.com/kukhariev/ngx-uploadx/
 */
@Component({
  selector: 'sac-uploadmultiple',
  templateUrl: './uploadmultiple.html',
  styleUrls: ['./upload.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgUploadMultipleComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgUploadMultipleComponent),
    },
  ],
})
export class NgUploadMultipleComponent extends NgUploadMultipleCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param renderer Angular Rendering Engine
   * @param ngZone ngZone
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
