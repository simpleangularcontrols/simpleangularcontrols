import { Component, ElementRef, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { NgDialogCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ng-dialog,ngDialog',
  templateUrl: './dialog.html'
})
export class NgDialogComponent extends NgDialogCommon implements OnInit, OnDestroy {
  // DOM Element
  private element: any;

  constructor(el: ElementRef, cdRef: ChangeDetectorRef) {
    super(cdRef);

    this.element = el.nativeElement;
  }

  ngOnInit() {
    // Element an Body für korrektes Styling unter Bootstrap 3 verschieben
    document.body.appendChild(this.element);
  }

  ngOnDestroy() {
    document.body.removeChild(this.element);
  }
}

