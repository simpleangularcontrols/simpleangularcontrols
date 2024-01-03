import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  IconType,
  SacMultilanguageInputAreaCommon,
} from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { SacMultilanguagemenuItemButtonComponent } from './multilanguagemenuitembutton';
import { SacMultilanguagemenuAnchorDirective } from './multilanguagemenuanchor';
import { SacMultilanguagemenuComponent } from './multilanguagemenu';
import { NgClass, NgIf, NgFor } from '@angular/common';

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
    // View Provider, damit das Formular an das Control gebunden werden kann
    viewProviders: [
        { provide: ControlContainer, useExisting: SacFormDirective },
    ],
    standalone: true,
    imports: [
        NgClass,
        SacMultilanguagemenuComponent,
        SacMultilanguagemenuAnchorDirective,
        NgIf,
        NgFor,
        SacMultilanguagemenuItemButtonComponent,
    ],
})
export class SacMultilanguageInputAreaComponent extends SacMultilanguageInputAreaCommon {
  /**
   * Enum für IconType in HTML Template
   */
  IconType = IconType;

  /**
   * Konstruktor
   * @param parent Formular Inject
   * @param injector Default Injector
   */
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
