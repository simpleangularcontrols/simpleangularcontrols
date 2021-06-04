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
import { NgDropzoneMultipleCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ng-dropzonemultiple,ngDropzoneMultiple',
  templateUrl: './dropzonemultiple.html',
  styleUrls: ['./dropzone.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgDropzoneMultipleComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgDropzoneMultipleComponent),
    },
  ],
})
export class NgDropzoneMultipleComponent
  extends NgDropzoneMultipleCommon
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
