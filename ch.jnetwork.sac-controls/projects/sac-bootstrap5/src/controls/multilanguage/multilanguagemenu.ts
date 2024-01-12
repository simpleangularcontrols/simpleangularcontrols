import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Injector,
  Input,
  NgZone,
  Renderer2,
  TemplateRef,
  forwardRef,
} from '@angular/core';
import { SacContextmenuCommon } from '@simpleangularcontrols/sac-common';
import { SacMultilanguagemenuAnchorDirective } from './multilanguagemenuanchor';
import { SacMultilanguagemenuContainerDirective } from './multilanguagemenucontainer';

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
  standalone: true,
  imports: [
    NgTemplateOutlet,
    SacMultilanguagemenuContainerDirective,
    SacMultilanguagemenuAnchorDirective,
  ],
})
export class SacMultilanguagemenuComponent extends SacContextmenuCommon {
  // #region Properties

  /**
   * template with input box for multilangauge component
   */
  @Input()
  public inputtemplate: TemplateRef<any>;
  /**
   * template with markup for inline validation messages in component
   */
  @Input()
  public validationtemplate: TemplateRef<any>;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param document Referenz auf HTML Document
   * @param ngZone Angular Zone Service
   * @param elementRef Referenz auf HTML Element der aktuellen Komponente
   * @param renderer Render Service von Angular
   * @param injector injector to resolve services in base component
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
