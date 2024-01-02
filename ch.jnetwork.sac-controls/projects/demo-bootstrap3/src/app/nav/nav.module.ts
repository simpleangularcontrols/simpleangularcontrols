import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavigationComponent } from './nav.component';

@NgModule({
    imports: [CommonModule, RouterModule, AppNavigationComponent],
    exports: [AppNavigationComponent],
})
export class AppNavigationModule {}
