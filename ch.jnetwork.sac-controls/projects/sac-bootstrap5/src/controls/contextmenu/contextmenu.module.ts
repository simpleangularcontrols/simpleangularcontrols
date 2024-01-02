import { NgModule } from '@angular/core';
import { SacContextmenuComponent } from './contextmenu';
import { CommonModule } from '@angular/common';
import { SacContextmenuItemButtonComponent } from './contextmenuitembutton';
import { SacContextmenuItemSplitterComponent } from './contextmenuitemsplitter';
import { SacContextmenuAnchorDirective } from './contextmenuanchor';
import { SacContextmenuContainerDirective } from './contextmenucontainer';

@NgModule({
    imports: [CommonModule, SacContextmenuComponent,
        SacContextmenuItemButtonComponent,
        SacContextmenuItemSplitterComponent,
        SacContextmenuAnchorDirective,
        SacContextmenuContainerDirective],
    exports: [
        SacContextmenuComponent,
        SacContextmenuItemButtonComponent,
        SacContextmenuItemSplitterComponent,
        SacContextmenuAnchorDirective,
    ],
})
export class SACBootstrap5ContextmenuModule {}
