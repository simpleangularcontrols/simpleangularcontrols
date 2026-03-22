import { SacBaseModelControl } from './basemodelcontrol';
import { Directive, Input } from '@angular/core';

/**
 * Abstract class for SacInputBase. Extends SacBaseModelControl
 */
@Directive()
export abstract class SacInputBase<VALUE> extends SacBaseModelControl<VALUE> {
    // #region Properties

    /**
     * Allowed characters for input
     */
    @Input() public allowedchars = '';

    /**
     * Enable or disable autofill
     */
    @Input() public disableautocomplete = false;

    /**
     * Defines the control as required
     */
    @Input() public isrequired = false;

    /**
     * TextBox Placeholder
     */
    @Input() public placeholder: string = null;

    /**
     * Makes the input readonly
     */
    @Input() public readonly = false;

    /**
     * Defines the field as valid/invalid by entered regex pattern
     */
    @Input() public regexvalidation: string;

    // #endregion Properties

    // #region Public Methods

    /**
     * Method validates input when keypress event occurs
     * @param event Keyboard event object
     * @returns Boolean indicating whether the event should propagate
     */
    public onKeyPress(event: KeyboardEvent): Boolean {
        // Cancel if _allowedChars is empty.
        if (this.allowedchars.length === 0) {
            return true;
        }

        // Validate Input
        const character = event.key;
        // Character not found in allowed chars, do not propagate event
        if (this.allowedchars.indexOf(character) < 0) {
            event.preventDefault();
        }

        const inputControl = event.target as HTMLInputElement;

        if (!this.OnKeyPressValidation(inputControl.selectionStart, character)) {
            event.preventDefault();
        }
    }

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * Method validates when a keypress event occurs
     */
    protected OnKeyPressValidation(position: number, character: string): boolean {
        return true;
    }

    // #endregion Protected Methods
}
