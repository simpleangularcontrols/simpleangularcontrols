import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SacGridComponent } from './grid';
import { SacGridButtonComponent } from './gridbutton';
import { SacGridColumnComponent } from './gridcolumn';
import { SacGridColumnActionComponent } from './gridcolumnaction';
import { SacGridImageComponent } from './gridimage';
import { SacPagingComponent } from './paging';


@NgModule({
    imports: [
        CommonModule, FormsModule,
        SacGridComponent, SacGridColumnComponent, SacGridColumnActionComponent, SacPagingComponent, SacGridButtonComponent, SacGridImageComponent
    ],
    exports: [SacGridComponent, SacGridColumnComponent, SacGridColumnActionComponent, SacPagingComponent, SacGridButtonComponent, SacGridImageComponent]
})
export class SACBootstrap5GridModule { }

