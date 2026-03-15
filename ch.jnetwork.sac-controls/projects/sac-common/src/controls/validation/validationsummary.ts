import { ISacLocalisationService } from '../../interfaces/ISacLocalisationService';
import { ISacValidationKeyService } from '../../interfaces/ISacValidationKeyService';
import { IAbstractControlLabelExtension } from '../../interfaces/iabstractcontrollabel';
import { SACLOCALISATION_SERVICE, SacDefaultLocalisationService } from '../../services/sac-localisation.service';
import { SACVALIDATIONKEY_SERVICE, SacDefaultValidationKeyService } from '../../services/sac-validationkey.service';
import { createGuid } from '../../utilities/guid';
import { ValidationErrorItem } from '../../validation';
import { SacFormCommon } from '../form/form';
import { Directive, Injector, Input } from '@angular/core';
import { AbstractControl, NgForm, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

/**
 * Base component for SacValidationSummary
 */
@Directive()
export class SacValidationSummaryCommon {
    // #region Properties

    /**
     * Service for Error Localisation
     */
    protected lngResourceService: ISacLocalisationService;

    /**
     * Parent Form
     */
    protected parent: SacFormCommon;

    /**
     * Service to receive standard validation message keys and texts
     */
    protected validationKeyService: ISacValidationKeyService;

    /**
     * Identifier used for the E2E data attribute.
     */
    @Input()
    public e2eidentifier: string | null = null;

    /**
     * reactive form instance
     */
    @Input()
    public form: UntypedFormGroup;

    /**
     * Form groupname to filter summary to formgroup
     *
     * Important: it works only in reactive forms mode.
     */
    @Input()
    public formGroupName: string;

    /**
     * name of control
     */
    @Input()
    public name: string = createGuid();

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param parent Parent form control component
     * @param injector Service injector for dependency resolution
     */
    constructor(parent: SacFormCommon, injector: Injector) {
        this.parent = parent;

        this.validationKeyService = injector.get(SACVALIDATIONKEY_SERVICE, new SacDefaultValidationKeyService());
        this.lngResourceService = injector.get(
            SACLOCALISATION_SERVICE,
            new SacDefaultLocalisationService(this.validationKeyService)
        );
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Validation method
     */
    public get formErrors(): Observable<string>[] {
        const collection: Array<Observable<string>> = new Array<Observable<string>>();

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

        const items: Array<NgForm | UntypedFormArray> = Object.keys(formBase.controls).map((key) => {
            return <NgForm | UntypedFormArray>formBase.controls[key];
        });

        this.getErrorCollection(items, collection);

        return collection.filter((item) => item !== null);
    }

    /**
     * Getter when errors occur
     */
    public get hasErrors() {
        return this.formErrors.length > 0;
    }

    // #endregion Public Getters And Setters

    // #region Private Methods

    /**
     * Adds a validation error to the error collection
     * @param ctl Faulty control
     * @param collection Collection of all error messages
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

        if ((ctl as unknown as IAbstractControlLabelExtension)?.controllabel) {
            parameters['FIELD'] = (ctl as unknown as IAbstractControlLabelExtension).controllabel;
        } else {
            parameters['FIELD'] = errorItem.fieldName;
        }

        collection.push(this.lngResourceService.GetString(errorItem.errorMessageValidationSummaryKey, parameters));
    }

    /**
     * The method returns collection of errors. Requires controls: Array<NgForm | FormArray> and collection: Array<Observable<string>>
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

                    // Cancel analysis if item was not touched or is valid
                    if (control.touched === false || control.valid === true) {
                        return;
                    }

                    // Handle if control is not a container
                    if (control.controls === undefined || control.controls === null) {
                        this.addErrorToCollection(control, collection);
                    } else {
                        // Handling of a control container
                        const items: Array<NgForm | UntypedFormArray> = Object.keys(control.controls).map((formKey) => {
                            return <NgForm | UntypedFormArray>control.controls[formKey];
                        });

                        this.getErrorCollection(items, collection);
                    }
                });
            }
        });
    }

    // #endregion Private Methods
}
