import { SacGridComponent } from './grid';
import { SacGridButtonComponent } from './gridbutton';
import { SacGridColumnComponent } from './gridcolumn';
import { SacGridColumnActionComponent } from './gridcolumnaction';
import { SacGridImageComponent } from './gridimage';
import { SacPagingComponent } from './paging';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [
        SacGridComponent,
        SacGridColumnComponent,
        SacGridColumnActionComponent,
        SacPagingComponent,
        SacGridButtonComponent,
        SacGridImageComponent,
    ],
    imports: [CommonModule, FormsModule, SACCommonUtliltiesModule],
    exports: [
        SacGridComponent,
        SacGridColumnComponent,
        SacGridColumnActionComponent,
        SacPagingComponent,
        SacGridButtonComponent,
        SacGridImageComponent,
    ],
})
export class SACBootstrap4GridModule {}
