import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoListComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    component: DemoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
