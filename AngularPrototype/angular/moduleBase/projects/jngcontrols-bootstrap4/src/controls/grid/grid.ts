import { Component, ContentChild, forwardRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgGridCommon } from '@jnetwork/jngcontrols-common';

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

  @ContentChild(TemplateRef, { static: false })
  template: TemplateRef<any>;

  ellipsis: boolean = false;

  /**
   * Konstrukor
   * @param cdRef Change Detection Reference
   */
  constructor(cdRef: ChangeDetectorRef) {
    super(cdRef);
  }
}
