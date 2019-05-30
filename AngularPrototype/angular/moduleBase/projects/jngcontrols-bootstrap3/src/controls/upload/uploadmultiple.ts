import { Component, Host, forwardRef, Injector, Renderer2 } from '@angular/core';
import { NgUploadMultipleCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ngUploadMultiple',
  templateUrl: './uploadmultiple.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgUploadMultiple },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgUploadMultiple) }
  ]
})
export class NgUploadMultiple extends NgUploadMultipleCommon {

  constructor( @Host() parent: NgFormular, injector: Injector, renderer: Renderer2) {
    super(parent, injector, renderer);
  }

}
