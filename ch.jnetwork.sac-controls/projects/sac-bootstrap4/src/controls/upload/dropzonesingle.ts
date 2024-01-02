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
import { SacDropzoneSingleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NgIf, NgClass, NgFor } from '@angular/common';

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
    ],
})
export class SacDropzoneSingleComponent
  extends SacDropzoneSingleCommon
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
