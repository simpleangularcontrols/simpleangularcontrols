import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SacMultilanguageInputComponent } from './multilanguageinput';
import { SacMultilanguageInputAreaComponent } from './multilanguageinputarea';
import { SacMultilanguagemenuComponent } from './multilanguagemenu';
import { SacMultilanguagemenuAnchorDirective } from './multilanguagemenuanchor';
import { SacMultilanguagemenuContainerDirective } from './multilanguagemenucontainer';
import { SacMultilanguagemenuItemButtonComponent } from './multilanguagemenuitembutton';

@NgModule({
  declarations: [
    SacMultilanguageInputComponent,
    SacMultilanguageInputAreaComponent,
    SacMultilanguagemenuComponent,
    SacMultilanguagemenuAnchorDirective,
    SacMultilanguagemenuContainerDirective,
    SacMultilanguagemenuItemButtonComponent,
  ],
  imports: [CommonModule],
  exports: [SacMultilanguageInputComponent, SacMultilanguageInputAreaComponent],
})
export class SACBootstrap4MultilanguageModule {}
