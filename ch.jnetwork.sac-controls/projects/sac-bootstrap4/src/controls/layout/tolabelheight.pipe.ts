import { Pipe, PipeTransform } from '@angular/core';
import { ControlHeight } from '@simpleangularcontrols/sac-common';

/**
 * Converts ControlHeight values into bootstrap label height CSS classes.
 */
@Pipe({
    name: 'toLabelHeight',
})
export class SacToLabelHeightPipe implements PipeTransform {
    // #region Public Methods

    /**
     * Returns the CSS class that defines the height for the control
     * @param value ControlHeight value or null
     */
    public transform(value: ControlHeight | null): string {
        // Return default value
        if (!value) {
            return '';
        }

        switch (value) {
            case ControlHeight.Small:
                return 'col-form-label-sm';
            case ControlHeight.Large:
                return 'col-form-label-lg';
            default:
                return '';
        }
    }

    // #endregion Public Methods
}
