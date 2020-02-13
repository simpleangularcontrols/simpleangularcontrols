import { NgModule } from '@angular/core';
import { NgFormularDirective } from './form';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProvideParentNgFormularDirective } from './ngformularinherit.directive';

@NgModule({
  declarations: [NgFormularDirective, ProvideParentNgFormularDirective],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    NgFormularDirective, ProvideParentNgFormularDirective
  ]
})
export class JNetworkBootstrap4FormModule { }
