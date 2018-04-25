import { Component, Input, Host, OnInit, Injectable } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { NgFormular } from '../controls/form';

export class NgBaseModelControl implements ControlValueAccessor, OnInit {

  // #region Private Variables

  // Parent Formular
  protected parent: NgFormular;

  // #endregion

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(@Host() parent: NgFormular) {
    this.parent = parent;
  }

  // #endregion

  // #region Control Events

  // Init Event
  ngOnInit() {
    // Label Size von Formular lesen
    if (this._labelsize === undefined) {
      if (this.parent.labelsize !== undefined) {
        this._labelsize = this.parent.labelsize;
      } else {
        this._labelsize = 2;
      }
    }
  }

  // #endregion

  // #region Implementation ControlValueAccessor

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
  writeValue(value: object) {
    if (value) {
      this._value = value;
      this.propagateChange(this._value);
    }
  }

  // #endregion

  // #region Control Value

  // Interne Variable, die den Wert des Controls hält
  protected _value: object = null;

  // Set Methode für NgModel Binding in Html Markup
  // Input wird benötigt, damit der Wert auch über das Markup gesetzt werden kann.
  @Input("value")
  set value(v: object) {
    this._value = v;
    this.propagateChange(this._value);
  }

  // Get Methode für NgModel Binding in Html Markup
  get value(): object {
    return this._value;
  }

  // #endregion

  // #region Properties

  // Name des Controls
  @Input("name") _name: string = '';
  // Definiert den Label Text
  @Input("label") _label: string = '';
  // Definiert die Labelgröse
  @Input("labelsize") _labelsize: number = undefined;
  // Deaktiviert das Label im Template
  @Input("disablelabel") _disablelabel: boolean = false;

  // #endregion

  // #region Internal Properties

  // Berechnet die Breite des Labels
  get _inputsize(): number {
    return 12 - this._labelsize;
  }

  // #endregion
}
