import { SacWizardItemCommon } from './wizarditem';
import { AfterContentInit, Directive, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

/**
 * Base Komponente für SacWizardCommon
 */
@Directive()
export abstract class SacWizardCommon implements AfterContentInit, ControlValueAccessor {
    // #region Properties

    /**
     * Aktueller Schritt im Wizard
     */
    private _currentstep: string;

    /**
     * Boolean Property prüft ob Navigation im Wizard disabled ist; default Wert - false
     */
    @Input()
    public disablenavigation: boolean = false;

    /**
     * Name des Controls
     */
    @Input()
    public name: string = '';

    /**
     * Leere Implementation von 'propagateChange'. Muss gemacht werden, damit kein Fehler entsteht
     */
    public propagateChange: any = () => {};

    /**
     * Leere Implementation von 'propagateTouch'. Muss gemacht werden, damit kein Fehler entsteht
     */
    public propagateTouch: any = () => {};

    /**
     * EventEmitter wenn der Schritt geändert wird
     */
    @Output()
    public stepchanged: EventEmitter<string> = new EventEmitter<string>();

    // #endregion Properties

    // #region Public Getters And Setters

    public get currentstep(): string | null {
        return this._currentstep;
    }

    /**
     * Setter und Getter für aktueller Schritt
     */
    @Input()
    public set currentstep(v: string | null) {
        this.changeStep(v);
        this.propagateChange(this._currentstep);
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Auf nächsten/vorherigen Schritt gehen
     * @param step Step auf welchen gewechselt werden soll
     */
    public changeStep(step: string | null) {
        if (this.wizardItems() === undefined || this.wizardItems() === null) {
            return;
        }

        const wizardItemsArray: SacWizardItemCommon[] = this.wizardItems().toArray();
        const itemsCount: number = wizardItemsArray.length;
        const currentItemIndex = wizardItemsArray.findIndex((itm) => itm.id === step);

        for (let i: number = 0; i < itemsCount; i++) {
            const item: SacWizardItemCommon = wizardItemsArray[i];

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
     * AfterContentInit Event
     */
    public ngAfterContentInit() {
        this.initSteps();
    }

    /**
     * Methode, damit andere Controls änderungen im Control mitbekommen können
     * Zur Änderungsinfo die Methode propagateChange aufrufen.
     */
    public registerOnChange(fn: any): void {
        this.propagateChange = (obj) => fn(obj);
    }

    /**
     * Methode, damit andere Controls änderungen mitbekommen, wenn das Control aktiviert (Focus) wird.
     */
    public registerOnTouched(fn: any): void {
        this.propagateTouch = (obj) => fn(obj);
    }

    /**
     * Schritt selektieren
     * @param step Step welcher selektiert werden soll
     */
    public selectStep(step: SacWizardItemCommon): void {
        // Cancel if Navigation disabled
        if (this.disablenavigation) {
            return;
        }

        this.changeStep(step.id);
    }

    /**
     * Abstrakte QueryList von SacWizardItemCommon
     */
    public abstract wizardItems(): QueryList<SacWizardItemCommon>;

    /**
     * Methode zum schreiben von Werten aus dem Model in das Control
     */
    public writeValue(value: string | null) {
        if (value) {
            this.changeStep(value);
        }
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Ursprünglicher Schritt wird selektiert
     */
    private initSteps(): void {
        const activeStep = this.wizardItems().filter((step) => step.active);

        if (activeStep.length === 0) {
            const initStep: SacWizardItemCommon = this.wizardItems().toArray()[0];
            this.selectStep(initStep);
            initStep.disabled = false;
            this.setStepInternal(initStep.id);
        }
    }

    private setStepInternal(step: string): void {
        this._currentstep = step;
        this.propagateChange(this._currentstep);
    }

    // #endregion Private Methods
}
