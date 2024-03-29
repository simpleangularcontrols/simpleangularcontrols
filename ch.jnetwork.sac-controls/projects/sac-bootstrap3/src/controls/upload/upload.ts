import {
  Component,
  Host,
  Injector,
  NgZone,
  Optional,
  Renderer2,
  forwardRef,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacUploadSingleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'sac-upload',
  templateUrl: './upload.html',
  styleUrls: ['./upload.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacUploadComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacUploadComponent),
    },
  ],
})
export class SacUploadComponent extends SacUploadSingleCommon {
  // #region Constructors

  /**
   * Constructor
   * @param formLayout SacFormLayout to define scoped layout settings
   * @param injector Injector for injecting services
   * @param renderer Angular rendering engine
   * @param ngZone ngZone to manage external javascripts
   */
  constructor(
    @Host() @Optional() formLayout: SacFormLayoutDirective,
    injector: Injector,
    renderer: Renderer2,
    ngZone: NgZone
  ) {
    super(formLayout, injector, renderer, ngZone);
  }

  // #endregion Constructors
}
