import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacTreeViewComponent } from './treeview';
import { SacTreeViewChildComponent } from './treeviewchild';
import { SacTreeItemActionComponent } from './ngtreeitemaction';

@NgModule({
  declarations: [SacTreeViewComponent, SacTreeViewChildComponent, SacTreeItemActionComponent],
  imports: [
    CommonModule
  ],
  exports: [SacTreeViewComponent, SacTreeViewChildComponent, SacTreeItemActionComponent]
})
export class SACBootstrap3TtreeviewModule { }
