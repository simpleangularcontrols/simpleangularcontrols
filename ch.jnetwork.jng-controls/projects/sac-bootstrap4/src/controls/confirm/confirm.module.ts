import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceConfirm } from './confirm.service';
import { NgConfirmComponent } from './confirm';
import { SACBootstrap4DialogModule } from '../dialog/dialog.module';
import { SACBootstrap4ButtonModule } from '../buttons/button.module';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap4ConfirmModule.forRoot()
 *
 */
@NgModule({
    declarations: [NgConfirmComponent],
    imports: [CommonModule, SACBootstrap4DialogModule, SACBootstrap4ButtonModule],
    exports: [NgConfirmComponent]
})
export class SACBootstrap4ConfirmModule {
  static forRoot(): ModuleWithProviders<SACBootstrap4ConfirmModule> {
    return {
      ngModule: SACBootstrap4ConfirmModule,
      providers: [ServiceConfirm]
    };
  }
}

export { ServiceConfirm } from './confirm.service';
