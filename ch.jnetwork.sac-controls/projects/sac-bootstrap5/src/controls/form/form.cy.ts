import { SacFormDirective } from '../form';
import { SacInputComponent } from '../input/input';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
                ],
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

    it('should display validation errors after markAsTouched on invalid form and formgroup', () => {
        cy.mount(
            `<form #form="sacform">
                <sac-input name="field" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <div ngModelGroup="fieldingroup">
                    <sac-input name="txtinput2" label="Invalid Input 2" [(ngModel)]="value2" [isrequired]="true"></sac-input>
                </div>
                <button type="button" (click)="form.markAsTouched()">Validate</button>
                </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
                ],
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

    it('should not display validation errors after touch with submit mode invalid form', () => {
        cy.mount(
            `<form #form="sacform" updateon="submit">
                <sac-input name="field" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <sac-input name="field2" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        // Error should not be visible initially
        cy.get('.invalid-feedback, .help-block').should('not.exist');

        // Click to mark as touched
        cy.get('#field').click();
        cy.get('#field2').click();

        // Error should be visible after marking as touched
        cy.get('#field').should('not.have.class', 'is-invalid');
    });

    it('should display validation errors after touch with change mode invalid form', () => {
        cy.mount(
            `<form #form="sacform" updateon="change">
                <sac-input name="field" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <sac-input name="field2" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        // Error should not be visible initially
        cy.get('.invalid-feedback, .help-block').should('not.exist');

        // Click to mark as touched
        cy.get('#field').click();
        cy.get('#field2').click();

        // Error should be visible after marking as touched
        cy.get('#field').should('have.class', 'is-invalid');
    });

    it('should display validation errors after touch with blur mode invalid form', () => {
        cy.mount(
            `<form #form="sacform" updateon="blur">
                <sac-input name="field" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <sac-input name="field2" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        // Error should not be visible initially
        cy.get('.invalid-feedback, .help-block').should('not.exist');

        // Click to mark as touched
        cy.get('#field').click();
        cy.get('#field2').click();

        // Error should be visible after marking as touched
        cy.get('#field').should('have.class', 'is-invalid');
    });

    it('should validate if call updateValueAndValitity without mark as touched', () => {
        cy.mount(
            `<form #form="sacform">
                <sac-input name="field" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <button type="button" (click)="form.updateValueAndValidity()">Validate</button>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
                ],
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

    it('should validate if call updateValueAndValitity without mark as touched and fromgroup', () => {
        cy.mount(
            `<form #form="sacform">
                <sac-input name="field" [label]="'Required Field'" [required]="true" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <div ngModelGroup="fieldingroup">
                    <sac-input name="txtinput2" label="Invalid Input 2" [(ngModel)]="value2" [isrequired]="true"></sac-input>
                </div>                
                <button type="button" (click)="form.updateValueAndValidity()">Validate</button>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
                ],
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
