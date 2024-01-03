import { NgModule } from '@angular/core';
import { MultilanguageRoutingModule } from './multilanguage-routing.module';
import { DemoMultilanguageComponent } from './multilanguage.component';
@NgModule({
  imports: [MultilanguageRoutingModule, DemoMultilanguageComponent],
})
export class MultilanguageModule {}
