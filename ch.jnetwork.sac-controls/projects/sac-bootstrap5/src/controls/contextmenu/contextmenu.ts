import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
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
  /**
   * Constructor
   * @param _document Referenz auf HTML Document
   * @param _ngZone Angular Zone Service
   * @param _elementRef Referenz auf HTML Element der aktuellen Komponente
   * @param _renderer Render Service von Angular
   */
  constructor(
    @Inject(DOCUMENT) _document: any,
    _ngZone: NgZone,
    _elementRef: ElementRef<HTMLElement>,
    _renderer: Renderer2
  ) {
    super(_document, _ngZone, _elementRef, _renderer);
  }
}
