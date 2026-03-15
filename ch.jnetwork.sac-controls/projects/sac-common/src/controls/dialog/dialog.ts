import { createGuid } from '../../utilities/guid';
import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    Output,
    ViewChild,
} from '@angular/core';

/**
 * Base component for Dialog
 */
@Directive()
export class SacDialogCommon implements OnDestroy {
    // #region Properties

    private hasSetBodyTag = false;

    /**
     * Boolean property defines whether the dialog is shown
     */
    public _show = false;

    /**
     * This property contains (if set) either keywords for sizing or custom CSS classes.
     * The acceptable keywords are: 'small', 'large', 'extralarge', 'medium', ''.
     */
    public _size: 'small' | 'large' | 'extralarge' | 'medium' | '' = '';

    /**
     * The input property accepts a boolean value. Defines whether the dialog can be closed by ESC. Default is true.
     */
    @Input()
    public allowesc = true;

    /**
     * The input property accepts a boolean value. Defines whether the dialog can be closed by clicking outside the dialog window. Default is true.
     */
    @Input()
    public backdrop = true;

    /**
     * Controls whether a button is displayed in the header of the dialog.
     */
    @Input()
    public closebutton = true;

    /**
     * Name of the container for the dialog
     */
    public dialogElement: ElementRef;

    /**
     * Identifier used for the E2E data attribute.
     */
    @Input()
    public e2eidentifier: string | null = null;

    /**
     * Output emitter. Called when the value of the _show property changes - so the dialog is opened/closed.
     */
    @Output()
    public isvisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    /**
     * name of control
     */
    @Input()
    public name: string = createGuid();

    /**
     * Input property. Receives the title of the dialog. Default value: 'Dialog'.
     */
    @Input()
    public title = 'Dialog';

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * Injects the form
     */
    constructor(private cdRef: ChangeDetectorRef) {}

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Implementation as setter, because with ngIf the element is UNDEFINED when invisible.
     */
    @ViewChild('dialog', { static: false })
    public set dialogElementSetter(content: ElementRef) {
        this.dialogElement = content;
    }

    /**
     * Getter. Returns the boolean value of the _show property
     */
    public get isvisible(): boolean {
        return this._show;
    }

    /**
     * Setter. Receives the boolean value of the _show property
     */
    @Input()
    public set isvisible(v: boolean) {
        if (v && !this.hasSetBodyTag && !document.body.classList.contains('modal-open')) {
            document.body.classList.add('modal-open');
            this.hasSetBodyTag = true;
        }

        if (!v && this.hasSetBodyTag && document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
            this.hasSetBodyTag = false;
        }

        this._show = v;
    }

    /**
     * The input accepts both default size CSS classes and custom classes.
     * Case insensitive.
     * The acceptable default size classes are: 'small', 'large', 'extralarge', 'medium', ''.
     * If size is NOT set (or 'medium' or ''), default is medium size: max-width 500px.
     */
    @Input()
    public set size(v: 'small' | 'large' | 'extralarge' | 'medium' | '') {
        this._size = v;
    }

    // #endregion Public Getters And Setters

    // #region Protected Getters And Setters

    /**
     * Getter for ChangeDetector.
     */
    protected get ChangeDetector(): ChangeDetectorRef {
        return this.cdRef;
    }

    // #endregion Protected Getters And Setters

    // #region Public Methods

    /**
     * The method sets the value of the _show property to false
     */
    public hide(): void {
        if (this.hasSetBodyTag && document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
            this.hasSetBodyTag = false;
        }

        this._show = false;
        this.isvisibleChange.emit(this._show);
    }

    /**
     * Method called when the component is destroyed
     */
    public ngOnDestroy(): void {
        if (this.hasSetBodyTag && document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
            this.hasSetBodyTag = false;
        }
    }

    /**
     * Allow Close by Click outside Dialog
     */
    @HostListener('click', ['$event'])
    public onClick(event: any): void {
        if (
            this.allowesc === false ||
            (this.dialogElement !== null &&
                this.dialogElement !== undefined &&
                event.target !== this.dialogElement.nativeElement)
        ) {
            return;
        }
        this.hide();
    }

    /**
     * Allow Close by ESC
     */
    @HostListener('document:keydown', ['$event'])
    public onKeydownHandler(event: KeyboardEvent) {
        const ESCAPE_KEYCODE = 'Escape';

        if (this.allowesc === true && event.key === ESCAPE_KEYCODE) {
            this.hide();
        }
    }

    /**
     * The method sets the value of the _show property to true
     */
    public show(): void {
        this._show = true;

        if (!this.hasSetBodyTag && !document.body.classList.contains('modal-open')) {
            document.body.classList.add('modal-open');
            this.hasSetBodyTag = true;
        }

        this.isvisibleChange.emit(this._show);
    }

    // #endregion Public Methods
}
