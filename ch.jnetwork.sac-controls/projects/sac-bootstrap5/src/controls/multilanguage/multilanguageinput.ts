import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  IconType,
  SacMultilanguageInputCommon,
} from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { SacMultilanguagemenuItemButtonComponent } from './multilanguagemenuitembutton';
import { SacMultilanguagemenuAnchorDirective } from './multilanguagemenuanchor';
import { SacMultilanguagemenuComponent } from './multilanguagemenu';
import { NgClass, NgIf, NgFor } from '@angular/common';

/**
 * Componente für Mehrsprache Texte
 */
@Component({
    selector: 'sac-multilanguageinput',
    templateUrl: './multilanguageinput.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacMultilanguageInputComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacMultilanguageInputComponent),
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
export class SacMultilanguageInputComponent extends SacMultilanguageInputCommon {
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
