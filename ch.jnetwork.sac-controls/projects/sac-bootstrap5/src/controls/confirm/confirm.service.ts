import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  EventEmitter,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import {
  SacConfirmButton,
  ServiceConfirmCommon,
  isDefined,
} from '@simpleangularcontrols/sac-common';
import { forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';
import { SacConfirmComponent } from './confirm';

/**
 * Service für Confirm Messages in TypeScript Code
 *
 * @example
 * // Beispiel für ConfirmMessage mit Standard Buttons (Ja / Nein).
 * confirmService.ConfirmMessage('titel', 'frage').subscribe(action => { // Action Code });
 *
 * @example
 * // Beispiel für ConfirmMessage mit eigenen Buttons
 * let buttons: SacConfirmButton[] = [];
 * buttons.push(new SacConfirmButton('ActionKey','Text Primary'));
 * buttons.push(new SacConfirmButton('ActionKey2','Text Button 2'));
 * confirmService.ConfirmMessage('titel', 'frage', buttons).subscribe(action => { // Action Code });
 */
@Injectable()
export class ServiceConfirm extends ServiceConfirmCommon {
  // #region Properties

  /**
   * Collection von Buttons die angezeigt werden müssen.
   */
  private buttons: SacConfirmButton[] = [];
  /**
   * Message die in Dialog angezeigt werden soll.
   */
  private message: string = '';
  /**
   * Titel der im Dialog angezeigt werden soll.
   */
  private title: string = '';

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param componentFactoryResolver Component Factory Resolver Instanz
   * @param appRef Application Referenz. Wird benötigt um den Dialog am Body anzuhängen
   * @param injector Injector. Wird benötigt um den Dialog dynamisch zu erzeugen
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
   * Confirm Dialog anzeigen
   * @param message Nachricht die angezeigt werden soll.
   * @returns EventEmitter mit Key des Buttons, welcher geklickt wurde.
   */
  public ConfirmMessage(
    title: string,
    message: string,
    buttons: SacConfirmButton[] = null
  ): EventEmitter<string> {
    this.title = title;
    this.message = message;

    // Default Buttons setzen, wenn keine Buttons angegeben sind
    if (!isDefined(buttons)) {
      this.buttons = [];

      forkJoin({
        button_yes: this.localisationService.GetString('CONFIRM_BUTTON_YES'),
        button_no: this.localisationService.GetString('CONFIRM_BUTTON_NO'),
      })
        .pipe(take(1))
        .subscribe((texte) => {
          this.buttons.push(
            new SacConfirmButton('yes', texte.button_yes, 'primary')
          );
          this.buttons.push(new SacConfirmButton('no', texte.button_no));
        });
    } else {
      this.buttons = buttons;
    }
    return super.Confirm();
  }

  /**
   * Erzeugen einer Component Factory für einen Dialog
   */
  public GetComponentFactory(): ComponentFactory<SacConfirmComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(
      SacConfirmComponent
    );
  }

  // #endregion Public Methods

  // #region Protected Methods

  /**
   * Konfiguration des Dialogs
   * @param instance Instanz eines SacConfirm Dialogs
   */
  protected ConfigureDialog(instance: SacConfirmComponent) {
    // Text in Dialog setzen
    instance.title = this.title;
    instance.message = this.message;
    instance.buttons = this.buttons;
    instance.image = this.iconService.ConfirmDefaultImage;
  }

  // #endregion Protected Methods
}
