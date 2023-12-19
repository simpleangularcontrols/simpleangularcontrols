import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoRectiveFormComponent } from './reactiveform.component';

const routes: Routes = [
  {
    path: '',
    component: DemoRectiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormRoutingModule {}
