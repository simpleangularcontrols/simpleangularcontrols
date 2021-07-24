import { NgModule } from '@angular/core';
import { NgContextmenuComponent } from './contextmenu';
import { CommonModule } from '@angular/common';
import { NgContextmenuItemButton } from './contextmenuitembutton';
import { NgContextmenuItemSplitter } from './contextmenuitemsplitter';
import { NgContextmenuAnchor } from './contextmenuanchor';
import { NgContextmenuContainer } from './contextmenucontainer';

@NgModule({
  declarations: [
    NgContextmenuComponent,
    NgContextmenuItemButton,
    NgContextmenuItemSplitter,
    NgContextmenuAnchor,
    NgContextmenuContainer,
  ],
  imports: [CommonModule],
  exports: [
    NgContextmenuComponent,
    NgContextmenuItemButton,
    NgContextmenuItemSplitter,
    NgContextmenuAnchor,
  ],
})
export class JNetworkBootstrap4ContextmenuModule {}
