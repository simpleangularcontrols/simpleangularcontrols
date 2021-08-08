import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBrowserComponent } from './browser.component';

const routes: Routes = [
  {
    path: '',
    component: DemoBrowserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserRoutingModule {}
