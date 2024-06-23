import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Injector,
  NgZone,
  Renderer2,
} from '@angular/core';
import { SacContextmenuCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component für Contextmenü
 */
@Component({
  selector: 'sac-contextmenu',
  templateUrl: './contextmenu.html',
  providers: [
    {
      provide: SacContextmenuCommon,
      useExisting: forwardRef(() => SacContextmenuComponent),
    },
  ],
})
export class SacContextmenuComponent extends SacContextmenuCommon {
  // #region Constructors

  /**
   * Constructor
   * @param document Referenz auf HTML Document
   * @param ngZone Angular Zone Service
   * @param elementRef Referenz auf HTML Element der aktuellen Komponente
   * @param renderer Render Service von Angular
   * @param injector  injector to resolve services
   */
  constructor(
    @Inject(DOCUMENT) document: any,
    ngZone: NgZone,
    elementRef: ElementRef<HTMLElement>,
    renderer: Renderer2,
    injector: Injector
  ) {
    super(document, ngZone, elementRef, renderer, injector);
  }

  // #endregion Constructors
}
