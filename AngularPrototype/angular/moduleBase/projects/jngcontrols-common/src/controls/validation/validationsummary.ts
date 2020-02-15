import { NgFormularCommon } from '../form/form';
import { Input, Injector, Directive } from '@angular/core';
import { ValidationErrorItem } from '../../validation';
import { InternalLanguageResourceService, LANGUAGERESOURCE_SERVICE } from '../../services/languageresource.service';
import { ILanguageResourceService } from '../../interfaces/ilanguageresource';
import { Observable } from 'rxjs';
import { NgForm, AbstractControl, FormGroup, FormArray } from '@angular/forms';

/**
 * Basis Komponente für NgValidationSummary
 */
@Directive()
export class NgValidationSummaryCommon {
  /**
   * Name-Property
   */
  @Input('name')
  _name: string = '';

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
    this.lngResourceService = injector.get(LANGUAGERESOURCE_SERVICE, new InternalLanguageResourceService());
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

  /**
   * Die Methode gibt Collection von Errors. Verlangt controls: Array<NgForm | FormArray> und  collection: Array<Observable<string>>
   */
  private getErrorCollection(controls: Array<NgForm | FormArray>, collection: Array<Observable<string>>): void {
    controls.forEach(ctl => {

      if (ctl.controls === undefined || ctl.controls === null) {

        this.addErrorToCollection(<AbstractControl>ctl, collection);

      } else {

        Object.keys(ctl.controls).map(controlKey => {
          const control = ctl.controls[controlKey];

          // Cancel Analyse wenn Item not Touched oder Valid
          if (control.touched === false || control.valid === true) {
            return;
          }

          // Handle wenn Control kein Container ist
          if (control.controls === undefined || control.controls === null) {
            this.addErrorToCollection(control, collection);
          } else {
            // Handling eines Control Containers
            const items: Array<NgForm | FormArray> = Object.keys(control.controls).map(formKey => {
              return <NgForm | FormArray>control.controls[formKey];
            });

            this.getErrorCollection(items, collection);
          }

        });
      }
    });
  }

  /**
   * Fügt einen Validation Error in die Error Collection hinzu
   * @param ctl Fehlerhaftes Control
   * @param collection Collection aller Fehlermeldungen
   */
  private addErrorToCollection(ctl: AbstractControl, collection: Array<Observable<string>>): void {
    if (ctl.errors === null || ctl.touched === false || ctl.valid === true) {
      return;
    }

    const keys: string[] = Object.keys(ctl.errors);

    if (keys.length <= 0) {
      return;
    }

    const errorItem: ValidationErrorItem = ctl.errors[keys[0]];

    // Validation Parameters
    const parameters = {};
    if (errorItem.parameters !== null && errorItem.parameters !== undefined) {
      errorItem.parameters.forEach((v, k) => {
        parameters[k] = v;
      });
    }
    parameters['FIELD'] = errorItem.fieldName;

    collection.push(this.lngResourceService.GetString(errorItem.errorMessageValidationSummaryKey, parameters));
  }

  /**
   * Getter wenn Errors entstehen
   */
  get hasErrors() {
    return this.formErrors.length > 0;
  }

}

