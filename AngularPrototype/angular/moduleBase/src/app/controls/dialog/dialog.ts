import { Component, Input, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { HostListener } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'ngDialog',
  templateUrl: './dialog.html'
})
export class NgDialog {

  @ViewChild('dialog')
  private dialogElement: ElementRef;

  _show: boolean = false;

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor() {
  }

  // #endregion

  // #region Properties

  @Input("title")
  public _title: string = "Dialog";

  @Input("allowesc")
  public _allowesc: boolean = true;

  @Input("backdrop")
  public _backdrop: boolean = true;

  @Input("isvisible")
  set isVisible(v: boolean) {
    this._show = v;
  }
  get isVisible(): boolean {
    return this._show;
  }

  // #endregion

  // #region Properties

  public show(): void {
    this.isVisible = true;
  }

  public hide(): void {
    this.isVisible = false;
  }

  // #endregion

  // #region Host Actions

  // Allow Close by Click outside Dialog
  @HostListener('click', ['$event'])
  onClick(event: any): void {
    if (this._allowesc === false || (this.dialogElement !== null && this.dialogElement !== undefined && event.target !== this.dialogElement.nativeElement)) {
      return;
    }
    this.hide();
  }

  // Allow Close by ESC
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    const ESCAPE_KEYCODE = 27;

    if (this._allowesc === true && event.keyCode === ESCAPE_KEYCODE) {
      this.hide();
    }
  }

  // #endregion
}

