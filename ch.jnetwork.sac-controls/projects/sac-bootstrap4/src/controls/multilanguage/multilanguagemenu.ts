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
  selector: '[sac-multilanguagemenu]', // eslint-disable-line @angular-eslint/component-selector -- bootstrap requires append-items direct behind the previews element
  templateUrl: './multilanguagemenu.html',
  providers: [
    {
      provide: SacContextmenuCommon,
      useExisting: forwardRef(() => SacMultilanguagemenuComponent),
    },
  ],
})
export class SacMultilanguagemenuComponent extends SacContextmenuCommon {
  /**
   * Constructor
   * @param _document Referenz auf HTML Document
   * @param _ngZone Angular Zone Service
   * @param _elementRef Referenz auf HTML Element der aktuellen Komponente
   * @param _renderer Render Service von Angular
   * @param _injector injector to resolve services in base component
   */
  constructor(
    @Inject(DOCUMENT) _document: any,
    _ngZone: NgZone,
    _elementRef: ElementRef<HTMLElement>,
    _renderer: Renderer2,
    _injector: Injector
  ) {
    super(_document, _ngZone, _elementRef, _renderer, _injector);
  }
}
