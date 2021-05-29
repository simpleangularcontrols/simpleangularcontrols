import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCheckboxComponent } from './checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: DemoCheckboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxRoutingModule {}
