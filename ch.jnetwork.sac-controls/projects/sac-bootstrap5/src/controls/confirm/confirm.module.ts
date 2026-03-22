import { SACBootstrap5ButtonModule } from '../buttons/button.module';
import { SACBootstrap5DialogModule } from '../dialog/dialog.module';
import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

/**
 *  Module for confirm messages
 *
 *  Add the following entry to the imports in NgModule of the application: SACBootstrap5ConfirmModule.forRoot()
 *
 */
@NgModule({
    declarations: [SacConfirmComponent],
    imports: [CommonModule, SACBootstrap5DialogModule, SACBootstrap5ButtonModule],
    exports: [SacConfirmComponent],
    entryComponents: [SacConfirmComponent],
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
