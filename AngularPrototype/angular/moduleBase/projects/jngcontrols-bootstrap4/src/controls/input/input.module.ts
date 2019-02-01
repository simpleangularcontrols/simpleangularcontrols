import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgInput } from "./input";
import { NgInputEmail } from "./inputemail";
import { NgInputArea } from "./inputarea";
import { NgInputCurrency } from "./inputcurrency";
import { NgInputDecimal } from "./inputdecimal";
import { NgInputInteger } from "./inputinteger";
import { NgInputPassword } from "./inputpassword";


@NgModule({
  declarations: [NgInput, NgInputArea, NgInputCurrency, NgInputDecimal, NgInputEmail, NgInputInteger, NgInputPassword],
  imports: [
    BrowserModule
  ],
  exports: [NgInput, NgInputArea, NgInputCurrency, NgInputDecimal, NgInputEmail, NgInputInteger, NgInputPassword]
})
export class jNetworkBootstrap4InputModule { }
