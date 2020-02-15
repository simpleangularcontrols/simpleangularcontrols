import { AfterContentInit, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgWizardItemCommon } from './wizarditem';

/**
 * Base Komponente für NgWizardCommon
 */
export abstract class NgWizardCommon implements AfterContentInit, ControlValueAccessor {

  /**
  * Aktueller Schritt im Wizard
  */
  private _currentstep: string;

  /**
   * Name des Controls
   */
  @Input('name')
  _name: string = '';

  /**
   * Boolean Property prüft ob Navigation im Wizard disabled ist; default Wert - false
   */
  @Input('disablenavigation')
  _disableNavigation: boolean = false;

  /**
   * Setter und Getter für aktueller Schritt
   */
  @Input('currentstep')
  set currentstep(v: string | null) {
    this.changeStep(v);
    this.propagateChange(this._currentstep);
  }
  get currentstep(): string | null {
    return this._currentstep;
  }
  /**
   * EventEmitter wenn der Schritt geändert wird
   */
  @Output('stepchanged')
  _onStepChanged: EventEmitter<string> = new EventEmitter<string>();


  /**
   * Abstrakte QueryList von NgWizardItemCommon
   */
  abstract wizardItems(): QueryList<NgWizardItemCommon>;

  private setStepInternal(step: string): void {
    this._currentstep = step;
    this.propagateChange(this._currentstep);
  }

  // #region Control initialisieren

  /**
   * AfterContentInit Event
   */
  ngAfterContentInit() {
    this.initSteps();
  }
  /**
   * Ursprünglicher Schritt wird selektiert
   */
  private initSteps(): void {
    const activeStep = this.wizardItems().filter((step) => step._active);

    if (activeStep.length === 0) {
      const initStep: NgWizardItemCommon = this.wizardItems().toArray()[0];
      this.selectStep(initStep);
      initStep._disabled = false;
      this.setStepInternal(initStep._id);
    }
  }

  // #endregion

  /**
   * Schritt selektieren
   * @param step Step welcher selektiert werden soll
   */
  selectStep(step: NgWizardItemCommon): void {

    // Cancel if Navigation disabled
    if (this._disableNavigation) {
      return;
    }

    this.changeStep(step._id);
  }

  /**
   * Auf nächsten/vorherigen Schritt gehen
   * @param step Step auf welchen gewechselt werden soll
   */
  changeStep(step: string | null) {
    if (this.wizardItems() === undefined || this.wizardItems() === null) {
      return;
    }

    const wizardItemsArray: NgWizardItemCommon[] = this.wizardItems().toArray();
    const itemsCount: number = wizardItemsArray.length;
    const currentItemIndex = wizardItemsArray.findIndex(itm => itm._id === step);

    for (let i: number = 0; i < itemsCount; i++) {
      const item: NgWizardItemCommon = wizardItemsArray[i];

      if (i < currentItemIndex) {
        item._iscomplete = true;
      } else {
        item._iscomplete = false;
      }

      if (i > currentItemIndex + 1) {
        item._disabled = true;
      } else {
        item._disabled = false;
      }

      if (i === currentItemIndex) {
        item._active = true;
      } else {
        item._active = false;
      }
    }

    this.setStepInternal(step);
    this._onStepChanged.emit(step);
  }

  /**
   * Leere Implementation von 'propagateChange'. Muss gemacht werden, damit kein Fehler entsteht
   */
  propagateChange: any = () => { };
  /**
   * Leere Implementation von 'propagateTouch'. Muss gemacht werden, damit kein Fehler entsteht
   */
  propagateTouch: any = () => { };


  /**
   * Methode, damit andere Controls änderungen im Control mitbekommen können
   * Zur Änderungsinfo die Methode propagateChange aufrufen.
   */
  registerOnChange(fn: any): void {
    this.propagateChange = (obj) => fn(obj);
  }

  /**
   * Methode, damit andere Controls änderungen mitbekommen, wenn das Control aktiviert (Focus) wird.
   */
  registerOnTouched(fn: any): void {
    this.propagateTouch = (obj) => fn(obj);
  }

  /**
   * Methode zum schreiben von Werten aus dem Model in das Control
   */
  writeValue(value: string | null) {
    if (value) {
      this.changeStep(value);
    }
  }

}
