import { Host, Injector, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { NgFormularCommon } from '../form/form';
import { NgRadiobuttonCommon } from './radiobutton';
import { NgBaseModelControl } from '../../common/basemodelcontrol';


export abstract class NgRadiobuttonsCommon extends NgBaseModelControl<any> implements Validator {

  // Konstruktor
  // Inject des Formulars
  constructor(@Host() parent: NgFormularCommon, injector: Injector) {
    super(parent, injector);
  }

  //#region Sub Control registration

  private contentRadiobuttons: NgRadiobuttonCommon[] = [];

  public RegisterRadioButton(radioButton: NgRadiobuttonCommon) {
    this.contentRadiobuttons.push(radioButton);
  }

  public UnregisterRadioButton(radioButton: NgRadiobuttonCommon) {
    let index: number = this.contentRadiobuttons.indexOf(radioButton);

    if (index >= 0) {
      this.contentRadiobuttons.splice(index, 1);
    }
  }

  //#endregion

  private radioButtonIndex: number = 0;

  public GetRadionButtonIndex(): number {
    this.radioButtonIndex++;
    return this.radioButtonIndex;
  }

  //#region ngModel Implementation

  writeValue(value: any) {
    super.writeValue(value);
    if (value !== null && value !== undefined) {
      this.contentRadiobuttons.forEach(itm => {
        itm._checked = itm._value === value;
      });
    }
  }
  
  //#endregion

  public SelectItem(value: any) {
    this.contentRadiobuttons.forEach(itm => {
      itm._checked = itm._value === value;
    });

    this.value = value;
  }

  public HasCheckedItem(): boolean {
    let radioButtons: NgRadiobuttonCommon[] = this.contentRadiobuttons;

    if (radioButtons === undefined || radioButtons === null)
      return false;

    return this.contentRadiobuttons.some(itm => itm._checked);
  }

  validateData(c: AbstractControl): ValidationErrors {
    if (!this.HasCheckedItem()) {
      console.log('Control' + this._name + ' has a Validation Error');
      return {
        'required': true, 'required_message': 'Feld "' + this._label + '" ist erforderlich'
      }
    }
    else {
      console.log('Control' + this._name + ' is valid');
      return null;
    }
  }
}
