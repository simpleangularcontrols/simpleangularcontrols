import { Component, Host, forwardRef, Injector, Renderer2 } from '@angular/core';
import { NgUploadMultipleCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgZone } from '@angular/core';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ng-uploadmultiple,ngUploadMultiple',
  templateUrl: './uploadmultiple.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgUploadMultipleComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgUploadMultipleComponent) }
  ]
})
export class NgUploadMultipleComponent extends NgUploadMultipleCommon {

  constructor( @Host() parent: NgFormularDirective, injector: Injector, renderer: Renderer2, ngZone: NgZone) {
    super(parent, injector, renderer, ngZone);
  }

}
