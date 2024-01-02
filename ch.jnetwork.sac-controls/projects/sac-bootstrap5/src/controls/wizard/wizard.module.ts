import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacWizardComponent } from './wizard';
import { SacWizardItemComponent } from './wizarditem';

@NgModule({
    imports: [
        CommonModule,
        SacWizardComponent, SacWizardItemComponent
    ],
    exports: [SacWizardComponent, SacWizardItemComponent]
})
export class SACBootstrap5WizardModule { }
