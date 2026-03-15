import { SacInputBase } from '../../common/baseinputcontrol';
import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Common Klasse für Static Label Control
 **/
@Directive()
export class SacStaticLabelCommon extends SacInputBase<string> {
    // #region Properties

    /**
     * Erlaubt HTML Content in der Anzeige des Wertes
     */
    @Input()
    public allowhtml = false;

    // #endregion Properties

    // #region Public Methods

    /**
     * Validierung des Controls
     *
     * @param c Control das Validiert werden soll
     * @returns Fehlermeldung aus Validation oder NULL
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        // Keine Validierung, daher immer NULL
        return null;
    }

    // #endregion Public Methods
}
