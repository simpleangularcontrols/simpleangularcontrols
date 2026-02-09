import { ControlHeight } from '../enums/ControlHeight';

/**
 * interface for service which provides global configuration settings to components
 */
export interface ISacConfigurationService {
    // #region Properties

    /**
     * Defines the default display for a checkbox. You can choose between a checkbox and a switch.
     */
    CheckboxStyle: 'checkbox' | 'switch';

    /**
     * Defines the standard height of the components
     */
    ComponentHeight: ControlHeight | null;

    /**
     * Defines the standard text for currencies. e.g. $, €, CHF
     */
    CurrencyText: string;

    /**
     * Activates an E2E data attribute on all controls that can be used for testing.
     */
    EnableE2EAttributes: boolean;

    /**
     * Mode for display helptext
     */
    HelptextMode: 'tooltip' | 'text';

    /**
     * Activates the error messages below the controls
     */
    InlineErrorEnabled: boolean;

    /**
     * Defines if InputSearch uses an icon at the button or the text
     */
    InputSearchIconMode: 'text' | 'icon' | 'mixed';

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
    LabelSizeLg: number | null;

    /**
     * default label size for medium devices
     */
    LabelSizeMd: number | null;

    /**
     * default label size for small devices
     */
    LabelSizeSm: number | null;

    /**
     * default label size for extra large devices
     */
    LabelSizeXl: number | null;

    /**
     * default label column size
     */
    LabelSizeXs: number | null;

    /**
     * default label size for extra extra large devices
     */
    LabelSizeXxl: number | null;

    /**
     * Detach label text and tooltip from each other in Label so that label and tooltip can be aligned differently. This is in Bootstrap 3 not supported!
     */
    SplitLabelAndHelptext: boolean;

    // #endregion Properties
}
