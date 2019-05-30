import { Component, Host, forwardRef, Injector, Renderer2 } from '@angular/core';
import { NgUploadSingleCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ngUpload',
  templateUrl: './upload.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgUpload },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgUpload) }
  ]
})
export class NgUpload extends NgUploadSingleCommon {

  constructor( @Host() parent: NgFormular, injector: Injector, renderer: Renderer2) {
    super(parent, injector, renderer);
  }

}
