import { Component, Input, Host, OnInit, Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl, NG_VALIDATORS } from '@angular/forms';
import { NgBaseModelControl } from '../base/basemodelcontrol';
import { NgFormular } from './form';
import { NgInputBase } from './input';

@Component({
  selector: 'ngInputDecimal',
  templateUrl: './inputdecimal.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInputDecimal
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInputDecimal extends NgInputBase<number> {

  // Definiert das Negative Werte erlaubt sind
  @Input("allownegativ") _allownegativ: boolean = false;
  @Input("minvalue") _minvalue: number = undefined;
  @Input("maxvalue") _maxvalue: number = undefined;

  protected OnClassInit(): void {
    super.OnClassInit();

    this._allowedchars = "0123456789" + this.GetDecimalSymbol();

    if (this._allownegativ)
      this._allowedchars = this._allowedchars + "-";
  }

  protected ConvertInputValue(value: any): any {
    if (value === '' || value === null) {
      return null;
    } else {
      if (this._allownegativ === true && value === '-') {
        return '-';
      } else {
        return parseFloat(value);
      }
    }
  }

  protected OnKeyPressValidation(position: number, character: string): boolean {
    if (this._allownegativ === false && character === "-" || this._allownegativ === true && position > 0 && character === '-')
      return false;

    if (character === this.GetDecimalSymbol() && this._value.toString().indexOf(this.GetDecimalSymbol()) >= 0) {
      return false;
    } else {
      return true;
    }
  }
}