import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoButtonComponent } from './button.component';

const routes: Routes = [
  {
    path: '',
    component: DemoButtonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonRoutingModule {}
