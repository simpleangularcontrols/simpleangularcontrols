import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SacDialogCommon } from '@simpleangularcontrols/sac-common';

/**
 * Dialog Komponente
 */
@Component({
    selector: 'sac-dialog',
    templateUrl: './dialog.html',
})
export class SacDialogComponent extends SacDialogCommon implements OnInit, OnDestroy {
    // #region Properties

    /**
     * Referenz auf DOM Element
     */
    private element: any;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param el DOM Element Referenz
     * @param cdRef Change Detection Service
     */
    constructor(el: ElementRef, cdRef: ChangeDetectorRef) {
        super(cdRef);

        this.element = el.nativeElement;
    }

    // #endregion Constructors

    // #region Public Methods

    /**
     * Event wenn Element entfernt wird
     */
    public ngOnDestroy() {
        this.hide();
        if (document.body.contains(this.element)) {
            document.body.removeChild(this.element);
        }
        super.ngOnDestroy();
    }

    /**
     * Event wenn Komponente initialisiert wird
     */
    public ngOnInit() {
        // Element an Body für korrektes Styling unter Bootstrap 3 verschieben
        document.body.appendChild(this.element);
    }

    // #endregion Public Methods
}
