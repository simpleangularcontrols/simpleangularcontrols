import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacMultilanguageInputComponent } from './multilanguageinput';
import { SacMultilanguageInputAreaComponent } from './multilanguageinputarea';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SacMultilanguageInputComponent, SacMultilanguageInputAreaComponent],
  imports: [
    CommonModule, NgbDropdownModule
  ],
  exports: [SacMultilanguageInputComponent, SacMultilanguageInputAreaComponent]
})
export class SACBootstrap4MultilanguageModule { }
