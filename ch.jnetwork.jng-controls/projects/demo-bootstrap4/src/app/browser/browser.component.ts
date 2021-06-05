import { Component, ViewChild } from '@angular/core';
import { NgFormularDirective } from '@jnetwork/jngcontrols-bootstrap4';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
})
export class DemoBrowserComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
