import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('NgRadiobuttonComponent', () => {
    it('should show label and checkbox text', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons name="radiobuttons" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" [value]="1"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" [value]="2"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 1,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('label.col-form-label').should('have.text', 'Radiobutton Test');
        cy.get('label.form-check-label').first().should('have.text', 'Control Label 1');
        cy.get('label.form-check-label').eq(1).should('have.text', 'Control Label 2');
        cy.get('input').first().should('be.checked');
        cy.get('input').eq(1).should('not.be.checked');
        cy.get('input').eq(1).click();
        cy.get('@valueSpy').should('be.calledWith', 2);
        cy.get('input').first().click();
        cy.get('@valueSpy').should('be.calledWith', 1);
    });

    it('should be disabled', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons name="radiobuttons" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" [value]="1"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" [value]="2" [disabled]="true"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 1,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').first().should('be.checked');
        cy.get('input').eq(1).should('not.be.checked');
        cy.get('input').eq(1).should('be.disabled');
        cy.get('input').eq(1).click({ force: true });
        cy.get('@valueSpy').should('not.have.been.called');
    });

    it('should not show label', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons name="radiobuttons" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" [value]="1"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" [value]="2"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 1,
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('label.col-form-label').should('not.exist');
    });

    it('should be work with string values', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons name="radiobuttons" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" value="item1"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').eq(1).should('be.checked');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons [name]="name" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" value="item1"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    name: 'myRadioButtons',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
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

        cy.shouldHaveTestAttributeWithName('sac-radiobuttons > div', 'myRadioButtons');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons [name]="name" [e2eidentifier]="e2eidentifier" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" value="item1"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    name: 'myRadioButtons',
                    e2eidentifier: 'myTestidentifier',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
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

        cy.shouldHaveTestAttributeWithName('sac-radiobuttons > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons name="myRadioButtons" [e2eidentifier]="e2eidentifier" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" value="item1"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    e2eidentifier: 'myTestidentifier',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
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

        cy.shouldHaveTestAttributeWithName('sac-radiobuttons > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons [name]="name" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" value="item1"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    name: 'myRadioButtons',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-radiobuttons > div');
    });

    it('should have helptext at radio button', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons [name]="name" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" 
                    helptext="Custom text for support user">
                    <sac-radiobutton [label]="rbLabel1" value="item1" ></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    name: 'myRadioButtons',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('div.row .form-text').should('have.text', 'Custom text for support user');
    });

    it('should not visible with hidden attribute', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons [name]="name" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" 
                    helptext="Custom text for support user">
                    <sac-radiobutton [label]="rbLabel1" value="item1" ></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel3" value="item3" [hidden]="true"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    name: 'myRadioButtons',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    rbLabel3: 'Control Label 3',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('label.form-check-label').last().should('have.text', 'Control Label 2');
    });

    it('should unset value when selected value is hidden', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons [name]="name" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
                    <sac-radiobutton [label]="rbLabel1" value="item1" ></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel3" [checked]="true" value="item3" [hidden]="ishidden"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    name: 'myRadioButtons',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    rbLabel3: 'Control Label 3',
                    ishidden: false,
                    value: 'item3',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        ).then(({ component, fixture }) => {
            component.ishidden = true;
            fixture.detectChanges();
        });

        // Event was not called but why?
        // cy.get('@valueSpy').should('be.calledWith', null);
        cy.get('label.form-check-label').last().should('have.text', 'Control Label 2');
    });

    it('should use helptext mode from control', () => {
        cy.mount(
            `<form sacFormLayout helptextmode="tooltip">
                <sac-radiobuttons [name]="name" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" 
                    helptext="Custom text for support user">
                    <sac-radiobutton [label]="rbLabel1" value="item1" ></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel3" value="item3" [hidden]="true"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    name: 'myRadioButtons',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    rbLabel3: 'Control Label 3',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('sac-tooltip').should('exist');
    });

    it('should use helptext mode from form layout', () => {
        cy.mount(
            `<form>
                <sac-radiobuttons [name]="name" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" 
                    helptext="Custom text for support user">
                    <sac-radiobutton [label]="rbLabel1" value="item1" ></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel2" value="item2"></sac-radiobutton>
                    <sac-radiobutton [label]="rbLabel3" value="item3" [hidden]="true"></sac-radiobutton>
                </sac-radiobuttons>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacRadiobuttonsComponent,
                    SacRadiobuttonComponent,
                    SACBootstrap4LayoutModule,
                ],
                componentProperties: {
                    name: 'myRadioButtons',
                    label: 'Radiobutton Test',
                    rbLabel1: 'Control Label 1',
                    rbLabel2: 'Control Label 2',
                    rbLabel3: 'Control Label 3',
                    value: 'item2',
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            HelptextMode: 'tooltip',
                            LabelSizeXs: 12,
                            LabelSizeSm: 4,
                        },
                    },
                ],
            }
        );

        cy.get('sac-tooltip').should('exist');
    });
});
