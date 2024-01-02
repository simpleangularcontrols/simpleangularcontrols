import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SACBootstrap4ConfirmModule } from '@simpleangularcontrols/sac-bootstrap4';
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
    SACBootstrap4ConfirmModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class ConfirmRoutingModule {}
