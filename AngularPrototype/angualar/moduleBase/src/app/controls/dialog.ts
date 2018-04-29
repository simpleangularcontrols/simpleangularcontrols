import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import * as $ from "jquery";
// declare var jQuery: any;

@Component({
  selector: 'ngDialog',
  templateUrl: './dialog.html'
})
export class NgDialog implements AfterViewInit {

  private baseElement: ElementRef;
  private modal: any;
  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(private el: ElementRef) {
    this.baseElement = el;
  }

  // $carousel: JQuery | any;

  // #endregion

  ngAfterViewInit() {
    this.modal = jQuery(this.baseElement.nativeElement.firstChild);
    this.modal.modal({ show: this._show, backdrop: this._backdrop, keyboard: this._allowesc });

    this.modal.on('shown.bs.modal', (e) => {
      this._show = true;
    })

    this.modal.on('hidden.bs.modal', (e) => {
      this._show = false;
    })
  }

  private _show: boolean = false;

  @Input("title")
  public _title: string = "Dialog";

  @Input("allowesc")
  public _allowesc: boolean = true;

  @Input("backdrop")
  public _backdrop: boolean = true;

  @Input("isvisible")
  set isVisible(v: boolean) {
    this._show = v;

    // Abbrechen wenn Modal noch nicht initialisert
    if (this.modal === undefined) {
      return;
    }

    if (v === true) {
      this.modal.modal('show');
    } else {
      this.modal.modal('hide');
    }
  }

  @Input("animation")
  public _animation: boolean = false;

  // Get Methode für NgModel Binding in Html Markup
  get isVisible(): boolean {
    return this._show;
  }

  public show(): void {
    this.isVisible = true;
  }

  public hide(): void {
    this.isVisible = false;
  }
}

