import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoRichtextComponent } from './richtext.component';

const routes: Routes = [
  {
    path: '',
    component: DemoRichtextComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichtextRoutingModule {}
