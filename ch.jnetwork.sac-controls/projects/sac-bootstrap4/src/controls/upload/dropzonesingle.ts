import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  Host,
  Injector,
  NgZone,
  OnInit,
  Optional,
  Renderer2,
  forwardRef,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacDropzoneSingleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';

/**
 * Dropzone Komponente für den Upload eines Files
 * @see https://github.com/kukhariev/ngx-uploadx/
 */
@Component({
  selector: 'sac-dropzonesingle',
  templateUrl: './dropzonesingle.html',
  styleUrls: ['./dropzone.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacDropzoneSingleComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacDropzoneSingleComponent),
    },
  ],
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgFor,
    AsyncPipe,
    SacToLabelWidthCssPipe,
    SacToControlWidthCssPipe,
    SacToLabelHeightPipe,
  ],
})
export class SacDropzoneSingleComponent
  extends SacDropzoneSingleCommon
  implements OnInit
{
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

  // #region Public Methods

  /**
   * Initialisiert das Control
   */
  public ngOnInit() {
    super.ngOnInit();
  }

  // #endregion Public Methods
}
