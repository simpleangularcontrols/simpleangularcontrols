import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceConfirm } from "./confirm.service";
import { NgConfirm } from "./confirm";
import { jNetworkBootstrap4DialogModule } from "../dialog/dialog.module";
import { jNetworkBootstrap4ButtonModule } from "../buttons/button.module";

/**
 *  Module für Confirm Messages
 *
 *  In NgModule der Applikation folgenden Eintrag bei Imports einfügen: ExanicBootstrap4ConfirmModule.forRoot()
 *
 */
@NgModule({
  declarations: [NgConfirm],
  imports: [BrowserModule, jNetworkBootstrap4DialogModule, jNetworkBootstrap4ButtonModule],
  exports: [NgConfirm],
  entryComponents: [NgConfirm]
})
export class jNetworkBootstrap4ConfirmModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: jNetworkBootstrap4ConfirmModule,
      providers: [ServiceConfirm]
    }
  }
}

export { ServiceConfirm } from './confirm.service';
