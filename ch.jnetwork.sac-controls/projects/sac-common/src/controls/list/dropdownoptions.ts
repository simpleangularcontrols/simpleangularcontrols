import { _buildValueString } from './buildvaluestring';
import { SacDropdownCommon } from './dropdown';
import { Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

/**
 * SacDropdownOption class
 */
@Directive()
export class SacDropdownOptionCommon implements OnDestroy {
    // #region Properties

    /**
     * ID string
     */
    private id: string = null;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param _element Reference to HTML element
     * @param _renderer Render engine
     * @param _dropdown Dropdown instance
     */
    constructor(
        private _element: ElementRef,
        private _renderer: Renderer2,
        private _dropdown: SacDropdownCommon
    ) {
        if (this._dropdown) {
            this.id = this._dropdown.registerOption();
        }
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Option ngValue
     */
    @Input()
    public set ngValue(value: any) {
        // Cancel if no parent dropdown available
        if (this._dropdown == null) {
            return;
        }

        this._dropdown.setOptionMap(this.id, value);
        this._setElementValue(_buildValueString(this.id, value));

        this._dropdown.writeValue(this._dropdown.value);
    }

    /**
     * Value setter
     */
    @Input()
    public set value(value: any) {
        this._setElementValue(value);
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Set the value of the option element
     * @param value Value
     */
    public _setElementValue(value: string): void {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }

    /**
     * OnDestroy event
     */
    public ngOnDestroy(): void {
        if (this._dropdown) {
            this._dropdown._optionMap.delete(this.id);
        }
    }

    // #endregion Public Methods
}
