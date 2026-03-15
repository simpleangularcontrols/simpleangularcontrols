import { SACCONFIGURATION_SERVICE, SacDefaultConfigurationService } from '../services';
import { Injector, Pipe, PipeTransform } from '@angular/core';

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
     * Transform control name and e2e attribute for testing purposes
     * @param controlname Name of the control
     * @param e2eattribute E2E testing attribute value
     * @returns The e2e attribute or null if not enabled
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
