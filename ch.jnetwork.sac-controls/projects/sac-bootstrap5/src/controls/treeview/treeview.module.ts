import { SACBootstrap5ContextmenuModule } from '../contextmenu/contextmenu.module';
import { SacTreeviewComponent } from './treeview';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [SacTreeviewComponent],
    imports: [CommonModule, SACBootstrap5ContextmenuModule],
    exports: [SacTreeviewComponent],
})
export class SACBootstrap5TreeviewModule {}
