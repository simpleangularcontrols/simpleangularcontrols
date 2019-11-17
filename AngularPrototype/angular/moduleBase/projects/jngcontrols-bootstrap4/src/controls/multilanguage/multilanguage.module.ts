import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgMultilanguageInput } from "./multilanguageinput";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgMultilanguageInput],
  imports: [
    BrowserModule, NgbDropdownModule
  ],
  exports: [NgMultilanguageInput]
})
export class jNetworkBootstrap4MultilanguageModule { }
