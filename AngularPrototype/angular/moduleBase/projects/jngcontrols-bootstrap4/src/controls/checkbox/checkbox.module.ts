import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgCheckbox } from "./checkbox";
import { NgRadiobutton } from "./radiobutton";
import { NgRadiobuttons } from "./radiobuttons";

@NgModule({
  declarations: [NgCheckbox, NgRadiobutton, NgRadiobuttons],
  imports: [
    BrowserModule
  ],
  exports: [NgCheckbox, NgRadiobutton, NgRadiobuttons]
})
export class ExanicBootstrap4CheckboxModule { }
