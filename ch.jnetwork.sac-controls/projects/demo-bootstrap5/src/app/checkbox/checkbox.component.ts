import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5CheckboxModule,
    SACBootstrap5FormModule,
    SACBootstrap5StaticLabelModule,
    SACBootstrap5ValidationSummaryModule,
    SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5CheckboxModule,
        SACBootstrap5StaticLabelModule,
    ],
})
export class DemoCheckboxComponent {
    // #region Properties

    @ViewChild('myForm') public myForm: SacFormDirective;
    public values: any = {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        radiobuttons1: '1',
        radiobuttons2: '2',
    };

    // #endregion Properties

    // #region Public Methods

    public debugAction(): void {
        this.myForm.markAsTouched();
        alert('Action');
    }

    // #endregion Public Methods
}
