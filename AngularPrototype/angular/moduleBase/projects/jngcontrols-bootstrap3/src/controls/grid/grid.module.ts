import { NgModule } from "@angular/core";

import { NgGrid } from "./grid";
import { BrowserModule } from "@angular/platform-browser";
import { NgGridColumn } from "./gridcolumn";
import { NgGridButton } from './gridbutton';
import { NgPaging } from "./paging";
import { NgGridColumnAction } from "./gridcolumnaction";
import { NgGridImage } from './gridimage';

@NgModule({
  declarations: [NgGrid, NgGridColumn, NgGridColumnAction, NgPaging, NgGridButton, NgGridImage],
  imports: [
    BrowserModule
  ],
  exports: [NgGrid, NgGridColumn, NgGridColumnAction, NgPaging, NgGridButton, NgGridImage]
})
export class jNetworkBootstrap3GridModule { }

