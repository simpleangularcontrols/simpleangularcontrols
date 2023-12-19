import { Component, forwardRef, Injector } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacPagingCommon } from '@simpleangularcontrols/sac-common';

/**
 * Paging Komponente
 */
@Component({
  selector: 'sac-paging',
  templateUrl: './paging.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacPagingComponent },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacPagingComponent),
    },
  ],
})
export class SacPagingComponent extends SacPagingCommon {
  /**
   * Konstruktor
   * @param injector Angular Dependency Injection Service
   */
  constructor(injector: Injector) {
    super(injector);
  }
}
