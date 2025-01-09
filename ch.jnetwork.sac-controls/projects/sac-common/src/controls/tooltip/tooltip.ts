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
import { convertToBoolean } from '../../utilities/convertion';
import { TooltipPosition } from '../../utilities/enums';

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
   * Inline mode for tooltip
   */
  private _inlinemode: boolean;
  /**
   * Defines whether the tooltip is visible
   */
  private _isTooltipVisible: boolean = false;
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
  /**
   * Containers for the tooltip
   */
  private tooltipcontainer: ElementRef<HTMLElement>;

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
  /**
   * Name of the container for content (e.g. icon) on which the tooltip is displayed.
   */
  @ViewChild('container', { static: true })
  public content: ElementRef<HTMLElement>;

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

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param ref Element Referenz
   */
  constructor(private readonly cdRef: ChangeDetectorRef, private readonly ref: ElementRef) { }

  // #endregion Constructors

  // #region Public Getters And Setters

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

  /**
   * Property for inline mode for tooltip. Sets the display mode on the wrapper element to `inline`
   */
  public get inlinemode(): boolean {
    return this._inlinemode;
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
    const validPositions: TooltipPosition = this.ValidatePositions();

    // tslint:disable-next-line:no-bitwise
    if (
      this.HasPosition(TooltipPosition.right) &&
      validPositions & TooltipPosition.right
    ) {
      return TooltipPosition.right;
    }

    // tslint:disable-next-line:no-bitwise
    if (
      this.HasPosition(TooltipPosition.top) &&
      validPositions & TooltipPosition.top
    ) {
      return TooltipPosition.top;
    }

    // tslint:disable-next-line:no-bitwise
    if (
      this.HasPosition(TooltipPosition.left) &&
      validPositions & TooltipPosition.left
    ) {
      return TooltipPosition.left;
    }

    // tslint:disable-next-line:no-bitwise
    if (
      this.HasPosition(TooltipPosition.bottom) &&
      validPositions & TooltipPosition.bottom
    ) {
      return TooltipPosition.bottom;
    }

    // Get Auto Position or Default
    if (this.IsAutoPosition()) {
      // tslint:disable-next-line:no-bitwise
      if (validPositions & TooltipPosition.right) {
        return TooltipPosition.right;
      }

      // tslint:disable-next-line:no-bitwise
      if (validPositions & TooltipPosition.top) {
        return TooltipPosition.top;
      }

      // tslint:disable-next-line:no-bitwise
      if (validPositions & TooltipPosition.left) {
        return TooltipPosition.left;
      }

      // tslint:disable-next-line:no-bitwise
      if (validPositions & TooltipPosition.bottom) {
        return TooltipPosition.bottom;
      }

      return TooltipPosition.right;
    } else {
      return this.GetPosition();
    }
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
    if (this.tooltipcontainer) {
      return this.tooltipcontainer.nativeElement.firstElementChild.clientHeight ?? 0;
    } else {
      return 0;
    }
  }

  /**
   * Calculates the width of the tooltips
   */
  public getToolTipWidth(): number {
    if (this.tooltipcontainer) {
      return this.tooltipcontainer.nativeElement.firstElementChild.clientWidth;
    } else {
      return 0;
    }
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

  // #region Protected Abstract Methods

  /**
   * Offset for Tooltip. Required for BS4/BS5 to create padding
   */
  protected abstract getTooltipOffset(): number;

  // #endregion Protected Abstract Methods

  // #region Private Methods

  /**
   * Returns the defined position for the tooltip
   */
  private GetPosition(): TooltipPosition {
    const positions = this.position.split('|');

    if (this.HasPosition(TooltipPosition.left)) {
      return TooltipPosition.left;
    }

    if (this.HasPosition(TooltipPosition.top)) {
      return TooltipPosition.top;
    }

    if (this.HasPosition(TooltipPosition.right)) {
      return TooltipPosition.right;
    }

    if (this.HasPosition(TooltipPosition.bottom)) {
      return TooltipPosition.bottom;
    }

    // Default Position if empty
    return TooltipPosition.right;
  }

  /**
   * Returns whether the position has been configured
   *
   * @param position Position to be checked
   */
  private HasPosition(position: TooltipPosition): boolean {
    const positions = this.position.split('|');

    if (position === TooltipPosition.right && positions.indexOf('right') >= 0) {
      return true;
    }

    if (position === TooltipPosition.top && positions.indexOf('top') >= 0) {
      return true;
    }

    if (position === TooltipPosition.left && positions.indexOf('left') >= 0) {
      return true;
    }

    if (
      position === TooltipPosition.bottom &&
      positions.indexOf('bottom') >= 0
    ) {
      return true;
    }

    return false;
  }

  /**
   * Defines whether AutoPosition is active
   */
  private IsAutoPosition(): boolean {
    const positions = this.position.split('|');
    return positions.indexOf('auto') >= 0;
  }

  /**
   * Checks whether the position is valid or whether the tooltip on the position has space
   */
  private ValidatePositions(): TooltipPosition {
    // Check if Container is false
    if (this.tooltipcontainer === undefined) {
      return TooltipPosition.right;
    }

    let allowedPositions: TooltipPosition = TooltipPosition.none;
    const basePosition: DOMRect = this.content.nativeElement.firstElementChild.getBoundingClientRect();
    const tooltipRect: DOMRect = this.tooltipcontainer.nativeElement.firstElementChild.getBoundingClientRect();

    const leftPosOk: boolean = basePosition.left - tooltipRect.width + (this.getTooltipOffset() * -1) > 0;
    const rightPosOk: boolean = basePosition.right + tooltipRect.width + this.getTooltipOffset() < window.innerWidth;
    const topPosOk: boolean = basePosition.top - tooltipRect.height > 0;
    const bottomPosOk: boolean = basePosition.bottom + tooltipRect.height < window.innerHeight;

    const leftHalfPosOk: boolean = basePosition.left - tooltipRect.width / 2 > 0;
    const rightHalfPosOk: boolean = basePosition.right + tooltipRect.width / 2 < window.innerWidth;
    const topHalfPosOk: boolean = basePosition.top - tooltipRect.height / 2 > 0;
    const bottomHalfPosOk: boolean = basePosition.bottom + tooltipRect.height / 2 < window.innerHeight;

    if (leftPosOk && topHalfPosOk && bottomHalfPosOk) {
      // tslint:disable-next-line:no-bitwise
      allowedPositions = allowedPositions | TooltipPosition.left;
    }

    if (rightPosOk && topHalfPosOk && bottomHalfPosOk) {
      // tslint:disable-next-line:no-bitwise
      allowedPositions = allowedPositions | TooltipPosition.right;
    }

    if (topPosOk && leftHalfPosOk && rightHalfPosOk) {
      // tslint:disable-next-line:no-bitwise
      allowedPositions = allowedPositions | TooltipPosition.top;
    }

    if (bottomPosOk && leftHalfPosOk && rightHalfPosOk) {
      // tslint:disable-next-line:no-bitwise
      allowedPositions = allowedPositions | TooltipPosition.bottom;
    }

    return allowedPositions;
  }

  /**
   * Calculates the position of the tooltip from links
   */
  private getLeftPosition(): number {
    if (this.content !== null && this.content !== undefined) {
      const item = this.content.nativeElement;

      if (item.children.length >= 1) {
        const childItem = item.firstElementChild as HTMLElement;
        const contentPosition: DOMRect = childItem.getBoundingClientRect();

        switch (this.GetTooltipPosition()) {
          case TooltipPosition.top:
            this.LeftPos = contentPosition.left + contentPosition.width / 2 - this.getToolTipWidth() / 2;
            return (contentPosition.left + contentPosition.width / 2 - this.getToolTipWidth() / 2
            );
          case TooltipPosition.right:
            this.LeftPos = contentPosition.left + contentPosition.width + this.getTooltipOffset();
            return contentPosition.left + contentPosition.width + this.getTooltipOffset();
          case TooltipPosition.bottom:
            this.LeftPos = contentPosition.left + contentPosition.width / 2 - this.getToolTipWidth() / 2;
            return (contentPosition.left + contentPosition.width / 2 - this.getToolTipWidth() / 2);
          case TooltipPosition.left:
            this.LeftPos = contentPosition.left - this.getToolTipWidth() + (this.getTooltipOffset() * -1);
            return contentPosition.left - this.getToolTipWidth() + (this.getTooltipOffset() * -1);
        }

        return this.content.nativeElement.offsetTop;
      } else {
        return this.content.nativeElement.offsetTop;
      }
    } else {
      return this.ref.nativeElement.offsetLeft;
    }
  }

  /**
   * Calculates the position of the tooltip from the top
   */
  private getTopPosition(): number {
    if (this.content !== null && this.content !== undefined) {
      const item = this.content.nativeElement;

      if (item.children.length >= 1) {
        const childItem = item.firstElementChild as HTMLElement;
        const contentPosition: DOMRect = childItem.getBoundingClientRect();

        // Get Position with Scroll (Scrollbars inside page should be substracted)
        const contentPositionTop = childItem.offsetTop + this.getOffsetTopParent(childItem.offsetParent as HTMLElement) - this.getScrollTopParent(childItem.parentElement);

        switch (this.GetTooltipPosition()) {
          case TooltipPosition.top:
            this.TopPos = contentPositionTop - this.getToolTipHeight() + (this.getTooltipOffset() * -1);
            return contentPositionTop - this.getToolTipHeight() + (this.getTooltipOffset() * -1);
          case TooltipPosition.right:
            this.TopPos = contentPositionTop + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
            return contentPositionTop + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
          case TooltipPosition.bottom:
            this.TopPos = contentPositionTop + contentPosition.height + this.getTooltipOffset();
            return contentPositionTop + contentPosition.height + this.getTooltipOffset();
          case TooltipPosition.left:
            this.TopPos = contentPositionTop + contentPosition.height / 2 - this.getToolTipHeight() / 2;
            return (contentPositionTop + contentPosition.height / 2 - this.getToolTipHeight() / 2);
        }

        return (childItem.clientTop + childItem.offsetTop - (this.getToolTipHeight() / 2 - childItem.clientHeight / 2));
      } else {
        return this.content.nativeElement.offsetTop;
      }
    } else {
      return this.ref.nativeElement.offsetTop;
    }
  }

  /**
   * Calculates the top of the page inside all elements
   * @param element HTML Element
   * @returns summarized top value for absolute position
   */
  private getOffsetTopParent(element: HTMLElement): number {
    if (!element.offsetParent) {
      return element.offsetTop;
    }

    const parentValue = this.getOffsetTopParent(element.offsetParent as HTMLElement);
    let offset = element.offsetTop;
    return parentValue + offset;
  }

  /**
   * Caclulate Scrollbars inside tree
   * @param element HTML Element
   * @returns Scroll top value of element with all childs
   */
  private getScrollTopParent(element: HTMLElement): number {
    // Body Scroll should not be calculated
    if (!element.parentElement) {
      return 0;
    }

    const parentValue = this.getScrollTopParent(element.parentElement);
    return parentValue + element.scrollTop;
  }


  // #endregion Private Methods
}
