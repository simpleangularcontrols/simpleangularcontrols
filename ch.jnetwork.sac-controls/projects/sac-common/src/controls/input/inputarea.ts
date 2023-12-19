import { Directive, Input } from '@angular/core';
import { SacInputCommon } from './input';

/**
 * Basis Komponente für SacInputArea
 */
@Directive()
export class SacInputAreaCommon extends SacInputCommon {

  /**
   * Definiert die Höhe der TextArea Box.
   */
  @Input() rows: number = 5;

  /**
   * Definiert die Höhe der TextArea Box. Ist normalfall leer, da Höhe auch über Rows gesetzt werden kann.
   */
  @Input() height: string = null;

  /**
   * Property mit dem Custom CSS Klassen auf dem Form-Control definiert werden können.
   */
  @Input() customcssclass: string = '';

  /**
   * Getter für die Länge des Inputs
   */
  get _currentLength(): number {
    if (this.value === null || this.value === undefined) {
      return 0;
    } else {
      return this.value.length + this.value.split(/\r|\n/).length - 1;
    }
  }

  /**
   * Methode wird 'true' ergeben wenn ein Key gedrückt wird und maxlength ist nicht definiert
   */
  public onKeyPress(event: KeyboardEvent): Boolean {
    // Exist if MaxLength not defined
    if (this.maxlength === undefined || this.maxlength === null) {
      return true;
    }

    if (this._currentLength >= this.maxlength || ((event.key === 'Enter' || event.key === ' ') && this._currentLength + 1 >= this.maxlength)) {
      event.preventDefault();
    }
  }
}
