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
    imports: [
        CommonModule,
        SacInputComponent, SacInputAreaComponent, SacInputCurrencyComponent, SacInputDecimalComponent, SacInputEmailComponent, SacInputIntegerComponent, SacInputPasswordComponent, SacInputSearchComponent
    ],
    exports: [SacInputComponent, SacInputAreaComponent, SacInputCurrencyComponent, SacInputDecimalComponent, SacInputEmailComponent, SacInputIntegerComponent, SacInputPasswordComponent, SacInputSearchComponent]
})
export class SACBootstrap4InputModule { }
