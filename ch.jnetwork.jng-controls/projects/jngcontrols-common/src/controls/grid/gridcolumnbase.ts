import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { NgGridCommon } from './grid';
import { SortOrder } from './model';

/**
 * Base Komponente für GridColumn
 */
@Directive()
export class NgGridColumnBaseCommon implements OnInit, OnDestroy {

  /**
   * Konstruktor
   */
  constructor(private grid: NgGridCommon, private el: ElementRef) { }

  //#region Input / Outputs

  /**
  * Das Input property erhält den Namen des Column
  */
  @Input('name')
  public name: any;

  /**
  * Das Input property erhält das Value des Column
  */
  @Input('value')
  public value: any;

  /**
   * Das Input property erhält das Header des Column
   */
  @Input('header')
  public header: string;

  /**
   * Das Input property erhält die Breite des Column
   */
  @Input('width')
  public width: string;

  /**
   * Das Input property erhält das Type des Column
   */
  @Input('type')
  public type: string;

  /**
   * Das Input property erhält das Column- Key-Word, damit das Column sortiert werden kann.
   */
  @Input('sortkey')
  public SortKey: string;

  //#endregion

  //#region Interface Implementations

  /**
  * lifecycle hook - OnInit. Wird aufgeruren sobald das Komponent initialisiert ist.
  */
  ngOnInit() {
    const rootElement: HTMLElement = this.el.nativeElement;
    const parentElement: HTMLElement = rootElement.parentElement;

    while (rootElement.firstChild) {
      parentElement.insertBefore(rootElement.firstChild, rootElement);
    }

    parentElement.removeChild(rootElement);

    if (this.IsHeader()) {
      this.grid.RegisterColumn();
    }
  }

  /**
   * lifecycle hook - ngOnDestroy. Wird aufgeruren wenn das Component zerstört wird.
   */
  ngOnDestroy(): void {
    if (this.IsHeader()) {
      this.grid.UnregisterColumn();
    }
  }

  //#endregion

  //#region Type Handling

  /**
   * die Methode ergibt boolean Wert, ob das Element Header ist.
   */
  public IsHeader(): boolean {
    return this.type === 'header';
  }

  /**
   * die Methode ergibt boolean Wert, ob das Element Body ist.
   */
  public IsBody(): boolean {
    return this.type === 'body';
  }

  /**
   * die Methode ergibt boolean Wert, ob das Element Footer ist.
   */
  public IsFooter(): boolean {
    return this.type === 'footer';
  }

  //#endregion

  /**
   * Die Methode deffiniert wie das Grid sortiert wird, abhängig von gekligte Column
   */
  public SortByColumn() {
    if (this.SortKey !== undefined && this.SortKey !== null && this.SortKey !== '') {
      return this.grid.SortBy(this.SortKey);
    }
  }

  /**
   * die Methode ergibt boolean Wert und definiert, ob das Column für Sortierung aktiviert ist, gemäß eingegebene sortKey
   */
  public IsSortedColumn(): boolean {
    return this.grid.sortColumn === this.SortKey;
  }

  /**
   * Die methode definiert die Dortirung Richtung. Die Werte sind: none, asc, desc.
   */
  public GetSortDirection(): string {
    switch (this.grid.sortDirection) {
      case SortOrder.None:
        return 'none';
      case SortOrder.Ascending:
        return 'asc';
      case SortOrder.Descending:
        return 'desc';
      default:
        return 'none';
    }
  }
}

