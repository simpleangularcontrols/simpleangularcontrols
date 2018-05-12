import { NG_VALUE_ACCESSOR, ControlContainer } from "@angular/forms";
import { Component } from "@angular/core";
import { NgFormular } from "../form/form";
import { NgInputDecimal } from "./inputdecimal";


@Component({
  selector: 'ngInputCurrency',
  templateUrl: './inputcurrency.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInputCurrency
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInputCurrency extends NgInputDecimal {

}
