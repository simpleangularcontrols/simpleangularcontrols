import { Input, TemplateRef, ContentChild, Directive } from '@angular/core';

/**
 * Die Basis Komponente für NgTabItem
 */
@Directive()
export class NgTabItemCommon {
  /**
   * Boolean Property prüft ob das Tab aktiv ist
   */
  @Input('active')
  _active: boolean;
  /**
   * Boolean Property prüft ob das Tab disabled ist
   */
  @Input('disabled')
  _disabled: boolean = false;
  /**
   * ID-String
   */
  @Input('id')
  _id: string;
  /**
   * Label Text vom Control
   */
  @Input('label')
  _label: string;

  /**
   * Das Input property ekzeptiert boolen Wert. Default ist true. Definiert, ob die Komponente hidden sein sollte.
   */
  @Input('unloadwhenhidden')
  _unloadwhenhidden: boolean = true;

  /**
   * ContentChild Decorator
   */
  @ContentChild(TemplateRef, { static: true })
  templateRef: TemplateRef<any>;

}

