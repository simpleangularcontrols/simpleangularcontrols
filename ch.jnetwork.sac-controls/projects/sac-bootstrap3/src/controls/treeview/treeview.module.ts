import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacTreeViewComponent } from './treeview';
import { SacTreeViewChildComponent } from './treeviewchild';
import { SacTreeItemActionComponent } from './ngtreeitemaction';

@NgModule({
  imports: [
    CommonModule,
    SacTreeViewComponent,
    SacTreeViewChildComponent,
    SacTreeItemActionComponent,
  ],
  exports: [
    SacTreeViewComponent,
    SacTreeViewChildComponent,
    SacTreeItemActionComponent,
  ],
})
export class SACBootstrap3TtreeviewModule {}
