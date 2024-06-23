import { Directive, Input } from '@angular/core';
import { SacBaseModelControl } from './basemodelcontrol';

/**
 * Abstract Klasse für SacInputBase. Extendes SacBaseModelControl
 */
@Directive()
export abstract class SacInputBase<VALUE> extends SacBaseModelControl<VALUE> {
  // #region Properties

  /**
   * Erlaubte Zeichen bei der Eingabe
   */
  @Input() public allowedchars: string = '';
  /**
   * Autofill aktivieren oder deaktivieren
   */
  @Input() public disableautocomplete: boolean = false;
  /**
   * Definiert das Control als Required
   */
  @Input() public isrequired: boolean = false;
  /**
   * TextBox Placeholder
   */
  @Input() public placeholder: string = null;
  /**
   * Macht das Input readonly
   */
  @Input() public readonly: boolean = false;
  /**
   * Definiert das Feld als valid/invalid von eingegebenen regex-pattern
   */
  @Input() public regexvalidation: string;
  /**
   * Text welcher als Tooltip angezeigt wird.
   */
  @Input() public tooltiptext: string = '';

  // #endregion Properties

  // #region Public Methods

  /**
   * Methode validiert Input wenn KeyPress-Event passiert
   */
  public onKeyPress(event: KeyboardEvent): Boolean {
    // Cancel wenn _allowedChars leer ist.
    if (this.allowedchars.length === 0) {
      return true;
    }

    // Validate Input
    const character = event.key;
    // Zeichen in Allowed Chars nicht gefunden, Event nicht weitergeben
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
   * Methode validiert wenn ein Drück-Event passiert
   */
  protected OnKeyPressValidation(position: number, character: string): boolean {
    return true;
  }

  // #endregion Protected Methods
}
