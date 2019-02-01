import { NgModule } from "@angular/core";
import { NgFormular } from "./form";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [NgFormular],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgFormular
  ]
})
export class ExanicBootstrap4FormModule { }
