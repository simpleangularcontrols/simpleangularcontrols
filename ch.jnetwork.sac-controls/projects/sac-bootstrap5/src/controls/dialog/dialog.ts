import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SacDialogCommon } from '@simpleangularcontrols/sac-common';
import { NgIf } from '@angular/common';

/**
 * Dialog Komponente
 */
@Component({
    selector: 'sac-dialog',
    templateUrl: './dialog.html',
    standalone: true,
    imports: [NgIf],
})
export class SacDialogComponent
  extends SacDialogCommon
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
