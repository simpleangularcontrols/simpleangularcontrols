import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgMultilanguageInput } from "./multilanguageinput";
import { NgMultilanguageInputArea } from "./multilanguageinputarea";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgMultilanguageInput, NgMultilanguageInputArea],
  imports: [
    BrowserModule, NgbDropdownModule
  ],
  exports: [NgMultilanguageInput, NgMultilanguageInputArea]
})
export class jNetworkBootstrap4MultilanguageModule { }
