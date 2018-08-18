import { Component, Input, Host, OnInit, Directive, OnDestroy, QueryList, ViewChildren, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { NgBaseSelectControl } from '../../base/baseselectcontrol';
import { NgFormular } from '../form/form';
import { Validation } from '../../validation';


// Element für Access auf Option Field
@Directive({ selector: 'option' })
export class NgListboxOption implements OnDestroy {

  constructor(private _element: ElementRef, private _renderer: Renderer2) { }

  @Input("value")
  _value: string;

  _setSelected(selected: boolean) {
    this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
  }

  ngOnDestroy(): void {
  }

}

// Wrapper für HTML Options
interface HTMLOption {
  value: string;
  selected: boolean;
}

// Wrapper für HTML Select
abstract class HTMLCollection {
  length: number;
  abstract item(_: number): HTMLOption;
}


@Component({
  selector: 'ngListbox',
  templateUrl: './listbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgListbox },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgListbox) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgListbox extends NgBaseSelectControl<Array<string>> {
  @Input("rowsize") _rowsize: number = 5;

  @ViewChildren(NgListboxOption)
  contentOptions: QueryList<NgListboxOption>;

  getSelectedItems(selectelement: any) {
    let selectedValues: Array<string> = new Array<string>();

    if (selectelement.hasOwnProperty('selectedOptions')) {
      const options: HTMLCollection = selectelement.selectedOptions;
      for (let i = 0; i < options.length; i++) {
        const opt: HTMLOption = options.item(i);
        selectedValues.push(opt.value);
      }
    }
    // Degrade on IE
    else {
      const options: HTMLCollection = <HTMLCollection>selectelement.options;
      for (let i = 0; i < options.length; i++) {
        const opt: HTMLOption = options.item(i);
        if (opt.selected) {
          selectedValues.push(opt.value);
        }
      }

      this.setValue(selectedValues);
    }
  }

  writeValue(value: Array<string>) {
    if (this.contentOptions && value) {
      this.contentOptions.forEach(itm => {
        itm._setSelected(value.indexOf(itm._value) >= 0);
      });
    }

    super.writeValue(value);
  }
  
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;

  }
}
