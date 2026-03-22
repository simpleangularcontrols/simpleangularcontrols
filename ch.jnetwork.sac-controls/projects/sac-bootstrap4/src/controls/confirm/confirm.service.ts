import { SacConfirmComponent } from './confirm';
import {
    ApplicationRef,
    ComponentFactory,
    ComponentFactoryResolver,
    EventEmitter,
    Inject,
    Injectable,
    Injector,
} from '@angular/core';
import { SacConfirmButton, ServiceConfirmCommon, isDefined } from '@simpleangularcontrols/sac-common';
import { forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';

/**
 * Service for confirm messages in TypeScript code
 *
 * @example
 * // Example for ConfirmMessage with standard buttons (Yes / No).
 * confirmService.ConfirmMessage('title', 'question').subscribe(action => { // Action code });
 *
 * @example
 * // Example for ConfirmMessage with custom buttons
 * let buttons: SacConfirmButton[] = [];
 * buttons.push(new SacConfirmButton('ActionKey','Text Primary'));
 * buttons.push(new SacConfirmButton('ActionKey2','Text Button 2'));
 * confirmService.ConfirmMessage('title', 'question', buttons).subscribe(action => { // Action code });
 */
@Injectable()
export class ServiceConfirm extends ServiceConfirmCommon {
    // #region Properties

    /**
     * Collection of buttons that need to be displayed
     */
    private buttons: SacConfirmButton[] = [];

    /**
     * Message to be displayed in the dialog.
     */
    private message: string = '';

    /**
     * Title to be displayed in the dialog.
     */
    private title: string = '';

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param componentFactoryResolver Component Factory Resolver instance
     * @param appRef Application Reference. Required to attach the dialog to the body
     * @param injector Injector. Required to dynamically create the dialog
     */
    constructor(
        @Inject(ComponentFactoryResolver)
        private componentFactoryResolver: ComponentFactoryResolver,
        appRef: ApplicationRef,
        injector: Injector
    ) {
        super(appRef, injector);
    }

    // #endregion Constructors

    // #region Public Methods

    /**
     * Show confirm dialog
     * @param title Title to be displayed in dialog
     * @param message Message to be displayed in dialog
     * @param buttons Array of custom buttons or null for default buttons
     * @returns EventEmitter with key of the button that was clicked
     */
    public ConfirmMessage(title: string, message: string, buttons: SacConfirmButton[] = null): EventEmitter<string> {
        this.title = title;
        this.message = message;

        // Set default buttons if no buttons are specified
        if (!isDefined(buttons)) {
            this.buttons = [];

            forkJoin({
                button_yes: this.localisationService.GetString(this.validationKeyService.ConfirmDefaultButtonYes),
                button_no: this.localisationService.GetString(this.validationKeyService.ConfirmDefaultButtonNo),
            })
                .pipe(take(1))
                .subscribe((texte) => {
                    this.buttons.push(new SacConfirmButton('yes', texte.button_yes, 'primary'));
                    this.buttons.push(new SacConfirmButton('no', texte.button_no));
                });
        } else {
            this.buttons = buttons;
        }
        return super.Confirm();
    }

    /**
     * Generate component factory for a dialog
     * @returns ComponentFactory for SacConfirmComponent
     */
    public GetComponentFactory(): ComponentFactory<SacConfirmComponent> {
        return this.componentFactoryResolver.resolveComponentFactory(SacConfirmComponent);
    }

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * Configure dialog
     * @param instance Instance of a SacConfirm dialog
     */
    protected ConfigureDialog(instance: SacConfirmComponent) {
        // Set text in dialog
        instance.title = this.title;
        instance.message = this.message;
        instance.buttons = this.buttons;
        instance.image = this.iconService.ConfirmDefaultImage;
    }

    // #endregion Protected Methods
}
