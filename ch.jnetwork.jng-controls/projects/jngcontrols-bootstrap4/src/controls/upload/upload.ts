import { Component, forwardRef, Host, Injector, NgZone, Renderer2 } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgUploadSingleCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ng-upload,ngUpload',
  templateUrl: './upload.html',
  styleUrls: ['./upload.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgUploadComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgUploadComponent) }
  ]
})
export class NgUploadComponent extends NgUploadSingleCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector, renderer: Renderer2, ngZone: NgZone) {
    super(parent, injector, renderer, ngZone);
  }

}
