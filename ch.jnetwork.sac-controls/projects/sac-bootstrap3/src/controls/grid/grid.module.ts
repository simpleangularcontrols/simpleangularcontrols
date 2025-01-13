import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SacGridComponent } from './grid';
import { SacGridButtonComponent } from './gridbutton';
import { SacGridColumnComponent } from './gridcolumn';
import { SacGridColumnActionComponent } from './gridcolumnaction';
import { SacGridImageComponent } from './gridimage';
import { SacPagingComponent } from './paging';

@NgModule({
  declarations: [
    SacGridComponent,
    SacGridColumnComponent,
    SacGridColumnActionComponent,
    SacPagingComponent,
    SacGridButtonComponent,
    SacGridImageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    SacGridComponent,
    SacGridColumnComponent,
    SacGridColumnActionComponent,
    SacPagingComponent,
    SacGridButtonComponent,
    SacGridImageComponent,
  ],
})
export class SACBootstrap3GridModule {}
