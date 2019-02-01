import { AfterContentInit, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgWizardItemCommon } from './wizarditem';

export abstract class NgWizardCommon implements AfterContentInit, ControlValueAccessor {

  abstract wizardItems(): QueryList<NgWizardItemCommon>;

  @Input("name")
  _name: string = "";

  @Input("disablenavigation")
  _disableNavigation: boolean = false;

  private _currentstep: string;

  @Input("currentstep")
  set currentstep(v: string | null) {
    this.changeStep(v);
    this.propagateChange(this._currentstep);
  }
  get currentstep(): string | null {
    return this._currentstep;
  }

  @Output("stepchanged")
  _onStepChanged: EventEmitter<string> = new EventEmitter<string>();

  private setStepInternal(step: string): void {
    this._currentstep = step;
    this.propagateChange(this._currentstep);
  }

  // #region Control initialisieren

  ngAfterContentInit() {
    this.initSteps();
  }

  private initSteps(): void {
    let activeStep = this.wizardItems().filter((step) => step._active);

    if (activeStep.length === 0) {
      let initStep: NgWizardItemCommon = this.wizardItems().toArray()[0];
      this.selectStep(initStep);
      initStep._disabled = false;
      this.setStepInternal(initStep._id);
    }
  }

  // #endregion

  selectStep(step: NgWizardItemCommon): void {

    // Cancel if Navigation disabled
    if (this._disableNavigation)
      return;

    this.changeStep(step._id);
  }

  changeStep(step: string | null) {
    if (this.wizardItems() === undefined || this.wizardItems() === null)
      return;

    let wizardItemsArray: NgWizardItemCommon[] = this.wizardItems().toArray();
    let itemsCount: number = wizardItemsArray.length;
    let currentItemIndex = wizardItemsArray.findIndex(itm => itm._id === step);

    for (let i: number = 0; i < itemsCount; i++) {
      let item: NgWizardItemCommon = wizardItemsArray[i];

      if (i < currentItemIndex)
        item._iscomplete = true;
      else
        item._iscomplete = false;

      if (i > currentItemIndex + 1)
        item._disabled = true;
      else
        item._disabled = false;

      if (i == currentItemIndex)
        item._active = true;
      else
        item._active = false;
    }

    this.setStepInternal(step);
    this._onStepChanged.emit(step);
  }

  // Leere Implementation von "propagateChange". Muss gemacht werden, damit kein Fehler entsteht
  propagateChange: any = () => { };
  // Leere Implementation von "propagateTouch". Muss gemacht werden, damit kein Fehler entsteht
  propagateTouch: any = () => { };


 // Methode, damit andere Controls änderungen im Control mitbekommen können
  // Zur Änderungsinfo die Methode propagateChange aufrufen.
  registerOnChange(fn: any): void {
    this.propagateChange = (obj) => fn(obj);
  }

  // Methode, damit andere Controls änderungen mitbekommen, wenn das Control aktiviert (Focus) wird.
  registerOnTouched(fn: any): void {
    this.propagateTouch = (obj) => fn(obj);
  }

  // Methode zum schreiben von Werten aus dem Model in das Control
  writeValue(value: string|null) {
    if (value) {
      this.changeStep(value);
    }
  }

}
