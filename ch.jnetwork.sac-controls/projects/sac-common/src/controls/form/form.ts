import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NgForm } from '@angular/forms';

// #region Exported Classes

/**
 * Base component for SacForm
 */
@Directive()
export class SacFormCommon {
    // #region Properties

    /**
     * Default value for when values are updated via NgModel
     */
    private _updateon: FormHooks = 'change';

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param form Instance of NgForm
     */
    constructor(private form: NgForm) {
        this.form.options = { updateOn: this._updateon };
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    public get updateon(): FormHooks {
        return this._updateon;
    }

    /**
     * Defines when the model is updated
     */
    @Input()
    public set updateon(v: FormHooks) {
        this._updateon = v;
        this.form.options.updateOn = v;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Returns the NgForm instance
     * @returns The NgForm instance
     */
    public getForm(): NgForm {
        return this.form;
    }

    /**
     * Marks all controls within the form as touched
     */
    public markAsTouched(): void {
        if (this.form && this.form.invalid) {
            this.markAsTouchedInternal(this.form.controls);
        }
    }

    /**
     * Updates the values and validity status of the form
     */
    public updateValueAndValidity(markAsTouched = true): void {
        // Update all Controls
        this.updateValueAndValidityInternal(this.form.controls);
        // Update Main Form
        this.getForm().form.updateValueAndValidity();

        // Mark all Controls as Touched
        if (markAsTouched) {
            this.markAsTouched();
        }
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Marks all controls including the tree as touched
     * @param controls Controls collection
     */
    private markAsTouchedInternal(controls: { [key: string]: AbstractControl }) {
        const keyList: string[] = Object.keys(controls);

        for (const field of keyList) {
            const control = controls[field];
            if (control instanceof FormGroup) {
                this.markAsTouchedInternal(control.controls);
            } else {
                control.markAsTouched({ onlySelf: true });
            }
        }
    }

    /**
     * Updates the values and validity of the form
     * @param controls Controls collection
     */
    private updateValueAndValidityInternal(controls: { [key: string]: AbstractControl }) {
        const keyList: string[] = Object.keys(controls);

        for (const field of keyList) {
            const control = controls[field];
            if (control instanceof FormGroup) {
                this.updateValueAndValidityInternal(control.controls);
            } else {
                control.updateValueAndValidity({ onlySelf: true });
            }
        }
    }

    // #endregion Private Methods
}

// #endregion Exported Classes

// #region Exported Types

/**
 * Type for form actions
 */
export type FormHooks = 'change' | 'blur' | 'submit';

// #endregion Exported Types
