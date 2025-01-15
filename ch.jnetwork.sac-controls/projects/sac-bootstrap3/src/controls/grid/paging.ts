import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, forwardRef, Injector } from '@angular/core';
import { FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacPagingCommon } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'sac-paging',
  templateUrl: './paging.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SacPagingComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SacPagingComponent),
    },
  ],
  standalone: true,
  imports: [NgClass, NgFor, FormsModule, AsyncPipe, NgIf],
})
export class SacPagingComponent extends SacPagingCommon {
  // #region Constructors

  /**
   * Konstruktor
   */
  constructor(injector: Injector) {
    super(injector);
  }

  // #endregion Constructors
}
