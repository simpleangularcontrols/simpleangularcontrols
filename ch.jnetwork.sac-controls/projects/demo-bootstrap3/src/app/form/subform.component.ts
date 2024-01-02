import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3FormModule, SACBootstrap3InputModule } from '@simpleangularcontrols/sac-bootstrap3';


@Component({
    selector: 'app-subform',
    templateUrl: './subform.component.html',
    standalone: true,
    imports: [SACBootstrap3FormModule, SACBootstrap3InputModule, FormsModule]
})
export class DemoSubFormComponent implements DoCheck {

  @Input() mymodel;
  @Output() mymodelChange = new EventEmitter();

  ngDoCheck() {
    this.mymodelChange.next(this.mymodel);
  }

}
