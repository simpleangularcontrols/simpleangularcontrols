import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5FormModule, SACBootstrap5InputModule } from '@simpleangularcontrols/sac-bootstrap5';


@Component({
    selector: 'app-subform',
    templateUrl: './subform.component.html',
    standalone: true,
    imports: [SACBootstrap5FormModule, SACBootstrap5InputModule, FormsModule]
})
export class DemoSubFormComponent implements DoCheck {

  @Input() mymodel;
  @Output() mymodelChange = new EventEmitter();

  ngDoCheck() {
    this.mymodelChange.next(this.mymodel);
  }

}
