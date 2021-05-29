import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoInputComponent } from './input.component';

const routes: Routes = [
  {
    path: '',
    component: DemoInputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputRoutingModule {}
