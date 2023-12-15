import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

/**
 *Basis Komponente für NgTreeItemAction
 */
@Directive()
export class NgTreeItemActionCommon implements OnInit {
  /**
   * Konstruktor
   * @param el Element Referenz
   */
  constructor(private el: ElementRef) {}

  /**
   * lifecycle OnInit hook. Wird aufgeruren sobald das Komponent initialisiert ist.
   */
  ngOnInit() {
    let rootElement: HTMLElement = this.el.nativeElement;
    let parentElement: HTMLElement = rootElement.parentElement;

    while (rootElement.firstChild) {
      parentElement.insertBefore(rootElement.firstChild, rootElement);
    }

    parentElement.removeChild(rootElement);
  }

  /**
   *Input Property. Akzeptiert das Wert des Object.
   */
  @Input() item: any;

  /**
   * Input Property für Title des TreeItemAction
   */
  @Input() title: string;

  /**
   * Input Property für Styling des Icon. Deffiniert die Css Klassen des Icon
   */
  @Input() iconstyle: string;

  /**
   * Event wenn auf das Icon geclickt wird
   */
  @Output()
  clicked: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Die Methode erstellt die CSS Klasse des Icon. Akzeptiert ein Key-word und baut ein vollständige CSS Klasse.
   */
  transformClass(initialClass) {
    switch (initialClass) {
      case 'add':
        return 'jstree-icon icon icon-base-add jstree-add';
      case 'delete':
        return 'jstree-icon icon icon-base-delete jstree-delete';
      default:
        return initialClass;
    }
  }

  /**
   * Die Methode wird das cklickaction Emitter aktivieren.
   */
  iconaction() {
    this.clicked.emit();
  }
}
