import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgTreeViewComponent } from './treeview';
import { NgTreeViewChildComponent } from './treeviewchild';
import { NgTreeItemActionComponent } from './ngtreeitemaction';

@NgModule({
  declarations: [NgTreeViewComponent, NgTreeViewChildComponent, NgTreeItemActionComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgTreeViewComponent, NgTreeViewChildComponent, NgTreeItemActionComponent]
})
export class JNetworkBootstrap3TtreeviewModule { }
