import { SACCONFIGURATION_SERVICE, SacDefaultConfigurationService } from '../services';
import { Injector, Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to return E2E attribute values based on configuration.
 *
 * - If E2E attributes are disabled, it returns null.
 * - If explicit e2e attribute is provided, it is returned.
 * - Otherwise, fallback to control name.
 */
@Pipe({
    name: 'testingattribute',
})
export class SacTestingAttributePipe implements PipeTransform {
    // #region Properties

    /**
     * Defines whether the attribute is active
     */
    private isEnabled: boolean;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param injector Service injector for dependency resolution
     */
    constructor(injector: Injector) {
        // get attribute state from config
        const configurationService = injector.get(SACCONFIGURATION_SERVICE, new SacDefaultConfigurationService());
        this.isEnabled = configurationService.EnableE2EAttributes;
    }

    // #endregion Constructors

    // #region Public Methods

    /**
     * Transforms input to final E2E attribute value when enabled.
     *
     * @param controlname Optional control name for fallback attribute value.
     * @param e2eattribute Optional explicit e2e attribute value.
     * @returns Returned value is either `e2eattribute` or `controlname` when enabled, otherwise null.
     */
    public transform(controlname: string, e2eattribute: string) {
        // return null to disable attribute if disabled
        if (!this.isEnabled) {
            return null;
        }

        if (e2eattribute) {
            return e2eattribute;
        }

        if (controlname) {
            return controlname;
        }

        // disable attribute if name and e2e attribute is not set
        return null;
    }

    // #endregion Public Methods
}
