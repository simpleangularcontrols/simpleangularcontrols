import { ModuleWithProviders, NgModule } from '@angular/core';
import { SacConfirmComponent } from './confirm';
import { ServiceConfirm } from './confirm.service';

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
  static forRoot(): ModuleWithProviders<SACBootstrap5ConfirmModule> {
    return {
      ngModule: SACBootstrap5ConfirmModule,
      providers: [ServiceConfirm],
    };
  }
}

export { ServiceConfirm } from './confirm.service';
