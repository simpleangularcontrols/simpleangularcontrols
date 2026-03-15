import { convertToBoolean } from '../../utilities/convertion';
import { TooltipPosition } from '../../utilities/enums';
import { createGuid } from '../../utilities/guid';
import { PopUpHelper } from '../../utilities/popuphelper';
import {
    AfterViewChecked,
    ChangeDetectorRef,
    Directive,
    DoCheck,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';

/**
 * Tooltip Component
 *
 * Requires the following identifiers in the HTML markup
 * - container: Container for ng-content in which the element is displayed where the tooltip is attached.
 * - tooltip: Container for tooltip
 *
 * Tooltip must be displayed in 2 steps. In a first step the tooltip markup is created with (ngIf). In a 2nd step
 * the tooltip can then be displayed via the CSS visibility. If this is not done, it can lead to a flickering effect in certain browsers.
 *
 */
@Directive()
export abstract class SacTooltipCommon implements OnInit, OnDestroy, AfterViewChecked, DoCheck {
    // #region Properties

    /**
     * Helper class to display tooltip on correct position
     */
    private readonly popupHelper: PopUpHelper = new PopUpHelper();

    /**
     * Inline mode for tooltip
     */
    private _inlinemode: boolean;

    /**
     * Defines whether the tooltip is visible
     */
    private _isTooltipVisible: boolean = false;

    /**
     * Containers for the tooltip
     */
    private tooltipcontainer: ElementRef<HTMLElement>;

    /**
     * Position of the tooltip on the left
     */
    public IsTooltipContentVisible: boolean = false;

    /**
     * Position des Tooltips links
     */
    public LeftPos: number = 0;

    /**
     * Property for enum in Angular HTML template
     */
    public TooltipPosition = TooltipPosition;

    /**
     * Position of the tooltip at the top
     */
    public TopPos: number = 0;

    /**
     * Name of the container for content (e.g. icon) on which the tooltip is displayed.
     */
    @ViewChild('container', { static: true })
    public content: ElementRef<HTMLElement>;

    /**
     * Identifier used for the E2E data attribute.
     */
    @Input()
    public e2eidentifier: string | null = null;

    /**
     * name of control
     */
    @Input()
    public name: string = createGuid();

    /**
     * Position of the picker arrow at the left
     */
    public posArrowLeft: number | null = null;

    /**
     * Position of the picker arrow at the top
     */
    public posArrowTop: number | null = null;

    /**
     * Position of the tooltip. Values: left|top|right|bottom|auto
     *
     * Value 'auto' can be combined with another value.
     */
    @Input()
    public position: string = 'right|auto';

    /**
     * Text for ToolTip
     */
    @Input()
    public tooltiptext: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param ref Element Referenz
     */
    constructor(
        private readonly cdRef: ChangeDetectorRef,
        private readonly ref: ElementRef
    ) {}

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Property for inline mode for tooltip. Sets the display mode on the wrapper element to `inline`
     */
    public get inlinemode(): boolean {
        return this._inlinemode;
    }

    /**
     * Setter for inline mode for tooltip
     */
    @Input()
    public set inlinemode(value: boolean) {
        this._inlinemode = convertToBoolean(value);
    }

    /**
     * Setter for the name of the container for the tooltip. Is required as the tooltip can be hidden via ngIf.
     */
    @ViewChild('tooltip', { static: false })
    public set tooltip(content: ElementRef) {
        if (content !== undefined) {
            document.body.appendChild(content.nativeElement);
        }

        this.tooltipcontainer = content;
        this.onContentChange();
        this.cdRef.detectChanges();
    }

    public get tooltop(): ElementRef {
        return this.tooltipcontainer;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Returns the position of the tooltip
     */
    public GetTooltipPosition(): TooltipPosition {
        return this.popupHelper.getDisplayPosition(
            this.content,
            this.tooltipcontainer,
            this.getTooltipOffset(),
            this.getTooltipOffset(),
            this.position,
            true
        );
    }

    /**
     * Hide tooltip
     */
    public HideTooltip(): void {
        this._isTooltipVisible = false;
        this.IsTooltipContentVisible = false;
    }

    /**
     * Defines whether the tooltip is present in the markup
     */
    public IsTooltipVisible(): boolean {
        return this._isTooltipVisible;
    }

    /**
     * Show tooltip
     */
    public ShowTooltip(): void {
        this._isTooltipVisible = true;
        this.cdRef.detectChanges();

        setTimeout(() => {
            this.getLeftPosition();
            this.getTopPosition();
            this.IsTooltipContentVisible = true;
        });
    }

    /**
     * Calculates the height of the tooltip
     */
    public getToolTipHeight(): number {
        return this.popupHelper.getPopupHeight(this.tooltipcontainer);
    }

    /**
     * Calculates the width of the tooltips
     */
    public getToolTipWidth(): number {
        return this.popupHelper.getPopupWidth(this.tooltipcontainer);
    }

    /**
     * Detect Changes after view checked. Prevent ExpressionChangedAfterItHasBeenCheckedError error
     */
    public ngAfterViewChecked(): void {
        // Do nothing if is not visibile
        if (!this._isTooltipVisible) {
            return;
        }

        this.cdRef.detectChanges();
    }

    /**
     * Detect UI Changes to Calculate Tooltip correct
     */
    public ngDoCheck(): void {
        // Do nothing if is not visibile
        if (!this._isTooltipVisible) {
            return;
        }

        this.getLeftPosition();
        this.getTopPosition();
    }

    /**
     * Event when the control is destroyed.
     */
    public ngOnDestroy() {
        // Unregister Event Listener
        window.removeEventListener('scroll', this.onContentChange, true);
        window.removeEventListener('resize', this.onContentChange, true);

        if (this.tooltipcontainer !== undefined) {
            document.body.removeChild(this.tooltipcontainer.nativeElement);
        }
    }

    /**
     * Event when the control is initialized
     */
    public ngOnInit() {
        // Register Event Listener
        window.addEventListener('scroll', this.onContentChange, true);
        window.addEventListener('resize', this.onContentChange, true);

        if (this.tooltipcontainer !== undefined) {
            document.body.appendChild(this.tooltipcontainer.nativeElement);
        }
    }

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * Offset for Tooltip. Required for BS4/BS5 to create padding
     */
    protected abstract getTooltipOffset(): number;

    // #endregion Protected Methods

    // #region Private Methods

    /**
     * Calculates the position of the tooltip from links
     */
    private getLeftPosition(): number {
        const value = this.popupHelper.getPositionLeft(
            this.content,
            this.tooltipcontainer,
            this.ref,
            this.getTooltipOffset(),
            this.getTooltipOffset(),
            this.position,
            true
        );
        this.LeftPos = value;

        const requiredPosition = this.GetTooltipPosition();
        if (requiredPosition === TooltipPosition.left || requiredPosition === TooltipPosition.right) {
            this.posArrowTop = this.getToolTipHeight() / 2 - 6.5;
        } else {
            this.posArrowTop = null;
        }

        return value;
    }

    /**
     * Calculates the position of the tooltip from the top
     */
    private getTopPosition(): number {
        const value = this.popupHelper.getPositionTop(
            this.content,
            this.tooltipcontainer,
            this.ref,
            this.getTooltipOffset(),
            this.getTooltipOffset(),
            this.position,
            true
        );
        this.TopPos = value;

        const requiredPosition = this.GetTooltipPosition();
        if (requiredPosition === TooltipPosition.bottom || requiredPosition === TooltipPosition.top) {
            this.posArrowLeft = this.getToolTipWidth() / 2 - 6.5;
        } else {
            this.posArrowLeft = null;
        }

        return value;
    }

    /**
     * method if content has changed and proportions need to be reset in the UI.
     */
    private readonly onContentChange = (): void => {
        // Do nothing if is not visible
        if (!this._isTooltipVisible) {
            return;
        }

        setTimeout(() => {
            this.getLeftPosition();
            this.getTopPosition();
        });
    };

    // #endregion Private Methods
}
