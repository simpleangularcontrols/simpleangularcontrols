import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import {
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
// import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { SacCheckboxCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NgClass, NgIf } from '@angular/common';

/**
 * Checkbox Kompontente
 */
@Component({
    selector: 'sac-checkbox',
    templateUrl: './checkbox.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacCheckboxComponent,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => SacCheckboxComponent),
            multi: true,
        },
    ],
    // View Provider, damit das Formular an das Control gebunden werden kann
    viewProviders: [
        { provide: ControlContainer, useExisting: SacFormDirective },
    ],
    standalone: true,
    imports: [NgClass, NgIf],
})
export class SacCheckboxComponent extends SacCheckboxCommon {
  /**
   * Konstruktor
   * @param parent Formular
   * @param injector Angular Dependency Injection Service
   */
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
