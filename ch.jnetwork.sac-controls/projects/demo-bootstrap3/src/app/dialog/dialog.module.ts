import { DialogRoutingModule } from './dialog-routing.module';
import { DemoDialogComponent } from './dialog.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [DemoDialogComponent, DialogRoutingModule],
})
export class DialogModule {}
