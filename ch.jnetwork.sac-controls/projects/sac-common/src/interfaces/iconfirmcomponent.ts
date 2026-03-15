import { EventEmitter } from '@angular/core';

/**
 * Interface für Comfirm Dialog implementation
 */
export interface IConfirmComponent {
    // #region Properties

    /**
     * EventEmitter beim Bestätigen
     */
    onconfirm: EventEmitter<string>;

    // #endregion Properties

    // #region Methods

    /**
     * Ausblenden
     */
    hide(): void;

    /**
     * Anzeigen
     */
    show(): void;

    // #endregion Methods
}
