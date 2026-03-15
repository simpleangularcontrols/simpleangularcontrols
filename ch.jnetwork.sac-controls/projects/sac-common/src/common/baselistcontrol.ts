import { SacBaseModelControl } from './basemodelcontrol';
import { Directive, Input, TemplateRef } from '@angular/core';

/**
 * Abstract Klasse für SacBaseListControl. Extendes SacBaseModelControl
 */
@Directive()
export abstract class SacBaseListControl<VALUE> extends SacBaseModelControl<VALUE> {
    // #region Properties

    /**
     * options. Typ: any
     */
    public _options: any[];

    /**
     * Definiert das Control als Required
     */
    @Input() public isrequired = false;

    /**
     * Definiert, ob das Option Element aktiv ist
     */
    @Input() public optionenabled = '';

    /**
     * Definiert das Label für das Option Element
     */
    @Input() public optionlabel = 'label';

    /**
     * Template für Value Element
     */
    @Input()
    public optionlabeltemplate: TemplateRef<any>;

    /**
     * Definiert den Wert für das Option Element
     */
    @Input() public optionvalue = 'value';

    /**
     * Style Breite für List Control Element
     */
    @Input() public width: string = null;

    // #endregion Properties

    // #region Public Getters And Setters

    /**
     * Input property für options
     */
    @Input() public get options(): any[] {
        return this._options;
    }

    /**
     * setter für options
     */
    public set options(val: any[]) {
        this._options = val;
    }

    // #endregion Public Getters And Setters
}
