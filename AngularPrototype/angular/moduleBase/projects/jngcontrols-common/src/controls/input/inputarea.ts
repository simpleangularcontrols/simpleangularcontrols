import { Input, } from "@angular/core";
import { NgInputCommon } from "./input";
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NgInputAreaCommon extends NgInputCommon {

  /**
   * Definiert die Höhe der TextArea Box.
   */
  @Input("rows") _rows: number = 5;

  /**
   * Definiert die Höhe der TextArea Box. Ist normalfall leer, da Höhe auch über Rows gesetzt werden kann.
   */
  @Input("height") _height: string = null;

  /**
   * Property mit dem Custom CSS Klassen auf dem Form-Control definiert werden können.
   */
  @Input("customCssClass") _customClasses: string = '';

  /**
   * Getter für die Länge des Inputs
   */
  get _currentLength(): number {
    if (this.value === null || this.value === undefined)
      return 0;
    else
      return this.value.length + this.value.split(/\r|\n/).length - 1;
  }

  /**
   * Methode wird 'true' ergeben wenn ein Key gedrückt wird und maxlength ist nicht definiert
   */
  public onKeyPress(event: KeyboardEvent): Boolean {
    // Exist if MaxLength not defined
    if (this._maxlength === undefined || this._maxlength === null)
      return true;

    if (this._currentLength >= this._maxlength || ((event.keyCode === 13 || event.keyCode === 10) && this._currentLength + 1 >= this._maxlength))
      event.preventDefault();
  }
}
