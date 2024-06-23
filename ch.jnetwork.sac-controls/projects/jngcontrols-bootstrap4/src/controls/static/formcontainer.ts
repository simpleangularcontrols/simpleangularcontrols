import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacStaticFormContainerCommon } from '@simpleangularcontrols/sac-common';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';

/**
 * Component für einbindung eines beliebigen Controls in die Form Struktur
 *
 * @example
 *  <ngStaticFormContainer name='myformcontainer' label="My Custom Form Control" [isrequired]='false'>
 *      <input type="range" class="form-control" />
 *  </ngStaticFormContainer>
 *
 * @example
 * <ngStaticFormContainer name='myformcintainer' label="My Custom Form Control" [isrequired]='false' tooltiptext="Dies ist ein Tooltip Text">
 *     <input type="range" class="form-control" />
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
  // #region Constructors

  /**
   *
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
