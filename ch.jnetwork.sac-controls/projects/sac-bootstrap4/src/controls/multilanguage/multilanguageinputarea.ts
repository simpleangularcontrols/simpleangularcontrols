import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  IconType,
  SacMultilanguageInputAreaCommon,
} from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacMultilanguagemenuComponent } from './multilanguagemenu';
import { SacMultilanguagemenuAnchorDirective } from './multilanguagemenuanchor';
import { SacMultilanguagemenuItemButtonComponent } from './multilanguagemenuitembutton';

/**
 * Componente für Mehrsprache Texte als mehrzeiliger Text
 */
@Component({
  selector: 'sac-multilanguageinputarea',
  templateUrl: './multilanguageinputarea.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacMultilanguageInputAreaComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacMultilanguageInputAreaComponent),
    },
  ],
  standalone: true,
  imports: [
    NgClass,
    SacMultilanguagemenuComponent,
    SacMultilanguagemenuAnchorDirective,
    NgIf,
    NgFor,
    AsyncPipe,
    SacMultilanguagemenuItemButtonComponent,
    SacToLabelWidthCssPipe,
    SacToControlWidthCssPipe,
  ],
})
export class SacMultilanguageInputAreaComponent extends SacMultilanguageInputAreaCommon {
  // #region Properties

  /**
   * Enum für IconType in HTML Template
   */
  public IconType = IconType;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param formLayout SacFormLayout to define scoped layout settings
   * @param injector Injector for injecting services
   */
  constructor(
    @Host() @Optional() formLayout: SacFormLayoutDirective,
    injector: Injector
  ) {
    super(formLayout, injector);
  }

  // #endregion Constructors
}
