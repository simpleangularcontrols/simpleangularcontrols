import { ChangeDetectorRef, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { PagerData, PagerRequest, SortDescriptor, SortOrder } from './model';

/**
 * Basis Komponente für SacGrid
 */
@Directive()
export abstract class SacGridCommon {

  /**
   * Konstruktor
   * @param cd Change Detection Service
   */
  constructor(private cd: ChangeDetectorRef) { }

  /**
   * Private Property. Enthielt die Column Menge. Type: number. Default ist 0
   */
  public ColumnCount: number = 0;

  /**
   * Protected Property. Enthielt Array of Pages. Default value: empty array []
   */
  protected paginators: Array<any> = [];

  /**
   * Protected Property. Enthielt die Nummer der aktiven Seite. Type: number. Default ist 1
   */
  protected activePage: number = 1;

  /**
   * Protected Property. Enthielt die Nummer der ersten angezeigtenen Seite in Pager. Type: number. Default ist 1
   */
  protected firstPageNumber: number = 1;

  // protected firstVisibleIndex: number = 1;
  // protected lastVisibleIndex;

  /**
   * Protected Property. Enthielt die Nummer der letzen Seite in Pager. Type: number. Default ist undefined/null
   */
  protected lastPageNumber: number;

  //#region Input and Outputs

  /**
   * Grid Daten
   */
  @Input()
  public value: any;

  /**
   * Pager Settings
   *
   * Pager kann ausgeschaltet werden, in dem PagerData auf NULL gesetzt wird.
   */
  @Input()
  public pagerdata: PagerData;

  /**
   * Input property für Name.
   */
  @Input()
  public name: string;

  /**
   * Text welcher angezeigt wird, wenn keine Rows verfügbar sind.
   */
  @Input()
  public emptytext: string;

  /**
   * Text in Pager für 'Seite x von y'.
   * Folgende Interpolation Texte sind vorhanden:
   * {{CURRENTPAGE}}: Aktuelle Seite
   * {{TOTALPAGES}}: Anzahl Seiten
   */
  @Input()
  public pagingtext: string = 'PAGING_PAGEOFTEXT';

  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   */
  @Input()
  public pagesizetext: string = 'PAGING_PAGEENTRIESTEXT';

  /**
   * Definiert die Anzahl der Elemente pro Seite die ausgewählt werden können
   */
  @Input()
  public pagesizes: string = '20|50|100';

  /**
   * Deaktiviert die Auswahl der PageSize im Pager
   */
  @Input()
  public pagesizedisabled: boolean = false;

  /**
   * Input property für die maximalle Seiten die sichtbar sind. Type: number.
   */
  @Input() maxvisiblepagenumbers: number;

  /**
   * Input property für headers. Type: TemplateRef<any>.
   */
  @Input() headers: TemplateRef<any>;

  /**
   * Input property für body. Type: TemplateRef<any>.
   */
  @Input() body: TemplateRef<any>;

  /**
   * Output EventEmitter. Wird aufgerufen wenn das Pager geklickt ist.
   */
  @Output() paging: EventEmitter<PagerRequest> = new EventEmitter<PagerRequest>();

  /**
   * Output EventEmitter. Wird aufgerufen wenn ein Header geklickt ist, damit das Column soritert wird.
   */
  @Output() sorting: EventEmitter<SortDescriptor> = new EventEmitter<SortDescriptor>();

  //#endregion

  /**
   * Aktuelle Sortierung
   */
  public sortDirection: SortOrder = SortOrder.None;

  /**
   * Aktuell Sortierte Spalte
   */
  public sortColumn: string = '';

  /**
   * Setzt die neue Seite
   * @param newStartIndex Neuer Seiten Index (Zero-Based)
   */
  pageChange(newStartIndex) {
    this.paging.emit(newStartIndex);
  }

  /**
   * Die Methode erhöht die Column-Stücke um eins
   */
  public RegisterColumn() {
    this.ColumnCount++;
    // Detect Changes ausführen, da ColumnChange nach OnInit ausgeführt wird.
    this.cd.detectChanges();
  }

  /**
   * Die Methode verringert die Column-Stücke um eins
   */
  public UnregisterColumn() {
    this.ColumnCount--;
  }

  /**
   * Die Methode deffiniert das Sortierung Flow
   */
  public SortBy(command) {
    let direction: SortOrder;

    if (command === this.sortColumn) {

      switch (this.sortDirection) {
        case SortOrder.None:
        case SortOrder.Descending:
          direction = SortOrder.Ascending;
          break;
        case SortOrder.Ascending:
          direction = SortOrder.Descending;
          break;
      }

    } else {
      direction = SortOrder.Ascending;
    }

    const result: SortDescriptor = new SortDescriptor();
    result.SortColumn = command;
    result.SortOrder = direction;

    this.sorting.emit(result);
  }

  /**
   * Model für Sortierung
   * @param sortDescription Settings für aktuelle sortierung
   */
  @Input()
  public set sortdata(sortDescription: SortDescriptor) {
    this.sortColumn = sortDescription.SortColumn;
    this.sortDirection = sortDescription.SortOrder;
  }
}
