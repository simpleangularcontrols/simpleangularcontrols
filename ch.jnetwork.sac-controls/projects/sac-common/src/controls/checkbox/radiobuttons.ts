import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { SacRadiobuttonCommon } from './radiobutton';
import { Directive, Host, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

/**
 * Base component for SacRadiobuttonsCommon. Extends SacBaseModelControl
 */
@Directive()
export abstract class SacRadiobuttonsCommon extends SacBaseModelControl<any> implements Validator {
    // #region Properties

    /**
     * Radio Buttons Content
     */
    private contentRadiobuttons: SacRadiobuttonCommon[] = [];

    /**
     * Radio button index
     */
    private radioButtonIndex = 0;

    /**
     * Resource key for validation message Required at control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource key for validation message Required in validation summary
     */
    @Input() public validationmessagesummaryrequired: string = this.validationKeyService.ValidationErrorSummaryRequired;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(@Host() formlayout: SacFormLayoutCommon, injector: Injector) {
        super(formlayout, injector);
    }

    // #endregion Constructors

    // #region Public Methods

    /**
     * Getter for radio button index
     * @returns Index of the current radio button
     */
    public GetRadionButtonIndex(): number {
        this.radioButtonIndex++;
        return this.radioButtonIndex;
    }

    /**
     * Method checks if an item is checked
     * @returns Boolean indicating if an item is checked
     */
    public HasCheckedItem(): boolean {
        const radioButtons: SacRadiobuttonCommon[] = this.contentRadiobuttons;

        if (radioButtons === undefined || radioButtons === null) {
            return false;
        }

        return this.contentRadiobuttons.some((itm) => itm.checked);
    }

    /**
     * Register the radio button
     */
    public RegisterRadioButton(radioButton: SacRadiobuttonCommon) {
        this.contentRadiobuttons.push(radioButton);
    }

    /**
     * Select item
     */
    public SelectItem(value: any) {
        this.contentRadiobuttons.forEach((itm) => {
            itm.checked = itm.value === value;
        });

        this.value = value;
    }

    /**
     * Unregister the radio button
     */
    public UnregisterRadioButton(radioButton: SacRadiobuttonCommon) {
        const index: number = this.contentRadiobuttons.indexOf(radioButton);

        if (index >= 0) {
            this.contentRadiobuttons.splice(index, 1);
        }
    }

    /**
     * Validator
     */
    public validateData(c: AbstractControl): ValidationErrors {
        if (!this.HasCheckedItem()) {
            return Validation.GetValidationErrorItem(
                'required',
                this.validationmessagerequired,
                this.validationmessagesummaryrequired,
                this.label
            );
        } else {
            return null;
        }
    }

    /**
     * Write value
     */
    public writeValue(value: any) {
        super.writeValue(value);
        if (value !== null && value !== undefined) {
            this.contentRadiobuttons.forEach((itm) => {
                itm.checked = itm.value === value;
            });
        }
    }

    // #endregion Public Methods
}
