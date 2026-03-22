import { SacBaseModelControl } from './basemodelcontrol';
import { Directive, Input, TemplateRef } from '@angular/core';

/**
 * Abstract class for SacBaseListControl. Extends SacBaseModelControl
 */
@Directive()
export abstract class SacBaseListControl<VALUE> extends SacBaseModelControl<VALUE> {
    // #region Properties

    /**
     * options. Typ: any
     */
    public _options: any[];

    /**
     * Defines the control as required
     */
    @Input() public isrequired = false;

    /**
     * Defines whether the option element is active
     */
    @Input() public optionenabled = '';

    /**
     * Defines the label for the option element
     */
    @Input() public optionlabel = 'label';

    /**
     * Template for value element
     */
    @Input()
    public optionlabeltemplate: TemplateRef<any>;

    /**
     * Defines the value for the option element
     */
    @Input() public optionvalue = 'value';

    /**
     * Style width for list control element
     */
    @Input() public width: string = null;

    // #endregion Properties

    // #region Public Getters And Setters

    /**
     * Input property for options
     */
    @Input() public get options(): any[] {
        return this._options;
    }

    /**
     * Setter for options
     */
    public set options(val: any[]) {
        this._options = val;
    }

    // #endregion Public Getters And Setters
}
