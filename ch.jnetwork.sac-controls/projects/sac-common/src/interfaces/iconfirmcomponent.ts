import { EventEmitter } from '@angular/core';

/**
 * Interface for Confirm Dialog implementation
 */
export interface IConfirmComponent {
    // #region Properties

    /**
     * EventEmitter on confirmation
     */
    onconfirm: EventEmitter<string>;

    // #endregion Properties

    // #region Methods

    /**
     * Hide
     */
    hide(): void;

    /**
     * Show
     */
    show(): void;

    // #endregion Methods
}
