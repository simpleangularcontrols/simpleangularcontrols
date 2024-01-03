import {
  Component,
  Host,
  Injector,
  NgZone,
  Optional,
  Renderer2,
  forwardRef,
} from '@angular/core';
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { SacUploadMultipleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NgClass, NgIf, NgFor, AsyncPipe } from '@angular/common';

// https://github.com/kukhariev/ngx-uploadx/

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
        NgClass,
        NgIf,
        NgFor,
        AsyncPipe,
    ],
})
export class SacUploadMultipleComponent extends SacUploadMultipleCommon {
  constructor(
    @Host() @Optional() parent: SacFormDirective,
    injector: Injector,
    renderer: Renderer2,
    ngZone: NgZone
  ) {
    super(parent, injector, renderer, ngZone);
  }
}
