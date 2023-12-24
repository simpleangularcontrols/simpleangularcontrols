import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoUploaderComponent } from './uploader.component';

const routes: Routes = [
  {
    path: '',
    component: DemoUploaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploaderRoutingModule {}
