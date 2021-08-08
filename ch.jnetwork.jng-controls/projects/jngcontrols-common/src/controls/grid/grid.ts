import { ChangeDetectorRef, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { PagerData, SortDescriptor, SortOrder } from './model';

/**
 * Basis Komponente für NgGrid
 */
@Directive()
export abstract class NgGridCommon {

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
  @Input('value')
  public value: any;

  /**
   * Pager Settings
   *
   * Pager kann ausgeschaltet werden, in dem PagerData auf NULL gesetzt wird.
   */
  @Input('pagerdata')
  public pagerdata: PagerData;

  /**
   * Input property für Name.
   */
  @Input('name')
  public name: string;

  /**
   * Text welcher angezeigt wird, wenn keine Rows verfügbar sind.
   */
  @Input('emptytext')
  public _emptytext: string;

  /**
   * Text in Pager für 'Seite x von y'.
   * Folgende Interpolation Texte sind vorhanden:
   * {{CURRENTPAGE}}: Aktuelle Seite
   * {{TOTALPAGES}}: Anzahl Seiten
   */
  @Input('pagingtext')
  public pagingText: string = 'PAGING_PAGEOFTEXT';

  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   */
  @Input('pagesizetext')
  public pageSizeText: string = 'PAGING_PAGEENTRIESTEXT';

  /**
   * Definiert die Anzahl der Elemente pro Seite die ausgewählt werden können
   */
  @Input('pagesizes')
  public pageSizes: string = '20|50|100';

  /**
   * Deaktiviert die Auswahl der PageSize im Pager
   */
  @Input('pagesizedisabled')
  public pageSizeDisabled: boolean = false;

  /**
   * Input property für die maximalle Seiten die sichtbar sind. Type: number.
   */
  @Input('maxvisiblepagenumbers') _maxvisiblepagenumbers: number;

  /**
   * Input property für headers. Type: TemplateRef<any>.
   */
  @Input('headers') _headers: TemplateRef<any>;

  /**
   * Input property für body. Type: TemplateRef<any>.
   */
  @Input('body') _body: TemplateRef<any>;

  /**
   * Output EventEmitter. Wird aufgerufen wenn das Pager geklickt ist.
   */
  @Output('onpaging') _pagingEvent: EventEmitter<number> = new EventEmitter();

  /**
   * Output EventEmitter. Wird aufgerufen wenn ein Header geklickt ist, damit das Column soritert wird.
   */
  @Output('onsorting') _sortingevent: EventEmitter<SortDescriptor> = new EventEmitter<SortDescriptor>();

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
    this._pagingEvent.emit(newStartIndex);
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

    this._sortingevent.emit(result);
  }

  /**
   * Model für Sortierung
   * @param sortDescription Settings für aktuelle sortierung
   */
  @Input('sortdata')
  public set ApplySort(sortDescription: SortDescriptor) {
    this.sortColumn = sortDescription.SortColumn;
    this.sortDirection = sortDescription.SortOrder;
  }
}
