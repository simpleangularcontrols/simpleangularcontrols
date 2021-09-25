import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgDialogCommon } from '@jnetwork/jngcontrols-common';

/**
 * Dialog Komponente
 */
@Component({
  selector: 'ng-dialog,ngDialog',
  templateUrl: './dialog.html',
})
export class NgDialogComponent
  extends NgDialogCommon
  implements OnInit, OnDestroy
{
  /**
   * Referenz auf DOM Element
   */
  private element: any;

  /**
   * Konstruktor
   * @param el DOM Element Referenz
   * @param cdRef Change Detection Service
   */
  constructor(el: ElementRef, cdRef: ChangeDetectorRef) {
    super(cdRef);

    this.element = el.nativeElement;
  }

  /**
   * Event wenn Komponente initialisiert wird
   */
  ngOnInit() {
    // Element an Body für korrektes Styling unter Bootstrap 3 verschieben
    document.body.appendChild(this.element);
  }

  /**
   * Event wenn Element entfernt wird
   */
  ngOnDestroy() {
    this.hide();
    if (document.body.contains(this.element)) {
      document.body.removeChild(this.element);
    }
    super.ngOnDestroy();
  }
}
