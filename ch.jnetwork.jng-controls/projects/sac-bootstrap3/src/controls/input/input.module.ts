import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { NgInputComponent } from './input';
import { NgInputAreaComponent } from './inputarea';
import { NgInputCurrencyComponent } from './inputcurrency';
import { NgInputDecimalComponent } from './inputdecimal';
import { NgInputEmailComponent } from './inputemail';
import { NgInputIntegerComponent } from './inputinteger';
import { NgInputPasswordComponent } from './inputpassword';
import { NgInputSearchComponent } from './inputsearch';


@NgModule({
  declarations: [NgInputComponent, NgInputAreaComponent, NgInputCurrencyComponent, NgInputDecimalComponent, NgInputEmailComponent, NgInputIntegerComponent, NgInputPasswordComponent, NgInputSearchComponent],
  imports: [
    CommonModule, CommonModule, FormsModule, SACBootstrap3TooltipModule
  ],
  exports: [NgInputComponent, NgInputAreaComponent, NgInputCurrencyComponent, NgInputDecimalComponent, NgInputEmailComponent, NgInputIntegerComponent, NgInputPasswordComponent, NgInputSearchComponent]
})
export class SACBootstrap3InputModule { }
