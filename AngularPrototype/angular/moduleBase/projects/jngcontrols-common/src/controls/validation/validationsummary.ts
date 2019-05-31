import { NgFormularCommon } from '../form/form';
import { Input, Injector } from '@angular/core';
import { ValidationErrorItem } from '../../validation';
import { InternalLanguageResourceService, LANGUAGE_SERVICE } from '../../services/languageresource.service';
import { ILanguageResourceService } from '../../interfaces/ilanguageresource';
import { Observable } from 'rxjs';

export class NgValidationSummaryCommon {

  @Input("name")
  _name: string = "";

  // #region Private Variables

  // Parent Formular
  protected parent: NgFormularCommon;
  /**
  * Service für Error Localisation
  */
  protected lngResourceService: ILanguageResourceService;

  // #endregion

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(parent: NgFormularCommon, injector: Injector) {
    this.parent = parent;
    this.lngResourceService = injector.get(LANGUAGE_SERVICE, new InternalLanguageResourceService());
  }

  // #endregion

  get formErrors(): Observable<string>[] {
    var result: Array<Observable<string>> = Object.keys(this.parent.getForm().controls).map(key => {
      const control = this.parent.getForm().controls[key];

      if (control.errors === null || control.touched === false || control.valid == true)
        return null;

      let keys: string[] = Object.keys(control.errors);

      if (keys.length <= 0)
        return null;

      let errorItem: ValidationErrorItem = control.errors[keys[0]];

      // Validation Parameters
      const parameters = {};
      if (errorItem.parameters !== null && errorItem.parameters !== undefined) {
        errorItem.parameters.forEach((v, k) => { parameters[k] = v });
      }
      parameters["FIELD"] = errorItem.fieldName;

      return this.lngResourceService.GetString(errorItem.errorMessageValidationSummaryKey, parameters)
    });

    return result.filter(item => item !== null);
  }

  get hasErrors() {
    return this.formErrors.length > 0;
  }

}

