import { Input, } from "@angular/core";
import { NgInputCommon } from "./input";

export class NgInputAreaCommon extends NgInputCommon {

  @Input("rows") _rows: number = 5;

  get _currentLength(): number {
    if (this.value === null || this.value === undefined)
      return 0;
    else
      return this.value.length + this.value.split(/\r|\n/).length - 1;
  }

  public onKeyPress(event: KeyboardEvent): Boolean {
    // Exist if MaxLength not defined
    if (this._maxlength === undefined || this._maxlength === null)
      return true;

    if (this._currentLength >= this._maxlength || ((event.keyCode === 13 || event.keyCode === 10) && this._currentLength + 1 >= this._maxlength))
      event.preventDefault();
  }
}
