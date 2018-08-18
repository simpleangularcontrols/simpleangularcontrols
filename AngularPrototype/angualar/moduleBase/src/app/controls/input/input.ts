import { Component, Input, Host, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgBaseModelControl } from '../../base/basemodelcontrol';
import { NgFormular } from '../form/form';
import { Validation } from '../../validation';
import { error } from 'util';

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


@Component({
  selector: 'ngInput',
  templateUrl: './input.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInput },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInput) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgInput extends NgInputBase<string> {
  // TextBox Placeholder
  @Input("maxlength") _maxlength: number = null;

  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors|null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;
  }
}
