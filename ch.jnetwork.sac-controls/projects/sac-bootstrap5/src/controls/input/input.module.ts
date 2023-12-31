import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacInputComponent } from './input';
import { SacInputEmailComponent } from './inputemail';
import { SacInputAreaComponent } from './inputarea';
import { SacInputCurrencyComponent } from './inputcurrency';
import { SacInputDecimalComponent } from './inputdecimal';
import { SacInputIntegerComponent } from './inputinteger';
import { SacInputPasswordComponent } from './inputpassword';
import { SacInputSearchComponent } from './inputsearch';


@NgModule({
  declarations: [SacInputComponent, SacInputAreaComponent, SacInputCurrencyComponent, SacInputDecimalComponent, SacInputEmailComponent, SacInputIntegerComponent, SacInputPasswordComponent, SacInputSearchComponent],
  imports: [
    CommonModule
  ],
  exports: [SacInputComponent, SacInputAreaComponent, SacInputCurrencyComponent, SacInputDecimalComponent, SacInputEmailComponent, SacInputIntegerComponent, SacInputPasswordComponent, SacInputSearchComponent]
})
export class SACBootstrap5InputModule { }
