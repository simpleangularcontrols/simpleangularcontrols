import { Component, forwardRef, Host, Injector } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  IconType,
  NgMultilanguageInputAreaCommon,
} from '@jnetwork/sac-common';
import { NgFormularDirective } from '../form/form';

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
      useExisting: NgMultilanguageInputAreaComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => NgMultilanguageInputAreaComponent),
    },
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [
    { provide: ControlContainer, useExisting: NgFormularDirective },
  ],
})
export class NgMultilanguageInputAreaComponent extends NgMultilanguageInputAreaCommon {
  /**
   * Enum für IconType in HTML Template
   */
  IconType = IconType;

  /**
   * Konstruktor
   * @param parent Formular Inject
   * @param injector Default Injector
   */
  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }
}
