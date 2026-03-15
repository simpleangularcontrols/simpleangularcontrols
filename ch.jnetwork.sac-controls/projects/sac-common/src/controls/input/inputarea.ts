import { SacInputCommon } from './input';
import { Directive, Input } from '@angular/core';

/**
 * Basis Komponente für SacInputArea
 */
@Directive()
export class SacInputAreaCommon extends SacInputCommon {
    // #region Properties

    /**
     * Property mit dem Custom CSS Klassen auf dem Form-Control definiert werden können.
     */
    @Input() public customcssclass = '';

    /**
     * Definiert die Höhe der TextArea Box. Ist normalfall leer, da Höhe auch über Rows gesetzt werden kann.
     */
    @Input() public height: string = null;

    /**
     * Definiert die Höhe der TextArea Box.
     */
    @Input() public rows = 5;

    // #endregion Properties

    // #region Public Getters And Setters

    /**
     * Getter für die Länge des Inputs
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
     * Methode wird 'true' ergeben wenn ein Key gedrückt wird und maxtextlength ist nicht definiert
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
