import { Component, Host, Injector, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { NgInputSearchCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';


@Component({
  selector: 'ngInputSearch',
  templateUrl: './inputsearch.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputSearch },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputSearch) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgInputSearch extends NgInputSearchCommon {

  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }


}
