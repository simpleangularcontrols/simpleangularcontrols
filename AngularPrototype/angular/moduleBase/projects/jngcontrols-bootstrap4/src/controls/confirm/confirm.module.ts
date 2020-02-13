import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  imports: [BrowserModule, JNetworkBootstrap4DialogModule, JNetworkBootstrap4ButtonModule],
  exports: [NgConfirmComponent],
  entryComponents: [NgConfirmComponent]
})
export class JNetworkBootstrap4ConfirmModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JNetworkBootstrap4ConfirmModule,
      providers: [ServiceConfirm]
    };
  }
}

export { ServiceConfirm } from './confirm.service';
