import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';
import { ModuleWithProviders, NgModule } from '@angular/core';

/**
 *  Module for Confirm Messages
 *
 *  Add the following entry in the NgModule of the application in Imports: ExanicBootstrap4ConfirmModule.forRoot()
 *
 */
@NgModule({
    imports: [SacConfirmComponent],
    exports: [SacConfirmComponent],
})
export class SACBootstrap4ConfirmModule {
    // #region Public Static Methods

    public static forRoot(): ModuleWithProviders<SACBootstrap4ConfirmModule> {
        return {
            ngModule: SACBootstrap4ConfirmModule,
            providers: [ServiceConfirm],
        };
    }

    // #endregion Public Static Methods
}

export { ServiceConfirm } from './confirm.service';
