import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTreeViewComponent } from './treeview';
import { NgTreeViewChildComponent } from './treeviewchild';
import { NgTreeItemActionComponent } from './ngtreeitemaction';

@NgModule({
  declarations: [NgTreeViewComponent, NgTreeViewChildComponent, NgTreeItemActionComponent],
  imports: [
    CommonModule
  ],
  exports: [NgTreeViewComponent, NgTreeViewChildComponent, NgTreeItemActionComponent]
})
export class SACBootstrap3TtreeviewModule { }
