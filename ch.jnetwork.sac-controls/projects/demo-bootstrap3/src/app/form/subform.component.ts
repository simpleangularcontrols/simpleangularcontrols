import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { DoCheck } from '@angular/core';


@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html'
})
export class DemoSubFormComponent implements DoCheck {

  @Input() mymodel;
  @Output() mymodelChange = new EventEmitter();

  ngDoCheck() {
    this.mymodelChange.next(this.mymodel);
  }

}
