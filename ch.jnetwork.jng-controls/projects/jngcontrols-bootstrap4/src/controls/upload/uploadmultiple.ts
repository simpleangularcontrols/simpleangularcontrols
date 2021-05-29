import { Component, forwardRef, Host, Injector, NgZone, Renderer2 } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgUploadMultipleCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ng-uploadmultiple,ngUploadMultiple',
  templateUrl: './uploadmultiple.html',
  styleUrls: ['./upload.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgUploadMultipleComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgUploadMultipleComponent) }
  ]
})
export class NgUploadMultipleComponent extends NgUploadMultipleCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector, renderer: Renderer2, ngZone: NgZone) {
    super(parent, injector, renderer, ngZone);
  }

}
