import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoTabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: DemoTabsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
