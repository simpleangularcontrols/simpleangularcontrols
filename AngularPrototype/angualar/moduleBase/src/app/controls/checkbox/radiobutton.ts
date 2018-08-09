import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { NgFormular } from '../form/form';
import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'ngRadiobutton',
  templateUrl: './radiobutton.html',
})
export class NgRadiobutton {

  @Input("name")
  public _name: string;

  @Input("value")
  public _value: string;

  @Input("label")
  public _label: string;

  @Input("checked")
  public _checked: boolean;

  @Input("index")
  public _index: number;

  public ChangeEvent(event): void {
    this.onselectitem.emit();
  }

  @Output()
  onselectitem = new EventEmitter();
}
