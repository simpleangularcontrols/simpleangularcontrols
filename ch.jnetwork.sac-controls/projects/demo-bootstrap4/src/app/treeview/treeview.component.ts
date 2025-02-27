import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-treeview',
    templateUrl: './treeview.component.html',
})
export class DemoTreeviewComponent {
    // #region Properties

    @ViewChild('myForm') public myForm: SacFormDirective;

    // #endregion Properties

    // #region Public Methods

    public debugAction(): void {
        this.myForm.markAsTouched();
        alert('Action');
    }

    // #endregion Public Methods
}
