import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavigationComponent } from './nav.component';

@NgModule({
  declarations: [AppNavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppNavigationComponent],
})
export class AppNavigationModule {}
