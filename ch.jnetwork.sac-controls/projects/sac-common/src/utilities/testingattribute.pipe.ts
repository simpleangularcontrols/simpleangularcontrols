import { SACCONFIGURATION_SERVICE, SacDefaultConfigurationService } from '../services';
import { Injector, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'testingattribute',
    standalone: true,
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
     *
     */
    constructor(injector: Injector) {
        // get attribute state from config
        const configurationService = injector.get(SACCONFIGURATION_SERVICE, new SacDefaultConfigurationService());
        this.isEnabled = configurationService.EnableE2EAttributes;
    }

    // #endregion Constructors

    // #region Public Methods

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
