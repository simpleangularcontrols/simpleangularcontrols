import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
  NgZone,
  Renderer2,
} from '@angular/core';
import { NgContextmenuCommon } from '@jnetwork/jngcontrols-common';

/**
 * Component für Contextmenü
 */
@Component({
  selector: 'ng-contextmenu,ngContextmenu',
  templateUrl: './contextmenu.html',
  providers: [
    {
      provide: NgContextmenuCommon,
      useExisting: forwardRef(() => NgContextmenuComponent),
    },
  ],
})
export class NgContextmenuComponent extends NgContextmenuCommon {
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
