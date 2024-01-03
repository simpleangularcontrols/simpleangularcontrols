import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap4FormModule, SACBootstrap4InputModule } from '@simpleangularcontrols/sac-bootstrap4';


@Component({
    selector: 'app-subform',
    templateUrl: './subform.component.html',
    standalone: true,
    imports: [SACBootstrap4FormModule, SACBootstrap4InputModule, FormsModule]
})
export class DemoSubFormComponent implements DoCheck {

  @Input() mymodel;
  @Output() mymodelChange = new EventEmitter();

  ngDoCheck() {
    this.mymodelChange.next(this.mymodel);
  }

}
