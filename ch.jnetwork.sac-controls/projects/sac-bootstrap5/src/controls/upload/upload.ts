import {
  Component,
  forwardRef,
  Host,
  Injector,
  NgZone,
  Optional,
  Renderer2,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacUploadSingleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

/**
 * Upload Komponten
 * @see https://github.com/kukhariev/ngx-uploadx/
 */
@Component({
  selector: 'sac-upload',
  templateUrl: './upload.html',
  styleUrls: ['./upload.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacUploadComponent },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacUploadComponent),
    },
  ],
})
export class SacUploadComponent extends SacUploadSingleCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param renderer Angular Rendering Engine
   * @param ngZone ngZone Referenz
   */
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector,
    renderer: Renderer2,
    ngZone: NgZone
  ) {
    super(parent, injector, renderer, ngZone);
  }
}
