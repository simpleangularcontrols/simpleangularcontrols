import { DOCUMENT, NgClass, NgTemplateOutlet } from '@angular/common';
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
import { SacContextmenuAnchorDirective } from './contextmenuanchor';
import { SacContextmenuContainerDirective } from './contextmenucontainer';

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
    standalone: true,
    imports: [
        NgClass,
        NgTemplateOutlet,
        SacContextmenuContainerDirective,
        SacContextmenuAnchorDirective,
    ],
})
export class SacContextmenuComponent extends SacContextmenuCommon {
  /**
   * Constructor
   * @param _document Referenz auf HTML Document
   * @param _ngZone Angular Zone Service
   * @param _elementRef Referenz auf HTML Element der aktuellen Komponente
   * @param _renderer Render Service von Angular
   * @param _injector  injector to resolve services
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
