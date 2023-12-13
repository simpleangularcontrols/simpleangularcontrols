import {
  Component,
  forwardRef,
  Host,
  Injector,
  NgZone,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgDropzoneSingleCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

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
      useExisting: NgDropzoneSingleComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgDropzoneSingleComponent),
    },
  ],
})
export class NgDropzoneSingleComponent
  extends NgDropzoneSingleCommon
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
    @Host() parent: NgFormularDirective,
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
