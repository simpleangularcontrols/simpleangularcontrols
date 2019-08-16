import { NgModule } from "@angular/core";
import { NgFormular } from "./form";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProvideParentNgFormularDirective } from './ngformularinherit.directive';

@NgModule({
  declarations: [NgFormular, ProvideParentNgFormularDirective],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    NgFormular, ProvideParentNgFormularDirective
  ]
})
export class jNetworkBootstrap4FormModule { }
