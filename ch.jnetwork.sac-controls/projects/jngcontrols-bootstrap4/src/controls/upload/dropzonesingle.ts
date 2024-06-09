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

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ng-dropzonesingle,ngDropzoneSingle',
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
