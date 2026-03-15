import { SacInputBase } from '../../common/baseinputcontrol';
import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Common class for static label control
 **/
@Directive()
export class SacStaticLabelCommon extends SacInputBase<string> {
    // #region Properties

    /**
     * Allows HTML content in the display of the value
     */
    @Input()
    public allowhtml = false;

    // #endregion Properties

    // #region Public Methods

    /**
     * Validation of the control
     *
     * @param c Control to be validated
     * @returns Error message from validation or null
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        // No validation, therefore always null
        return null;
    }

    // #endregion Public Methods
}
