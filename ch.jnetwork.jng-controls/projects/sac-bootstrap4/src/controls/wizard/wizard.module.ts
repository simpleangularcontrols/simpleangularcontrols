import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgWizardComponent } from './wizard';
import { NgWizardItemComponent } from './wizarditem';

@NgModule({
  declarations: [NgWizardComponent, NgWizardItemComponent],
  imports: [
    CommonModule
  ],
  exports: [NgWizardComponent, NgWizardItemComponent]
})
export class SACBootstrap4WizardModule { }
