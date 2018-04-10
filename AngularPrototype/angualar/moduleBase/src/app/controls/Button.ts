import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngButton',
  templateUrl: './button.html',
})
export class NgButton {

  hasError = false;

  @Input() name: string = '';
  @Input() text: string = '';

  @Input("isenabled") _isenabled: boolean = true;

  get _isdisabled(): boolean {
    return this._isenabled == false;
  }


  @Output()
  onclick = new EventEmitter();


  buttonClick() {
    this.onclick.emit();
  };

}
