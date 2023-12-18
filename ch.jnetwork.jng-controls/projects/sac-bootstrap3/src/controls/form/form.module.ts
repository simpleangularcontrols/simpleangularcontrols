import { NgModule } from '@angular/core';
import { NgFormularDirective } from './form';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProvideParentNgFormularDirective } from './ngformularinherit.directive';

@NgModule({
  declarations: [NgFormularDirective, ProvideParentNgFormularDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgFormularDirective, ProvideParentNgFormularDirective
  ]
})
export class SACBootstrap3FormModule { }
