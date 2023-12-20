import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { convertToBoolean } from '../../utilities/convertion';

/**
 * Common Control für Form Item Container.
 **/
@Directive()
export class SacStaticFormContainerCommon extends SacBaseModelControl<string> {


  /**
   * Definiert den Container als Required Form Item
   */
  private _isrequired: boolean = false;

  /**
   * Text welcher als Tooltip angezeigt wird.
   */
  @Input() tooltiptext: string = '';

  /**
   * Definiert den Container als Required Form Item
   */
  get isrequired(): boolean {
    return this._isrequired;
  }
  /**
   * Definiert den Container als Required Form Item
   */
  @Input()
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
