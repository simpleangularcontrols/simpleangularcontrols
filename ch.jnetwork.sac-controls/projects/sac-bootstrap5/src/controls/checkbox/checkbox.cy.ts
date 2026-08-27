import { SacFormDirective } from '../form';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacCheckboxComponent } from './checkbox';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('sac-checkboxComponent', () => {
    it('should show label and checkbox text', () => {
        cy.mount(
            `<form>
                <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacCheckboxComponent, SacFormDirective, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                    value: false,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('.row .col-12 label.col-form-label').first().should('have.text', 'Control Label');
        cy.get('.form-check label').should('have.text', 'Checkbox Test');
        cy.get('input').should('not.be.checked');
        cy.get('input').click();
        cy.get('@valueSpy').should('be.calledWith', true);
        cy.get('input').click();
        cy.get('@valueSpy').should('be.calledWith', false);
    });

    it('should be disabled', () => {
        cy.mount(
            `<form>
                <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                    value: false,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('not.be.checked');
        cy.get('input').should('be.disabled');
        cy.get('input').click({ force: true });
        cy.get('@valueSpy').should('not.have.been.called');
    });

    it('should not show label', () => {
        cy.mount(
            `<form>
                <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                    value: false,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('.row .col-12 label.col-form-label').should('not.exist');
        cy.get('.row .col-12 label').first().should('not.have.text', 'Control Label');
        cy.get('label.form-check-label').should('have.text', 'Checkbox Test');
    });

    it('should be work with true string', () => {
        cy.mount(
            `<form>
                <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                    value: 'true',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('be.checked');
    });

    it('should have tooltip with disablelabel', () => {
        cy.mount(
            `<form>
                <sac-checkbox [name]="name" [disablelabel]="true" [checkboxtext]="checkboxtext" 
                helptext="This is a Helptext" helptextmode="tooltip">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    name: 'myCheckbox',
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.get('sac-tooltip').should('exist');
    });

    it('should have tooltip', () => {
        cy.mount(
            `<form>
                <sac-checkbox [name]="name" label="Label" [checkboxtext]="checkboxtext" 
                helptext="This is a Helptext" helptextmode="tooltip">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    name: 'myCheckbox',
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.get('sac-tooltip').should('exist');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-checkbox [name]="name" [label]="label" [checkboxtext]="checkboxtext">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    name: 'myCheckbox',
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-checkbox > div', 'myCheckbox');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-checkbox [name]="name" [e2eidentifier]="e2eidentifier" [label]="label" [checkboxtext]="checkboxtext">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    name: 'myCheckbox',
                    e2eidentifier: 'myTestidentifier',
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-checkbox > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-checkbox [e2eidentifier]="e2eidentifier" [label]="label" [checkboxtext]="checkboxtext">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    e2eidentifier: 'myTestidentifier',
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                        },
                    },
                ],
            }
        );

        cy.shouldHaveTestAttributeWithName('sac-checkbox > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacCheckboxComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                },
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-checkbox > div');
    });

    it('should use checkbox style from control', () => {
        cy.mount(
            `<form>
                <sac-checkbox name="checkbox" [label]="label" checkboxstyle="switch" [checkboxtext]="checkboxtext" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-checkbox>
            </form>`,
            {
                imports: [FormsModule, SacCheckboxComponent, SacFormDirective, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                    value: false,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('.row .col-12 label.col-form-label').first().should('have.text', 'Control Label');
        cy.get('.form-check label').should('have.text', 'Checkbox Test');
        cy.get('.form-check').should('have.class', 'form-switch');
        cy.get('input').click();
        cy.get('@valueSpy').should('be.calledWith', true);
        cy.get('input').click();
        cy.get('@valueSpy').should('be.calledWith', false);
    });

    it('should use checkbox style from form layout', () => {
        cy.mount(
            `<form sacFormLayout checkboxstyle="switch">
                <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-checkbox>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacCheckboxComponent,
                    SacFormDirective,
                    SacFormLayoutDirective,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                    value: false,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('.row .col-12 label.col-form-label').first().should('have.text', 'Control Label');
        cy.get('.form-check label').should('have.text', 'Checkbox Test');
        cy.get('.form-check').should('have.class', 'form-switch');
        cy.get('input').click();
        cy.get('@valueSpy').should('be.calledWith', true);
        cy.get('input').click();
        cy.get('@valueSpy').should('be.calledWith', false);
    });

    it('should use checkbox style from service', () => {
        cy.mount(
            `<form>
                <sac-checkbox name="checkbox" [label]="label" [checkboxtext]="checkboxtext" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                </sac-checkbox>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacCheckboxComponent,
                    SacFormDirective,
                    SacFormLayoutDirective,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    label: 'Control Label',
                    checkboxtext: 'Checkbox Test',
                    value: false,
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            CheckboxStyle: 'switch',
                            LabelSizeXs: 12,
                            LabelSizeSm: 4,
                        },
                    },
                ],
            }
        );

        cy.get('.row .col-12 label.col-form-label').first().should('have.text', 'Control Label');
        cy.get('.form-check label').should('have.text', 'Checkbox Test');
        cy.get('.form-check').should('have.class', 'form-switch');
        cy.get('input').click();
        cy.get('@valueSpy').should('be.calledWith', true);
        cy.get('input').click();
        cy.get('@valueSpy').should('be.calledWith', false);
    });
});
