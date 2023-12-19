import { NgModule } from '@angular/core';

import { SacGridComponent } from './grid';
import { CommonModule } from '@angular/common';
import { SacGridColumnComponent } from './gridcolumn';
import { SacGridButtonComponent } from './gridbutton';
import { SacPagingComponent } from './paging';
import { SacGridColumnActionComponent } from './gridcolumnaction';
import { SacGridImageComponent } from './gridimage';

@NgModule({
  declarations: [SacGridComponent, SacGridColumnComponent, SacGridColumnActionComponent, SacPagingComponent, SacGridButtonComponent, SacGridImageComponent],
  imports: [
    CommonModule
  ],
  exports: [SacGridComponent, SacGridColumnComponent, SacGridColumnActionComponent, SacPagingComponent, SacGridButtonComponent, SacGridImageComponent]
})
export class SACBootstrap3GridModule { }

