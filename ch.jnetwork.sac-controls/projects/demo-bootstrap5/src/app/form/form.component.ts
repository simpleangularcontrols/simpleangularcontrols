import { Component } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
})
export class DemoFormComponent {
    // #region Properties

    public model = { field1: '', field2: '' };

    // #endregion Properties

    // #region Public Methods

    public onAction(): void {
        alert(JSON.stringify(this.model));
    }

    // #endregion Public Methods
}
