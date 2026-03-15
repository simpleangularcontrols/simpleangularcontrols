// tsco:ignore
import { Directive, ElementRef, Input, OnDestroy, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';

// #region Interfaces

/**
 * Wrapper for HTML options
 */
interface HTMLOption {
    // #region Properties

    /**
     * Boolean property for selected elements
     */
    selected: boolean;
    /**
     * Value
     */
    value: string;

    // #endregion Properties
}

// #endregion Interfaces

// #region Classes

/**
 * Base component for SacListboxOption
 */
@Directive()
export class SacListboxOptionCommon implements OnDestroy {
    // #region Properties

    /**
     * Value of selected option item
     */
    private _value: any = null;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param _element: ElementRef
     * @param _renderer: Renderer2
     */
    constructor(
        private _element: ElementRef,
        private _renderer: Renderer2,
        private _listbox: SacListboxCommon
    ) {
        if (this._listbox) {
            this._listbox.registerOption(this);
        }
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * NgValue of the control. Needed for multiple selection
     */
    @Input()
    public set ngValue(value: any) {
        if (this._listbox) {
            this._value = value;
        }
    }

    /**
     * Defines the value of the listbox
     */
    @Input()
    public set value(value: any) {
        if (this._listbox) {
            this._value = value;
        }
    }

    public get value(): any {
        return this._value;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Method returns the status of the elements that were selected
     * @param selected Element is selected
     */
    public _setSelected(selected: boolean) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }

    /**
     * OnDestroy event
     */
    public ngOnDestroy(): void {
        if (this._listbox) {
            this._listbox.unregisterOption(this);
        }
    }

    // #endregion Public Methods
}

/**
 * Component for SacListboxCommon. Extends SacBaseSelectControl
 */
@Directive()
export class SacListboxCommon extends SacBaseSelectControl<Array<string>> {
    // #region Properties

    /**
     * Number of rows
     */
    @Input() public rowsize = 5;
    /**
     * Resource key for validation message required at control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource key for validation message required in validation summary
     */
    @Input()
    public validationmessagesummaryrequired: string = this.validationKeyService.ValidationErrorSummaryRequired;

    /**
     * ViewChildren method
     */
    @ViewChildren(SacListboxOptionCommon)
    public contentOptions: QueryList<SacListboxOptionCommon>;

    /**
     * Option list
     */
    public optionlist: Array<SacListboxOptionCommon> = new Array<SacListboxOptionCommon>();

    // #endregion Properties

    // #region Public Methods

    /**
     * Getter for selected items
     */
    public getSelectedItems(selectelement: any) {
        const selectedValues: Array<string> = new Array<string>();

        if (selectelement.hasOwnProperty('selectedOptions')) {
            const options: HTMLCollection = selectelement.selectedOptions;
            for (let i = 0; i < options.length; i++) {
                const opt: HTMLOption = options.item(i);
                selectedValues.push(opt.value);
            }
        } else {
            // Degrade on IE
            const options: HTMLCollection = <HTMLCollection>selectelement.options;
            for (let i = 0; i < options.length; i++) {
                const opt: HTMLOption = options.item(i);
                if (opt.selected) {
                    selectedValues.push(opt.value);
                }
            }

            this.setValue(selectedValues);
        }
    }

    /**
     * Registers a listbox element
     * @param option Listbox option item to be registered
     */
    public registerOption(option: SacListboxOptionCommon): void {
        this.optionlist.push(option);
    }

    /**
     * Cancels the registration of a listbox item
     * @param option Listbox option item to be deregistered
     */
    public unregisterOption(option: SacListboxOptionCommon): void {
        const index = this.optionlist.indexOf(option);
        this.optionlist.splice(index, 1);
    }

    /**
     * Validator method
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = null;

        if (this.isrequired) {
            error = Validation.required(this.validationmessagerequired, this.validationmessagesummaryrequired)(c);
        }

        return error;
    }

    /**
     * Method writes new value
     */
    public writeValue(value: Array<string>) {
        if (this.optionlist && value) {
            this.optionlist.forEach((itm) => {
                if (value.indexOf(itm.value) >= 0) {
                    itm._setSelected(true);
                }
            });
        }

        super.writeValue(value);
    }

    // #endregion Public Methods
}

/**
 * Wrapper for HTML select
 */
abstract class HTMLCollection {
    // #region Properties

    /**
     * Length
     */
    public length: number;

    // #endregion Properties

    // #region Public Abstract Methods

    /**
     * Option-Item
     */
    public abstract item(_: number): HTMLOption;

    // #endregion Public Abstract Methods
}

// #endregion Classes
