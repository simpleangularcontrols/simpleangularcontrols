import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';
import { ModuleWithProviders, NgModule } from '@angular/core';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap3ConfirmModule.forRoot()
 *
 */
@NgModule({
    imports: [SacConfirmComponent],
    exports: [SacConfirmComponent],
})
export class SACBootstrap3ConfirmModule {
    // #region Public Static Methods

    public static forRoot(): ModuleWithProviders<SACBootstrap3ConfirmModule> {
        return {
            ngModule: SACBootstrap3ConfirmModule,
            providers: [ServiceConfirm],
        };
    }

    // #endregion Public Static Methods
}

export { ServiceConfirm } from './confirm.service';
