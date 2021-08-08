import { NgModule } from '@angular/core';
import { NgContextmenuComponent } from './contextmenu';
import { CommonModule } from '@angular/common';
import { NgContextmenuItemButtonComponent } from './contextmenuitembutton';
import { NgContextmenuItemSplitterComponent } from './contextmenuitemsplitter';
import { NgContextmenuAnchorDirective } from './contextmenuanchor';
import { NgContextmenuContainerDirective } from './contextmenucontainer';

@NgModule({
  declarations: [
    NgContextmenuComponent,
    NgContextmenuItemButtonComponent,
    NgContextmenuItemSplitterComponent,
    NgContextmenuAnchorDirective,
    NgContextmenuContainerDirective,
  ],
  imports: [CommonModule],
  exports: [
    NgContextmenuComponent,
    NgContextmenuItemButtonComponent,
    NgContextmenuItemSplitterComponent,
    NgContextmenuAnchorDirective,
  ],
})
export class JNetworkBootstrap4ContextmenuModule {}
