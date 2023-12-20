import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';

/**
 * Die Basis Komponente für SacTabItem
 */
@Directive()
export class SacTabItemCommon {
  /**
   * Boolean Property prüft ob das Tab aktiv ist
   */
  @Input()
  active: boolean = false;
  /**
   * Boolean Property prüft ob das Tab disabled ist
   */
  @Input()
  disabled: boolean = false;
  /**
   * ID-String
   */
  @Input()
  id: string;
  /**
   * Label Text vom Control
   */
  @Input()
  label: string;

  /**
   * Das Input property ekzeptiert boolen Wert. Default ist true. Definiert, ob die Komponente hidden sein sollte.
   */
  @Input()
  unloadwhenhidden: boolean = true;

  /**
   * ContentChild Decorator
   */
  @ContentChild(TemplateRef, { static: true })
  templateRef: TemplateRef<any>;
}
