import { Component } from '@angular/core';

@Component({
    selector: 'app-browser',
    templateUrl: './browser.component.html',
    standalone: true,
})
export class DemoBrowserComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
