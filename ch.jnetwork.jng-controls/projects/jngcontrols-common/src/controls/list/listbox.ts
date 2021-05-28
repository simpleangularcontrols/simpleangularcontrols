import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';

/**
 * Basis Komponente für NgListboxOption
 */
@Directive()
export class NgListboxOptionCommon implements OnDestroy {
  /**
   * Value von Selected Option Item
   */
  private _value: any = null;

  /**
   * Konstruktor
   * @param _element: ElementRef
   * @param _renderer: Renderer2
   */
  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _listbox: NgListboxCommon
  ) {
    if (this._listbox) {
      this._listbox.registerOption(this);
    }
  }

  get value(): any {
    return this._value;
  }
  @Input('value')
  set value(value: any) {
    if (this._listbox) {
      this._value = value;
    }
  }

  @Input('ngValue')
  set ngValue(value: any) {
    if (this._listbox) {
      this._value = value;
    }
  }

  /**
   * OnDestroy Event
   */
  ngOnDestroy(): void {
    if (this._listbox) {
      this._listbox.unregisterOption(this);
    }
  }

  /**
   * Methode ergibt den Status der Elemente, die selektiert wurden
   */
  _setSelected(selected: boolean) {
    this._renderer.setProperty(
      this._element.nativeElement,
      'selected',
      selected
    );
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

/**
 * Komponente für NgListboxCommon. Extends NgBaseSelectControl
 */
@Directive()
export class NgListboxCommon extends NgBaseSelectControl<Array<string>> {
  /**
   * OptionMap
   */
  optionlist: Array<NgListboxOptionCommon> = new Array<NgListboxOptionCommon>();

  /**
   * Anzahl der Zeilen
   */
  @Input('rowsize') _rowsize: number = 5;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input('validationmessagerequired') _validationMessageRequired: string =
    'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryrequired')
  _validationMessageRequiredSummary: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';

  /**
   * ViewChildren Methode
   */
  @ViewChildren(NgListboxOptionCommon)
  contentOptions: QueryList<NgListboxOptionCommon>;

  /**
   * Getter für selektierte Elemente
   */
  getSelectedItems(selectelement: any) {
    const selectedValues: Array<string> = new Array<string>();

    if (selectelement.hasOwnProperty('selectedOptions')) {
      const options: HTMLCollection = selectelement.selectedOptions;
      for (let i = 0; i < options.length; i++) {
        const opt: HTMLOption = options.item(i);
        selectedValues.push(opt.value);
      }
    } else {
      // Degrade on IE
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
    if (this.optionlist && value) {
      this.optionlist.forEach((itm) => {
        if (value.indexOf(itm.value) >= 0) {
          itm._setSelected(true);
        }
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
      error = Validation.required(
        c,
        this._label,
        this._validationMessageRequired,
        this._validationMessageRequiredSummary
      );
    }

    return error;
  }

  public registerOption(option: NgListboxOptionCommon): void {
    this.optionlist.push(option);
  }

  public unregisterOption(option: NgListboxOptionCommon): void {
    const index = this.optionlist.indexOf(option);
    this.optionlist.splice(index, 1);
  }
}
