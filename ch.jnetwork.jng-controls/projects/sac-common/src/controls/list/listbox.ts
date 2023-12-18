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
import { SacBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';

/**
 * Basis Komponente für SacListboxOption
 */
@Directive()
export class SacListboxOptionCommon implements OnDestroy {
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
    private _listbox: SacListboxCommon
  ) {
    if (this._listbox) {
      this._listbox.registerOption(this);
    }
  }

  /**
   * Definiert den Wert der Listbox
   */
  @Input()
  set value(value: any) {
    if (this._listbox) {
      this._value = value;
    }
  }
  get value(): any {
    return this._value;
  }

  /**
   * NgValue des Controls. Wird für die Mehrfachauswahl benötigt
   */
  @Input()
  set ngvalue(value: any) {
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
   * @param selected Element ist selektiert
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
 * Komponente für SacListboxCommon. Extends SacBaseSelectControl
 */
@Directive()
export class SacListboxCommon extends SacBaseSelectControl<Array<string>> {
  /**
   * OptionMap
   */
  optionlist: Array<SacListboxOptionCommon> = new Array<SacListboxOptionCommon>();

  /**
   * Anzahl der Zeilen
   */
  @Input() rowsize: number = 5;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() validationmessagerequired: string =
    'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input()
  validationmessagesummaryrequired: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';

  /**
   * ViewChildren Methode
   */
  @ViewChildren(SacListboxOptionCommon)
  contentOptions: QueryList<SacListboxOptionCommon>;

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

    if (this.isrequired) {
      error = Validation.required(
        c,
        this.label,
        this.validationmessagerequired,
        this.validationmessagesummaryrequired
      );
    }

    return error;
  }

  /**
   * Registriert ein Listbox Element
   * @param option Listbox Option Item das registriert werden soll
   */
  public registerOption(option: SacListboxOptionCommon): void {
    this.optionlist.push(option);
  }

  /**
   * Hebt die Registration eines Listbox Items auf
   * @param option Listbox Option Item das deregistriert werden soll
   */
  public unregisterOption(option: SacListboxOptionCommon): void {
    const index = this.optionlist.indexOf(option);
    this.optionlist.splice(index, 1);
  }
}
