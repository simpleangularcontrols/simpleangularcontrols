import { Input } from '@angular/core';

export class NgTabItemCommon {

  @Input("active")
  _active: boolean;

  @Input("disabled")
  _disabled: boolean = false;

  @Input("id")
  _id: string;

  @Input("label")
  _label: string;

  @Input("unloadwhenhidden")
  _unloadwhenhidden: boolean = true;

}

