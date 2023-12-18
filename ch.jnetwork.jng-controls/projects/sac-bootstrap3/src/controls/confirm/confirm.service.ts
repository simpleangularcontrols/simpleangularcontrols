import { Injectable, Type, ComponentFactoryResolver, ApplicationRef, Injector, Inject, ComponentFactory } from '@angular/core';
import { ServiceConfirmCommon, SacConfirmButton, isDefined } from '@jnetwork/sac-common';
import { SacConfirmComponent } from './confirm';
import { EventEmitter } from '@angular/core';

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

  /**
 * Titel der im Dialog angezeigt werden soll.
 */
  private title: string = '';

  /**
   * Message die in Dialog angezeigt werden soll.
   */
  private message: string = '';

  /**
   * Collection von Buttons die angezeigt werden müssen.
   */
  private buttons: SacConfirmButton[] = [];

  /**
   * Konstruktor
   * @param componentFactoryResolver Component Factory Resolver Instanz
   * @param appRef Application Referenz. Wird benötigt um den Dialog am Body anzuhängen
   * @param injector Injector. Wird benötigt um den Dialog dynamisch zu erzeugen
   */
  constructor( @Inject(ComponentFactoryResolver) private componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector) {
    super(appRef, injector);
  }

  /**
   * Erzeugen einer Component Factory für einen Dialog
   */
  public GetComponentFactory(): ComponentFactory<SacConfirmComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(SacConfirmComponent);
  }

  /**
   * Konfiguration des Dialogs
   * @param instance Instanz eines SacConfirm Dialogs
   */
  protected ConfigureDialog(instance: SacConfirmComponent) {
    // Text in Dialog setzen
    instance.title = this.title;
    instance.message = this.message;
    instance.buttons = this.buttons;
    instance.image = '/icons/dialog/question.png';
  }

  /**
   * Confirm Dialog anzeigen
   * @param message Nachricht die angezeigt werden soll.
   * @returns EventEmitter mit Key des Buttons, welcher geklickt wurde.
   */
  public ConfirmMessage(title: string, message: string, buttons: SacConfirmButton[] = null): EventEmitter<string> {
    this.title = title;
    this.message = message;

    // Default Buttons setzen, wenn keine Buttons angegeben sind
    if (!isDefined(buttons)) {
      // TODO: Text von Localisation Service beziehen
      this.buttons = [];
      this.buttons.push(new SacConfirmButton('yes', 'Ja'));
      this.buttons.push(new SacConfirmButton('no', 'Nein'));
    } else {
      this.buttons = buttons;
    }
    return super.Confirm();
  }

}
