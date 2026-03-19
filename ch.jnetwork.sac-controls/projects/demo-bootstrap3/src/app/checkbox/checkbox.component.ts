import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap3ButtonModule,
    SACBootstrap3CheckboxModule,
    SACBootstrap3FormModule,
    SACBootstrap3StaticLabelModule,
    SACBootstrap3ValidationSummaryModule,
    SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap3';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3CheckboxModule,
        SACBootstrap3StaticLabelModule,
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
        radiobuttons2: null,
        radiobuttons3: 2,
        radiobuttons4: '2',
        radiobuttons5: '2',
    };

    // #endregion Properties

    // #region Public Methods

    /**
     * Marks all fields in the demo form as touched.
     */
    public debugAction(): void {
        this.myForm.markAsTouched();
        alert('Action');
    }

    // #endregion Public Methods
}
