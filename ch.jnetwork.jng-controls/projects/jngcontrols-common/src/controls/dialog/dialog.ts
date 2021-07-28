import {
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  Directive,
} from '@angular/core';

/**
 * Base Komponente für Dialog
 */
@Directive()
export class NgDialogCommon {
  /**
   * Name des Containers für den Dialog
   */
  dialogElement: ElementRef;

  /**
   * Implementation als Setter, da mit ngIf das Element bei Unsichtbarkeit UNDEFINED ist.
   */
  @ViewChild('dialog', { static: true })
  set dialogElementSetter(content: ElementRef) {
    this.dialogElement = content;

    /**
     * Detect Changes ausführen, da beim Einblenden/Ausblenden des Dialogs Parameter und Properties ändern können diese ausserhalb der Standart ChangeDetection geändert würden.
     */
    // this.cdRef.detectChanges();
  }

  /**
   * Boolean Property definiert ob das Dialog angezeigt wird
   */
  _show: boolean = false;

  /**
   * Das property enthielt (wenn überhaupt gesetzt) entweder keywords für sizing oder custom css Klassen.
   * Die akzeptabel keywordssind: 'small', 'large', 'extralarge', 'medium', ''.
   */
  _size: string = '';

  // #region Constructor

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(private cdRef: ChangeDetectorRef) {}

  // #endregion

  // #region Properties

  /**
   * Input Property. Erhält den Title des Dialog. Default Value: 'Dialog'.
   */
  @Input('title')
  public _title: string = 'Dialog';

  /**
   * Das input property akzeptiert boolen Wert. Definiert ob das Dialog darf durch ESC geschlossen werden. Default ist true.
   */
  @Input('allowesc')
  public _allowesc: boolean = true;

  /**
   * Das input property akzeptiert boolen Wert. Definiert ob das Dialog darf durch click außerhalb des Dialog-Fenster geschlossen werden. Default ist true.
   */
  @Input('backdrop')
  public _backdrop: boolean = true;

  /**
   * Input Property. Erhält den Namen des Dialog - benutzt für das ID. Default Value: ''
   */
  @Input('name')
  public _name: string = '';

  /**
   * Steuert ob im Header des Dialogs ein Button angezeigt wird.
   */
  @Input('closebutton')
  public closebutton: boolean = true;

  /**
   * Input Property. Erhält die Breite des Dialog
   */
  @Input('width')
  public width: string = null;

  /**
   * Definiert eine feste Höhe beim Dialog.
   */
  @Input()
  public height: string = null;

  /**
   * Das Input akzeptiert sowohl default size-css-Klassen als auch custom Klassen.
   * case insensitive.
   * Die akzeptabel default-size-Klassen sind: 'small', 'large', 'extralarge', 'medium', ''.
   * Wenn size ist NICHT gesetzt (oder 'medium' oder ''), default ist in medium size: max-width 500px.
   */
  @Input('size')
  set defineSize(v: string) {
    v = v.toLowerCase();
    this._size = v;
  }

  /**
   * Output Emitter. Wird aufgerufen, wenn das Wert des _show property geändert ist - damait das Dialog geöfnet/geschlossen wird.
   */
  @Output('isvisibleChange')
  isVisibleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Setter. Erhält das boolen Wert des _show property
   */
  @Input('isvisible')
  set visible(v: boolean) {
    this._show = v;

    if (this._show && !document.body.classList.contains('modal-open')) {
      document.body.classList.add('modal-open');
    }
    if (
      this._show === false &&
      document.body.classList.contains('modal-open')
    ) {
      document.body.classList.remove('modal-open');
    }
  }

  /**
   * Getter. Ergibt das boolen Wert des _show property
   */
  get isVisible(): boolean {
    return this._show;
  }

  /**
   * Die Funktion prüft ob es ein default css classe für Size des Dialog durch den size Input gesetzt wurde.
   */
  issetdefaultsize(): boolean {
    let result: boolean = false;

    switch (this._size) {
      case 'small':
        result = true;
        break;
      case 'medium':
        result = true;
        break;
      case 'large':
        result = true;
        break;
      case 'extralarge':
        result = true;
        break;
      case '':
        result = true;
        break;
    }

    return result;
  }

  // #endregion

  // #region Methods

  /**
   * Die Methode setz den Wert des _show property auf true
   */
  public show(): void {
    this._show = true;
    if (this._show && !document.body.classList.contains('modal-open')) {
      document.body.classList.add('modal-open');
    }
    this.isVisibleEmitter.emit(this._show);
  }

  /**
   * Die Methode setz den Wert des _show property auf false
   */
  public hide(): void {
    this._show = false;
    if (
      this._show === false &&
      document.body.classList.contains('modal-open')
    ) {
      document.body.classList.remove('modal-open');
    }
    this.isVisibleEmitter.emit(this._show);
  }

  /**
   * Getter for ChangeDetector.
   */
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
    if (
      this._allowesc === false ||
      (this.dialogElement !== null &&
        this.dialogElement !== undefined &&
        event.target !== this.dialogElement.nativeElement)
    ) {
      return;
    }
    this.hide();
  }

  /**
   * Allow Close by ESC
   */
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    const ESCAPE_KEYCODE = 'Escape';

    if (this._allowesc === true && event.key === ESCAPE_KEYCODE) {
      this.hide();
    }
  }

  // #endregion
}
