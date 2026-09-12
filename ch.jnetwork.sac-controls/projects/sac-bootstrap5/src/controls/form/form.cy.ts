import { SacButtonComponent } from '../buttons/button';
import { SacFormDirective } from '../form';
import { SacInputComponent } from '../input/input';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, FormsModule, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { SacFormCommon, ValidationErrorItem } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Directive({
    selector: '[testDelayValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: TestDelayValidDirective,
            multi: true,
        },
    ],
})
export class TestDelayValidDirective implements AsyncValidator {
    // #region Properties

    @Input('delayresult')
    public resultstate = true;

    // #endregion Properties

    // #region Public Methods

    public validate(control: AbstractControl): Observable<ValidationErrorItem | null> {
        // Returns ‘null’ after 500 ms (= valid)
        if (this.resultstate) {
            return of(null).pipe(delay(500));
        } else {
            return of(new ValidationErrorItem('delayederror', 'ERR.MESSAGE', 'ERR.MESSAGE', 'inputname')).pipe(
                delay(500)
            );
        }
    }

    // #endregion Public Methods
}

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

    it('should call inValidFn only one times if async validator is valid', () => {
        const onValidSpy = cy.spy().as('onValidSpy');
        const onInValidSpy = cy.spy().as('onInValidSpy');
        const onCompleteSpy = cy.spy().as('onCompleteSpy');

        cy.mount(
            `<form #form="sacform">
                <sac-input name="field" [label]="'Required Field'" testDelayValidator [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <sac-button type="button" [isloading]="isloading" (clicked)="save(form)" text="Validate"></sac-button >
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                    TestDelayValidDirective,
                ],
                componentProperties: {
                    isloading: false,
                    valueChange: createOutputSpy('valueSpy'),
                    save: function (form: SacFormCommon) {
                        this.isloading = true;
                        form.validateForm({
                            onValidFn: () => {
                                onValidSpy();
                            },
                            onInvalidFn: () => onInValidSpy(),
                            onCompleteFn: (isvalid: boolean) => {
                                onCompleteSpy();
                                this.isloading = false;
                            },
                        });
                    },
                },
            }
        );

        // Error should not be visible initially
        cy.get('.invalid-feedback, .help-block').should('not.exist');

        // Click to mark as touched
        cy.get('button').click();
        cy.get('button').click();

        cy.get('@onValidSpy').should('have.been.calledOnce');
        cy.get('@onInValidSpy').should('not.have.been.called');
        cy.get('@onCompleteSpy').should('have.been.calledOnce');
    });

    it('should call onInvalidFn only validator is invalid', () => {
        const onValidSpy = cy.spy().as('onValidSpy');
        const onInValidSpy = cy.spy().as('onInValidSpy');
        const onCompleteSpy = cy.spy().as('onCompleteSpy');

        cy.mount(
            `<form #form="sacform">
                <sac-input name="field" [label]="'Required Field'" testDelayValidator 
                    [delayresult]="false" [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                </sac-input>
                <sac-button type="button" [isloading]="isloading" (clicked)="save(form)" text="Validate"></sac-button >
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                    TestDelayValidDirective,
                ],
                componentProperties: {
                    isloading: false,
                    valueChange: createOutputSpy('valueSpy'),
                    save: function (form: SacFormCommon) {
                        this.isloading = true;
                        form.validateForm({
                            onValidFn: () => {
                                onValidSpy();
                            },
                            onInvalidFn: () => {
                                this.isloading = false;
                                onInValidSpy();
                            },
                            onCompleteFn: (isvalid: boolean) => {
                                onCompleteSpy();
                                this.isloading = false;
                            },
                        });
                    },
                },
            }
        );

        // Error should not be visible initially
        cy.get('.invalid-feedback, .help-block').should('not.exist');

        // Click to mark as touched
        cy.get('button').click();
        cy.get('button').click();

        cy.get('@onValidSpy').should('not.have.been.called');
        cy.get('@onInValidSpy').should('have.been.calledOnce');
        cy.get('@onCompleteSpy').should('have.been.calledOnce');
    });

    it('should work without loading indicator', () => {
        const onValidSpy = cy.spy().as('onValidSpy');

        cy.mount(
            `<form #form="sacform">
                        <sac-input name="field" [label]="'Required Field'" testDelayValidator [ngModel]="''" (ngModelChange)="valueChange.emit($event)">
                        </sac-input>
                        <sac-button type="button" [isloading]="isloading" (clicked)="save(form)" text="Validate"></sac-button >
                    </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SacButtonComponent,
                    SACBootstrap5LayoutModule,
                    TestDelayValidDirective,
                ],
                componentProperties: {
                    isloading: false,
                    valueChange: createOutputSpy('valueSpy'),
                    save: function (form: SacFormCommon) {
                        form.validateForm({
                            onValidFn: () => {
                                onValidSpy();
                            },
                        });
                    },
                },
            }
        );

        // Error should not be visible initially
        cy.get('.invalid-feedback, .help-block').should('not.exist');

        // Click to mark as touched
        cy.get('a.btn.btn-default').click();

        cy.get('@onValidSpy').should('have.been.calledOnce');
    });
});
