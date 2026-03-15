import { IConfirmComponent } from '../../interfaces/iconfirmcomponent';
import { SacConfirmButton } from './confirm.button';
import { Directive, EventEmitter, Input, Output } from '@angular/core';

/**
 * Base class for Confirm Dialog
 */
@Directive()
export class SacConfirmCommon implements IConfirmComponent {
    // #region Properties

    /**
     * Array with buttons displayed in the dialog.
     */
    @Input()
    public buttons: SacConfirmButton[] = [];

    /**
     * Icon displayed on the dialog
     */
    @Input()
    public image = '';

    /**
     * Defines whether the dialog is visible
     */
    public isvisible = false;

    /**
     * Message displayed on the dialog
     */
    @Input()
    public message = '';

    /**
     * Event when dialog is closed
     */
    @Output()
    public onconfirm: EventEmitter<string> = new EventEmitter<string>();

    /**
     * Dialog title for Confirm Dialog
     */
    @Input()
    public title = '';

    // #endregion Properties

    // #region Public Methods

    /**
     * Action when a button on the dialog is clicked. Triggers the EventEmitter and hides the dialog.
     * @param action
     */
    public confirm(action: string): void {
        this.onconfirm.emit(action);
        this.isvisible = false;
    }

    /**
     * Defines whether an image is set for the dialog
     */
    public hasImage(): boolean {
        return this.image !== '';
    }

    /**
     * Hides the dialog
     */
    public hide(): void {
        this.isvisible = false;
    }

    /**
     * Shows the dialog
     */
    public show(): void {
        this.isvisible = true;
    }

    // #endregion Public Methods
}
