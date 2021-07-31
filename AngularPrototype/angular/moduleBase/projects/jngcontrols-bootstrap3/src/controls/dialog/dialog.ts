import { Component, ElementRef, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { NgDialogCommon } from '@jnetwork/jngcontrols-common';
import { Promise } from 'q';

@Component({
  selector: 'ngDialog',
  templateUrl: './dialog.html'
})
export class NgDialog extends NgDialogCommon implements OnInit, OnDestroy {
  // DOM Element
  private element: any;

  constructor(el: ElementRef, cdRef: ChangeDetectorRef) {
    super(cdRef);

    this.element = el.nativeElement;
  }

  //#region Bootstrap 3 Spezifische Properites

  @Input("zindex")
  zindex: number = 20002;

  private _lastDialogMarginTop: number = 0;

  // Margin Top für Center Position des Dialogs berechnen
  get dialogMarginTop(): number {
    let result: number = 0;

    // ContentPlaceholder kann NULL/UNDEFINED sein wenn Dialog nicht angezeigt wird
    if (this.dialogElement !== null && this.dialogElement !== undefined)
      result = (this.dialogElement.nativeElement.clientHeight / 2) * -1;

    // Change Detection ausführen, falls Wert nach Rendering noch geändert hat. Kann durch HTML Content / Zeilenumbrüche usw. ausgelöst werden.
    if (this._lastDialogMarginTop !== result) {
      this._lastDialogMarginTop = result;
      this.ChangeDetector.detectChanges();
    }

    return result;
  }

  //#endregion

  ngOnInit() {
    // Element an Body für korrektes Styling unter Bootstrap 3 verschieben
    document.body.appendChild(this.element);
  }

  ngOnDestroy() {
    document.body.removeChild(this.element);
    super.ngOnDestroy();
  }
}

