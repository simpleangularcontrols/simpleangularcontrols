import { Input } from '@angular/core';

/**
 * Basis Komponente für NgWizardItem
 */
export class NgWizardItemCommon {
  /**
   * Prüft ob der aktuelle Schritt aktiv ist.
   */
  @Input("active")
  _active: boolean;
  /**
   * Prüft ob der Schritt abgeschlossen wurde.
   */
  @Input("iscomplete")
  _iscomplete: boolean = false;
  /**
   * Prüft ob der Schritt disabled ist.
   */
  @Input("disabled")
  _disabled: boolean = true;
  /**
   * ID-String
   */
  @Input("id")
  _id: string;
  /**
   * Label-Property, das angezeigt wird
   */
  @Input("label")
  _label: string;

}
