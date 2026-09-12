import { DemoSubFormComponent } from './subform.component';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap3ButtonModule,
    SACBootstrap3FormModule,
    SACBootstrap3InputModule,
    SACBootstrap3LayoutModule,
    SACBootstrap3ValidationSummaryModule,
    SacInheritFormDirective,
} from '@simpleangularcontrols/sac-bootstrap3';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3InputModule,
        SACBootstrap3LayoutModule,
        DemoSubFormComponent,
        SACBootstrap3ButtonModule,
    ],
})
export class DemoFormComponent {
    // #region Properties

    public isloadingaction = false;
    public model = { field1: '', field2: '' };
    public model2 = { field: '' };
    @ViewChild('validationForm', { static: true }) public validationForm: SacInheritFormDirective;

    // #endregion Properties

    // #region Public Methods

    /**
     * Shows the current model content as JSON.
     */
    public onAction(): void {
        alert(JSON.stringify(this.model));
    }

    public onSave(): void {
        this.isloadingaction = true;
        const form = this.validationForm.getForm();

        // Wait until all async validators are finished
        const sub = form.statusChanges.subscribe((status) => {
            if (status === 'PENDING') {
                return;
            }

            if (this.validationForm.getForm().valid) {
                console.log('clicked');
                this.isloadingaction = true;

                setTimeout(() => {
                    console.log('clicked');
                    this.isloadingaction = false;
                }, 3000);
            }
            if (this.validationForm.getForm().invalid) {
                this.isloadingaction = false;
            }

            sub.unsubscribe();
        });

        form.form.markAllAsTouched();
        this.validationForm.updateValueAndValidity();
    }

    public onSave2(): void {
        this.isloadingaction = true;
        const form = this.validationForm.validateForm({
            onValidFn: () => {
                setTimeout(() => {
                    console.log('clicked');
                    this.isloadingaction = false;
                }, 3000);
            },
            onCompleteFn: (valid: boolean) => {
                if (!valid) {
                    this.isloadingaction = false;
                }
            },
        });
    }

    // #endregion Public Methods
}
