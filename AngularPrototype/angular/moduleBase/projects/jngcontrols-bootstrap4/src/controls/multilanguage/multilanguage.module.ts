import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultilanguageInputComponent } from './multilanguageinput';
import { NgMultilanguageInputAreaComponent } from './multilanguageinputarea';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgMultilanguageInputComponent, NgMultilanguageInputAreaComponent],
  imports: [
    BrowserModule, NgbDropdownModule
  ],
  exports: [NgMultilanguageInputComponent, NgMultilanguageInputAreaComponent]
})
export class JNetworkBootstrap4MultilanguageModule { }
