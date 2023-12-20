import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { SacGridCommon } from './grid';
import { SortOrder } from './model';

/**
 * Base Komponente für GridColumn
 */
@Directive()
export class SacGridColumnBaseCommon implements OnInit, OnDestroy {

  /**
   * Konstruktor
   */
  constructor(private grid: SacGridCommon, private el: ElementRef) { }

  //#region Input / Outputs

  /**
  * Das Input property erhält den Namen des Column
  */
  @Input()
  public name: any;

  /**
  * Das Input property erhält das Value des Column
  */
  @Input()
  public value: any;

  /**
   * Das Input property erhält das Header des Column
   */
  @Input()
  public header: string;

  /**
   * Das Input property erhält die Breite des Column
   */
  @Input()
  public width: string;

  /**
   * Das Input property erhält das Type des Column
   */
  @Input()
  public type: string;

  /**
   * Das Input property erhält das Column- Key-Word, damit das Column sortiert werden kann.
   */
  @Input()
  public sortkey: string;

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
    if (this.sortkey !== undefined && this.sortkey !== null && this.sortkey !== '') {
      return this.grid.SortBy(this.sortkey);
    }
  }

  /**
   * die Methode ergibt boolean Wert und definiert, ob das Column für Sortierung aktiviert ist, gemäß eingegebene sortKey
   */
  public IsSortedColumn(): boolean {
    return this.grid.sortColumn === this.sortkey;
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

