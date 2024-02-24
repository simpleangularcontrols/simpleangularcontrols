import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { SacUploadMultipleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';

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
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgFor,
    AsyncPipe,
    SacToControlWidthCssPipe,
    SacToLabelWidthCssPipe,
    SacToLabelHeightPipe,
  ],
})
export class SacUploadMultipleComponent extends SacUploadMultipleCommon {
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
