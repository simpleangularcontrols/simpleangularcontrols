import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacWizardComponent } from './wizard';
import { SacWizardItemComponent } from './wizarditem';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacWizardComponent, SacWizardItemComponent],
    imports: [CommonModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
    exports: [SacWizardComponent, SacWizardItemComponent],
})
export class SACBootstrap5WizardModule {}
