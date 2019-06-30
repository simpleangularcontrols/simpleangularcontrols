import { Input, TemplateRef, ContentChild } from '@angular/core';

export class NgTabItemCommon {
  /**
   * Boolean Property prüft ob das Tab aktiv ist
   */
  @Input("active")
  _active: boolean;
  /**
   * Boolean Property prüft ob das Tab disabled ist
   */
  @Input("disabled")
  _disabled: boolean = false;
  /**
   * ID-String
   */
  @Input("id")
  _id: string;
  /**
   * Label Text vom Control
   */
  @Input("label")
  _label: string;

  @Input("unloadwhenhidden")
  _unloadwhenhidden: boolean = true;
  /**
   * ContentChild Decorator 
   */
  @ContentChild(TemplateRef)
  templateRef: TemplateRef<any>;

}

