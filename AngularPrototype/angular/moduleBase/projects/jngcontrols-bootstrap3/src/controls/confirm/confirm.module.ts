import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceConfirm } from './confirm.service';
import { NgConfirmComponent } from './confirm';
import { JNetworkBootstrap3DialogModule } from '../dialog/dialog.module';
import { JNetworkBootstrap3ButtonModule } from '../buttons/button.module';

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap3ConfirmModule.forRoot()
 *
 */
@NgModule({
  declarations: [NgConfirmComponent],
  imports: [BrowserModule, JNetworkBootstrap3DialogModule, JNetworkBootstrap3ButtonModule],
  exports: [NgConfirmComponent],
  entryComponents: [NgConfirmComponent]
})
export class JNetworkBootstrap3ConfirmModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JNetworkBootstrap3ConfirmModule,
      providers: [ServiceConfirm]
    };
  }
}

export { ServiceConfirm } from './confirm.service';
