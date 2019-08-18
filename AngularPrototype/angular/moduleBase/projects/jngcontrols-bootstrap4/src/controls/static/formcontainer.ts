import { Component, Host, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { NgFormular } from '../form/form';
import { NgStaticFormContainerCommon } from '@jnetwork/jngcontrols-common';

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
  selector: 'ngStaticFormContainer',
  templateUrl: './formcontainer.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgStaticFormContainer },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgStaticFormContainer) }
  ]
})

export class NgStaticFormContainer extends NgStaticFormContainerCommon {

  /**
   * Konsturktor
   * 
   * @param parent Parent NgFormular Instanz
   * @param injector Injector Instanz
   */
  constructor(@Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
  }

}
