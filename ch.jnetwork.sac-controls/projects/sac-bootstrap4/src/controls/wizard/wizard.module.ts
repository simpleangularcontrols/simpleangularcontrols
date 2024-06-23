import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacWizardComponent } from './wizard';
import { SacWizardItemComponent } from './wizarditem';

@NgModule({
  declarations: [SacWizardComponent, SacWizardItemComponent],
  imports: [
    CommonModule
  ],
  exports: [SacWizardComponent, SacWizardItemComponent]
})
export class SACBootstrap4WizardModule { }
