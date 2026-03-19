import { Injectable } from '@angular/core';
import { ControlHeight, SacAbstractConfigurationService } from '@simpleangularcontrols/sac-common';

@Injectable({
    providedIn: 'root',
})
export class CustomConfigurationService extends SacAbstractConfigurationService {
    // #region Public Getters And Setters

    /**
     * Returns the checkbox rendering style.
     */
    public get CheckboxStyle(): 'checkbox' | 'switch' {
        return 'checkbox';
    }

    /**
     * Returns the default control height.
     */
    public get ComponentHeight(): ControlHeight | null {
        return ControlHeight.Default;
    }

    /**
     * Returns the default currency text.
     */
    public get CurrencyText(): string {
        return 'CHF';
    }

    /**
     * Defines whether E2E attributes are enabled.
     */
    public get EnableE2EAttributes(): boolean {
        return true;
    }

    /**
     * Returns the helptext display mode.
     */
    public get HelptextMode(): 'tooltip' | 'text' {
        return 'text';
    }

    /**
     * Defines whether inline validation errors are enabled.
     */
    public get InlineErrorEnabled(): boolean {
        return true;
    }

    /**
     * Returns how the search icon is rendered in search inputs.
     */
    public get InputSearchIconMode(): 'text' | 'icon' | 'mixed' {
        return 'text';
    }

    /**
     * Returns the default label mode.
     */
    public get LabelMode(): 'standard' | 'floating' {
        return 'standard';
    }

    /**
     * Returns the default label size for large breakpoints.
     */
    public get LabelSizeLg(): number | null {
        return 3;
    }

    /**
     * Returns the default label size for medium breakpoints.
     */
    public get LabelSizeMd(): number | null {
        return 4;
    }

    /**
     * Returns the default label size for small breakpoints.
     */
    public get LabelSizeSm(): number | null {
        return 4;
    }

    /**
     * Returns the default label size for extra large breakpoints.
     */
    public get LabelSizeXl(): number | null {
        return 2;
    }

    /**
     * Returns the default label size for extra small breakpoints.
     */
    public get LabelSizeXs(): number | null {
        return 12;
    }

    /**
     * Returns the default label size for extra extra large breakpoints.
     */
    public get LabelSizeXxl(): number | null {
        return 2;
    }

    /**
     * Defines whether label and helptext are split in the layout.
     */
    public get SplitLabelAndHelptext(): boolean {
        return false;
    }

    // #endregion Public Getters And Setters
}
