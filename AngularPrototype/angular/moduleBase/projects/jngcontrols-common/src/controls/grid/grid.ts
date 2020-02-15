import { Input, TemplateRef, Output, EventEmitter, Directive, OnInit, ChangeDetectorRef } from '@angular/core';
import { PagerData, SortDescriptor, SortOrder } from './model';

/**
 *Basis Komponente für NgGrid
 */
export abstract class NgGridCommon {

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

  //#region InputOutputs

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
  public pagingText: string = 'Seite {{CURRENTPAGE}} von {{TOTALPAGES}}';

  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   */
  @Input('pagesizetext')
  public pageSizeText: string = 'Einträge pro Seite {{PAGESIZE}}';

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

  /**
   * Output EventEmitter. Wird aufgerufen wenn ein PageSize geklickt ist, damit PageSizing geändert wird.
   */
  @Output('onpagesizechanged') _pageSizeChanged: EventEmitter<number> = new EventEmitter<number>();

  //#endregion

  /**
   * Aktuelle Sortierung
   */
  private sortDirection: SortOrder = SortOrder.None;

  /**
   * Aktuell Sortierte Spalte
   */
  private sortColumn: string = '';

  /**
   * Setzt die neue Seite
   * @param newStartIndex Neuer Seiten Index (Zero-Based)
   */
  pageChange(newStartIndex) {
    this._pagingEvent.emit(newStartIndex);
  }

  /**
   * Setzt die Page Size auf dem Grid neu
   * @param pageSize Grösse der Page
   */
  pageSizeChanged(pageSize: number) {
    this._pageSizeChanged.emit(pageSize);
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

    if (command === this.sortColumn) {

      switch (this.sortDirection) {
        case SortOrder.None:
        case SortOrder.Descending:
          this.sortDirection = SortOrder.Ascending;
          break;
        case SortOrder.Ascending:
          this.sortDirection = SortOrder.Descending;
          break;
      }

    } else {
      this.sortDirection = SortOrder.Ascending;
    }

    const result: SortDescriptor = new SortDescriptor();
    result.SortColumn = command;
    result.SortOrder = this.sortDirection;

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

  /**
   * Methode welche die aktuelle Sortierte Spalte zurückgibt
   */
  public GetSortColumn(): string {
    return this.sortColumn;
  }

  /**
   * Methode welche die Sortierung für die Spalte zurückgibt
   */
  public GetSortDirection(): SortOrder {
    return this.sortDirection;
  }
}
