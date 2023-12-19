import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoConfirmComponent } from './confirm.component';

const routes: Routes = [
  {
    path: '',
    component: DemoConfirmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmRoutingModule {}
