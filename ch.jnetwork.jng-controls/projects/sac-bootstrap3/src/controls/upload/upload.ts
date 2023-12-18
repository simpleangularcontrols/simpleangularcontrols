import { Component, Host, forwardRef, Injector, Renderer2 } from '@angular/core';
import { NgUploadSingleCommon } from '@jnetwork/sac-common';
import { NgFormularDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgZone } from '@angular/core';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'sac-upload',
  templateUrl: './upload.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgUploadComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgUploadComponent) }
  ]
})
export class NgUploadComponent extends NgUploadSingleCommon {

  constructor( @Host() parent: NgFormularDirective, injector: Injector, renderer: Renderer2, ngZone: NgZone) {
    super(parent, injector, renderer, ngZone);
  }

}
