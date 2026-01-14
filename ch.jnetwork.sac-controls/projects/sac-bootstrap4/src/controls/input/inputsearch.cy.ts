import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SacInputSearchComponent } from './inputsearch';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacInputSearchComponent', () => {
    it('should emit clicked when search', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'Search Value',
                    valueChange: createOutputSpy('valueChange'),
                    searchAction: createOutputSpy('searchAction'),
                },
            }
        );

        cy.get('button').click();
        cy.get('@searchAction').should('be.calledWith', 'Search Value');
    });

    it('should work with model binding', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'Search Value',
                    valueChange: createOutputSpy('valueChange'),
                    searchAction: createOutputSpy('searchAction'),
                },
            }
        );

        cy.get('input').clear().type('New search String');
        cy.get('@valueChange').should('be.calledWith', 'New search String');
    });

    it('should have button with text', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'Search Value',
                    valueChange: createOutputSpy('valueChange'),
                    searchAction: createOutputSpy('searchAction'),
                },
            }
        );

        cy.get('input').should('have.value', 'Search Value');
        cy.get('button').should('have.text', 'Suchen');
        cy.get('button i').should('not.exist');
    });

    it('should have button with icon', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" buttonmode="icon" iconname="fa fa-search" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'Search Value',
                    valueChange: createOutputSpy('valueChange'),
                    searchAction: createOutputSpy('searchAction'),
                },
            }
        );

        cy.get('input').should('have.value', 'Search Value');
        cy.get('button').should('not.have.text', 'Suchen');
        cy.get('button i').should('have.class', 'fa fa-search');
    });

    it('should have button with icon and text', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" buttonmode="mixed" iconname="fa fa-search" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'Search Value',
                    valueChange: createOutputSpy('valueChange'),
                    searchAction: createOutputSpy('searchAction'),
                },
            }
        );

        cy.get('input').should('have.value', 'Search Value');
        cy.get('button').should('have.text', 'Suchen');
        cy.get('button i').should('have.class', 'fa fa-search');
    });

    it('should have button mode from control', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" buttonmode="mixed" iconname="fa fa-search" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'Search Value',
                    valueChange: createOutputSpy('valueChange'),
                    searchAction: createOutputSpy('searchAction'),
                },
            }
        );

        cy.get('input').should('have.value', 'Search Value');
        cy.get('button').should('have.text', 'Suchen');
        cy.get('button i').should('have.class', 'fa fa-search');
    });

    it('should have button mode from layout', () => {
        cy.mount(
            `<form sacFormLayout inputsearchiconmode="mixed">
                <sac-inputsearch name="field"  iconname="fa fa-search" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'Search Value',
                    valueChange: createOutputSpy('valueChange'),
                    searchAction: createOutputSpy('searchAction'),
                },
            }
        );

        cy.get('input').should('have.value', 'Search Value');
        cy.get('button').should('have.text', 'Suchen');
        cy.get('button i').should('have.class', 'fa fa-search');
    });

    it('should have button mode from configuration service', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field"  iconname="fa fa-search" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'Search Value',
                    valueChange: createOutputSpy('valueChange'),
                    searchAction: createOutputSpy('searchAction'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            InputSearchIconMode: 'mixed',
                            LabelSizeXs: 12,
                            LabelSizeSm: 4,
                        },
                    },
                ],
            }
        );

        cy.get('input').should('have.value', 'Search Value');
        cy.get('button').should('have.text', 'Suchen');
        cy.get('button i').should('have.class', 'fa fa-search');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-inputsearch name="myControl" label="my Label" buttontext="Search">
                    </sac-inputsearch>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-inputsearch > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                    <sac-inputsearch name="myControl" e2eidentifier="myTestidentifier" label="my Label" buttontext="Search">
                    </sac-inputsearch>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-inputsearch > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                    <sac-inputsearch e2eidentifier="myTestidentifier" label="my Label" buttontext="Search">
                    </sac-inputsearch>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {},
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

        cy.shouldHaveTestAttributeWithName('sac-inputsearch > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-inputsearch label="my Label" buttontext="Search">
                    </sac-inputsearch>
                </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacInputSearchComponent, SACBootstrap4LayoutModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-inputsearch > div');
    });
});
