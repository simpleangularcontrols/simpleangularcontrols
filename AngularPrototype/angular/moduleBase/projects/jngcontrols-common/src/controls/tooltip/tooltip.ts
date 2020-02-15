import { ChangeDetectorRef, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { convertToBoolean } from '../../utilities/convertion';
import { TooltipPosition } from '../../utilities/enums';

/**
 * Tooltip Component
 *
 * Benötigt im HTML Markup folgende Identifier
 * - container: Container für ng-content in welchem das Element angezeigt wird, wo der Tooltip angehängt wird.
 * - tooltip: Container für Tooltip
 *
 * Tooltip muss in 2 Schritten angezeigt werden. In einem ersten Schritt wird der Tooltip Markup erzeugt mit (ngIf). In einem 2. Schritt
 * kann der Tooltip dann über die CSS visibility angezeigt werden. Wird dies nicht so gemacht, kann es bei gewissen Browsern zu einem Flacker Effekt führen.
 *
 */
export class NgTooltipCommon implements OnInit, OnDestroy {
  /**
   * Property für Enum in Angular HTML Template
   */
  TooltipPosition = TooltipPosition;

  /**
   * Definiert ob der Tooltip sichtbar ist
   */
  private _isTooltipVisible: boolean = false;

  /**
   * Position des Tooltips oben
   */
  TopPos: number = 0;

  /**
   * Position des Tooltips links
   */
  LeftPos: number = 0;

  /**
   * Position des Tooltips. Werte: left|top|right|bottom|auto
   *
   * Wert 'auto' kann mit einem anderen Wert kombiniert werden.
   */
  @Input('position')
  _position: string = 'right|auto';

  /**
   * Text für ToolTip
   */
  @Input('tooltiptext')
  _tooltiptext: string;

  /**
   * Inline Mode für Tooltip
   */
  private _inlinemode: boolean;

  /**
   * Definiert ob der Tooltip sichtbar sein soll
   */
  IsTooltipContentVisible: boolean = false;

  /**
   * Setter für Inline Mode für Tooltip
   */
  @Input('inlinemode')
  set inlinemode(value: boolean) {
    this._inlinemode = convertToBoolean(value);
  }
  /**
   * Getter für Inline Mode für Tooltip
   */
  get inlinemode(): boolean {
    return this._inlinemode;
  }

  /**
   * Name des Containers für Content (z.B. Icon) auf welchem der Tooltip angezeigt wird.
   */
  @ViewChild('container', { static: true }) content: ElementRef<HTMLElement>;

  /**
   * Name des Containers für den Tooltip
   */
  private tooltipcontainer: ElementRef<HTMLElement>;

  /**
   * Setter für Name des Containers für den Tooltip. Wird benötigt, da Tooltip via NGIF ausgeblendet werden kann.
   */
  @ViewChild('tooltip', { static: true })
  set tooltip(content: ElementRef) {
    if (content !== undefined) {
      document.body.appendChild(content.nativeElement);
    }

    this.tooltipcontainer = content;
    this.onContentChange();
    this.cdRef.detectChanges();
  }

  /**
   * Konstruktor
   * @param ref Element Referenz
   */
  constructor(private cdRef: ChangeDetectorRef, private ref: ElementRef) { }

  /**
   * Ervent wenn das Control initialisert wird
   */
  ngOnInit() {
    // Register Event Listener
    window.addEventListener('scroll', this.onContentChange, true);
    window.addEventListener('resize', this.onContentChange, true);

    if (this.tooltipcontainer !== undefined) {
      document.body.appendChild(this.tooltipcontainer.nativeElement);
    }
  }

  /**
   * Event wenn das Control zerstört wird.
   */
  ngOnDestroy() {
    // Unregister Event Listener
    window.removeEventListener('scroll', this.onContentChange, true);
    window.removeEventListener('resize', this.onContentChange, true);

    if (this.tooltipcontainer !== undefined) {
      document.body.removeChild(this.tooltipcontainer.nativeElement);
    }
  }

  /**
   * Berechnet die Position des Tooltips von Oben
   */
  private getTopPosition(): number {
    if (this.content !== null && this.content !== undefined) {
      const item = this.content.nativeElement;

      if (item.children.length >= 1) {
        const childItem = item.firstElementChild as HTMLElement;
        const contentPosition: ClientRect = childItem.getBoundingClientRect();

        switch (this.GetTooltipPosition()) {
          case TooltipPosition.top:
            this.TopPos = contentPosition.top - this.getToolTipHeight();
            return contentPosition.top - this.getToolTipHeight();
          case TooltipPosition.right:
            this.TopPos = contentPosition.top + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
            return contentPosition.top + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
          case TooltipPosition.bottom:
            this.TopPos = contentPosition.top + contentPosition.height;
            return contentPosition.top + contentPosition.height;
          case TooltipPosition.left:
            this.TopPos = contentPosition.top + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
            return contentPosition.top + (contentPosition.height / 2) - (this.getToolTipHeight() / 2);
        }

        return childItem.clientTop + childItem.offsetTop - ((this.getToolTipHeight() / 2) - (childItem.clientHeight / 2));
      } else {
        return this.content.nativeElement.offsetTop;
      }
    } else {
      return this.ref.nativeElement.offsetTop;
    }

  }

  /**
   * Berechnet die Position des Tooltips von Links
   */
  private getLeftPosition(): number {

    if (this.content !== null && this.content !== undefined) {
      const item = this.content.nativeElement;

      if (item.children.length >= 1) {
        const childItem = item.firstElementChild as HTMLElement;
        const contentPosition: ClientRect = childItem.getBoundingClientRect();

        switch (this.GetTooltipPosition()) {
          case TooltipPosition.top:
            this.LeftPos = contentPosition.left + (contentPosition.width / 2) - (this.getToolTipWidth() / 2);
            return contentPosition.left + (contentPosition.width / 2) - (this.getToolTipWidth() / 2);
          case TooltipPosition.right:
            this.LeftPos = contentPosition.left + contentPosition.width;
            return contentPosition.left + contentPosition.width;
          case TooltipPosition.bottom:
            this.LeftPos = contentPosition.left + (childItem.clientWidth / 2) - (this.getToolTipWidth() / 2);
            return contentPosition.left + (childItem.clientWidth / 2) - (this.getToolTipWidth() / 2);
          case TooltipPosition.left:
            this.LeftPos = contentPosition.left - this.getToolTipWidth();
            return contentPosition.left - this.getToolTipWidth();
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
   * Berechnet die Höhe des Tooltips
   */
  private getToolTipHeight(): number {
    if (this.tooltipcontainer) {
      return this.tooltipcontainer.nativeElement.clientHeight;
    } else {
      return 0;
    }
  }

  /**
   * Berechnet die Breite die Tooltips
   */
  private getToolTipWidth(): number {
    if (this.tooltipcontainer) {
      return this.tooltipcontainer.nativeElement.clientWidth;
    } else {
      return 0;
    }
  }


  /**
   * Definiert ob der Tooltip im Markup vorhanden ist
   */
  IsTooltipVisible(): boolean {
    return this._isTooltipVisible;
  }

  /**
   * Tooltip anzeigen
   */
  ShowTooltip(): void {
    this._isTooltipVisible = true;
    setTimeout(() => {
      this.getLeftPosition();
      this.getTopPosition();
      this.IsTooltipContentVisible = true;
    });
  }

  /**
   * Tooltip ausblenden
   */
  HideTooltip(): void {
    this._isTooltipVisible = false;
    this.IsTooltipContentVisible = false;
  }

  /**
   * Methode wenn Content geändert hat und Proporties im UI neu gesetzt werden müssen.
   */
  private onContentChange = (): void => {
    setTimeout(() => {
      this.getLeftPosition();
      this.getTopPosition();
    });
  }

  /**
   * Gibt die Position des Tooltips zurück
   */
  public GetTooltipPosition(): TooltipPosition {
    const validPositions: TooltipPosition = this.ValidatePositions();

    // tslint:disable-next-line:no-bitwise
    if (this.HasPosition(TooltipPosition.right) && (validPositions & TooltipPosition.right)) {
      return TooltipPosition.right;
    }

    // tslint:disable-next-line:no-bitwise
    if (this.HasPosition(TooltipPosition.top) && (validPositions & TooltipPosition.top)) {
      return TooltipPosition.top;
    }

    // tslint:disable-next-line:no-bitwise
    if (this.HasPosition(TooltipPosition.left) && (validPositions & TooltipPosition.left)) {
      return TooltipPosition.left;
    }

    // tslint:disable-next-line:no-bitwise
    if (this.HasPosition(TooltipPosition.bottom) && (validPositions & TooltipPosition.bottom)) {
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
   * Definiert ob AutoPosition aktiv ist
   */
  private IsAutoPosition(): boolean {
    const positions = this._position.split('|');
    return positions.indexOf('auto') >= 0;
  }

  /**
   * Gibt die definierte Position für den Tooltip zurück
   */
  private GetPosition(): TooltipPosition {
    const positions = this._position.split('|');

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
   * Gibt zurück, ob die Position konfiguriert wurde
   *
   * @param position Position auf welche geprüft wird
   */
  private HasPosition(position: TooltipPosition): boolean {
    const positions = this._position.split('|');

    if (position === TooltipPosition.right && positions.indexOf('right') >= 0) {
      return true;
    }

    if (position === TooltipPosition.top && positions.indexOf('top') >= 0) {
      return true;
    }

    if (position === TooltipPosition.left && positions.indexOf('left') >= 0) {
      return true;
    }

    if (position === TooltipPosition.bottom && positions.indexOf('bottom') >= 0) {
      return true;
    }

    return false;
  }

  /**
   * Prüft ob die Position gültig ist, resp. der Tooltip auf die Position platz hat
   */
  private ValidatePositions(): TooltipPosition {
    // Check if Container is false
    if (this.tooltipcontainer === undefined) {
      return TooltipPosition.right;
    }

    let allowedPositions: TooltipPosition = TooltipPosition.none;
    const basePosition: ClientRect = this.content.nativeElement.firstElementChild.getBoundingClientRect();
    const tooltipRect: ClientRect = this.tooltipcontainer.nativeElement.getBoundingClientRect();

    const leftPosOk: boolean = basePosition.left - tooltipRect.width > 0;
    const rightPosOk: boolean = basePosition.right + tooltipRect.width < window.innerWidth;
    const topPosOk: boolean = basePosition.top - tooltipRect.height > 0;
    const bottomPosOk: boolean = basePosition.bottom + tooltipRect.height < window.innerHeight;

    const leftHalfPosOk: boolean = basePosition.left - (tooltipRect.width / 2) > 0;
    const rightHalfPosOk: boolean = basePosition.right + (tooltipRect.width / 2) < window.innerWidth;
    const topHalfPosOk: boolean = basePosition.top - (tooltipRect.height / 2) > 0;
    const bottomHalfPosOk: boolean = basePosition.bottom + (tooltipRect.height / 2) < window.innerHeight;

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
}
