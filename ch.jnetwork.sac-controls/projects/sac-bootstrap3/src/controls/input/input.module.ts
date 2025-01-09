import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacInputComponent } from './input';
import { SacInputAreaComponent } from './inputarea';
import { SacInputCurrencyComponent } from './inputcurrency';
import { SacInputDecimalComponent } from './inputdecimal';
import { SacInputEmailComponent } from './inputemail';
import { SacInputIntegerComponent } from './inputinteger';
import { SacInputPasswordComponent } from './inputpassword';
import { SacInputSearchComponent } from './inputsearch';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    SacTooltipComponent,
    SacInputComponent,
    SacInputAreaComponent,
    SacInputCurrencyComponent,
    SacInputDecimalComponent,
    SacInputEmailComponent,
    SacInputIntegerComponent,
    SacInputPasswordComponent,
    SacInputSearchComponent,
  ],
  exports: [
    SacInputComponent,
    SacInputAreaComponent,
    SacInputCurrencyComponent,
    SacInputDecimalComponent,
    SacInputEmailComponent,
    SacInputIntegerComponent,
    SacInputPasswordComponent,
    SacInputSearchComponent,
  ],
})
export class SACBootstrap3InputModule {}
