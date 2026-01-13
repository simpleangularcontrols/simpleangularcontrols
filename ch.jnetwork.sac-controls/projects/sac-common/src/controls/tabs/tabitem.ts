import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';

/**
 * Die Basis Komponente für SacTabItem
 */
@Directive()
export class SacTabItemCommon {
    // #region Properties

    /**
     * Boolean Property prüft ob das Tab aktiv ist
     */
    @Input()
    public active: boolean = false;

    /**
     * Boolean Property prüft ob das Tab disabled ist
     */
    @Input()
    public disabled: boolean = false;

    /**
     * ID-String
     */
    @Input()
    public id: string;

    /**
     * Label Text vom Control
     */
    @Input()
    public label: string;

    /**
     * ContentChild Decorator
     */
    @ContentChild(TemplateRef, { static: true })
    public templateRef: TemplateRef<any>;

    /**
     * Das Input property ekzeptiert boolen Wert. Default ist true. Definiert, ob die Komponente hidden sein sollte.
     */
    @Input()
    public unloadwhenhidden: boolean = true;

    // #endregion Properties
}
