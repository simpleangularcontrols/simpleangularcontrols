import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceConfirm } from "./confirm.service";
import { NgConfirm } from "./confirm";
import { jNetworkBootstrap3DialogModule } from "../dialog/dialog.module";
import { jNetworkBootstrap3ButtonModule } from "../buttons/button.module";

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap3ConfirmModule.forRoot()
 *
 */
@NgModule({
  declarations: [NgConfirm],
  imports: [BrowserModule, jNetworkBootstrap3DialogModule, jNetworkBootstrap3ButtonModule],
  exports: [NgConfirm],
  entryComponents: [NgConfirm]
})
export class jNetworkBootstrap3ConfirmModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: jNetworkBootstrap3ConfirmModule,
      providers: [ServiceConfirm]
    }
  }
}

export { ServiceConfirm } from './confirm.service';
