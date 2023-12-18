import { NgModule } from '@angular/core';

import { NgGridComponent } from './grid';
import { CommonModule } from '@angular/common';
import { NgGridColumnComponent } from './gridcolumn';
import { NgGridButtonComponent } from './gridbutton';
import { NgPagingComponent } from './paging';
import { NgGridColumnActionComponent } from './gridcolumnaction';
import { NgGridImageComponent } from './gridimage';

@NgModule({
  declarations: [NgGridComponent, NgGridColumnComponent, NgGridColumnActionComponent, NgPagingComponent, NgGridButtonComponent, NgGridImageComponent],
  imports: [
    CommonModule
  ],
  exports: [NgGridComponent, NgGridColumnComponent, NgGridColumnActionComponent, NgPagingComponent, NgGridButtonComponent, NgGridImageComponent]
})
export class SACBootstrap3GridModule { }

