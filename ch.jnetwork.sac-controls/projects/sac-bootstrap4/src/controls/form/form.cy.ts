import { SacFormDirective } from '../form';
import { SacInputComponent } from '../input/input';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacFormDirective', () => {
    it('should display validation errors after markAsTouched on invalid form', () => {
        cy.mount(
            `<form #form="sacform">
                <sac-input name="field" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <button type="button" (click)="form.markAsTouched()">Validate</button>
              </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        // Error should not be visible initially
        cy.get('.invalid-feedback, .help-block').should('not.exist');

        // Click to mark as touched
        cy.get('button').click();

        // Error should be visible after marking as touched
        cy.get('input').should('have.class', 'is-invalid');
    });

    it('should validate if call updateValueAndValitity without mark as touched', () => {
        cy.mount(
            `<form #form="sacform">
                <sac-input name="field" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <button type="button" (click)="form.updateValueAndValidity()">Validate</button>
              </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        // Error should not be visible initially
        cy.get('.invalid-feedback, .help-block').should('not.exist');

        // Click to mark as touched
        cy.get('button').click();

        // Error should be visible after marking as touched
        cy.get('input').should('have.class', 'is-invalid');
    });
});
