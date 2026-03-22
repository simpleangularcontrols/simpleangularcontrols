import { TooltipPosition } from './enums';
import { ElementRef } from '@angular/core';

/**
 * Utility for positioning popup elements relative to anchor elements.
 *
 * Provides functions for measuring container dimensions, validating available positions,
 * and computing translated positions for tooltip/popups in various placements.
 */
export class PopUpHelper {
    // #region Public Methods

    /**
     * Get the height of the reference container element
     * @param referenceContainer Element Reference to HTML Element
     * @param referenceIsContainer Boolean indicating if reference is the container itself
     * @returns The height in pixels
     */
    public getContainerHeight(referenceContainer: ElementRef<HTMLElement>, referenceIsContainer: boolean): number {
        if (referenceContainer) {
            return referenceIsContainer
                ? referenceContainer.nativeElement.firstElementChild.clientHeight
                : referenceContainer.nativeElement.offsetHeight;
        } else {
            return 0;
        }
    }

    /**
     * Get the width of the reference container element
     * @param referenceContainer Element Reference to HTML Element
     * @param referenceIsContainer Boolean indicating if reference is the container itself
     * @returns The width in pixels
     */
    public getContainerWidth(referenceContainer: ElementRef<HTMLElement>, referenceIsContainer: boolean): number {
        if (referenceContainer) {
            return referenceIsContainer
                ? referenceContainer.nativeElement.firstElementChild.clientWidth
                : referenceContainer.nativeElement.offsetWidth;
        } else {
            return 0;
        }
    }

