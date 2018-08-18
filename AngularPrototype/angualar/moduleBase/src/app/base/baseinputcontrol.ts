import { NgBaseModelControl } from "./basemodelcontrol";
import { Input } from "@angular/core";


export abstract class NgInputBase<VALUE> extends NgBaseModelControl<VALUE> {

  // #region Properties

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;
  // TextBox Placeholder
  @Input("placeholder") _placeholder: string = null;
  // Erlaubte Zeichen bei der Eingabe
  @Input("allowedchars") _allowedchars: string = '';

  // #endregion

  // #region Event Handler

  public onKeyPress(event: KeyboardEvent): Boolean {

    // Cancel wenn _allowedChars leer ist.
    if (this._allowedchars.length == 0)
      return true;

    // Validate Input
    var character = String.fromCharCode(event.charCode);
    // Zeichen in Allowed Chars nicht gefunden, Event nicht weitergeben
    if (this._allowedchars.indexOf(character) < 0)
      event.preventDefault();

    var inputControl = event.srcElement as HTMLInputElement;

    if (!this.OnKeyPressValidation(inputControl.selectionStart, character))
      event.preventDefault();
  }

  // #endregion

  // #region Protected Virtual Methods

  protected OnKeyPressValidation(position: number, character: string): boolean {
    return true;
  }

  // #endregion
}

