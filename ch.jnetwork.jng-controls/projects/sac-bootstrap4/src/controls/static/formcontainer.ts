import { Component, Host, forwardRef, Injector, Optional } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlContainer,
  NG_VALIDATORS,
} from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { SacStaticFormContainerCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component für einbindung eines beliebigen Controls in die Form Struktur
 *
 * @example
 *  <ngStaticFormContainer name='myformcontainer' label="My Custom Form Control" [isrequired]='false'>
 *      <input type="range" class="form-control form-control-sm" />
 *  </ngStaticFormContainer>
 *
 * @example
 * <ngStaticFormContainer name='myformcintainer' label="My Custom Form Control" [isrequired]='false' tooltiptext="Dies ist ein Tooltip Text">
 *     <input type="range" class="form-control form-control-sm" />
 * </ngStaticFormContainer>
 *
 **/
@Component({
  selector: 'sac-staticformcontainer',
  templateUrl: './formcontainer.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacStaticFormContainerComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacStaticFormContainerComponent),
    },
  ],
})
export class SacStaticFormContainerComponent extends SacStaticFormContainerCommon {
  /**
   * Konsturktor
   * @param parent Parent SacFormular Instanz
   * @param injector Injector Instanz
   */
  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }
}
