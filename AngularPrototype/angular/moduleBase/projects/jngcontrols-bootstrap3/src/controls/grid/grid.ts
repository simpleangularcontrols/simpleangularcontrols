import { Component, Directive, QueryList, ContentChildren, forwardRef, TemplateRef, ContentChild, ViewChildren, ElementRef } from '@angular/core';
import { NgGridCommon, NgGridColumnBaseCommon, PagerData } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';
import { NgPagingComponent } from './paging';

@Component({
  selector: 'ng-grid,ngGrid',
  templateUrl: './grid.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgGridComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgGridComponent) }
  ]
})
export class NgGridComponent extends NgGridCommon {

  @ContentChild(TemplateRef, { static: true })
  template: TemplateRef<any>;

  ellipsis: boolean = false;

}
