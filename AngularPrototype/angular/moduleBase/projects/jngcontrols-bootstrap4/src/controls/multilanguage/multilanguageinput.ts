import { Component, forwardRef, Host, Injector } from '@angular/core';
import { ControlContainer, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgMultilanguageInputCommon, IconType } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';

@Component({
  selector: 'ng-multilanguageinput,ngMultilanguageInput',
  templateUrl: './multilanguageinput.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgMultilanguageInputComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgMultilanguageInputComponent) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})
/**
 * Componente für Mehrsprache Texte
 */
export class NgMultilanguageInputComponent extends NgMultilanguageInputCommon {

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
