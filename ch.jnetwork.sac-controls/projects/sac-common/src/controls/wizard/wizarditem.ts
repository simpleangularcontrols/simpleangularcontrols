import { Directive, Input } from '@angular/core';

/**
 * Base component for SacWizardItem
 */
@Directive()
export class SacWizardItemCommon {
    // #region Properties

    /**
     * Checks if the current step is active.
     */
    @Input()
    public active: boolean;

    /**
     * Checks if the step is disabled.
     */
    @Input()
    public disabled = true;

    /**
     * ID-String
     */
    @Input()
    public id: string;

    /**
     * Checks if the step was completed.
     */
    @Input()
    public iscomplete = false;

    /**
     * Label property that is displayed
     */
    @Input()
    public label: string;

    // #endregion Properties
}
