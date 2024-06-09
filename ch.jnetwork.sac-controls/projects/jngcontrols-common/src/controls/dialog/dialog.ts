import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

/**
 * Base Komponente für Dialog
 */
@Directive()
export class NgDialogCommon implements OnDestroy {
  // #region Properties

  private hasSetBodyTag = false;

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
   * Input Property. Erhält den Title des Dialog. Default Value: 'Dialog'.
   */
  @Input('title')
  public _title: string = 'Dialog';
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
   * Output Emitter. Wird aufgerufen, wenn das Wert des _show property geändert ist - damait das Dialog geöfnet/geschlossen wird.
   */
  @Output('isvisibleChange')
  public isVisibleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Boolean Property definiert ob das Dialog angezeigt wird
   */
  public _show: boolean = false;
  /**
   * Das property enthielt (wenn überhaupt gesetzt) entweder keywords für sizing oder custom css Klassen.
   * Die akzeptabel keywordssind: 'small', 'large', 'extralarge', 'medium', ''.
   */
  public _size: string = '';
  /**
   * Name des Containers für den Dialog
   */
  public dialogElement: ElementRef;

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(private cdRef: ChangeDetectorRef) {}

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Das Input akzeptiert sowohl default size-css-Klassen als auch custom Klassen.
   * case insensitive.
   * Die akzeptabel default-size-Klassen sind: 'small', 'large', 'extralarge', 'medium', ''.
   * Wenn size ist NICHT gesetzt (oder 'medium' oder ''), default ist in medium size: max-width 500px.
   */
  @Input('size')
  public set defineSize(v: string) {
    v = v.toLowerCase();
    this._size = v;
  }

  /**
   * Setter. Erhält das boolen Wert des _show property
   */
  @Input('isvisible')
  public set visible(v: boolean) {
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
   * Implementation als Setter, da mit ngIf das Element bei Unsichtbarkeit UNDEFINED ist.
   */
  @ViewChild('dialog', { static: true })
  public set dialogElementSetter(content: ElementRef) {
    this.dialogElement = content;

    /**
     * Detect Changes ausführen, da beim Einblenden/Ausblenden des Dialogs Parameter und Properties ändern können diese ausserhalb der Standart ChangeDetection geändert würden.
     */
    // this.cdRef.detectChanges();
  }

  /**
   * Getter. Ergibt das boolen Wert des _show property
   */
  public get isVisible(): boolean {
    return this._show;
  }

  // #endregion Public Getters And Setters

  // #region Protected Getters And Setters

  /**
   * Getter for ChangeDetector.
   */
  protected get ChangeDetector(): ChangeDetectorRef {
    return this.cdRef;
  }

  // #endregion Protected Getters And Setters

  // #region Public Methods

  /**
   * Allow Close by Click outside Dialog
   */
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
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
  public onKeydownHandler(event: KeyboardEvent) {
    const ESCAPE_KEYCODE = 'Escape';

    if (this._allowesc === true && event.key === ESCAPE_KEYCODE) {
      this.hide();
    }
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
   * Die Funktion prüft ob es ein default css classe für Size des Dialog durch den size Input gesetzt wurde.
   */
  public issetdefaultsize(): boolean {
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

  /**
   * Methode wenn Componente entfernt wird
   */
  public ngOnDestroy(): void {
    if (this.hasSetBodyTag && document.body.classList.contains('modal-open')) {
      document.body.classList.remove('modal-open');
      this.hasSetBodyTag = false;
    }
  }

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

  // #endregion Public Methods
}
