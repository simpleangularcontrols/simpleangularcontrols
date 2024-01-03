import { NgModule } from '@angular/core';

import { SacGridComponent } from './grid';
import { CommonModule } from '@angular/common';
import { SacGridColumnComponent } from './gridcolumn';
import { SacGridButtonComponent } from './gridbutton';
import { SacPagingComponent } from './paging';
import { SacGridColumnActionComponent } from './gridcolumnaction';
import { SacGridImageComponent } from './gridimage';

@NgModule({
    imports: [
        CommonModule,
        SacGridComponent, SacGridColumnComponent, SacGridColumnActionComponent, SacPagingComponent, SacGridButtonComponent, SacGridImageComponent
    ],
    exports: [SacGridComponent, SacGridColumnComponent, SacGridColumnActionComponent, SacPagingComponent, SacGridButtonComponent, SacGridImageComponent]
})
export class SACBootstrap3GridModule { }

