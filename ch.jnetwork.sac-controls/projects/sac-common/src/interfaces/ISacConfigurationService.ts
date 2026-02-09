import { ControlHeight } from '../enums/ControlHeight';

/**
 * interface for service which provides global configuration settings to components
 */
export interface ISacConfigurationService {
    // #region Getters And Setters

    /**
     * Defines the default display for a checkbox. You can choose between a checkbox and a switch.
     */
    get CheckboxStyle(): 'checkbox' | 'switch';

    /**
     * Defines the standard height of the components
     */
    get ComponentHeight(): ControlHeight | null;

    /**
     * Defines the standard text for currencies. e.g. $, €, CHF
     */
    get CurrencyText(): string;

    /**
     * Activates an E2E data attribute on all controls that can be used for testing.
     */
    get EnableE2EAttributes(): boolean;

    /**
     * Mode for display helptext
     */
    get HelptextMode(): 'tooltip' | 'text';

    /**
     * Activates the error messages below the controls
     */
    get InlineErrorEnabled(): boolean;

    /**
     * Defines if InputSearch uses an icon at the button or the text
     */
    get InputSearchIconMode(): 'text' | 'icon' | 'mixed';

    /**
     * Defines the default label mode for all components with labels
     *
     * Options are 'standard' and 'floating'
     * Floating labels are only supported in Bootstrap 5
     * Default is 'standard'
     */
    get LabelMode(): 'standard' | 'floating';

    /**
     * default labe size for large devices
     */
    get LabelSizeLg(): number | null;

    /**
     * default label size for medium devices
     */
    get LabelSizeMd(): number | null;

    /**
     * default label size for small devices
     */
    get LabelSizeSm(): number | null;

    /**
     * default label size for extra large devices
     */
    get LabelSizeXl(): number | null;

    /**
     * default label column size
     */
    get LabelSizeXs(): number | null;

    /**
     * default label size for extra extra large devices
     */
    get LabelSizeXxl(): number | null;

    /**
     * Detach label text and tooltip from each other in Label so that label and tooltip can be aligned differently. This is in Bootstrap 3 not supported!
     */
    get SplitLabelAndHelptext(): boolean;

    // #endregion Getters And Setters
}
