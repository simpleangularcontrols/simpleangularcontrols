import { Output, EventEmitter, Input } from '@angular/core';
import { NgInputCommon } from "./input";



export class NgInputSearchCommon extends NgInputCommon {

  @Input("iconname") _searchIconName: string = "";

  @Input("buttontext") _buttontext: string = "";

  @Output("onclick")
  clickaction: EventEmitter<any> = new EventEmitter<any>();

  searchClick() {
    this.clickaction.emit(this.value)
  }
}
