import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoTooltipComponent } from './tooltip.component';

const routes: Routes = [
  {
    path: '',
    component: DemoTooltipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TooltipRoutingModule {}
