import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SACBootstrap3ButtonModule } from '../buttons/button.module';
import { SACBootstrap3DialogModule } from '../dialog/dialog.module';
import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap3ConfirmModule.forRoot()
 *
 */
@NgModule({
  declarations: [SacConfirmComponent],
  imports: [CommonModule, SACBootstrap3DialogModule, SACBootstrap3ButtonModule],
  exports: [SacConfirmComponent],
  entryComponents: [SacConfirmComponent],
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
