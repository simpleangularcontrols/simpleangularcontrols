import { ISacIconService } from '../../interfaces/ISacIconService';
import { ISacLocalisationService } from '../../interfaces/ISacLocalisationService';
import { ISacValidationKeyService } from '../../interfaces/ISacValidationKeyService';
import { IConfirmComponent } from '../../interfaces/iconfirmcomponent';
import {
    SACICON_SERVICE,
    SACLOCALISATION_SERVICE,
    SACVALIDATIONKEY_SERVICE,
    SacDefaultIconService,
    SacDefaultLocalisationService,
    SacDefaultValidationKeyService,
} from '../../services';
import { ApplicationRef, ComponentFactory, ComponentRef, EventEmitter, Injector } from '@angular/core';

/**
 * Base class for confirm service implementation
 */
export abstract class ServiceConfirmCommon {
    // #region Properties

    /**
     * Reference to the IConfirm instance.
     */
    protected component: ComponentRef<IConfirmComponent> = null;

    /**
     * service for default icon in dialog
     */
    protected iconService: ISacIconService;

    /**
     * Service for translating default text
     */
    protected localisationService: ISacLocalisationService;

    /**
     * Service to receive standard validation message keys and texts
     */
    protected validationKeyService: ISacValidationKeyService;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param appRef ApplicationRef to attach the dialog to the content
     * @param injector Injector to create the instance
     */
    constructor(
        private appRef: ApplicationRef,
        private injector: Injector
    ) {
        this.validationKeyService = injector.get(SACVALIDATIONKEY_SERVICE, new SacDefaultValidationKeyService());
        this.localisationService = injector.get(
            SACLOCALISATION_SERVICE,
            new SacDefaultLocalisationService(this.validationKeyService)
        );

        this.iconService = injector.get(SACICON_SERVICE, new SacDefaultIconService());
    }

    // #endregion Constructors

    // #region Protected Methods

    /**
     * Hides the dialog
     */
    protected CloseDialog(): void {
        const dialog = this.component.instance;
        dialog.hide();
    }

    /**
     * Method to configure the confirm dialog component
     * @param instance Instance of the IConfirmComponent component
     */
    protected abstract ConfigureDialog(instance: IConfirmComponent);

    /**
     * Internal method for the implementation of the confirm dialog. Controls feedback, creation, and display of the dialog
     */
    protected Confirm(): EventEmitter<string> {
        // Create dialog
        this.CreateInstance();
        const instance: IConfirmComponent = this.OpenDialog();

        // Allow service implementation to configure the dialog instance
        this.ConfigureDialog(instance);

        // Event emitter for confirmation in the service. Initialize asynchronously
        const confirmTask: EventEmitter<string> = new EventEmitter<string>(true);

        // Callback when the dialog is confirmed
        instance.onconfirm.subscribe(
            (value) => {
                // Remove dialog
                this.CloseDialog();

                // Emit on service
                confirmTask.emit(value);
            },
            (err) => {
                // Do nothing on Error
            },
            () => {
                this.DestroyInstance();
            }
        );

        // Return confirm emitter for result
        return confirmTask;
    }

    /**
     * Creates an instance for the dialog
     */
    protected CreateInstance(): void {
        // Load component factory from service
        const factory: ComponentFactory<IConfirmComponent> = this.GetComponentFactory();

        // Create component instance and attach it to the view
        this.component = factory.create(this.injector);
        this.appRef.attachView(this.component.hostView);
    }

    /**
     * Removes the dialog instance
     */
    protected DestroyInstance(): void {
        // Detach dialog from the view and destroy the component
        this.appRef.detachView(this.component.hostView);
        this.component.destroy();
    }

    /**
     * Abstract method to create the component factory for the dialog
     */
    protected abstract GetComponentFactory(): ComponentFactory<IConfirmComponent>;

    /**
     * Shows the dialog
     */
    protected OpenDialog(): IConfirmComponent {
        const dialog = this.component.instance;
        dialog.show();
        return dialog as IConfirmComponent;
    }

    // #endregion Protected Methods
}
