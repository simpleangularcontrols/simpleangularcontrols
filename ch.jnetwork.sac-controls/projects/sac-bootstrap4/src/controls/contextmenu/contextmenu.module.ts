import { SacContextmenuComponent } from './contextmenu';
import { SacContextmenuAnchorDirective } from './contextmenuanchor';
import { SacContextmenuContainerDirective } from './contextmenucontainer';
import { SacContextmenuItemButtonComponent } from './contextmenuitembutton';
import { SacContextmenuItemSplitterComponent } from './contextmenuitemsplitter';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [
        SacContextmenuComponent,
        SacContextmenuItemButtonComponent,
        SacContextmenuItemSplitterComponent,
        SacContextmenuAnchorDirective,
        SacContextmenuContainerDirective,
    ],
    imports: [CommonModule, SACCommonUtliltiesModule],
    exports: [
        SacContextmenuComponent,
        SacContextmenuItemButtonComponent,
        SacContextmenuItemSplitterComponent,
        SacContextmenuAnchorDirective,
    ],
})
export class SACBootstrap4ContextmenuModule {}
