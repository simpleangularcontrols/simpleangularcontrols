import { ControlContainer, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgFormular } from "./form";
import { Component, Input } from "@angular/core";
import { NgInput } from "./input";

@Component({
  selector: 'ngInputArea',
  templateUrl: './inputarea.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInputArea
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgInputArea extends NgInput {

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
