import { Input, Directive } from '@angular/core';
import { convertToObject } from 'typescript';
import { SacBaseModelControl } from './basemodelcontrol';

/**
 * Abstract Klasse für SacInputBase. Extendes SacBaseModelControl
 */
@Directive()
export abstract class SacInputBase<VALUE> extends SacBaseModelControl<VALUE> {

  // #region Properties

  /**
   * Definiert das Control als Required
   */
  @Input() isrequired: boolean = false;

  /**
   * TextBox Placeholder
   */
  @Input() placeholder: string = null;

  /**
   * Erlaubte Zeichen bei der Eingabe
   */
  @Input() allowedchars: string = '';

  /**
   * Macht das Input readonly
   */
  @Input() readonly: boolean = false;

  /**
   * Definiert das Feld als valid/invalid von eingegebenen regex-pattern
   */
  @Input() regexvalidation: string;

  /**
   * Text welcher als Tooltip angezeigt wird.
   */
  @Input() tooltiptext: string = '';

  /**
   * Autofill aktivieren oder deaktivieren
   */
  @Input() disableautocomplete: boolean = false;


  // #endregion

  // #region Event Handler

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

  // #endregion

  // #region Protected Virtual Methods

  /**
   * Methode validiert wenn ein Drück-Event passiert
   */
  protected OnKeyPressValidation(position: number, character: string): boolean {
    return true;
  }

  // #endregion
}

