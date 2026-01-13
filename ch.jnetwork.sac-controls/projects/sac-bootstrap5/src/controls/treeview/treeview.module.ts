import { SACBootstrap5ContextmenuModule } from '../contextmenu/contextmenu.module';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TooltipModule } from '../tooltip/tooltip.module';
import { SacTreeviewComponent } from './treeview';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [SacTreeviewComponent],
    imports: [
        CommonModule,
        SACBootstrap5LayoutModule,
        SACBootstrap5ContextmenuModule,
        SACBootstrap5TooltipModule,
        SACCommonUtliltiesModule,
    ],
    exports: [SacTreeviewComponent],
})
export class SACBootstrap5TreeviewModule {}
