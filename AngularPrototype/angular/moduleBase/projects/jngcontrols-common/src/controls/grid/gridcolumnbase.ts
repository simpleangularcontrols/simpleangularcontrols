import { Input, ElementRef, OnInit, Directive, OnDestroy } from '@angular/core';
import { NgGridCommon } from './grid';

export class NgGridColumnBaseCommon implements OnInit, OnDestroy {
 
  constructor(private grid: NgGridCommon, private el: ElementRef) {
  }

  //#region Interface Implementations

  ngOnInit() {
    let rootElement: HTMLElement = this.el.nativeElement;
    let parentElement: HTMLElement = rootElement.parentElement;

    while (rootElement.firstChild) {
      parentElement.insertBefore(rootElement.firstChild, rootElement);
    }

    parentElement.removeChild(rootElement);

    if (this.IsHeader()) {
      this.grid.RegisterColumn();
    }
  }

  ngOnDestroy(): void {
    if (this.IsHeader()) {
      this.grid.UnregisterColumn();
    }
  }

  //#endregion

  //#region InputOutputs

  @Input("value")
  public value: any;

  @Input("header")
  public header: string;

  @Input("width")
  public width: string;

  @Input("type")
  public type: string;

  //#endregion

  //#region Type Handling

  public IsHeader(): boolean {
    return this.type === 'header';
  }

  public IsBody(): boolean {
    return this.type === 'body';
  }

  public IsFooter(): boolean {
    return this.type === 'footer';
  }

  //#endregion

}

