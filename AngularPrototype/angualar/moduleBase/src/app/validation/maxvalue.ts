import { Validator, AbstractControl, ValidationErrors, Validators, NG_VALIDATORS, ValidatorFn } from "@angular/forms";
import { Directive, Input, forwardRef, SimpleChanges, OnChanges } from "@angular/core";
import { NgInputInteger } from "../controls/inputinteger";
import { NgBaseModelControl } from "../base/basemodelcontrol";
import { NgInputDecimal } from "../controls/inputdecimal";
import { NgInputCurrency } from "../controls/inputcurrency";

class NgMaxValueBase implements Validator, OnChanges {
  private _maxvalue: number;
  private _validator: ValidatorFn;
  private _onChange: () => void;

  protected controlItem: NgBaseModelControl<number>;

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(controlItem: NgBaseModelControl<number>) {
    this.controlItem = controlItem;
  }

  get maxvalue(): number { return this._maxvalue; }

  @Input("ngMaxValue")
  set maxvalue(value: number) {
    if (value != null && value !== undefined && `${value}` !== 'undefined')
      this._maxvalue = value;
    else
      this._maxvalue = undefined;
    if (this._onChange) this._onChange();

    if (this._validator === undefined)
      this.createValidator();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('maxvalue' in changes) {
      this.createValidator();
      if (this._onChange) this._onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    if (this.maxvalue === undefined)
      return null;
    else
      if (this._validator(c) != null)
        return { 'maxvalue': true, 'maxvalue_message': 'Feld "' + this.controlItem[0]._label + '" erfordert einen Maximalwert von ' + this.maxvalue };
      else
        return null;
  }

  private createValidator(): void {
    this._validator = Validators.max(this._maxvalue);
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}


@Directive({
  selector: 'input[ngMaxValueDecimal][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgMaxValueDecimal), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputDecimal, multi: true }
  ]
})
export class NgMaxValueDecimal extends NgMaxValueBase {

  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngMaxValueDecimal")
  set maxvalueDecimal(value: number) {
    this.maxvalue = value;
  }
}


@Directive({
  selector: 'input[ngMaxValueInteger][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgMaxValueInteger), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputInteger, multi: true }
  ]
})
export class NgMaxValueInteger extends NgMaxValueBase {

  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngMaxValueInteger")
  set maxvalueInteger(value: number) {
    this.maxvalue = value;
  }
}

@Directive({
  selector: 'input[ngMaxValueCurrency][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgMaxValueCurrency), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputCurrency, multi: true }
  ]
})
export class NgMaxValueCurrency extends NgMaxValueBase {

  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngMaxValueCurrency")
  set maxvalueCurrency(value: number) {
    this.maxvalue = value;
  }
}

