import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ],
  exports: [NgInputComponent, NgInputAreaComponent, NgInputCurrencyComponent, NgInputDecimalComponent, NgInputEmailComponent, NgInputIntegerComponent, NgInputPasswordComponent, NgInputSearchComponent]
})
export class SACBootstrap4InputModule { }
