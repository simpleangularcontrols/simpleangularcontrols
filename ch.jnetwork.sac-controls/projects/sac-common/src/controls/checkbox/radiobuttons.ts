import { Host, Injector, Input, Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { Validation } from '../../validation';
import { SacFormCommon } from '../form/form';
import { SacRadiobuttonCommon } from './radiobutton';

/**
 * Basis Komponente für SacRadiobuttonsCommon. Extends SacBaseModelControl
 */
@Directive()
export abstract class SacRadiobuttonsCommon extends SacBaseModelControl<any> implements Validator {

  /**
   * Radio Button Index
   */
  private radioButtonIndex: number = 0;

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor( @Host() parent: SacFormCommon, injector: Injector) {
    super(parent, injector);
  }

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() validationmessagerequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input() validationmessagesummaryrequired: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';


  //#region Sub Control registration

  /**
   * Radio Buttons Content
   */
  private contentRadiobuttons: SacRadiobuttonCommon[] = [];

  /**
   * Erstellung des RadioButton
   */
  public RegisterRadioButton(radioButton: SacRadiobuttonCommon) {
    this.contentRadiobuttons.push(radioButton);
  }

  /**
   * Löschen des Radio Button
   */
  public UnregisterRadioButton(radioButton: SacRadiobuttonCommon) {
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
        itm.checked = itm.value === value;
      });
    }
  }

  //#endregion

  /**
   * Item selektieren
   */
  public SelectItem(value: any) {
    this.contentRadiobuttons.forEach(itm => {
      itm.checked = itm.value === value;
    });

    this.value = value;
  }

  /**
   * Methode prüft ob Item checked ist
   */
  public HasCheckedItem(): boolean {
    const radioButtons: SacRadiobuttonCommon[] = this.contentRadiobuttons;

    if (radioButtons === undefined || radioButtons === null) {
      return false;
    }

    return this.contentRadiobuttons.some(itm => itm.checked);
  }

  /**
   * Validator
   */
  validateData(c: AbstractControl): ValidationErrors {
    if (!this.HasCheckedItem()) {
      return Validation.GetValidationErrorItem('required', this.validationmessagerequired, this.validationmessagesummaryrequired, this.label);
    } else {
      return null;
    }
  }
}
