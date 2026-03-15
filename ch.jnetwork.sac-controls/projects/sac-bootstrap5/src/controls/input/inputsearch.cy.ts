import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacInputSearchComponent } from './inputsearch';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('SacInputSearchComponent', () => {
    it('should emit clicked when search', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" [label]="label" [ngModel]="value" buttontext="Suchen" (ngModelChange)="valueChange.emit($event)" (clicked)="searchAction.emit($event)">
                </sac-inputsearch>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {},
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                            CurrencyText: 'CHF',
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {},
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                            CurrencyText: 'CHF',
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {},
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            EnableE2EAttributes: true,
                            CurrencyText: 'CHF',
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
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-inputsearch > div');
    });

    it('should have floating label with config service', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" buttontext="Search">
                </sac-inputsearch>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
                providers: [
                    {
                        provide: SACCONFIGURATION_SERVICE,
                        useValue: {
                            LabelMode: 'floating',
                        },
                    },
                ],
            }
        );

        cy.shouldHaveFloatingClass();
        cy.get('input').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with layout directive', () => {
        cy.mount(
            `<form sacFormLayout labelMode="floating">
                <sac-inputsearch name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" buttontext="Search">
                </sac-inputsearch>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveFloatingClass();
        cy.get('input').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with component property', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" [label]="label" labelMode="floating" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" buttontext="Search">
                </sac-inputsearch>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveFloatingClass();
        cy.get('input').next('label').should('exist');
        cy.get('label').should('have.text', 'My Label');
    });

    it('should have floating label with component property', () => {
        cy.mount(
            `<form>
                <sac-inputsearch name="field" [label]="label" labelMode="floating" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" buttontext="Search">
                </sac-inputsearch>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputSearchComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'This is a value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', 'This is a value');
    });
});
