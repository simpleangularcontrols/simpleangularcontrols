import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceConfirm } from './confirm.service';
import { NgConfirmComponent } from './confirm';
import { JNetworkBootstrap4DialogModule } from '../dialog/dialog.module';
import { JNetworkBootstrap4ButtonModule } from '../buttons/button.module';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap4ConfirmModule.forRoot()
 *
 */
@NgModule({
    declarations: [NgConfirmComponent],
    imports: [CommonModule, JNetworkBootstrap4DialogModule, JNetworkBootstrap4ButtonModule],
    exports: [NgConfirmComponent]
})
export class JNetworkBootstrap4ConfirmModule {
  static forRoot(): ModuleWithProviders<JNetworkBootstrap4ConfirmModule> {
    return {
      ngModule: JNetworkBootstrap4ConfirmModule,
      providers: [ServiceConfirm]
    };
  }
}

export { ServiceConfirm } from './confirm.service';
