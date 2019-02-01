import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgWizard } from "./wizard";
import { NgWizardItem } from "./wizarditem";

@NgModule({
  declarations: [NgWizard, NgWizardItem],
  imports: [
    BrowserModule
  ],
  exports: [NgWizard, NgWizardItem]
})
export class ExanicBootstrap4WizardModule { }
