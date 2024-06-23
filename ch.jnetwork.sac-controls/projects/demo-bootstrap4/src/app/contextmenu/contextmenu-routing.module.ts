import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoContextmenuComponent } from './contextmenu.component';

const routes: Routes = [
  {
    path: '',
    component: DemoContextmenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContextmenuRoutingModule {}
