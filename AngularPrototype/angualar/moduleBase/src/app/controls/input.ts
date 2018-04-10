import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { NgFormular } from './form';

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
export class NgInput implements ControlValueAccessor {

  // Implementation ControlValueAccessor
  // Leere Implementation von "propagateChange". Muss gemacht werden, damit kein Fehler entsteht
  propagateChange = (_: any) => { };

  // Methode, damit andere Controls änderungen im Control mitbekommen können
  // Zur Änderungsinfo die Methode propagateChange aufrufen.
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  // Methode, damit andere Controls änderungen mitbekommen, wenn das Control aktiviert (Focus) wird.
  registerOnTouched(fn: any): void {
  }

  // Methode zum schreiben von Werten aus dem Model in das Control
  writeValue(value: string) {
    if (value) {
      console.debug('Write Value ' + value);
      this._value = value;
      this.propagateChange(this._value);
    }
  }

  // Interne Variable, die den Wert des Controls hält
  private _value: string = '';

  // @Input wird verwendet, um das Property von aussen Sichtbar zu machen.

  // Name des Controls
  @Input("name") _name: string = '';
  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;
  // Definiert den Label Text
  @Input("label") _label: string = '';
  // Definiert die Labelgröse
  @Input("labelsize") _labelsize: number = 2;
  // Deaktiviert das Label im Template
  @Input("disablelabel") _disablelabel: boolean = false;

  get _inputsize(): number {
    return 12 - this._labelsize;
  }

  // Get Methode für NgModel Binding in Html Markup
  get value(): string {
    return this._value;
  }

  // Set Methode für NgModel Binding in Html Markup
  // Input wird benötigt, damit der Wert auch über das Markup gesetzt werden kann.
  @Input("value")
  set value(v: string) {
    this._value = v;
    this.propagateChange(this._value);
  }
}

