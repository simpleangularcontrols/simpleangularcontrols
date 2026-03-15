import { SacWizardComponent } from './wizard';
import { SacWizardItemComponent } from './wizarditem';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [SacWizardComponent, SacWizardItemComponent],
    imports: [CommonModule],
    exports: [SacWizardComponent, SacWizardItemComponent],
})
export class SACBootstrap4WizardModule {}
