import { SACBootstrap3ContextmenuModule } from '../contextmenu/contextmenu.module';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { SacTreeviewComponent } from './treeview';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacTreeviewComponent],
    imports: [
        CommonModule,
        SACBootstrap3TooltipModule,
        SACBootstrap3LayoutModule,
        SACBootstrap3ContextmenuModule,
        SACCommonUtliltiesModule,
    ],
    exports: [SacTreeviewComponent],
})
export class SACBootstrap3TreeviewModule {}
