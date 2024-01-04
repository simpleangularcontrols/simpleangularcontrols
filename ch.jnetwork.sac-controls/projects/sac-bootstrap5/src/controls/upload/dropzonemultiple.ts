import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  forwardRef,
  Host,
  Injector,
  NgZone,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacDropzoneMultipleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';

/**
 * Dropzone Komponente für mehrere Uploads
 * @see https://github.com/kukhariev/ngx-uploadx/
 */
@Component({
  selector: 'sac-dropzonemultiple',
  templateUrl: './dropzonemultiple.html',
  styleUrls: ['./dropzone.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacDropzoneMultipleComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacDropzoneMultipleComponent),
    },
  ],
  standalone: true,
  imports: [NgIf, NgClass, NgFor, AsyncPipe],
})
export class SacDropzoneMultipleComponent
  extends SacDropzoneMultipleCommon
  implements OnInit
{
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

  /**
   * Initialisiert das Control
   */
  ngOnInit() {
    super.ngOnInit();
  }
}
