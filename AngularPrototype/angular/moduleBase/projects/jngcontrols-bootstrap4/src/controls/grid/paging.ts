import { Component, forwardRef, Injector } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgPagingCommon } from '@jnetwork/jngcontrols-common';


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

  constructor(injector: Injector) { super(injector); }

}
