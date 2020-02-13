import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWizardComponent } from './wizard';
import { NgWizardItemComponent } from './wizarditem';

@NgModule({
  declarations: [NgWizardComponent, NgWizardItemComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgWizardComponent, NgWizardItemComponent]
})
export class JNetworkBootstrap3WizardModule { }
