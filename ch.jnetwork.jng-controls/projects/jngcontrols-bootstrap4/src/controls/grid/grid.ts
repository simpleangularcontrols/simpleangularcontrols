import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  TemplateRef,
} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgGridCommon } from '@jnetwork/jngcontrols-common';

/**
 * Grid Komponente
 */
@Component({
  selector: 'sac-grid',
  templateUrl: './grid.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgGridComponent },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgGridComponent),
    },
  ],
})
export class NgGridComponent extends NgGridCommon {
  /**
   * Referenz auf Column Template
   */
  @ContentChild(TemplateRef, { static: false })
  template: TemplateRef<any>;

  /**
   * Setzt die Ellipsis Funktion auf der Column
   */
  ellipsis: boolean = false;

  /**
   * Konstrukor
   * @param cdRef Change Detection Reference
   */
  constructor(cdRef: ChangeDetectorRef) {
    super(cdRef);
  }
}
