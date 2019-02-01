import { Input, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { ViewChild } from '@angular/core';

export class NgDialogCommon {

  dialogElement: ElementRef;

  // Implementation als Setter, da mit ngIf das Element bei Unsichtbarkeit UNDEFINED ist.
  @ViewChild('dialog')
  set dialogElementSetter(content: ElementRef) {
    this.dialogElement = content;

    // Detect Changes ausführen, da beim Einblenden/Ausblenden des Dialogs Parameter und Properties ändern können diese ausserhalb der Standart ChangeDetection geändert würden.
    this.cdRef.detectChanges();
  }

  _show: boolean = false;

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(private cdRef: ChangeDetectorRef) {
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
  set visible(v: boolean) {
    this._show = v;
  }

  @Input("name")
  public _name: string = "";


  @Output("isvisibleChange")
  isVisibleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  get isVisible(): boolean {
    return this._show;
  }

  // #endregion

  // #region Methods

  public show(): void {
    this._show = true;
    this.isVisibleEmitter.emit(this._show);
  }

  public hide(): void {
    this._show = false;
    this.isVisibleEmitter.emit(this._show);
  }

  protected get ChangeDetector(): ChangeDetectorRef {
    return this.cdRef;
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

