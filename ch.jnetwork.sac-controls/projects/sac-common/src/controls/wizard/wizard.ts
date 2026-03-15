import { SacWizardItemCommon } from './wizarditem';
import { AfterContentInit, Directive, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

/**
 * Base component for SacWizardCommon
 */
@Directive()
export abstract class SacWizardCommon implements AfterContentInit, ControlValueAccessor {
    // #region Properties

    /**
     * Current step in wizard
     */
    private _currentstep: string;

    /**
     * Boolean property checks if navigation in wizard is disabled; default value - false
     */
    @Input()
    public disablenavigation = false;

    /**
     * Name of the control
     */
    @Input()
    public name = '';

    /**
     * Empty implementation of 'propagateChange'. Must be done so that no error occurs
     */
    public propagateChange: any = () => {};

    /**
     * Empty implementation of 'propagateTouch'. Must be done so that no error occurs
     */
    public propagateTouch: any = () => {};

    /**
     * EventEmitter when the step is changed
     */
    @Output()
    public stepchanged: EventEmitter<string> = new EventEmitter<string>();

    // #endregion Properties

    // #region Public Getters And Setters

    public get currentstep(): string | null {
        return this._currentstep;
    }

    /**
     * Setter and getter for current step
     */
    @Input()
    public set currentstep(v: string | null) {
        this.changeStep(v);
        this.propagateChange(this._currentstep);
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Go to next/previous step
     * @param step Step to which should be switched
     */
    public changeStep(step: string | null) {
        if (this.wizardItems() === undefined || this.wizardItems() === null) {
            return;
        }

        const wizardItemsArray: SacWizardItemCommon[] = this.wizardItems().toArray();
        const itemsCount: number = wizardItemsArray.length;
        const currentItemIndex = wizardItemsArray.findIndex((itm) => itm.id === step);

        for (let i = 0; i < itemsCount; i++) {
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
     * Method so that other controls can get changes in the control
     * To change info call the propagateChange method.
     */
    public registerOnChange(fn: any): void {
        this.propagateChange = (obj) => fn(obj);
    }

    /**
     * Method so that other controls get changes when the control is activated (Focus).
     */
    public registerOnTouched(fn: any): void {
        this.propagateTouch = (obj) => fn(obj);
    }

    /**
     * Select step
     * @param step Step which should be selected
     */
    public selectStep(step: SacWizardItemCommon): void {
        // Cancel if Navigation disabled
        if (this.disablenavigation) {
            return;
        }

        this.changeStep(step.id);
    }

    /**
     * Abstract QueryList of SacWizardItemCommon
     */
    public abstract wizardItems(): QueryList<SacWizardItemCommon>;

    /**
     * Method to write values from the model into the control
     */
    public writeValue(value: string | null) {
        if (value) {
            this.changeStep(value);
        }
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Original step is selected
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

    /**
     * Sets the current step internally and notifies observers of the change
     * @param step The step ID to set as current
     */
    private setStepInternal(step: string): void {
        this._currentstep = step;
        this.propagateChange(this._currentstep);
    }

    // #endregion Private Methods
}
