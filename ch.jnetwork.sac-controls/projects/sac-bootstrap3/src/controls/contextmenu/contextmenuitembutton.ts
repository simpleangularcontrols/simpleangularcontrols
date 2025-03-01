import { Component, ElementRef, OnInit, forwardRef } from '@angular/core';
import { SacContextmenuItemButtonCommon, SacContextmenuItemCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for menu entry in context menu
 */
@Component({
    selector: 'sac-contextmenubutton',
    templateUrl: './contextmenuitembutton.html',
    providers: [
        {
            provide: SacContextmenuItemCommon,
            useExisting: forwardRef(() => SacContextmenuItemButtonComponent),
        },
    ],
})
export class SacContextmenuItemButtonComponent extends SacContextmenuItemButtonCommon implements OnInit {
    // #region Constructors

    /**
     * Constructor
     * @param contextmenu Instance von Context Menü
     */
    constructor(private readonly el: ElementRef) {
        super();
    }

    // #endregion Constructors

    // #region Public Methods

    public ngOnInit(): void {
        const rootElement: HTMLElement = this.el.nativeElement;
        const parentElement: HTMLElement = rootElement.parentElement;

        while (rootElement.firstChild) {
            parentElement.insertBefore(rootElement.firstChild, rootElement);
        }

        parentElement.removeChild(rootElement);
    }

    // #endregion Public Methods
}
