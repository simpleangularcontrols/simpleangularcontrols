import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgInputComponent } from './input';
import { NgInputEmailComponent } from './inputemail';
import { NgInputAreaComponent } from './inputarea';
import { NgInputCurrencyComponent } from './inputcurrency';
import { NgInputDecimalComponent } from './inputdecimal';
import { NgInputIntegerComponent } from './inputinteger';
import { NgInputPasswordComponent } from './inputpassword';
import { NgInputSearchComponent } from './inputsearch';


@NgModule({
  declarations: [NgInputComponent, NgInputAreaComponent, NgInputCurrencyComponent, NgInputDecimalComponent, NgInputEmailComponent, NgInputIntegerComponent, NgInputPasswordComponent, NgInputSearchComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgInputComponent, NgInputAreaComponent, NgInputCurrencyComponent, NgInputDecimalComponent, NgInputEmailComponent, NgInputIntegerComponent, NgInputPasswordComponent, NgInputSearchComponent]
})
export class JNetworkBootstrap4InputModule { }
