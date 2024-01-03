import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoConfirmComponent } from './confirm.component';
import { SACBootstrap3ConfirmModule } from '@simpleangularcontrols/sac-bootstrap3';

const routes: Routes = [
  {
    path: '',
    component: DemoConfirmComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SACBootstrap3ConfirmModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class ConfirmRoutingModule {}
