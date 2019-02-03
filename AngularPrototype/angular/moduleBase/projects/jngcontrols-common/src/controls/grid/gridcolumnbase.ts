import { Input } from '@angular/core';

export class NgGridColumnBaseCommon {
  constructor() { }

  //#region InputOutputs

  @Input("field")
  public field: string;

  @Input("item")
  public item: any;

  @Input("header")
  public header: string;

  @Input("width")
  public width: string;

  //#endregion

}

