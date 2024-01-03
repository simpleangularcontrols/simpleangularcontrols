import { ModuleWithProviders, NgModule } from '@angular/core';
import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';

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
  static forRoot(): ModuleWithProviders<SACBootstrap3ConfirmModule> {
    return {
      ngModule: SACBootstrap3ConfirmModule,
      providers: [ServiceConfirm],
    };
  }
}

export { ServiceConfirm } from './confirm.service';

