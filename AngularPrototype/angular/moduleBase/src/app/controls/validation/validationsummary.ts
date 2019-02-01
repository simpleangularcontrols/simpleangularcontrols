import { Component, Input, Host, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl, NgForm } from '@angular/forms';
import { NgBaseModelControl } from '../../base/basemodelcontrol';
import { NgFormular } from '../form/form';


@Component({
  selector: 'ngValidationSummary',
  templateUrl: './validationsummary.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgValidationSummary
    }
  ]//,
  // View Provider, damit das Formular an das Control gebunden werden kann
  //viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgValidationSummary {

  // #region Private Variables

  // Parent Formular
  protected parent: NgFormular;

  // #endregion

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(parent: NgFormular) {
    this.parent = parent;
  }

  // #endregion

  get formErrors(): string[] {
    var result: Array<string> = Object.keys(this.parent.form.controls).map(key => {
      const control = this.parent.form.controls[key];
      if (control.errors === null || control.touched === false || control.valid == true) { return null; }
      if (control.errors.required) {
        return control.errors.required_message;

      } else if (control.errors.maxvalue) {

        return control.errors.maxvalue_message;

      } else if (control.errors.minvalue) {
        return control.errors.minvalue_message;

      } else if (control.errors.datemin) {
        return control.errors.message;

      } else if (control.errors.datemax) {
        return control.errors.message;

      } else if (control.errors.dateformat) {
        return control.errors.message;

      } else if (control.errors.email) {
        return control.errors.message;


      } else {
        return `${key} has an unknown error`;
      }
    });

    return result.filter(item => item !== null);
  }

  get hasErrors() {
    return this.formErrors.length > 0;
  }

}

