import { Component, Input, Host, OnInit, Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl, NG_VALIDATORS } from '@angular/forms';
import { NgBaseModelControl } from '../base/basemodelcontrol';
import { NgFormular } from './form';
import { NgInputBase } from './input';
import { NumberSymbol, getLocaleNumberSymbol, registerLocaleData } from '@angular/common';
import localeDeCh from '@angular/common/locales/de-CH';
import localeDe from '@angular/common/locales/de';

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

  //constructor( @Host() parent: NgFormular) {
  //  super(parent);
  //}

  protected OnClassInit(): void {
    super.OnClassInit();

    this._allowedchars = "0123456789" + this.GetDecimalSymbol();
  }

  protected ConvertInputValue(value: any): number {
    if (value === '' || value === null) {
      return null;
    } else {
      return parseFloat(value);
    }
  }

  protected OnKeyPressValidation(character: string): boolean {
    if (character === this.GetDecimalSymbol() && this._value.toString().indexOf(this.GetDecimalSymbol()) >= 0) {
      return false;
    } else {
      return true;
    }
  }
}
