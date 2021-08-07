import {
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  Directive,
  OnDestroy,
} from '@angular/core';

/**
 * Base Komponente für Dialog
 */
@Directive()
export class NgDialogCommon implements OnDestroy {
  /**
   * Name des Containers für den Dialog
   */
  dialogElement: ElementRef;

  private hasSetBodyTag = false;

  /**
   * Implementation als Setter, da mit ngIf das Element bei Unsichtbarkeit UNDEFINED ist.
   */
  @ViewChild('dialog', { static: false })
  set dialogElementSetter(content: ElementRef) {
    console.log('Debug: ' + content);
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

  /**
   * Methode wenn Componente entfernt wird
   */
  ngOnDestroy(): void {
    if (this.hasSetBodyTag && document.body.classList.contains('modal-open')) {
      document.body.classList.remove('modal-open');
      this.hasSetBodyTag = false;
    }
  }

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
    if (
      v &&
      !this.hasSetBodyTag &&
      !document.body.classList.contains('modal-open')
    ) {
      document.body.classList.add('modal-open');
      this.hasSetBodyTag = true;
    }

    if (
      !v &&
      this.hasSetBodyTag &&
      document.body.classList.contains('modal-open')
    ) {
      document.body.classList.remove('modal-open');
      this.hasSetBodyTag = false;
    }

    this._show = v;
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

    if (
      !this.hasSetBodyTag &&
      !document.body.classList.contains('modal-open')
    ) {
      document.body.classList.add('modal-open');
      this.hasSetBodyTag = true;
    }

    this.isVisibleEmitter.emit(this._show);
  }

  /**
   * Die Methode setz den Wert des _show property auf false
   */
  public hide(): void {
    if (this.hasSetBodyTag && document.body.classList.contains('modal-open')) {
      document.body.classList.remove('modal-open');
      this.hasSetBodyTag = false;
    }

    this._show = false;
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
