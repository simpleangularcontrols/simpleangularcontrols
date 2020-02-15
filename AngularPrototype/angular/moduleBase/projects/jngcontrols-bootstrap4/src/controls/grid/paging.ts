import { Component, Input, Output, EventEmitter, HostListener, Host, forwardRef } from '@angular/core';
import { NgPagingCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';


@Component({
  selector: 'ng-paging,ngPaging',
  templateUrl: './paging.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgPagingComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgPagingComponent) }
  ]
})
export class NgPagingComponent extends NgPagingCommon {

  constructor() { super(); }

}
