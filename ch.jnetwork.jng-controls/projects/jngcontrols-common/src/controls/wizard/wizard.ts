import { AfterContentInit, Directive, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgWizardItemCommon } from './wizarditem';

/**
 * Base Komponente für NgWizardCommon
 */
@Directive()
export abstract class NgWizardCommon implements AfterContentInit, ControlValueAccessor {

  /**
  * Aktueller Schritt im Wizard
  */
  private _currentstep: string;

  /**
   * Name des Controls
   */
  @Input()
  name: string = '';

  /**
   * Boolean Property prüft ob Navigation im Wizard disabled ist; default Wert - false
   */
  @Input()
  disablenavigation: boolean = false;

  /**
   * Setter und Getter für aktueller Schritt
   */
  @Input()
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
  @Output()
  stepchanged: EventEmitter<string> = new EventEmitter<string>();


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
    const activeStep = this.wizardItems().filter((step) => step.active);

    if (activeStep.length === 0) {
      const initStep: NgWizardItemCommon = this.wizardItems().toArray()[0];
      this.selectStep(initStep);
      initStep.disabled = false;
      this.setStepInternal(initStep.id);
    }
  }

  // #endregion

  /**
   * Schritt selektieren
   * @param step Step welcher selektiert werden soll
   */
  selectStep(step: NgWizardItemCommon): void {

    // Cancel if Navigation disabled
    if (this.disablenavigation) {
      return;
    }

    this.changeStep(step.id);
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
    const currentItemIndex = wizardItemsArray.findIndex(itm => itm.id === step);

    for (let i: number = 0; i < itemsCount; i++) {
      const item: NgWizardItemCommon = wizardItemsArray[i];

      if (i < currentItemIndex) {
        item.iscomplete = true;
      } else {
        item.iscomplete = false;
      }

      if (i > currentItemIndex + 1) {
        item.disabled = true;
      } else {
        item.disabled = false;
      }

      if (i === currentItemIndex) {
        item.active = true;
      } else {
        item.active = false;
      }
    }

    this.setStepInternal(step);
    this.stepchanged.emit(step);
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
