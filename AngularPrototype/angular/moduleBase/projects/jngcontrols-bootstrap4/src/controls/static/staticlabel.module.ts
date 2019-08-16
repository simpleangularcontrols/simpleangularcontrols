import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgStaticLabel } from "./staticlabel";
import { NgStaticFormContainer } from './formcontainer';

@NgModule({
  declarations: [NgStaticLabel, NgStaticFormContainer],
  imports: [
    BrowserModule
  ],
  exports: [NgStaticLabel, NgStaticFormContainer]
})
export class jNetworkBootstrap4StaticLabelModule { }
