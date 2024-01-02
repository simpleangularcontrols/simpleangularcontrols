import { NgModule } from '@angular/core';
import { DialogRoutingModule } from './dialog-routing.module';
import { DemoDialogComponent } from './dialog.component';
@NgModule({
  imports: [DialogRoutingModule, DemoDialogComponent],
})
export class DialogModule {}
