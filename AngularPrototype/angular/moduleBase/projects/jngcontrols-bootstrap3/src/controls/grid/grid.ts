import { Component, Directive, QueryList, ContentChildren, forwardRef, TemplateRef, ContentChild, ViewChildren, ElementRef } from '@angular/core';
import { NgGridCommon, NgGridColumnBaseCommon, PagerData } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';
import { NgPaging } from './paging';

@Component({
  selector: 'ngGrid',
  templateUrl: './grid.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgGrid },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgGrid) }
  ]
})
export class NgGrid extends NgGridCommon {

  @ContentChild(TemplateRef)
  template: TemplateRef<any>;

  ellipsis: boolean = false

}
