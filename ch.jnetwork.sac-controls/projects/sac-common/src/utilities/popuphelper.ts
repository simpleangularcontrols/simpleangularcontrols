import { TooltipPosition } from './enums';
import { ElementRef } from '@angular/core';

export class PopUpHelper {
    // #region Public Methods

    /**
     * Get Position who the popup would be positioned
     *
     * @param referenceContainer Element Reference to HTML Element which is the reference to positioning the popup
     * @param popupcontentcontainer Element Reference to container of popup
     * @param popupOffset Offset for popup positioning
     * @param allowedPositions Allowed Positions for the popup
     * @returns Returns the position where the popup should be displayed
     */
    public getDisplayPosition(
        referenceContainer: ElementRef<HTMLElement>,
        popupcontentcontainer: ElementRef<HTMLElement>,
        popupOffset: number,
        allowedPositions: string,
        referenceIsContainer: boolean
    ): TooltipPosition {
        const validPositions: TooltipPosition = this.validatePositions(
            referenceContainer,
            popupcontentcontainer,
            popupOffset,
            referenceIsContainer
        );

        // tslint:disable-next-line:no-bitwise
        if (this.hasPosition(allowedPositions, TooltipPosition.right) && validPositions & TooltipPosition.right) {
            return TooltipPosition.right;
        }

        // tslint:disable-next-line:no-bitwise
        if (this.hasPosition(allowedPositions, TooltipPosition.top) && validPositions & TooltipPosition.top) {
            return TooltipPosition.top;
        }

        // tslint:disable-next-line:no-bitwise
        if (this.hasPosition(allowedPositions, TooltipPosition.left) && validPositions & TooltipPosition.left) {
            return TooltipPosition.left;
        }

        // tslint:disable-next-line:no-bitwise
        if (this.hasPosition(allowedPositions, TooltipPosition.bottom) && validPositions & TooltipPosition.bottom) {
            return TooltipPosition.bottom;
        }

        // Get Auto Position or Default
        if (this.isAutoPosition(allowedPositions)) {
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
            return this.getPosition(allowedPositions);
        }
    }

    /**
     * Calculates the height of the popup
     *
     * @param container Element Reference to container of popup
     */
    public getPopupHeight(container: ElementRef<HTMLElement>): number {
        if (container) {
            return container.nativeElement.firstElementChild.clientHeight ?? 0;
        } else {
            return 0;
        }
    }

    /**
     * Calculates the width of the popup
     *
     * @param container Element Reference to container of popup
     */
    public getPopupWidth(container: ElementRef<HTMLElement>): number {
        if (container) {
            return container.nativeElement.firstElementChild.clientWidth;
        } else {
            return 0;
        }
    }

    /**
     * Returns the defined position for the tooltip
     *
     * @param allowedPositions Allowed positions defined in markup for popup
     */
    public getPosition(allowedPositions: string): TooltipPosition {
        if (this.hasPosition(allowedPositions, TooltipPosition.left)) {
            return TooltipPosition.left;
        }

        if (this.hasPosition(allowedPositions, TooltipPosition.top)) {
            return TooltipPosition.top;
        }

        if (this.hasPosition(allowedPositions, TooltipPosition.right)) {
            return TooltipPosition.right;
        }

        if (this.hasPosition(allowedPositions, TooltipPosition.bottom)) {
            return TooltipPosition.bottom;
        }

        // Default Position if empty
        return TooltipPosition.right;
    }

    /**
     * Calculates the position of the tooltip from links
     *
     * @param controlReference Element Reference to angular component
     * @param popupContainer Element Reference to container of popup
     * @param referenceContainer Element Reference to HTML Element which is the reference to positioning the popup
     * @param popupOffset Offset for popup positioning
     * @param requestedPosition Requested Position by Control
     */
    public getPositionLeft(
        referenceContainer: ElementRef<HTMLElement>,
        popupContainer: ElementRef<HTMLElement>,
        controlReference: ElementRef,
        popupOffset: number,
        requestedPosition: string,
        referenceIsContainer: boolean
    ): number {
        if (referenceContainer !== null && referenceContainer !== undefined) {
            const item = referenceContainer.nativeElement;

            if (item.children.length >= 1) {
                const childItem = referenceIsContainer ? (item.firstElementChild as HTMLElement) : item;
                const contentPosition: DOMRect = childItem.getBoundingClientRect();

                switch (
                    this.getDisplayPosition(
                        referenceContainer,
                        popupContainer,
                        popupOffset,
                        requestedPosition,
                        referenceIsContainer
                    )
                ) {
                    case TooltipPosition.top:
                    case TooltipPosition.bottom:
                        return (
                            contentPosition.left + contentPosition.width / 2 - this.getPopupWidth(popupContainer) / 2
                        );
                    case TooltipPosition.right:
                        return contentPosition.left + contentPosition.width + popupOffset;
                    case TooltipPosition.left:
                        return contentPosition.left - this.getPopupWidth(popupContainer) + popupOffset * -1;
                }

                return referenceContainer.nativeElement.offsetTop;
            } else {
                return referenceContainer.nativeElement.offsetTop;
            }
        } else {
            return controlReference.nativeElement.offsetLeft;
        }
    }

