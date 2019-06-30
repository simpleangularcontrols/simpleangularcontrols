import { NgFormularCommon } from '../form/form';
import { Input, Injector } from '@angular/core';
import { ValidationErrorItem } from '../../validation';
import { InternalLanguageResourceService, LANGUAGE_SERVICE } from '../../services/languageresource.service';
import { ILanguageResourceService } from '../../interfaces/ilanguageresource';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FormArray } from '@angular/forms';

export class NgValidationSummaryCommon {
  /**
   * Name-Property
   */
  @Input("name")
  _name: string = "";

  // #region Private Variables

  /**
   * Parent Formular
   */
  protected parent: NgFormularCommon;
  /**
  * Service für Error Localisation
  */
  protected lngResourceService: ILanguageResourceService;

  // #endregion

  // #region Constructor

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(parent: NgFormularCommon, injector: Injector) {
    this.parent = parent;
    this.lngResourceService = injector.get(LANGUAGE_SERVICE, new InternalLanguageResourceService());
  }

  // #endregion

  /**
   * Validation Methode
   */
  get formErrors(): Observable<string>[] {

    const collection: Array<Observable<string>> = new Array<Observable<string>>();
    const items: Array<NgForm | FormArray> = Object.keys(this.parent.getForm().controls).map(key => {
      return <NgForm | FormArray>this.parent.getForm().controls[key];
    });

    this.getErrorCollection(items, collection);

    return collection.filter(item => item !== null);
  }

  private getErrorCollection(controls: Array<NgForm | FormArray>, collection: Array<Observable<string>>) {
    controls.forEach(ctl => {

      if (ctl.controls === undefined || ctl.controls === null) {

        if (ctl.errors === null || ctl.touched === false || ctl.valid == true)
          return;

        let keys: string[] = Object.keys(ctl.errors);

        if (keys.length <= 0)
          return;

        let errorItem: ValidationErrorItem = ctl.errors[keys[0]];

        // Validation Parameters
        const parameters = {};
        if (errorItem.parameters !== null && errorItem.parameters !== undefined) {
          errorItem.parameters.forEach((v, k) => { parameters[k] = v });
        }
        parameters["FIELD"] = errorItem.fieldName;

        collection.push(this.lngResourceService.GetString(errorItem.errorMessageValidationSummaryKey, parameters));

      } else {

        Object.keys(ctl.controls).map(key => {
          const control = ctl.controls[key];

          if (control.errors === null || control.touched === false || control.valid == true)
            return;

          let keys: string[] = Object.keys(control.errors);

          if (keys.length <= 0)
            return;

          let errorItem: ValidationErrorItem = control.errors[keys[0]];

          // Validation Parameters
          const parameters = {};
          if (errorItem.parameters !== null && errorItem.parameters !== undefined) {
            errorItem.parameters.forEach((v, k) => { parameters[k] = v });
          }
          parameters["FIELD"] = errorItem.fieldName;

          collection.push(this.lngResourceService.GetString(errorItem.errorMessageValidationSummaryKey, parameters));
        });
      }
    });
  }

  /**
   * Getter wenn Errors entstehen
   */
  get hasErrors() {
    return this.formErrors.length > 0;
  }

}

