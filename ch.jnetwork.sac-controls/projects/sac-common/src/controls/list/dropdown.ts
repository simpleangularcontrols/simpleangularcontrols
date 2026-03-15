import { SacBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { _buildValueString } from './buildvaluestring';
import { Directive, ElementRef, Host, Injector, Input, Renderer2 } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Base dropdown component
 */
@Directive()
export class SacDropdownCommon extends SacBaseSelectControl<any> {
    // #region Properties

    /**
     * compareWith function
     */
    private _compareWith: (o1: any, o2: any) => boolean = Object.is;

    /**
     * Counter for option ID; default value = 0
     */
    public _optionIdCounter = 0;

    /**
     * Option map
     */
    public _optionMap: Map<string, any> = new Map<string, any>();

    /**
     * Label text for empty item
     */
    @Input() public emptylabel = '';

    /**
     * Option value for empty item
     */
    @Input() public emptyvalue: string | null | number = null;

    /**
     * Resource key for validation message required at control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource key for validation message required in validation summary
     */
    @Input()
    public validationmessagesummaryrequired: string = this.validationKeyService.ValidationErrorSummaryRequired;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     * @param renderer html rendering engine
     * @param elementRef reference to html element
     */
    constructor(
        @Host() formlayout: SacFormLayoutCommon,
        injector: Injector,
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        super(formlayout, injector);
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * compareWith function
     */
    @Input()
    public set comparewith(fn: (o1: any, o2: any) => boolean) {
        if (typeof fn !== 'function') {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Registers the option ID counter as string
     */
    public registerOption(): string {
        return (this._optionIdCounter++).toString();
    }

    /**
     * Method called by options to establish the mapping between dropdown value and value.
     * @param id: Id from options
     * @param value: Value
     */
    public setOptionMap(id: string, value: any): void {
        this._optionMap.set(id, value);

        // Update selected value on control if value matches selected value
        if (this.value === value) {
            this.setSelectedValue(value);
        }
    }

    /**
     * Set value
     * @param value - Value
     */
    public setValue(value: string) {
        super.setValue(this.getOptionValue(value));
    }

    /**
     * Validator
     * @param c Control instance
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = null;

        if (this.isrequired) {
            error = Validation.required(this.validationmessagerequired, this.validationmessagesummaryrequired)(c);
        }

        if (error) {
            return error;
        }

        if (this.isrequired && this.emptyvalue !== null) {
            error = Validation.notequals(
                this.emptyvalue,
                this.validationmessagerequired,
                this.validationmessagesummaryrequired
            )(c);
        }

        return error;
    }

    /**
     * Write value
     * @param value - Value
     */
    public writeValue(value: any) {
        this.setSelectedValue(value);
        super.writeValue(value);
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Extract ID
     * @param valueString String from which the ID should be extracted
     */
    private extractId(valueString: string): string {
        return valueString.split(':')[0];
    }

    /**
     * Takes the ID from the option
     * @param value
     */
    private getOptionId(value: any): string | null {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith(this._optionMap.get(id), value)) {
                return id;
            }
        }
        return null;
    }

    /**
     * Takes the string value from the option
     * @param valueString
     */
    private getOptionValue(valueString: string): any {
        const id: string = this.extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }

    /**
     * Sets the selected value on the control
     * @param value Value
     */
    private setSelectedValue(value: any): void {
        // Read select item from control
        const selectItem: any = this.elementRef.nativeElement.getElementsByTagName('select')[0];
        /**
         * Id of the select item
         */
        const id: string | null = this.getOptionId(value);
        /**
         * Value string
         */
        const valueString = _buildValueString(id, value);

        if (selectItem !== undefined) {
            this.renderer.setProperty(selectItem, 'value', valueString);
        }
    }

    // #endregion Private Methods
}
