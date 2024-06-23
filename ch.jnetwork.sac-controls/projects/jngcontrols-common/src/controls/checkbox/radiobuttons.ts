import { Directive, Host, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { SacRadiobuttonCommon } from './radiobutton';

/**
 * Basis Komponente für SacRadiobuttonsCommon. Extends SacBaseModelControl
 */
@Directive()
export abstract class SacRadiobuttonsCommon
  extends SacBaseModelControl<any>
  implements Validator
{
  // #region Properties

  /**
   * Radio Buttons Content
   */
  private contentRadiobuttons: SacRadiobuttonCommon[] = [];
  /**
   * Radio Button Index
   */
  private radioButtonIndex: number = 0;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() public validationmessagerequired: string =
    this.validationKeyService.ValidationErrorRequired;
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input() public validationmessagesummaryrequired: string =
    this.validationKeyService.ValidationErrorSummaryRequired;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param formlayout SacFormLayoutCommon to define scoped layout settings
   * @param injector Injector for injecting services
   */
  constructor(@Host() formlayout: SacFormLayoutCommon, injector: Injector) {
    super(formlayout, injector);
  }

  // #endregion Constructors

  // #region Public Methods

  /**
   * GEtter für Radio Button Index
   */
  public GetRadionButtonIndex(): number {
    this.radioButtonIndex++;
    return this.radioButtonIndex;
  }

  /**
   * Methode prüft ob Item checked ist
   */
  public HasCheckedItem(): boolean {
    const radioButtons: SacRadiobuttonCommon[] = this.contentRadiobuttons;

    if (radioButtons === undefined || radioButtons === null) {
      return false;
    }

    return this.contentRadiobuttons.some((itm) => itm.checked);
  }

  /**
   * Erstellung des RadioButton
   */
  public RegisterRadioButton(radioButton: SacRadiobuttonCommon) {
    this.contentRadiobuttons.push(radioButton);
  }

  /**
   * Item selektieren
   */
  public SelectItem(value: any) {
    this.contentRadiobuttons.forEach((itm) => {
      itm.checked = itm.value === value;
    });

    this.value = value;
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

  /**
   * Validator
   */
  public validateData(c: AbstractControl): ValidationErrors {
    if (!this.HasCheckedItem()) {
      return Validation.GetValidationErrorItem(
        'required',
        this.validationmessagerequired,
        this.validationmessagesummaryrequired,
        this.label
      );
    } else {
      return null;
    }
  }

  /**
   * Wert schreiben
   */
  public writeValue(value: any) {
    super.writeValue(value);
    if (value !== null && value !== undefined) {
      this.contentRadiobuttons.forEach((itm) => {
        itm.checked = itm.value === value;
      });
    }
  }

  // #endregion Public Methods
}
