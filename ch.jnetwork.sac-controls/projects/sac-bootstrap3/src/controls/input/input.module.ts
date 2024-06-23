import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { SacInputComponent } from './input';
import { SacInputAreaComponent } from './inputarea';
import { SacInputCurrencyComponent } from './inputcurrency';
import { SacInputDecimalComponent } from './inputdecimal';
import { SacInputEmailComponent } from './inputemail';
import { SacInputIntegerComponent } from './inputinteger';
import { SacInputPasswordComponent } from './inputpassword';
import { SacInputSearchComponent } from './inputsearch';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    SacInputComponent,
    SacInputAreaComponent,
    SacInputCurrencyComponent,
    SacInputDecimalComponent,
    SacInputEmailComponent,
    SacInputIntegerComponent,
    SacInputPasswordComponent,
    SacInputSearchComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    SACBootstrap3TooltipModule,
    SACBootstrap3LayoutModule,
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
