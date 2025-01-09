import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { convertToBoolean } from '../../utilities/convertion';

/**
 * Common Control für Form Item Container.
 **/
@Directive()
export class SacStaticFormContainerCommon extends SacBaseModelControl<string> {
  // #region Properties

  /**
   * Definiert den Container als Required Form Item
   */
  private _isrequired: boolean = false;

  // #endregion Properties

  // #region Public Getters And Setters

  /**
   * Definiert den Container als Required Form Item
   */
  @Input()
  public set isrequired(v: boolean) {
    this._isrequired = convertToBoolean(v);
  }

  /**
   * Definiert den Container als Required Form Item
   */
  public get isrequired(): boolean {
    return this._isrequired;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Validierung des Controls
   *
   * @description Validierung wird auf dem Form Container nicht gemacht, da kein Model Binding vorhanden.
   * @param c Control das Validiert werden soll
   * @returns Fehlermeldung aus Validation oder NULL
   */
  public validateData(c: AbstractControl): ValidationErrors | null {
    // Keine Validierung, daher immer NULL
    return null;
  }

  // #endregion Public Methods
}
