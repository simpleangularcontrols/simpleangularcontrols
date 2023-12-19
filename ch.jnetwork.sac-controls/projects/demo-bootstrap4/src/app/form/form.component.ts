import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class DemoFormComponent {
  public model = { field1: '', field2: '' };

  public onAction(): void {
    alert(JSON.stringify(this.model));
  }
}
