import { SacTabComponent } from './tab';
import { SacTabItemComponent } from './tabitem';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacTabComponent, SacTabItemComponent],
    imports: [CommonModule, SACCommonUtliltiesModule],
    exports: [SacTabComponent, SacTabItemComponent],
})
export class SACBootstrap3TabsModule {}
