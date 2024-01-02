import { Component, Host, forwardRef, Injector, Renderer2, Optional } from '@angular/core';
import { SacUploadSingleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgZone } from '@angular/core';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
    selector: 'sac-upload',
    templateUrl: './upload.html',
    styleUrls: ['./upload.scss'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacUploadComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacUploadComponent) }
    ],
    standalone: true,
    imports: [NgClass, NgIf, AsyncPipe]
})
export class SacUploadComponent extends SacUploadSingleCommon {

  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector, renderer: Renderer2, ngZone: NgZone) {
    super(parent, injector, renderer, ngZone);
  }

}
