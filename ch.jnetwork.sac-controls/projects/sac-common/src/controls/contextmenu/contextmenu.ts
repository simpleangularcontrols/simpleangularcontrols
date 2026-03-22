import { ISacIconService } from '../../interfaces/ISacIconService';
import { SACICON_SERVICE, SacDefaultIconService } from '../../services';
import { createGuid } from '../../utilities/guid';
import { PlacementArray, positionElements } from '../../utilities/positionelements';
import { ISacContextmenuCommon } from './contextmenu.interface';
import { SacContextmenuAnchorCommon } from './contextmenuanchor';
import { SacContextMenuContrainerCommon } from './contextmenucontainer';
import { SacContextmenuItemCommon } from './contextmenuitem';
import { DOCUMENT } from '@angular/common';
import {
    AfterContentInit,
    ContentChild,
    ContentChildren,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Injector,
    Input,
    NgZone,
    OnDestroy,
    QueryList,
    Renderer2,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

/**
 * Base context menu element. The logic was taken from NG-BOOTSTRAP.
 */
@Directive()
export class SacContextmenuCommon implements ISacContextmenuCommon, AfterContentInit, OnDestroy {
    // #region Properties

    /**
     * Button for open/close event
     */
    @ViewChild(SacContextmenuAnchorCommon, { static: false })
    private readonly _anchor: SacContextmenuAnchorCommon;

    /**
     * Button for open/close event from template
     */
    @ContentChild(SacContextmenuAnchorCommon, { static: false })
    private readonly _anchorTemplate: SacContextmenuAnchorCommon;

    /**
     * Container element for dropdown
     */
    @ViewChild(SacContextMenuContrainerCommon, { static: false })
    private readonly _menu: SacContextMenuContrainerCommon;

    /**
     * Zone subscription for positioning the element
     */
    private readonly zoneSubscription: Subscription;

    /**
     * Body HTML Element
     */
    private bodyContainer: HTMLElement | null = null;

    /**
     * icon service
     */
    protected iconService: ISacIconService;

    /**
     * Custom HTML template for dropdown button. Button must contain the marker "ngContextmenuAnchor" for the control to work correctly.
     */
    @Input()
    public buttontemplate: TemplateRef<any>;

    /**
     * Container to which the position is aligned. Currently only body is supported.
     */
    @Input()
    public container: null | 'body' = 'body';

    /**
     * Extra CSS classes for the control
     */
    @Input()
    public cssclass = '';

    /**
     * Identifier used for the E2E data attribute.
     */
    @Input()
    public e2eidentifier: string | null = null;

    /**
     * Defines whether the dropdown is open.
     */
    @Input()
    public isopen = false;

    /**
     * All directly assigned context menu elements that are defined in the direct template for the context menu.
     */
    @ContentChildren(SacContextmenuItemCommon)
    public menuitems!: QueryList<SacContextmenuItemCommon>;

    /**
     * name of control
     */
    @Input()
    public name: string = createGuid();

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
    @Input() public placement: PlacementArray = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param document HTML document element
     * @param ngZone Angular zone service
     * @param elementRef HTML element of the current control
     * @param renderer Angular rendering service
     * @param injector Injector to resolve the icon service
     */
    constructor(
        @Inject(DOCUMENT) private readonly document: any,
        private readonly ngZone: NgZone,
        private readonly elementRef: ElementRef<HTMLElement>,
        private readonly renderer: Renderer2,
        injector: Injector
    ) {
        this.zoneSubscription = this.ngZone.onStable.subscribe(() => {
            this._positionMenu();
        });

        this.iconService = injector.get(SACICON_SERVICE, new SacDefaultIconService());
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Icon for default context menu button
     */
    public get IconContextMenu(): string {
        return this.iconService.ContextMenuOpenIcon;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Closes the dropdown
     */
    public close(): void {
        this._resetContainer();
        this.isopen = false;
    }

    /**
     * Lifecycle hook that is called after content projection is completed.
     *
     * Associates each menu item with this context menu instance so that item
     * events can delegate to the parent menu.
     */
    public ngAfterContentInit(): void {
        this.menuitems.forEach((button) => (button.contextmenu = this));
    }

    /**
     * Event when component is destroyed.
     */
    public ngOnDestroy(): void {
        if (this.isopen) {
            this.close();
        }

        this.zoneSubscription.unsubscribe();
    }

    /**
     * HostListener to close the dropdown when clicking outside the element.
     */
    @HostListener('document:click', ['$event.target'])
    /**
     * Click Event
     * @param targetElement The target element from the click event
     */
    public onClick(targetElement) {
        const anchor: SacContextmenuAnchorCommon = this._anchor || this._anchorTemplate;

        if (
            this._menu &&
            !this._menu.nativeElement.contains(targetElement) &&
            !anchor.nativeElement.contains(targetElement)
        ) {
            this.close();
        }
    }

    /**
     * Opens the dropdown / shows the menu.
     */
    public open(): void {
        this._applyContainer(this.container);
        this.isopen = true;
    }

    /**
     * Toggle dropdown
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
     * Sets the position of the menu in the markup
     */
    protected _positionMenu() {
        const anchor: SacContextmenuAnchorCommon = this._anchor || this._anchorTemplate;

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
     * Sets the position of the menu within the page. The alignment happens within the page
     * so that the menu works correctly inside a dialog.
     * @param container Defines where the menu is aligned. Currently only BODY is supported
     */
    private _applyContainer(container: null | 'body' = null) {
        // Reset Classes on Container
        this._resetContainer();

        if (container === 'body') {
            const renderer = this.renderer;
            const dropdownMenuElement = this._menu.nativeElement;
            const bodyContainer = (this.bodyContainer = this.bodyContainer || renderer.createElement('div'));

            // Override some styles to have the positioning working
            renderer.setStyle(bodyContainer, 'position', 'absolute');
            renderer.setStyle(dropdownMenuElement, 'position', 'static');
            renderer.setStyle(bodyContainer, 'z-index', '1050');

            renderer.appendChild(bodyContainer, dropdownMenuElement);
            renderer.appendChild(this.document.body, bodyContainer);
        }
    }

    /**
     * Resets the CSS classes on the menu container to default
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
