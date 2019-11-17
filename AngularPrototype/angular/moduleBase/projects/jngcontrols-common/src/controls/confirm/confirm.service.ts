import { Injector, ApplicationRef, ViewContainerRef, Inject, ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { IConfirmComponent } from '../../interfaces/iconfirmcomponent';

/**
 * Basis Klasse für Confirm Service implementation
 */
export abstract class ServiceConfirmCommon {

  /**
   * Konstruktor
   * @param appRef ApplicationRef zum Anhängen des Dialogs an den Content
   * @param injector Injector um die Instanz zu erzeuge
   */
  constructor(private appRef: ApplicationRef, private injector: Injector) {
  }

  //#region Properties

  /**
   * Referenz auf IConfirm Instanz.
   */
  protected component: ComponentRef<IConfirmComponent> = null;

  //#endregion

  //#region Abstract Methods

  /**
   * Abstrakte Methode zum erzeugen der Komponent Factory für den Dialog
   */
  protected abstract GetComponentFactory(): ComponentFactory<IConfirmComponent>;

  /**
   * Methode zur Konfiguration der Confirm Dialog Komponente
   * @param instance Instanz auf IConfirmComponent Komponente
   */
  protected abstract ConfigureDialog(instance: IConfirmComponent);

  //#endregion

  //#region Protected Methods

  /**
   * Erzeugt eine Instanz für den Dialog
   */
  protected CreateInstance(): void {
    // ComponentFactory aus Service laden
    const factory: ComponentFactory<IConfirmComponent> = this.GetComponentFactory();

    // Instanz der Komponente erzeugen und an die View anhängen
    this.component = factory.create(this.injector);
    this.appRef.attachView(this.component.hostView);
  }

  /**
    * Entfernt die Instanz des Dialogs
    */
  protected DestroyInstance(): void {
    // Dialog aus View entfernen und Komponenten löschen
    this.appRef.detachView(this.component.hostView);
    this.component.destroy();
  }

  /**
   * Zeigt den Dialog an
   */
  protected OpenDialog(): IConfirmComponent {
    const dialog = this.component.instance;
    dialog.show();
    return dialog as IConfirmComponent;
  }

  /**
   * Blendet den Dialog aus
   */
  protected CloseDialog(): void {
    const dialog = this.component.instance;
    dialog.hide();
  }

  /**
   * Interne Methode für die Implementation des Confirm Dialogs. Steuert die Feedbacks, die Erzeugung und Anzeige des Dialogs
   */
  protected Confirm(): EventEmitter<string> {
    // Dialog erzeugen
    this.CreateInstance();
    const instance: IConfirmComponent = this.OpenDialog();

    // Konfiguration der Dialog Instanz durch Service Implementation zulassen
    this.ConfigureDialog(instance);

    // Event Emitter für Confirmation im Service. Event Emitter Asynchron initialiseren
    const confirmTask: EventEmitter<string> = new EventEmitter<string>(true);

    // Callback wenn Dialog bestätigt wurde
    instance.onconfirm.subscribe(value => {
      // Dialog entfernen
      this.CloseDialog();
      this.DestroyInstance();

      // Emit auf Service auslösen
      confirmTask.emit(value);
    });

    // Confirm Emitter für Result zurückgeben
    return confirmTask;
  }

  //#endregion
}
