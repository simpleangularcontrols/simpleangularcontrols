import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacWizardComponent } from './wizard';
import { SacWizardItemComponent } from './wizarditem';

@NgModule({
  declarations: [SacWizardComponent, SacWizardItemComponent],
  imports: [CommonModule, SACBootstrap5LayoutModule],
  exports: [SacWizardComponent, SacWizardItemComponent],
})
export class SACBootstrap5WizardModule {}
