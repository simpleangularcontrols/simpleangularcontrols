import { NgIf, NgStyle } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { SacDialogCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-dialog',
    templateUrl: './dialog.html',
    standalone: true,
    imports: [NgIf, NgStyle, SacTestingAttributePipe],
})
export class SacDialogComponent extends SacDialogCommon implements OnInit, OnDestroy {
    // #region Properties

    private _lastDialogMarginTop = 0;

    // DOM Element
    private element: any;

    /**
     * Z-index positioning for the dialog overlay
     */
    @Input()
    public zindex = 20002;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param el DOM element reference
     * @param cdRef Change Detection Service
     */
    constructor(el: ElementRef, cdRef: ChangeDetectorRef) {
        super(cdRef);

        this.element = el.nativeElement;
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    // Calculate margin top for centered position of dialog
    public get dialogMarginTop(): number {
        let result = 0;

        // ContentPlaceholder can be NULL/UNDEFINED when dialog is not displayed
        if (this.dialogElement !== null && this.dialogElement !== undefined) {
            result = (this.dialogElement.nativeElement.clientHeight / 2) * -1;
        }

        // Execute Change Detection if value has changed after rendering. Can be triggered by HTML content / line breaks etc.
        if (this._lastDialogMarginTop !== result) {
            this._lastDialogMarginTop = result;
            this.ChangeDetector.detectChanges();
        }

        return result;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Cleanup lifecycle hook - removes dialog from DOM
     */
    public ngOnDestroy() {
        this.hide();
        if (document.body.contains(this.element)) {
            document.body.removeChild(this.element);
        }
        super.ngOnDestroy();
    }

    /**
     * Initialization lifecycle hook - appends dialog to body for correct styling under Bootstrap 3
     */
    public ngOnInit() {
        // Move element to body for correct styling under Bootstrap 3
        document.body.appendChild(this.element);
    }

    // #endregion Public Methods
}
