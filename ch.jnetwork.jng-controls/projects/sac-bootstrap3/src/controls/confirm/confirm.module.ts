import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceConfirm } from './confirm.service';
import { SacConfirmComponent } from './confirm';
import { SACBootstrap3DialogModule } from '../dialog/dialog.module';
import { SACBootstrap3ButtonModule } from '../buttons/button.module';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap3ConfirmModule.forRoot()
 *
 */
@NgModule({
    declarations: [SacConfirmComponent],
    imports: [CommonModule, SACBootstrap3DialogModule, SACBootstrap3ButtonModule],
    exports: [SacConfirmComponent]
})
export class SACBootstrap3ConfirmModule {
  static forRoot(): ModuleWithProviders<SACBootstrap3ConfirmModule> {
    return {
      ngModule: SACBootstrap3ConfirmModule,
      providers: [ServiceConfirm]
    };
  }
}

export { ServiceConfirm } from './confirm.service';
