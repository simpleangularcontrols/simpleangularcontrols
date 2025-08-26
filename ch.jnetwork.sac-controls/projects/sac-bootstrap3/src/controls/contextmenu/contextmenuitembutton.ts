import { Component, ElementRef, OnDestroy, OnInit, forwardRef } from '@angular/core';
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
export class SacContextmenuItemButtonComponent extends SacContextmenuItemButtonCommon implements OnInit, OnDestroy {
    // #region Properties

    public ref: ChildNode[] = [];

    // #endregion Properties

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

    public ngOnDestroy(): void {
        for (let i = 0; i < this.ref.length; i++) {
            this.ref[i].parentElement.removeChild(this.ref[i]);
        }
    }

    public ngOnInit(): void {
        const rootElement: HTMLElement = this.el.nativeElement;
        const parentElement: HTMLElement = rootElement.parentElement;
        while (rootElement.firstChild) {
            this.ref.push(rootElement.firstChild);
            parentElement.insertBefore(rootElement.firstChild, rootElement);
        }
        parentElement.removeChild(rootElement);
    }

    // #endregion Public Methods
}
