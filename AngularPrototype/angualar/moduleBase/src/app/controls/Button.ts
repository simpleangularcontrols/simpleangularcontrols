import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngButton',
  templateUrl: './button.html',
})
export class NgButton {

  hasError = false;

  @Input() name: string = '';
  @Input() text: string = '';

}
