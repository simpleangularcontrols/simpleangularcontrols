import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SACBootstrap5ConfirmModule } from '@simpleangularcontrols/sac-bootstrap5';
import { DemoConfirmComponent } from './confirm.component';

const routes: Routes = [
  {
    path: '',
    component: DemoConfirmComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SACBootstrap5ConfirmModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class ConfirmRoutingModule {}
