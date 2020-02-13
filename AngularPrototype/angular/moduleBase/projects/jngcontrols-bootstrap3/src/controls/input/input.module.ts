import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgInputComponent } from './input';
import { NgInputEmailComponent } from './inputemail';
import { NgInputAreaComponent } from './inputarea';
import { NgInputCurrencyComponent } from './inputcurrency';
import { NgInputDecimalComponent } from './inputdecimal';
import { NgInputIntegerComponent } from './inputinteger';
import { NgInputPasswordComponent } from './inputpassword';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgInputSearchComponent } from './inputsearch';
import { NgTooltipComponent } from '../tooltip/tooltip';
import { JNetworkBootstrap3TooltipModule } from '../tooltip/tooltip.module';


@NgModule({
  declarations: [NgInputComponent, NgInputAreaComponent, NgInputCurrencyComponent, NgInputDecimalComponent, NgInputEmailComponent, NgInputIntegerComponent, NgInputPasswordComponent, NgInputSearchComponent],
  imports: [
    BrowserModule, CommonModule, FormsModule, JNetworkBootstrap3TooltipModule
  ],
  exports: [NgInputComponent, NgInputAreaComponent, NgInputCurrencyComponent, NgInputDecimalComponent, NgInputEmailComponent, NgInputIntegerComponent, NgInputPasswordComponent, NgInputSearchComponent]
})
export class JNetworkBootstrap3InputModule { }
