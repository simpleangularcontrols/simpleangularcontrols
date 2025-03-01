import { SacContextmenuComponent } from './contextmenu';
import { SacContextmenuAnchorDirective } from './contextmenuanchor';
import { SacContextmenuContainerDirective } from './contextmenucontainer';
import { SacContextmenuItemButtonComponent } from './contextmenuitembutton';
import { SacContextmenuItemSplitterComponent } from './contextmenuitemsplitter';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        SacContextmenuComponent,
        SacContextmenuItemButtonComponent,
        SacContextmenuItemSplitterComponent,
        SacContextmenuAnchorDirective,
        SacContextmenuContainerDirective,
    ],
    exports: [
        SacContextmenuComponent,
        SacContextmenuItemButtonComponent,
        SacContextmenuItemSplitterComponent,
        SacContextmenuAnchorDirective,
    ],
})
export class SACBootstrap5ContextmenuModule {}
