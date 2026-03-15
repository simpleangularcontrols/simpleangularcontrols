import { SacButtonComponent } from './button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacButtonComponent],
    imports: [CommonModule, SACCommonUtliltiesModule],
    exports: [SacButtonComponent],
})
export class SACBootstrap4ButtonModule {}
