import { Component, Input, Host, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { NgBaseModelControl } from '../base/basemodelcontrol';
import { NgFormular } from './form';
import { NgRequiredInput } from '../validation/required';

export class NgInputBase<VALUE> extends NgBaseModelControl<VALUE> {

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

    if (!this.OnKeyPressValidation(character))
      event.preventDefault();
  }

  // #endregion

  // #region Protected Virtual Methods

  protected OnKeyPressValidation(character: string): boolean {
    return true;
  }

  // #endregion
}


@Component({
  selector: 'ngInput',
  templateUrl: './input.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInput
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgInput extends NgInputBase<string> {
}
