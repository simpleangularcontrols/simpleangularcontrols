import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ngInput',
  templateUrl: './input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgInput),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NgInput),
      multi: true,
    }   
  ]
})
export class NgInput
  implements ControlValueAccessor, Validator {

  
  hasError = false;

  @Input() required: boolean = false;
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() labelsize: number = 2;
  @Input() value: string = '';

  get inputsize(): number {
    return 12 - this.labelsize;
  }



  private propagateChange = (_: any) => { };

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  // change events from the textarea
  private onChange(event) {
    // update the form
    this.propagateChange(this.value);
  }

  validate(c: FormControl): ValidationErrors {
    throw new Error("Method not implemented.");
  }
  registerOnValidatorChange(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
  
}
