import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDialogComponent } from './dialog.component';

const routes: Routes = [
  {
    path: '',
    component: DemoDialogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogRoutingModule {}
