import { MultilanguageRoutingModule } from './multilanguage-routing.module';
import { DemoMultilanguageComponent } from './multilanguage.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MultilanguageRoutingModule, DemoMultilanguageComponent],
})
export class MultilanguageModule {}
