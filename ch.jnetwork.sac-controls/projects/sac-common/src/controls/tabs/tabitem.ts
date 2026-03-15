import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';

/**
 * The base component for SacTabItem
 */
@Directive()
export class SacTabItemCommon {
    // #region Properties

    /**
     * Boolean property checks if the tab is active
     */
    @Input()
    public active = false;

    /**
     * Boolean property checks if the tab is disabled
     */
    @Input()
    public disabled = false;

    /**
     * ID string
     */
    @Input()
    public id: string;

    /**
     * Label text of the control
     */
    @Input()
    public label: string;

    /**
     * ContentChild decorator
     */
    @ContentChild(TemplateRef, { static: true })
    public templateRef: TemplateRef<any>;

    /**
     * The input property accepts a boolean value. Default is true. Defines whether the component should be hidden.
     */
    @Input()
    public unloadwhenhidden = true;

    // #endregion Properties
}
