import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Input, Directive } from '@angular/core';
import { NgBaseModelControl } from '../../common/basemodelcontrol';
import { convertToBoolean } from '../../utilities/convertion';

/**
 * Common Control für Form Item Container.
 **/
export class NgStaticFormContainerCommon extends NgBaseModelControl<string> {


  /**
   * Definiert den Container als Required Form Item
   */
  private _isrequired: boolean = false;

  /**
   * Text welcher als Tooltip angezeigt wird.
   */
  @Input('tooltiptext') _tooltiptext: string = '';

  /**
   * Definiert den Container als Required Form Item
   */
  get isrequired(): boolean {
    return this._isrequired;
  }
  /**
   * Definiert den Container als Required Form Item
   */
  @Input('isrequired')
  set isrequired(v: boolean) {
    this._isrequired = convertToBoolean(v);
  }

  /**
   * Validierung des Controls
   *
   * @description Validierung wird auf dem Form Container nicht gemacht, da kein Model Binding vorhanden.
   * @param c Control das Validiert werden soll
   * @returns Fehlermeldung aus Validation oder NULL
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    // Keine Validierung, daher immer NULL
    return null;
  }
}
