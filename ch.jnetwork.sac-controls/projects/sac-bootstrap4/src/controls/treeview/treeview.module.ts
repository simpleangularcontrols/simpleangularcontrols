import { SACBootstrap4ContextmenuModule } from '../contextmenu/contextmenu.module';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacTreeviewComponent } from './treeview';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacTreeviewComponent],
    imports: [
        CommonModule,
        SACBootstrap4TooltipModule,
        SACBootstrap4LayoutModule,
        SACBootstrap4ContextmenuModule,
        SACCommonUtliltiesModule,
    ],
    exports: [SacTreeviewComponent],
})
export class SACBootstrap4TreeviewModule {}
