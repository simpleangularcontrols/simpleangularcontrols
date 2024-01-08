import { DOCUMENT } from '@angular/common';
import {
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Injector,
  Input,
  NgZone,
  OnDestroy,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ISacIconService } from '../../interfaces/ISacIconService';
import { SACICON_SERVICE, SacDefaultIconService } from '../../services';
import { PlacementArray, positionElements } from '../../utilities/positioning';
import { SacContextmenuAnchorCommon } from './contextmenuanchor';
import { SacContextMenuContrainerCommon } from './contextmenucontainer';

/**
 * Base Context Menü Element. Die Logik wurde aus NG-BOOTSTRAP übernommen.
 */
@Directive()
export class SacContextmenuCommon implements OnDestroy {
  // #region Properties

  /**
   * Button für Open/Close Event aus Template
   */
  @ContentChild(SacContextmenuAnchorCommon, { static: false })
  private _anchorTemplate: SacContextmenuAnchorCommon;
  /**
   * Button für Open/Close Event
   */
  @ViewChild(SacContextmenuAnchorCommon, { static: false })
  private _anchor: SacContextmenuAnchorCommon;
  /**
   * Container Element für Dropdown
   */
  @ViewChild(SacContextMenuContrainerCommon, { static: false })
  private _menu: SacContextMenuContrainerCommon;

  /**
   * Body HTML Element
   */
  private bodyContainer: HTMLElement | null = null;
  /**
   * Zone Subscription für Postitonierung des Elements
   */
  private zoneSubscription: Subscription;

  /**
   * icon service
   */
  protected iconService: ISacIconService;

  /**
   * Custom HTML Template für Dropdown Button. Button muss den Marker "ngContextmenuAnchor" beinhalten, damit das Control korrekt funktioniert.
   */
  @Input()
  public buttontemplate: TemplateRef<any>;
  /**
   * Container an welchem die Position ausgerichtet wird. Aktuell wird nun Body Supported
   */
  @Input()
  public container: null | 'body' = 'body';
  /**
   * Extra CSS Klassen für das Control
   */
  @Input()
  public cssclass: string = '';
  /**
   * Definiert ob das Dropdown offen ist.
   */
  @Input()
  public isopen: boolean = false;
  /**
   * The preferred placement of the dropdown.
   *
   * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
   * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
   * `"right-bottom"`
   *
   * Accepts an array of strings or a string with space separated possible values.
   *
   * The default order of preference is `"bottom-left bottom-right top-left top-right"`
   *
   * Please see the [positioning overview](#/positioning) for more details.
   */
  @Input() public placement: PlacementArray = [
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
  ];

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param document HTML Document Element
   * @param ngZone Angular Zone Service
   * @param elementRef HTML Element des aktuellen Controls
   * @param renderer Angular Rendering Service
   * @param injector injector to resolve the icon service
   */
  constructor(
    @Inject(DOCUMENT) private document: any,
    private ngZone: NgZone,
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    injector: Injector
  ) {
    this.zoneSubscription = this.ngZone.onStable.subscribe(() => {
      this._positionMenu();
    });

    this.iconService = injector.get(
      SACICON_SERVICE,
      new SacDefaultIconService()
    );
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * icon for default context menü button
   */
  public get IconContextMenu(): string {
    return this.iconService.ContextMenuOpenIcon;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * HostListener um das Dropdown zu schliessen wenn nicht auf das Element geklickt wird.
   */
  @HostListener('document:click', ['$event.target'])
  /**
   * Click Event
   */
  public onClick(targetElement) {
    const anchor: SacContextmenuAnchorCommon =
      this._anchor || this._anchorTemplate;

    if (
      this._menu &&
      !this._menu.nativeElement.contains(targetElement) &&
      !anchor.nativeElement.contains(targetElement)
    ) {
      this.close();
    }
  }

  /**
   * Schliesst das Dropdown
   */
  public close(): void {
    this._resetContainer();
    this.isopen = false;
  }

  /**
   * Event wenn Component entfernt wird.
   */
  public ngOnDestroy(): void {
    this.zoneSubscription.unsubscribe();
  }

  /**
   * Öffnet das Dropdown / Zeigt das Menü an.
   */
  public open(): void {
    this._applyContainer(this.container);
    this.isopen = true;
  }

  /**
   * Toggle von Dropdown
   */
  public toggle(): void {
    if (this.isopen) {
      this.close();
    } else {
      this.open();
    }
  }

  // #endregion Public Methods

  // #region Protected Methods

  /**
   * Setzt die Position des Menüs im Markup
   */
  protected _positionMenu() {
    const anchor: SacContextmenuAnchorCommon =
      this._anchor || this._anchorTemplate;

    if (anchor && this._menu) {
      positionElements(
        anchor.nativeElement,
        this.bodyContainer || this._menu.nativeElement,
        this.placement,
        this.container === 'body'
      );
    }
  }

  // #endregion Protected Methods

  // #region Private Methods

  /**
   * Setzt die Position des Menüs innerhalb der Seite. Die Ausrichtung passiert innerhalb der Seite
   * damit das Menü innerhalb eines Dialogs sauber funktionioniert.
   * @param container Definiert wo das Menü ausgerichtet wird. Im Moment nur BODY Supported
   */
  private _applyContainer(container: null | 'body' = null) {
    // Reset Classes on Container
    this._resetContainer();

    if (container === 'body') {
      const renderer = this.renderer;
      const dropdownMenuElement = this._menu.nativeElement;
      const bodyContainer = (this.bodyContainer =
        this.bodyContainer || renderer.createElement('div'));

      // Override some styles to have the positioning working
      renderer.setStyle(bodyContainer, 'position', 'absolute');
      renderer.setStyle(dropdownMenuElement, 'position', 'static');
      renderer.setStyle(bodyContainer, 'z-index', '1050');

      renderer.appendChild(bodyContainer, dropdownMenuElement);
      renderer.appendChild(this.document.body, bodyContainer);
    }
  }

  /**
   * Setzt die CSS Klassen auf dem Menü Container auf den Standard zurück
   */
  private _resetContainer() {
    const renderer = this.renderer;
    if (this._menu) {
      const dropdownElement = this.elementRef.nativeElement;
      const dropdownMenuElement = this._menu.nativeElement;

      renderer.appendChild(dropdownElement, dropdownMenuElement);
      renderer.removeStyle(dropdownMenuElement, 'position');
      renderer.removeStyle(dropdownMenuElement, 'transform');
    }
    if (this.bodyContainer) {
      renderer.removeChild(this.document.body, this.bodyContainer);
      this.bodyContainer = null;
    }
  }

  // #endregion Private Methods
}
