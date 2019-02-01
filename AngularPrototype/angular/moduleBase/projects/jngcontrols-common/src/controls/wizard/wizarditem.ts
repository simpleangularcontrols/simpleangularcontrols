import { Input } from '@angular/core';

export class NgWizardItemCommon {

  @Input("active")
  _active: boolean;

  @Input("iscomplete")
  _iscomplete: boolean = false;

  @Input("disabled")
  _disabled: boolean = true;

  @Input("id")
  _id: string;

  @Input("label")
  _label: string;

}
