import { Component, Host, Injector, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { NgInputSearchCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';


@Component({
  selector: 'ng-inputsearch,ngInputSearch',
  templateUrl: './inputsearch.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputSearchComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputSearchComponent) }
  ]
})

export class NgInputSearchComponent extends NgInputSearchCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }


}
