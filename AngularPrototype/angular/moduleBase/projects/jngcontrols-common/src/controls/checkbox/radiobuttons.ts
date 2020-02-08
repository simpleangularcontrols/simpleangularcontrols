import { Host, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { NgFormularCommon } from '../form/form';
import { NgRadiobuttonCommon } from './radiobutton';
import { NgBaseModelControl } from '../../common/basemodelcontrol';
import { Validation } from '../../validation';

/**
 * Basis Komponente für NgRadiobuttonsCommon. Extends NgBaseModelControl
 */
export abstract class NgRadiobuttonsCommon extends NgBaseModelControl<any> implements Validator {

  /**
   * Radio Button Index
   */
  private radioButtonIndex: number = 0;

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(@Host() parent: NgFormularCommon, injector: Injector) {
    super(parent, injector);
  }

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input('validationmessagerequired') _validationMessageRequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryrequired') _validationMessageRequiredSummary: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';


  //#region Sub Control registration

  /**
   * Radio Buttons Content
   */
  private contentRadiobuttons: NgRadiobuttonCommon[] = [];

  /**
   * Erstellung des RadioButton
   */
  public RegisterRadioButton(radioButton: NgRadiobuttonCommon) {
    this.contentRadiobuttons.push(radioButton);
  }

  /**
   * Löschen des Radio Button
   */
  public UnregisterRadioButton(radioButton: NgRadiobuttonCommon) {
    const index: number = this.contentRadiobuttons.indexOf(radioButton);

    if (index >= 0) {
      this.contentRadiobuttons.splice(index, 1);
    }
  }

  //#endregion

  /**
   * GEtter für Radio Button Index
   */
  public GetRadionButtonIndex(): number {
    this.radioButtonIndex++;
    return this.radioButtonIndex;
  }

  //#region ngModel Implementation

  /**
   * Wert schreiben
   */
  writeValue(value: any) {
    super.writeValue(value);
    if (value !== null && value !== undefined) {
      this.contentRadiobuttons.forEach(itm => {
        itm._checked = itm._value === value;
      });
    }
  }

  //#endregion

  /**
   * Item selektieren
   */
  public SelectItem(value: any) {
    this.contentRadiobuttons.forEach(itm => {
      itm._checked = itm._value === value;
    });

    this.value = value;
  }

  /**
   * Methode prüft ob Item checked ist
   */
  public HasCheckedItem(): boolean {
    const radioButtons: NgRadiobuttonCommon[] = this.contentRadiobuttons;

    if (radioButtons === undefined || radioButtons === null) {
      return false;
    }

    return this.contentRadiobuttons.some(itm => itm._checked);
  }

  /**
   * Validator
   */
  validateData(c: AbstractControl): ValidationErrors {
    if (!this.HasCheckedItem()) {
      return Validation.GetValidationErrorItem('required', this._validationMessageRequired, this._validationMessageRequiredSummary, this._label);
    } else {
      return null;
    }
  }
}
