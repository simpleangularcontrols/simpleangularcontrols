import { ModuleWithProviders, NgModule } from '@angular/core';
import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap4ConfirmModule.forRoot()
 *
 */
@NgModule({
  imports: [SacConfirmComponent],
  exports: [SacConfirmComponent],
})
export class SACBootstrap4ConfirmModule {
  static forRoot(): ModuleWithProviders<SACBootstrap4ConfirmModule> {
    return {
      ngModule: SACBootstrap4ConfirmModule,
      providers: [ServiceConfirm],
    };
  }
}

export { ServiceConfirm } from './confirm.service';

