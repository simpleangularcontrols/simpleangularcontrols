import { Component, Host, forwardRef, Injector, Renderer2 } from '@angular/core';
import { NgUploadCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ngUpload',
  templateUrl: './upload.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgUpload },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgUpload) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]

})
export class NgUpload extends NgUploadCommon {

  constructor( @Host() parent: NgFormular, injector: Injector, renderer: Renderer2) {
    super(parent, injector, renderer);
  }

}
