import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator, Validators } from "@angular/forms";
import { NgBaseModelControl } from "../base/basemodelcontrol";
import { NgInputEmail } from "../controls";
import { forwardRef, Directive, Input } from "@angular/core";

@Directive({
  selector: 'input[ngEmailValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgEmailValidator), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputEmail, multi: true }
  ]
})
export class NgEmailValidator implements Validator {
  private _enabled: boolean;
  private _onChange: () => void;
  protected controlItem: NgBaseModelControl<string>;

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(controlItem: NgBaseModelControl<string>) {
    this.controlItem = controlItem;
  }

  @Input("ngEmailValidator")
  set isEnabled(value: boolean | string) {
    this._enabled = value === '' || value === true || value === 'true';
    if (this._onChange) this._onChange();
  }

  // #endregion

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value != '' && c.value != undefined && c.value != null && Validators.email(c) != null) {
      return { 'required': true, 'required_message': 'Feld "' + this.controlItem[0]._label + '" keine E-Mail Adresse' };
    } else {
      return null;
    }
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
