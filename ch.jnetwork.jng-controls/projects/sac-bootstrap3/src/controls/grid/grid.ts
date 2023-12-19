import { Component, Directive, QueryList, ContentChildren, forwardRef, TemplateRef, ContentChild, ViewChildren, ElementRef } from '@angular/core';
import { SacGridCommon, SacGridColumnBaseCommon, PagerData } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';
import { SacPagingComponent } from './paging';

@Component({
  selector: 'sac-grid',
  templateUrl: './grid.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacGridComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacGridComponent) }
  ]
})
export class SacGridComponent extends SacGridCommon {

  @ContentChild(TemplateRef, { static: true })
  template: TemplateRef<any>;

  ellipsis: boolean = false;

}
