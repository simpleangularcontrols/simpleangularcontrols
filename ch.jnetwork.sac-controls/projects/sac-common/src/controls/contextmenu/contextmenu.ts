import { DOCUMENT } from '@angular/common';
import {
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PlacementArray, positionElements } from '../../utilities/positioning';
import { SacContextmenuAnchorCommon } from './contextmenuanchor';
import { SacContextMenuContrainerCommon } from './contextmenucontainer';

/**
 * Base Context Menü Element. Die Logik wurde aus NG-BOOTSTRAP übernommen.
 */
@Directive()
export class SacContextmenuCommon implements OnDestroy {
  /**
   * Zone Subscription für Postitonierung des Elements
   */
  private zoneSubscription: Subscription;
  /**
   * Body HTML Element
   */
  private bodyContainer: HTMLElement | null = null;

  /**
   * Button für Open/Close Event
   */
  @ViewChild(SacContextmenuAnchorCommon, { static: false })
  private _anchor: SacContextmenuAnchorCommon;

  /**
   * Button für Open/Close Event aus Template
   */
  @ContentChild(SacContextmenuAnchorCommon, { static: false })
  private _anchorTemplate: SacContextmenuAnchorCommon;

  /**
   * Container Element für Dropdown
   */
  @ViewChild(SacContextMenuContrainerCommon, { static: false })
  private _menu: SacContextMenuContrainerCommon;

  /**
   * Definiert ob das Dropdown offen ist.
   */
  @Input()
  public isopen: boolean = false;

  /**
   * Extra CSS Klassen für das Control
   */
  @Input()
  public cssclass: string = '';

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
  @Input() placement: PlacementArray = [
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
  ];

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
   * Konstruktor
   * @param _document HTML Document Element
   * @param _ngZone Angular Zone Service
   * @param _elementRef HTML Element des aktuellen Controls
   * @param _renderer Angular Rendering Service
   */
  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _ngZone: NgZone,
    private _elementRef: ElementRef<HTMLElement>,
    private _renderer: Renderer2
  ) {
    this.zoneSubscription = this._ngZone.onStable.subscribe(() => {
      this._positionMenu();
    });
  }

  /**
   * Event wenn Component entfernt wird.
   */
  ngOnDestroy(): void {
    this.zoneSubscription.unsubscribe();
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

  /**
   * Öffnet das Dropdown / Zeigt das Menü an.
   */
  public open(): void {
    this._applyContainer(this.container);
    this.isopen = true;
  }

  /**
   * Schliesst das Dropdown
   */
  public close(): void {
    this._resetContainer();
    this.isopen = false;
  }

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

  /**
   * Setzt die CSS Klassen auf dem Menü Container auf den Standard zurück
   */
  private _resetContainer() {
    const renderer = this._renderer;
    if (this._menu) {
      const dropdownElement = this._elementRef.nativeElement;
      const dropdownMenuElement = this._menu.nativeElement;

      renderer.appendChild(dropdownElement, dropdownMenuElement);
      renderer.removeStyle(dropdownMenuElement, 'position');
      renderer.removeStyle(dropdownMenuElement, 'transform');
    }
    if (this.bodyContainer) {
      renderer.removeChild(this._document.body, this.bodyContainer);
      this.bodyContainer = null;
    }
  }

  /**
   * Setzt die Position des Menüs innerhalb der Seite. Die Ausrichtung passiert innerhalb der Seite
   * damit das Menü innerhalb eines Dialogs sauber funktionioniert.
   * @param container Definiert wo das Menü ausgerichtet wird. Im Moment nur BODY Supported
   */
  private _applyContainer(container: null | 'body' = null) {
    // Reset Classes on Container
    this._resetContainer();

    if (container === 'body') {
      const renderer = this._renderer;
      const dropdownMenuElement = this._menu.nativeElement;
      const bodyContainer = (this.bodyContainer =
        this.bodyContainer || renderer.createElement('div'));

      // Override some styles to have the positioning working
      renderer.setStyle(bodyContainer, 'position', 'absolute');
      renderer.setStyle(dropdownMenuElement, 'position', 'static');
      renderer.setStyle(bodyContainer, 'z-index', '1050');

      renderer.appendChild(bodyContainer, dropdownMenuElement);
      renderer.appendChild(this._document.body, bodyContainer);
    }
  }
}