    /**
     * Get Position where the popup would be positioned
     *
     * @param referenceContainer Element Reference to HTML Element which is the reference to positioning the popup
     * @param popupcontentcontainer Element Reference to container of popup
     * @param arrowWidth Width of the arrow element
     * @param arrowHeight Height of the arrow element
     * @param allowedPositions Allowed Positions for the popup
     * @param referenceIsContainer Boolean indicating if reference is the container itself
     * @returns Returns the position where the popup should be displayed
     */
    public getDisplayPosition(
        referenceContainer: ElementRef<HTMLElement>,
        popupcontentcontainer: ElementRef<HTMLElement>,
        arrowWidth: number,
        arrowHeight: number,
        allowedPositions: string,
        referenceIsContainer: boolean
    ): TooltipPosition {
        const validPositions: TooltipPosition = this.validatePositions(
            referenceContainer,
            popupcontentcontainer,
            arrowWidth,
            arrowHeight,
            referenceIsContainer
        );

        if (this.hasPosition(allowedPositions, TooltipPosition.right) && validPositions & TooltipPosition.right) {
            return TooltipPosition.right;
        }

        if (this.hasPosition(allowedPositions, TooltipPosition.top) && validPositions & TooltipPosition.top) {
            return TooltipPosition.top;
        }

        if (this.hasPosition(allowedPositions, TooltipPosition.left) && validPositions & TooltipPosition.left) {
            return TooltipPosition.left;
        }

        if (this.hasPosition(allowedPositions, TooltipPosition.bottom) && validPositions & TooltipPosition.bottom) {
            return TooltipPosition.bottom;
        }

        if (this.hasPosition(allowedPositions, TooltipPosition.topend) && validPositions & TooltipPosition.topend) {
            return TooltipPosition.topend;
        }

        if (
            this.hasPosition(allowedPositions, TooltipPosition.bottomend) &&
            validPositions & TooltipPosition.bottomend
        ) {
            return TooltipPosition.bottomend;
        }

        // Get Auto Position or Default
        if (this.isAutoPosition(allowedPositions)) {
            if (validPositions & TooltipPosition.right) {
                return TooltipPosition.right;
            }

            if (validPositions & TooltipPosition.top) {
                return TooltipPosition.top;
            }

            if (validPositions & TooltipPosition.left) {
                return TooltipPosition.left;
            }

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
     * @returns The height of the popup in pixels
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
     * @returns The width of the popup in pixels
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
     * @returns The calculated tooltip position
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

        if (this.hasPosition(allowedPositions, TooltipPosition.topend)) {
            return TooltipPosition.topend;
        }

        if (this.hasPosition(allowedPositions, TooltipPosition.bottomend)) {
            return TooltipPosition.bottomend;
        }

        // Default Position if empty
        return TooltipPosition.right;
    }

    /**
     * Calculates the left position of the tooltip/popup
     *
     * @param referenceContainer Element Reference to HTML Element which is the reference to positioning the popup
     * @param popupContainer Element Reference to container of popup
     * @param controlReference Element Reference to the control element
     * @param arrowWidth Width of the arrow element
     * @param arrowHeight Height of the arrow element
     * @param requestedPosition Requested Position by Control
     * @param referenceIsContainer Boolean indicating if reference is the container itself
     * @returns The left position in pixels
     */
    public getPositionLeft(
        referenceContainer: ElementRef<HTMLElement>,
        popupContainer: ElementRef<HTMLElement>,
        controlReference: ElementRef,
        arrowWidth: number,
        arrowHeight: number,
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
                        arrowWidth,
                        arrowHeight,
                        requestedPosition,
                        referenceIsContainer
                    )
                ) {
                    case TooltipPosition.top:
                    case TooltipPosition.bottom:
                        return (
                            contentPosition.left + contentPosition.width / 2 - this.getPopupWidth(popupContainer) / 2
                        );
                    case TooltipPosition.topend:
                    case TooltipPosition.bottomend:
                        return contentPosition.left + contentPosition.width - this.getPopupWidth(popupContainer);
                    case TooltipPosition.right:
                        return contentPosition.left + contentPosition.width + arrowWidth / 2;
                    case TooltipPosition.left:
                        return contentPosition.left - this.getPopupWidth(popupContainer) + (arrowWidth / 2) * -1;
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
     * Calculates the top position of the tooltip/popup
     *
     * @param referenceContainer Element Reference to HTML Element which is the reference to positioning the popup
     * @param popupContainer Element Reference to container of popup
     * @param controlReference Element Reference to the control element
     * @param arrowWidth Width of the arrow element
     * @param arrowHeight Height of the arrow element
     * @param requestedPosition Requested Position by Control
     * @param referenceIsContainer Boolean indicating if reference is the container itself
     * @returns The top position in pixels
     */
    public getPositionTop(
        referenceContainer: ElementRef<HTMLElement>,
        popupContainer: ElementRef<HTMLElement>,
        controlReference: ElementRef,
        arrowWidth: number,
        arrowHeight: number,
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
                    this.getOffsetTopParent(childItem.offsetParent as HTMLElement) +
                    this.getScrollTopParent(childItem.parentElement);

                switch (
                    this.getDisplayPosition(
                        referenceContainer,
                        popupContainer,
                        arrowWidth,
                        arrowHeight,
                        requestedPosition,
                        referenceIsContainer
                    )
                ) {
                    case TooltipPosition.top:
                    case TooltipPosition.topend:
                        return contentPositionTop - this.getPopupHeight(popupContainer) + (arrowHeight / 2) * -1;
                    case TooltipPosition.right:
                    case TooltipPosition.left:
                        return (
                            contentPositionTop + contentPosition.height / 2 - this.getPopupHeight(popupContainer) / 2
                        );
                    case TooltipPosition.bottom:
                    case TooltipPosition.bottomend:
                        return contentPositionTop + contentPosition.height + arrowHeight / 2;
                }

                return (
                    childItem.clientTop +
                    childItem.offsetTop -
                    (this.getPopupHeight(popupContainer) / 2 - childItem.offsetHeight / 2)
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
     * @returns Boolean indicating if the requested position is configured
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

        if (requestedPosition === TooltipPosition.topend && positions.indexOf('topend') >= 0) {
            return true;
        }
        if (requestedPosition === TooltipPosition.bottomend && positions.indexOf('bottomend') >= 0) {
            return true;
        }

        return false;
    }

    /**
     * Defines whether AutoPosition is active
     * @param positionProperty List of allowed positions
     * @returns Boolean indicating if auto positioning is enabled
     */
    public isAutoPosition(positionProperty: string): boolean {
        const positions = positionProperty.split('|');
        return positions.indexOf('auto') >= 0;
    }

    /**
     * Checks whether the position is valid or whether the tooltip on the position has space
     * @param referenceContainer Element Reference to HTML Element which is the reference
     * @param popupcontentcontainer Element Reference to container of popup
     * @param arrowWidth Width of the arrow element
     * @param arrowHeight Height of the arrow element
     * @param referenceIsContainer Boolean indicating if reference is the container itself
     * @returns The valid tooltip position
     */
    public validatePositions(
        referenceContainer: ElementRef<HTMLElement>,
        popupcontentcontainer: ElementRef<HTMLElement>,
        arrowWidth: number,
        arrowHeight: number,
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

        const leftPosOk: boolean = basePosition.left - (tooltipRect.width + arrowWidth * -1) > 0;
        const rightPosOk: boolean = basePosition.right + tooltipRect.width + arrowWidth < window.innerWidth;
        const topPosOk: boolean = basePosition.top - (tooltipRect.height + arrowHeight) > 0;
        const bottomPosOk: boolean = basePosition.bottom + tooltipRect.height + arrowHeight < window.innerHeight;

        const leftHalfPosOk: boolean = basePosition.left - tooltipRect.width / 2 > 0;
        const rightHalfPosOk: boolean = basePosition.right + tooltipRect.width / 2 < window.innerWidth;
        const topHalfPosOk: boolean = basePosition.top - tooltipRect.height / 2 > 0;
        const bottomHalfPosOk: boolean = basePosition.bottom + tooltipRect.height / 2 < window.innerHeight;

        if (topPosOk) {
            allowedPositions = allowedPositions | TooltipPosition.topend;
        }

        if (bottomPosOk) {
            allowedPositions = allowedPositions | TooltipPosition.bottomend;
        }

        if (leftPosOk && topHalfPosOk && bottomHalfPosOk) {
            allowedPositions = allowedPositions | TooltipPosition.left;
        }

        if (rightPosOk && topHalfPosOk && bottomHalfPosOk) {
            allowedPositions = allowedPositions | TooltipPosition.right;
        }

        if (topPosOk && leftHalfPosOk && rightHalfPosOk) {
            allowedPositions = allowedPositions | TooltipPosition.top;
        }

        if (bottomPosOk && leftHalfPosOk && rightHalfPosOk) {
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
     * @param [isFixed=false] Invert Scroll Position value when style is fixed to preserve negative values
     * @returns Scroll top value of element with all childs
     */
    private getScrollTopParent(element: HTMLElement, isFixed = false): number {
        if (element === null) {
            return 0;
        }

        // Body Scroll should not be calculated
        if (!element.parentElement) {
            return isFixed ? element.scrollTop : 0;
        }

        let isCurrentFixed = false;
        if (window.getComputedStyle(element).getPropertyValue('position') === 'fixed') {
            isCurrentFixed = true;
        }

        const parentValue = this.getScrollTopParent(element.parentElement, isFixed || isCurrentFixed);

        if (isFixed) {
            return parentValue + element.scrollTop;
        } else {
            return parentValue + element.scrollTop * -1;
        }
    }

    // #endregion Private Methods
}
