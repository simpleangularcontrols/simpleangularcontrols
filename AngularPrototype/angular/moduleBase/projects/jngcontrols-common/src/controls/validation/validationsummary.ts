import { NgFormularCommon } from '../form/form';
import { Input } from '@angular/core';

export class NgValidationSummaryCommon {

  @Input("name")
  _name: string = "";

  // #region Private Variables

  // Parent Formular
  protected parent: NgFormularCommon;

  // #endregion

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(parent: NgFormularCommon) {
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

