import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGridComponent } from './grid.component';

const routes: Routes = [
  {
    path: '',
    component: DemoGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridRoutingModule {}
