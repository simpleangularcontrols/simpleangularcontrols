import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgDropdown, NgDropdownOption } from "./dropdown";
import { NgListbox } from "./listbox";

@NgModule({
  declarations: [NgDropdown, NgDropdownOption, NgListbox],
  imports: [
    BrowserModule
  ],
  exports: [NgDropdown, NgDropdownOption, NgListbox]
})
export class ExanicBootstrap4ListModule { }
