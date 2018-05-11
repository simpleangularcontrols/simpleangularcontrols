import { Validators, ValidationErrors, AbstractControl, ValidatorFn, NG_VALIDATORS, Validator } from "@angular/forms";
import { SimpleChanges, Input, Directive, forwardRef, OnChanges } from "@angular/core";
import { NgBaseModelControl } from "../base/basemodelcontrol";
import { NgInputPassword } from "../controls/inputpassword";

@Directive({
  selector: 'input[ngMinLength][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgMinLengthValidator), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputPassword, multi: true }
  ]
})
export class NgMinLengthValidator implements Validator, OnChanges {
  private _validator: ValidatorFn;
  private _onChange: () => void;
  protected controlItem: NgBaseModelControl<string>;
  
  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(controlItem: NgBaseModelControl<string>) {
    this.controlItem = controlItem;
  }

  // #endregion
  
  @Input("ngMinLength") minlength: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('minlength' in changes) {
      this._createValidator();
      if (this._onChange) this._onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    if (this.minlength !== null && c.value != '' && c.value != undefined && c.value != null && this._validator(c) != null) {
      return { 'required': true, 'required_message': 'Feld "' + this.controlItem[0]._label + '" erfordert min. ' + this.minlength + ' Zeichen' };
    } else {
      return null;
    }
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void {
    this._validator = Validators.minLength(parseInt(this.minlength, 10));
  }
}
