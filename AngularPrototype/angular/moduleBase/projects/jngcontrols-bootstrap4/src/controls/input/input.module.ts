import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgInput } from "./input";
import { NgInputEmail } from "./inputemail";
import { NgInputArea } from "./inputarea";
import { NgInputCurrency } from "./inputcurrency";
import { NgInputDecimal } from "./inputdecimal";
import { NgInputInteger } from "./inputinteger";
import { NgInputPassword } from "./inputpassword";
import { NgInputSearch } from './inputsearch';


@NgModule({
  declarations: [NgInput, NgInputArea, NgInputCurrency, NgInputDecimal, NgInputEmail, NgInputInteger, NgInputPassword, NgInputSearch],
  imports: [
    BrowserModule
  ],
  exports: [NgInput, NgInputArea, NgInputCurrency, NgInputDecimal, NgInputEmail, NgInputInteger, NgInputPassword, NgInputSearch]
})
export class jNetworkBootstrap4InputModule { }
