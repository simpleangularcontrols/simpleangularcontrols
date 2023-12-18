import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultilanguageInputComponent } from './multilanguageinput';
import { NgMultilanguageInputAreaComponent } from './multilanguageinputarea';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgMultilanguageInputComponent, NgMultilanguageInputAreaComponent],
  imports: [
    CommonModule, NgbDropdownModule
  ],
  exports: [NgMultilanguageInputComponent, NgMultilanguageInputAreaComponent]
})
export class SACBootstrap4MultilanguageModule { }
