import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceConfirm } from './confirm.service';
import { SacConfirmComponent } from './confirm';
import { SACBootstrap5DialogModule } from '../dialog/dialog.module';
import { SACBootstrap5ButtonModule } from '../buttons/button.module';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap4ConfirmModule.forRoot()
 *
 */
@NgModule({
    declarations: [SacConfirmComponent],
    imports: [CommonModule, SACBootstrap5DialogModule, SACBootstrap5ButtonModule],
    exports: [SacConfirmComponent]
})
export class SACBootstrap5ConfirmModule {
  static forRoot(): ModuleWithProviders<SACBootstrap5ConfirmModule> {
    return {
      ngModule: SACBootstrap5ConfirmModule,
      providers: [ServiceConfirm]
    };
  }
}

export { ServiceConfirm } from './confirm.service';
