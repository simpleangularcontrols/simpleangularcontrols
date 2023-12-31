import { Directive, Injector, Input } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IAbstractControlLabelExtension } from '../../interfaces/iabstractcontrollabel';
import { ISacLocalisationService } from '../../interfaces/ISacLocalisationService';
import {
  SacDefaultLocalisationService,
  SACLOCALISATION_SERVICE,
} from '../../services/sac-localisation.service';
import { ValidationErrorItem } from '../../validation';
import { SacFormCommon } from '../form/form';

/**
 * Basis Komponente für SacValidationSummary
 */
@Directive()
export class SacValidationSummaryCommon {
  /**
   * Name-Property
   */
  @Input()
  name: string = '';

  /**
   * reactive form instance
   */
  @Input()
  form: UntypedFormGroup;

  /**
   * Form groupname to filter summary to formgroup
   *
   * Important: it works only in reactive forms mode.
   */
  @Input()
  formGroupName: string;

  // #region Private Variables

  /**
   * Parent Formular
   */
  protected parent: SacFormCommon;
  /**
   * Service für Error Localisation
   */
  protected lngResourceService: ISacLocalisationService;

  // #endregion

  // #region Constructor

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(parent: SacFormCommon, injector: Injector) {
    this.parent = parent;
    this.lngResourceService = injector.get(
      SACLOCALISATION_SERVICE,
      new SacDefaultLocalisationService()
    );
  }

  // #endregion

  /**
   * Validation Methode
   */
  get formErrors(): Observable<string>[] {
    const collection: Array<Observable<string>> = new Array<
      Observable<string>
    >();

    let formBase: UntypedFormGroup;
    if (this.parent) {
      formBase = this.parent.getForm().form;
    } else if (this.form instanceof UntypedFormGroup) {
      formBase = this.form;

      // formgroup can only be get in reactive forms mode
      if (this.formGroupName) {
        formBase = formBase.get(this.formGroupName) as UntypedFormGroup;
      }
    } else {
      throw new Error('missing form');
    }

    const items: Array<NgForm | UntypedFormArray> = Object.keys(formBase.controls).map(
      (key) => {
        return <NgForm | UntypedFormArray>formBase.controls[key];
      }
    );

    this.getErrorCollection(items, collection);

    return collection.filter((item) => item !== null);
  }

  /**
   * Die Methode gibt Collection von Errors. Verlangt controls: Array<NgForm | FormArray> und  collection: Array<Observable<string>>
   */
  private getErrorCollection(
    controls: Array<NgForm | UntypedFormArray>,
    collection: Array<Observable<string>>
  ): void {
    controls.forEach((ctl) => {
      if (ctl.controls === undefined || ctl.controls === null) {
        this.addErrorToCollection(<AbstractControl>ctl, collection);
      } else {
        Object.keys(ctl.controls).map((controlKey) => {
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
            const items: Array<NgForm | UntypedFormArray> = Object.keys(
              control.controls
            ).map((formKey) => {
              return <NgForm | UntypedFormArray>control.controls[formKey];
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
  private addErrorToCollection(
    ctl: AbstractControl,
    collection: Array<Observable<string>>
  ): void {
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

    if ((ctl as unknown as IAbstractControlLabelExtension)?.controllabel) {
      parameters['FIELD'] = (
        ctl as unknown as IAbstractControlLabelExtension
      ).controllabel;
    } else {
      parameters['FIELD'] = errorItem.fieldName;
    }

    collection.push(
      this.lngResourceService.GetString(
        errorItem.errorMessageValidationSummaryKey,
        parameters
      )
    );
  }

  /**
   * Getter wenn Errors entstehen
   */
  get hasErrors() {
    return this.formErrors.length > 0;
  }
}
