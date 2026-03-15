import { Directive, Input } from '@angular/core';

/**
 * Basis Komponente für SacWizardItem
 */
@Directive()
export class SacWizardItemCommon {
    // #region Properties

    /**
     * Prüft ob der aktuelle Schritt aktiv ist.
     */
    @Input()
    public active: boolean;

    /**
     * Prüft ob der Schritt disabled ist.
     */
    @Input()
    public disabled = true;

    /**
     * ID-String
     */
    @Input()
    public id: string;

    /**
     * Prüft ob der Schritt abgeschlossen wurde.
     */
    @Input()
    public iscomplete = false;

    /**
     * Label-Property, das angezeigt wird
     */
    @Input()
    public label: string;

    // #endregion Properties
}
