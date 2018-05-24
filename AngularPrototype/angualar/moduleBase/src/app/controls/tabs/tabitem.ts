import { Component, Input, } from '@angular/core';

@Component({
  selector: 'ngTabItem',
  templateUrl: './tabitem.html'
})
export class NgTabItem {

  @Input("active")
  _active: boolean;

  @Input("disabled")
  _disabled: boolean = false;

  @Input("id")
  _id: string;

  @Input("label")
  _label: string;

}

