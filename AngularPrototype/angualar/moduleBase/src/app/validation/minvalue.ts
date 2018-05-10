import { Validator, AbstractControl, ValidationErrors, Validators, NG_VALIDATORS, ValidatorFn } from "@angular/forms";
import { Directive, Input, forwardRef, SimpleChanges, OnChanges } from "@angular/core";
import { NgInputInteger } from "../controls/inputinteger";
import { NgBaseModelControl } from "../base/basemodelcontrol";
import { NgInputDecimal } from "../controls/inputdecimal";


class NgMinValueBase implements Validator, OnChanges {
  protected _minvalue: number;
  private _validator: ValidatorFn;
  private _onChange: () => void;

  protected controlItem: NgBaseModelControl<number>;

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(controlItem: NgBaseModelControl<number>) {
    this.controlItem = controlItem;
  }

  get minvalue(): number { return this._minvalue; }

  set minvalue(value: number) {
    if (value != null && value !== undefined && `${value}` !== 'undefined')
      this._minvalue = value;
    else
      this._minvalue = undefined;
    if (this._onChange) this._onChange();

    if (this._validator === undefined)
      this.createValidator();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('minvalue' in changes) {
      this.createValidator();
      if (this._onChange) this._onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    if (this.minvalue === undefined)
      return null;
    else
      if (this._validator(c) != null)
        return { 'minvalue': true, 'minvalue_message': 'Feld "' + this.controlItem[0]._label + '" erfordert einen Minimalwert von ' + this.minvalue };
      else
        return null;
  }

  private createValidator(): void {
    this._validator = Validators.min(this._minvalue);
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}



@Directive({
  selector: 'input[ngMinValueDecimal][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgMinValueDecimal), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputDecimal, multi: true }
  ]
})
export class NgMinValueDecimal extends NgMinValueBase {

  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngMinValueDecimal")
  set minvalueDecimal(value: number) {
    this.minvalue = value;
  }
}


@Directive({
  selector: 'input[ngMinValueInteger][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgMinValueInteger), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputInteger, multi: true }
  ]
})
export class NgMinValueInteger extends NgMinValueBase {

  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngMinValueInteger")
  set minvalueInteger(value: number) {
    this.minvalue = value;
  }
}

