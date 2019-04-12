import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgTreeView } from "./treeview";
import { NgTreeViewChild } from "./treeviewchild";
import { NgTreeItemAction } from "./ngtreeitemaction";

@NgModule({
  declarations: [NgTreeView, NgTreeViewChild, NgTreeItemAction],
  imports: [
    BrowserModule
  ],
  exports: [NgTreeView, NgTreeViewChild, NgTreeItemAction]
})
export class jNetworkBootstrap3TtreeviewModule { }
