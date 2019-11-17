import { Input, Directive, OnDestroy, QueryList, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';
import { NgBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';


/**
 *  Element für Access auf Option Field
 * @selector option
 */
@Directive({ selector: 'option' })

/**
 *Basis Komponente für NgListboxOption
 */
export class NgListboxOption implements OnDestroy {

  /**
   * Konstruktor
   * @param _element: ElementRef
   * @param _renderer: Renderer2
   */
  constructor(private _element: ElementRef, private _renderer: Renderer2) { }

  /**
   * Wert des Controls
   */
  @Input("value")
  _value: string;

  /**
   * Methode ergibt den Status der Elemente, die selektiert wurden
   */
  _setSelected(selected: boolean) {
    this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
  }

  /**
   * Event wenn die Komponente zerstört wird
   */
  ngOnDestroy(): void {
  }

}

/**
 * Wrapper für HTML Options
 */
interface HTMLOption {
  /**
   * Wert
   */
  value: string;
  /**
   * Boolean Property für Selektierte Elemente
   */
  selected: boolean;
}

/**
 * Wrapper für HTML Select
 */
abstract class HTMLCollection {
  /**
   * Länge
   */
  length: number;
  /**
   * Option-Item
   */
  abstract item(_: number): HTMLOption;
}


// @Component({
//   selector: 'ngListbox',
//   templateUrl: './listbox.html',
//   // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
//   providers: [
//     { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgListbox },
//     { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgListbox) }
//   ],
//   // View Provider, damit das Formular an das Control gebunden werden kann
//   viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
// })

/**
 * Komponente für NgListboxCommon. Extends NgBaseSelectControl 
 */
export class NgListboxCommon extends NgBaseSelectControl<Array<string>> {
  /**
   * Anzahl der Zeilen
   */
  @Input("rowsize") _rowsize: number = 5;


  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input("validationmessagerequired") _validationMessageRequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input("validationmessagesummaryrequired") _validationMessageRequiredSummary: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';


  /**
   * ViewChildren Methode
   */
  @ViewChildren(NgListboxOption)
  contentOptions: QueryList<NgListboxOption>;

  /**
   * Getter für selektierte Elemente
   */
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

  /**
   * Methode schreibt neuen Wert
   */
  writeValue(value: Array<string>) {
    if (this.contentOptions && value) {
      this.contentOptions.forEach(itm => {
        itm._setSelected(value.indexOf(itm._value) >= 0);
      });
    }

    super.writeValue(value);
  }

  /**
   * Validator Methode
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
    }

    return error;

  }
}
