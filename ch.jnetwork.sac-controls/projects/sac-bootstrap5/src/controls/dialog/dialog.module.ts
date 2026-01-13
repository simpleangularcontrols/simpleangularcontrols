import { SacDialogComponent } from './dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacDialogComponent],
    imports: [CommonModule, SACCommonUtliltiesModule],
    exports: [SacDialogComponent],
})
export class SACBootstrap5DialogModule {}
