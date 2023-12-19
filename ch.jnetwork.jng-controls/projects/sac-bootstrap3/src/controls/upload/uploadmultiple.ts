import { Component, Host, forwardRef, Injector, Renderer2, Optional } from '@angular/core';
import { SacUploadMultipleCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgZone } from '@angular/core';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'sac-uploadmultiple',
  templateUrl: './uploadmultiple.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacUploadMultipleComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacUploadMultipleComponent) }
  ]
})
export class SacUploadMultipleComponent extends SacUploadMultipleCommon {

  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector, renderer: Renderer2, ngZone: NgZone) {
    super(parent, injector, renderer, ngZone);
  }

}
