import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDatetimeComponent } from './datetime.component';

const routes: Routes = [
  {
    path: '',
    component: DemoDatetimeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeRoutingModule {}
