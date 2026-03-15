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

    @Input()
    public zindex = 20002;

    // #endregion Properties

    // #region Constructors

    constructor(el: ElementRef, cdRef: ChangeDetectorRef) {
        super(cdRef);

        this.element = el.nativeElement;
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    // Margin Top für Center Position des Dialogs berechnen
    public get dialogMarginTop(): number {
        let result = 0;

        // ContentPlaceholder kann NULL/UNDEFINED sein wenn Dialog nicht angezeigt wird
        if (this.dialogElement !== null && this.dialogElement !== undefined) {
            result = (this.dialogElement.nativeElement.clientHeight / 2) * -1;
        }

        // Change Detection ausführen, falls Wert nach Rendering noch geändert hat. Kann durch HTML Content / Zeilenumbrüche usw. ausgelöst werden.
        if (this._lastDialogMarginTop !== result) {
            this._lastDialogMarginTop = result;
            this.ChangeDetector.detectChanges();
        }

        return result;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    public ngOnDestroy() {
        this.hide();
        if (document.body.contains(this.element)) {
            document.body.removeChild(this.element);
        }
        super.ngOnDestroy();
    }

    public ngOnInit() {
        // Element an Body für korrektes Styling unter Bootstrap 3 verschieben
        document.body.appendChild(this.element);
    }

    // #endregion Public Methods
}
