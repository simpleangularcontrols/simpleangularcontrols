import { SacInputDecimalCommon } from './inputdecimal';
import { Directive, Input } from '@angular/core';

/**
 * Base component for SacInputCurrency
 */
@Directive()
export class SacInputCurrencyCommon extends SacInputDecimalCommon {
    // #region Properties

    @Input()
    public currency = '';

    // #endregion Properties

    // #region Protected Methods

    /**
     * Set currency during initialization if no value is defined.
     */
    protected OnClassInit(): void {
        super.OnClassInit();

        if (!this.currency) {
            this.currency = this.configurationService.CurrencyText;
        }
    }

    // #endregion Protected Methods
}
