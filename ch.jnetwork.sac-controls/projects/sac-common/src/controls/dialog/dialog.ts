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
export class SacDialogCommon implements OnDestroy {
  private hasSetBodyTag = false;

  /**
   * Boolean Property definiert ob das Dialog angezeigt wird
   */
  public _show: boolean = false;

  /**
   * Das property enthielt (wenn überhaupt gesetzt) entweder keywords für sizing oder custom css Klassen.
   * Die akzeptabel keywordssind: 'small', 'large', 'extralarge', 'medium', ''.
   */
  public _size: 'small' | 'large' | 'extralarge' | 'medium' | '' = '';

  /**
   * Das input property akzeptiert boolen Wert. Definiert ob das Dialog darf durch ESC geschlossen werden. Default ist true.
   */
  @Input()
  public allowesc: boolean = true;

  /**
   * Das input property akzeptiert boolen Wert. Definiert ob das Dialog darf durch click außerhalb des Dialog-Fenster geschlossen werden. Default ist true.
   */
  @Input()
  public backdrop: boolean = true;

  /**
   * Steuert ob im Header des Dialogs ein Button angezeigt wird.
   */
  @Input()
  public closebutton: boolean = true;

  /**
   * Name des Containers für den Dialog
   */
  public dialogElement: ElementRef;

  /**
   * Output Emitter. Wird aufgerufen, wenn das Wert des _show property geändert ist - damait das Dialog geöfnet/geschlossen wird.
   */
  @Output()
  public isvisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Input Property. Erhält den Namen des Dialog - benutzt für das ID. Default Value: ''
   */
  @Input()
  public name: string = '';

  /**
   * Input Property. Erhält den Title des Dialog. Default Value: 'Dialog'.
   */
  @Input()
  public title: string = 'Dialog';

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(private cdRef: ChangeDetectorRef) {}

  /**
   * Implementation als Setter, da mit ngIf das Element bei Unsichtbarkeit UNDEFINED ist.
   */
  @ViewChild('dialog', { static: false })
  public set dialogElementSetter(content: ElementRef) {
    this.dialogElement = content;
  }

  /**
   * Getter. Ergibt das boolen Wert des _show property
   */
  public get isvisible(): boolean {
    return this._show;
  }

  /**
   * Setter. Erhält das boolen Wert des _show property
   */
  @Input()
  public set isvisible(v: boolean) {
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
   * Das Input akzeptiert sowohl default size-css-Klassen als auch custom Klassen.
   * case insensitive.
   * Die akzeptabel default-size-Klassen sind: 'small', 'large', 'extralarge', 'medium', ''.
   * Wenn size ist NICHT gesetzt (oder 'medium' oder ''), default ist in medium size: max-width 500px.
   */
  @Input()
  public set size(v: 'small' | 'large' | 'extralarge' | 'medium' | '') {
    this._size = v;
  }

  /**
   * Getter for ChangeDetector.
   */
  protected get ChangeDetector(): ChangeDetectorRef {
    return this.cdRef;
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
    this.isvisibleChange.emit(this._show);
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
   * Allow Close by Click outside Dialog
   */
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    if (
      this.allowesc === false ||
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

    if (this.allowesc === true && event.key === ESCAPE_KEYCODE) {
      this.hide();
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

    this.isvisibleChange.emit(this._show);
  }
}
