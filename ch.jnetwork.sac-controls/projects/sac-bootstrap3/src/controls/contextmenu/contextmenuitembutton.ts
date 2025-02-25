import { Component, ElementRef, OnInit } from '@angular/core';
import { SacContextmenuCommon, SacContextmenuItemButtonCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component für Menü Eintrag in Context Menü
 */
@Component({
    selector: 'sac-contextmenubutton',
    templateUrl: './contextmenuitembutton.html',
})
export class SacContextmenuItemButtonComponent extends SacContextmenuItemButtonCommon implements OnInit {
    // #region Constructors

    /**
     * Constructor
     * @param contextmenu Instance von Context Menü
     */
    constructor(contextmenu: SacContextmenuCommon, private readonly el: ElementRef) {
        super(contextmenu);
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
