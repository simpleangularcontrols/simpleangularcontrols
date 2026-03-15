import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SacDialogCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Dialog component
 */
@Component({
    selector: 'sac-dialog',
    templateUrl: './dialog.html',
    standalone: true,
    imports: [NgIf, SacTestingAttributePipe],
})
export class SacDialogComponent extends SacDialogCommon implements OnInit, OnDestroy {
    // #region Properties

    /**
     * Reference to DOM element
     */
    private element: any;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param el DOM element reference
     * @param cdRef Change detection service
     */
    constructor(el: ElementRef, cdRef: ChangeDetectorRef) {
        super(cdRef);

        this.element = el.nativeElement;
    }

    // #endregion Constructors

    // #region Public Methods

    /**
     * Event when element is removed
     */
    public ngOnDestroy() {
        this.hide();
        if (document.body.contains(this.element)) {
            document.body.removeChild(this.element);
        }
        super.ngOnDestroy();
    }

    /**
     * Event when component is initialized
     */
    public ngOnInit() {
        // Move element to body for correct styling under Bootstrap 3
        document.body.appendChild(this.element);
    }

    // #endregion Public Methods
}
