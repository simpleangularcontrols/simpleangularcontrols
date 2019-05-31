import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgStaticLabel } from "./staticlabel";
import { NgStaticFormContainer } from './formcontainer';
import { jNetworkBootstrap3TooltipModule } from "../tooltip/tooltip.module";

@NgModule({
  declarations: [NgStaticLabel, NgStaticFormContainer],
  imports: [
    BrowserModule, jNetworkBootstrap3TooltipModule
  ],
  exports: [NgStaticLabel, NgStaticFormContainer]
})
export class jNetworkBootstrap3StaticLabelModule { }
