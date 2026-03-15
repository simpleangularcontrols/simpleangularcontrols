import { SacInputBase } from '../../common/baseinputcontrol';
import { IconType } from '../../enums/IconType';
import { ISacLanguageService } from '../../interfaces/ISacLanguageService';
import { LanguageModel } from '../../models/languagemodel';
import { SACLANGUAGE_SERVICE, SacDefaultLanguageService } from '../../services/sac-language.service';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { Directive, Host, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Base class for multi-language textarea control
 */
@Directive()
export class SacMultilanguageInputAreaCommon extends SacInputBase<any> {
    // #region Properties

    /**
     * Languages for the control
     */
    private languages: LanguageModel[] = [];

    /**
     * Selected language of the control
     */
    private selectedLanguage: LanguageModel = null;

    /**
     * Service for error localisation
     */
    protected lngLanguageService: ISacLanguageService;

    /**
     * Define fixed width for the control.
     */
    @Input() public controlwidth: string = null;

    /**
     * Max length of characters for input field
     */
    @Input() public maxtextlength: number = null;

    /**
     * Activates validator that at least one language must be present
     */
    @Input() public requiredany = false;

    /**
     * Number of rows for the textarea
     */
    @Input() public rows = 7;

    /**
     * Resource key for the 'required' validation message at the control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorSummaryRequired;

    /**
     * Resource key for the 'required any language' validation message at the control
     */
    @Input() public validationmessagerequiredany: string =
        this.validationKeyService.ValidationErrorMultilanguageRequiredAny;

    /**
     * Resource key for the 'required' validation message in the validation summary
     */
    @Input() public validationmessagesummaryrequired: string =
        this.validationKeyService.ValidationErrorSummaryMultilanguageRequired;

    /**
     * Resource key for the 'required any language' validation message in the validation summary
     */
    @Input() public validationmessagesummaryrequiredany: string =
        this.validationKeyService.ValidationErrorSummaryMultilanguageRequiredAny;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(@Host() formlayout: SacFormLayoutCommon, injector: Injector) {
        super(formlayout, injector);

        this.lngLanguageService = injector.get(SACLANGUAGE_SERVICE, new SacDefaultLanguageService());

        this.lngLanguageService.GetLanguages().subscribe((result: LanguageModel[]) => {
            this.languages = result;

            if (this.languages.length > 0) {
                this.selectedLanguage = this.languages[0];
            }
            // Execute control validation, since the value may already be set
            this.UpdateValueAndValidity();
        });
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Getter that returns the component value in the selected language. If no language is selected, an empty string is returned.
     * If the component has no stored value, an empty string is returned
     */
    public get LanguageValue(): string {
        if (this.value) {
            const currentIsoCode: string = this.selectedLanguage ? this.selectedLanguage.IsoCode : null;

            // Fallback falls keine Selektierte Sprache
            if (currentIsoCode === null) {
                return '';
            }

            return this.value[currentIsoCode];
        } else {
            return '';
        }
    }

    /**
     * Collection of languages
     */
    public get Languages(): LanguageModel[] {
        return this.languages;
    }

    /**
     * Returns the icon of the selected language
     */
    public get SelectedIcon(): string {
        if (this.selectedLanguage) {
            return this.selectedLanguage.Icon;
        } else {
            return '';
        }
    }

    /**
     * Returns the type of the icon for the selected language
     */
    public get SelectedIconType(): IconType {
        if (this.selectedLanguage) {
            return this.selectedLanguage.IconType;
        } else {
            return IconType.Image;
        }
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Checks whether the component has no value in any language.
     * @returns True if an empty value is present
     */
    public IsAnyEmpty(): boolean {
        let found = false;

        if (this.value) {
            this.languages.forEach((itm: LanguageModel) => {
                if (itm === null) {
                    found = true;
                    return;
                }

                if (
                    this.value[itm.IsoCode] === undefined ||
                    this.value[itm.IsoCode] === '' ||
                    this.value[itm.IsoCode] === null
                ) {
                    found = true;
                    return;
                }
            });
        }
        return found;
    }

    /**
     * Indicates whether a value is defined in a specific language
     * @param sprache Language in which the value should be checked
     * @returns True if the value is present
     */
    public IsEmpty(sprache: LanguageModel): boolean {
        if (this.value) {
            // Fallback falls keine Selektierte Sprache
            if (sprache === null) {
                return true;
            }

            return (
                this.value[sprache.IsoCode] === undefined ||
                this.value[sprache.IsoCode] === '' ||
                this.value[sprache.IsoCode] === null
            );
        } else {
            return true;
        }
    }

    /**
     * Selects the component language
     * @param language Language to select
     */
    public SelectLanguage(language: LanguageModel) {
        this.selectedLanguage = language;
    }

    /**
     * Saves a value for the currently selected language
     * @param value Value to store
     */
    public SetLanguageValue(value: string) {
        if (this.value) {
            const currentIsoCode: string = this.selectedLanguage ? this.selectedLanguage.IsoCode : null;

            // Fallback falls keine Selektierte Sprache
            if (currentIsoCode === null) {
                return;
            }

            this.value[currentIsoCode] = value;
            this.propagateChange(this._value);
        }
    }

    /**
     * Method validates whether the value meets the given criteria
     * @param c Control that is validated
     */
    public validateData(c: AbstractControl): { [key: string]: any } {
        let error: ValidationErrors | null = null;

        if (
            error === null &&
            c.value !== null &&
            c.value !== undefined &&
            c.value !== '' &&
            this.isrequired !== undefined &&
            this.isrequired === true
        ) {
            error = Validation.multilanguageRequired(
                this.languages,
                this.validationmessagerequired,
                this.validationmessagesummaryrequired
            )(c);
        }

        if (
            error === null &&
            c.value !== null &&
            c.value !== undefined &&
            c.value !== '' &&
            this.requiredany !== undefined &&
            this.requiredany === true
        ) {
            error = Validation.multilanguageRequiredAny(
                this.languages,
                this.validationmessagerequiredany,
                this.validationmessagesummaryrequiredany
            )(c);
        }

        return error;
    }

    // #endregion Public Methods
}
