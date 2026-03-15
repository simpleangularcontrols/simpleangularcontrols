import { SacWizardComponent } from './wizard';
import { SacWizardItemComponent } from './wizarditem';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacWizardComponent, SacWizardItemComponent],
    exports: [SacWizardComponent, SacWizardItemComponent],
})
export class SACBootstrap3WizardModule {}
