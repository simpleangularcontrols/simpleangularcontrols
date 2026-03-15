import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';
import { ModuleWithProviders, NgModule } from '@angular/core';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: SACBootstrap5ConfirmModule.forRoot()
 *
 */
@NgModule({
    imports: [SacConfirmComponent],
    exports: [SacConfirmComponent],
})
export class SACBootstrap5ConfirmModule {
    // #region Public Static Methods

    public static forRoot(): ModuleWithProviders<SACBootstrap5ConfirmModule> {
        return {
            ngModule: SACBootstrap5ConfirmModule,
            providers: [ServiceConfirm],
        };
    }

    // #endregion Public Static Methods
}

export { ServiceConfirm } from './confirm.service';
