import { _buildValueString } from './buildvaluestring';
import { SacDropdownCommon } from './dropdown';
import { Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

/**
 * SacDropdownOption-Klasse
 */
@Directive()
export class SacDropdownOptionCommon implements OnDestroy {
    // #region Properties

    /**
     * ID-String
     */
    private id: string = null;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param _element Referenz auf HTML Element
     * @param _renderer Render Engine
     * @param _dropdown Dropdown Instanz
     */
    constructor(private _element: ElementRef, private _renderer: Renderer2, private _dropdown: SacDropdownCommon) {
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
        // Cancel wenn kein Parent Dropdown vorhanden
        if (this._dropdown == null) {
            return;
        }

        this._dropdown.setOptionMap(this.id, value);
        this._setElementValue(_buildValueString(this.id, value));

        this._dropdown.writeValue(this._dropdown.value);
    }

    /**
     * Wert-Setter
     */
    @Input()
    public set value(value: any) {
        this._setElementValue(value);
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Den Wert vom Option-Element einstellen
     * @param value Wert
     */
    public _setElementValue(value: string): void {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }

    /**
     * OnDestroy Event
     */
    public ngOnDestroy(): void {
        if (this._dropdown) {
            this._dropdown._optionMap.delete(this.id);
        }
    }

    // #endregion Public Methods
}
