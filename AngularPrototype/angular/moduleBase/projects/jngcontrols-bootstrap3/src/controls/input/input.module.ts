import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgInput } from "./input";
import { NgInputEmail } from "./inputemail";
import { NgInputArea } from "./inputarea";
import { NgInputCurrency } from "./inputcurrency";
import { NgInputDecimal } from "./inputdecimal";
import { NgInputInteger } from "./inputinteger";
import { NgInputPassword } from "./inputpassword";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgInputSearch } from "./inputsearch";


@NgModule({
  declarations: [NgInput, NgInputArea, NgInputCurrency, NgInputDecimal, NgInputEmail, NgInputInteger, NgInputPassword, NgInputSearch],
  imports: [
    BrowserModule, CommonModule, FormsModule
  ],
  exports: [NgInput, NgInputArea, NgInputCurrency, NgInputDecimal, NgInputEmail, NgInputInteger, NgInputPassword, NgInputSearch]
})
export class jNetworkBootstrap3InputModule { }
