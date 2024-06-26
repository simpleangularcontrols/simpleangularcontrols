import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SACBootstrap4ButtonModule } from '../buttons/button.module';
import { SACBootstrap4DialogModule } from '../dialog/dialog.module';
import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap4ConfirmModule.forRoot()
 *
 */
@NgModule({
  declarations: [SacConfirmComponent],
  imports: [CommonModule, SACBootstrap4DialogModule, SACBootstrap4ButtonModule],
  exports: [SacConfirmComponent],
  entryComponents: [SacConfirmComponent],
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
