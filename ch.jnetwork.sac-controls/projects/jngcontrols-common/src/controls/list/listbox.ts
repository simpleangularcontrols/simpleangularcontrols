// tsco:ignore
import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';

// #region Interfaces

/**
 * Wrapper für HTML Options
 */
interface HTMLOption {
  // #region Properties

  /**
   * Boolean Property für Selektierte Elemente
   */
  selected: boolean;
  /**
   * Wert
   */
  value: string;

  // #endregion Properties
}

// #endregion Interfaces

// #region Classes

/**
 * Basis Komponente für SacListboxOption
 */
@Directive()
export class SacListboxOptionCommon implements OnDestroy {
  // #region Properties

  /**
   * Value von Selected Option Item
   */
  private _value: any = null;

  // #endregion Properties

  // #region Constructors

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

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * NgValue des Controls. Wird für die Mehrfachauswahl benötigt
   */
  @Input()
  public set ngvalue(value: any) {
    if (this._listbox) {
      this._value = value;
    }
  }

  /**
   * Definiert den Wert der Listbox
   */
  @Input()
  public set value(value: any) {
    if (this._listbox) {
      this._value = value;
    }
  }

  public get value(): any {
    return this._value;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Methode ergibt den Status der Elemente, die selektiert wurden
   * @param selected Element ist selektiert
   */
  public _setSelected(selected: boolean) {
    this._renderer.setProperty(
      this._element.nativeElement,
      'selected',
      selected
    );
  }

  /**
   * OnDestroy Event
   */
  public ngOnDestroy(): void {
    if (this._listbox) {
      this._listbox.unregisterOption(this);
    }
  }

  // #endregion Public Methods
}

/**
 * Komponente für SacListboxCommon. Extends SacBaseSelectControl
 */
@Directive()
export class SacListboxCommon extends SacBaseSelectControl<Array<string>> {
  // #region Properties

  /**
   * Anzahl der Zeilen
   */
  @Input() public rowsize: number = 5;
  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() public validationmessagerequired: string =
    this.validationKeyService.ValidationErrorRequired;

  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input()
  public validationmessagesummaryrequired: string =
    this.validationKeyService.ValidationErrorSummaryRequired;

  /**
   * ViewChildren Methode
   */
  @ViewChildren(SacListboxOptionCommon)
  public contentOptions: QueryList<SacListboxOptionCommon>;

  /**
   * OptionMap
   */
  public optionlist: Array<SacListboxOptionCommon> =
    new Array<SacListboxOptionCommon>();

  // #endregion Properties

  // #region Public Methods

  /**
   * Getter für selektierte Elemente
   */
  public getSelectedItems(selectelement: any) {
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

  /**
   * Validator Methode
   */
  public validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this.isrequired) {
      error = Validation.required(
        this.validationmessagerequired,
        this.validationmessagesummaryrequired
      )(c);
    }

    return error;
  }

  /**
   * Methode schreibt neuen Wert
   */
  public writeValue(value: Array<string>) {
    if (this.optionlist && value) {
      this.optionlist.forEach((itm) => {
        if (value.indexOf(itm.value) >= 0) {
          itm._setSelected(true);
        }
      });
    }

    super.writeValue(value);
  }

  // #endregion Public Methods
}

/**
 * Wrapper für HTML Select
 */
abstract class HTMLCollection {
  // #region Properties

  /**
   * Länge
   */
  public length: number;

  // #endregion Properties

  // #region Public Abstract Methods

  /**
   * Option-Item
   */
  public abstract item(_: number): HTMLOption;

  // #endregion Public Abstract Methods
}

// #endregion Classes
