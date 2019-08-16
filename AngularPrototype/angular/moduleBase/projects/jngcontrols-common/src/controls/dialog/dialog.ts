import { Input, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { ViewChild } from '@angular/core';

/**
 * Base Komponente für Dialog
 */
export class NgDialogCommon {

  dialogElement: ElementRef;

  /**
   * Implementation als Setter, da mit ngIf das Element bei Unsichtbarkeit UNDEFINED ist.
   */
  @ViewChild('dialog')
  set dialogElementSetter(content: ElementRef) {
    this.dialogElement = content;

    /**
     * Detect Changes ausführen, da beim Einblenden/Ausblenden des Dialogs Parameter und Properties ändern können diese ausserhalb der Standart ChangeDetection geändert würden.
     */
    this.cdRef.detectChanges();
  }
  
  /**
   * Boolean Property definiert ob das Dialog angezeigt wird
   */
  _show: boolean = false;

  // #region Constructor

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(private cdRef: ChangeDetectorRef) {
  }

  // #endregion

  // #region Properties

  /**
   * Input Property. Erhält den Title des Dialog. Default Value: "Dialog".
   */
  @Input("title")
  public _title: string = "Dialog";

  @Input("allowesc")
  public _allowesc: boolean = true;

  @Input("backdrop")
  public _backdrop: boolean = true;

 

  /**
   * Input Property. Erhält den Namen des Dialog - benutzt für das ID. Default Value: ""
   */
  @Input("name")
  public _name: string = "";

  /**
   * Steuert ob im Header des Dialogs ein Button angezeigt wird.
   */
  @Input("closebutton")
  public closebutton: boolean = true;

  /**
   * Input Property. Erhält die Breite des Dialog
   */
  @Input("width")
  public width: string = null;

  /**
 * Input Property. Erhält grösse des Dialogs
 */
  @Input("dialogsize")
  public dialogsize: string = "normal";

  /**
   * Output Emitter. Wird aufgerufen, wenn das Wert des _show property geändert ist - damait das Dialog geöfnet/geschlossen wird.
   */
  @Output("isvisibleChange")
  isVisibleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

   /**
   * Setter. Erhält das boolen Wert des _show property
   */
  @Input("isvisible")
  set visible(v: boolean) {
    this._show = v;
  }

  /**
   * Getter. Ergibt das boolen Wert des _show property
   */
  get isVisible(): boolean {
    return this._show;
  }

  // #endregion

  // #region Methods

  /**
   * Die Methode setz den Wert des _show property auf true
   */
  public show(): void {
    this._show = true;
    this.isVisibleEmitter.emit(this._show);
  }

  /**
   * Die Methode setz den Wert des _show property auf false
   */
  public hide(): void {
    this._show = false;
    this.isVisibleEmitter.emit(this._show);
  }

  protected get ChangeDetector(): ChangeDetectorRef {
    return this.cdRef;
  }

  // #endregion

  // #region Host Actions

  /**
   * Allow Close by Click outside Dialog
   */
  @HostListener('click', ['$event'])
  onClick(event: any): void {
    if (this._allowesc === false || (this.dialogElement !== null && this.dialogElement !== undefined && event.target !== this.dialogElement.nativeElement)) {
      return;
    }
    this.hide();
  }

  /**
   * Allow Close by ESC
   */
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    const ESCAPE_KEYCODE = 27;

    if (this._allowesc === true && event.keyCode === ESCAPE_KEYCODE) {
      this.hide();
    }
  }

  // #endregion
}

