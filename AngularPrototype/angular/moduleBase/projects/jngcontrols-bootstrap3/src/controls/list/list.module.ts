import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgDropdown, NgDropdownOption } from "./dropdown";
import { NgListbox } from "./listbox";
import { jNetworkCommonListboxOptionModule } from "@jnetwork/jngcontrols-common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NgDropdown, NgDropdownOption, NgListbox],
  imports: [
    BrowserModule, jNetworkCommonListboxOptionModule, FormsModule
  ],
  exports: [NgDropdown, NgDropdownOption, NgListbox]
})
export class jNetworkBootstrap3ListModule { }
