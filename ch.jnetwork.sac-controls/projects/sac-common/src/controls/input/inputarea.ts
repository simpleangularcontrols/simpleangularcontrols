import { SacInputCommon } from './input';
import { Directive, Input } from '@angular/core';

/**
 * Base component for SacInputArea
 */
@Directive()
export class SacInputAreaCommon extends SacInputCommon {
    // #region Properties

    /**
     * Property where custom CSS classes can be defined on the form control.
     */
    @Input() public customcssclass = '';

    /**
     * Defines the height of the textarea box. Normally empty, as height can also be set via rows.
     */
    @Input() public height: string = null;

    /**
     * Defines the number of rows for the textarea box.
     */
    @Input() public rows = 5;

    // #endregion Properties

    // #region Public Getters And Setters

    /**
     * Getter for the length of the input
     */
    public get _currentLength(): number {
        if (this.value === null || this.value === undefined) {
            return 0;
        } else {
            return this.value.length + this.value.split(/\r|\n/).length - 1;
        }
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Method returns 'true' when a key is pressed and maxtextlength is not defined
     */
    public onKeyPress(event: KeyboardEvent): Boolean {
        // Exist if MaxTextLength not defined
        if (this.maxtextlength === undefined || this.maxtextlength === null) {
            return true;
        }

        if (
            this._currentLength >= this.maxtextlength ||
            ((event.key === 'Enter' || event.key === ' ') && this._currentLength + 1 >= this.maxtextlength)
        ) {
            event.preventDefault();
        }
    }

    // #endregion Public Methods
}
