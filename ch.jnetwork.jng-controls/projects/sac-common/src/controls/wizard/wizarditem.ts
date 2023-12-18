import { Directive, Input } from '@angular/core';

/**
 * Basis Komponente für SacWizardItem
 */
@Directive()
export class SacWizardItemCommon {
  /**
   * Prüft ob der aktuelle Schritt aktiv ist.
   */
  @Input()
  active: boolean;
  /**
   * Prüft ob der Schritt abgeschlossen wurde.
   */
  @Input()
  iscomplete: boolean = false;
  /**
   * Prüft ob der Schritt disabled ist.
   */
  @Input()
  disabled: boolean = true;
  /**
   * ID-String
   */
  @Input()
  id: string;
  /**
   * Label-Property, das angezeigt wird
   */
  @Input()
  label: string;

}
