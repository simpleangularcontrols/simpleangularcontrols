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
import { SacUploadMultipleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

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
      useExisting: SacUploadMultipleComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacUploadMultipleComponent),
    },
  ],
})
export class SacUploadMultipleComponent extends SacUploadMultipleCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   * @param renderer Angular Rendering Engine
   * @param ngZone ngZone
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