    /**
     * Calculates the position of the tooltip from the top
     *
     * @param controlReference Element Reference to angular component
     * @param popupContainer Element Reference to container of popup
     * @param referenceContainer Element Reference to HTML Element which is the reference to positioning the popup
     * @param popupOffset Offset for popup positioning
     * @param requestedPosition Requested Position by Control
     */
    public getPositionTop(
        referenceContainer: ElementRef<HTMLElement>,
        popupContainer: ElementRef<HTMLElement>,
        controlReference: ElementRef,
        popupOffset: number,
        requestedPosition: string,
        referenceIsContainer: boolean
    ): number {
        if (referenceContainer !== null && referenceContainer !== undefined) {
            const item = referenceContainer.nativeElement;

            if (item.children.length >= 1) {
                const childItem = referenceIsContainer ? (item.firstElementChild as HTMLElement) : item;
                const contentPosition: DOMRect = childItem.getBoundingClientRect();

                // Get Position with Scroll (Scrollbars inside page should be substracted)
                const contentPositionTop =
                    childItem.offsetTop +
                    this.getOffsetTopParent(childItem.offsetParent as HTMLElement) -
                    this.getScrollTopParent(childItem.parentElement);

                switch (
                    this.getDisplayPosition(
                        referenceContainer,
                        popupContainer,
                        popupOffset,
                        requestedPosition,
                        referenceIsContainer
                    )
                ) {
                    case TooltipPosition.top:
                        return contentPositionTop - this.getPopupHeight(popupContainer) + popupOffset * -1;
                    case TooltipPosition.right:
                    case TooltipPosition.left:
                        return (
                            contentPositionTop + contentPosition.height / 2 - this.getPopupHeight(popupContainer) / 2
                        );
                    case TooltipPosition.bottom:
                        return contentPositionTop + contentPosition.height + popupOffset;
                }

                return (
                    childItem.clientTop +
                    childItem.offsetTop -
                    (this.getPopupHeight(popupContainer) / 2 - childItem.clientHeight / 2)
                );
            } else {
                return referenceContainer.nativeElement.offsetTop;
            }
        } else {
            return controlReference.nativeElement.offsetTop;
        }
    }

    /**
     * Returns whether the position has been configured
     *
     * @param allowedPositions Positions that allowed by control
     * @param requestedPosition Position to be checked
     */
    public hasPosition(allowedPositions: string, requestedPosition: TooltipPosition): boolean {
        const positions = allowedPositions.split('|');

        if (requestedPosition === TooltipPosition.right && positions.indexOf('right') >= 0) {
            return true;
        }

        if (requestedPosition === TooltipPosition.top && positions.indexOf('top') >= 0) {
            return true;
        }

        if (requestedPosition === TooltipPosition.left && positions.indexOf('left') >= 0) {
            return true;
        }

        if (requestedPosition === TooltipPosition.bottom && positions.indexOf('bottom') >= 0) {
            return true;
        }

        return false;
    }

    /**
     * Defines whether AutoPosition is active
     * @param positionProperty List of allowed positions
     */
    public isAutoPosition(positionProperty: string): boolean {
        const positions = positionProperty.split('|');
        return positions.indexOf('auto') >= 0;
    }

    /**
     * Checks whether the position is valid or whether the tooltip on the position has space
     */
    public validatePositions(
        referenceContainer: ElementRef<HTMLElement>,
        popupcontentcontainer: ElementRef<HTMLElement>,
        popupOffset: number,
        referenceIsContainer: boolean
    ): TooltipPosition {
        // Check if Container is false
        if (popupcontentcontainer === undefined) {
            return TooltipPosition.right;
        }

        let allowedPositions: TooltipPosition = TooltipPosition.none;
        const basePosition: DOMRect = referenceIsContainer
            ? referenceContainer.nativeElement.firstElementChild.getBoundingClientRect()
            : referenceContainer.nativeElement.getBoundingClientRect();
        const tooltipRect: DOMRect = popupcontentcontainer.nativeElement.firstElementChild.getBoundingClientRect();

        const leftPosOk: boolean = basePosition.left - tooltipRect.width + popupOffset * -1 > 0;
        const rightPosOk: boolean = basePosition.right + tooltipRect.width + popupOffset < window.innerWidth;
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

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Calculates the top of the page inside all elements
     * @param element HTML Element
     * @returns summarized top value for absolute position
     */
    private getOffsetTopParent(element: HTMLElement): number {
        if (element === null) {
            return 0;
        }

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
        if (element === null) {
            return 0;
        }

        // Body Scroll should not be calculated
        if (!element.parentElement) {
            return 0;
        }

        const parentValue = this.getScrollTopParent(element.parentElement);
        return parentValue + element.scrollTop;
    }

    // #endregion Private Methods
}
