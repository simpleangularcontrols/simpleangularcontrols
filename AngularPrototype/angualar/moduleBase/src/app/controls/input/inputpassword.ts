import { NG_VALUE_ACCESSOR, ControlContainer } from "@angular/forms";
import { Component } from "@angular/core";
import { NgFormular } from "../form/form";
import { NgInput } from "./input";


@Component({
  selector: 'ngInputPassword',
  templateUrl: './inputpassword.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInputPassword
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInputPassword extends NgInput {

}
