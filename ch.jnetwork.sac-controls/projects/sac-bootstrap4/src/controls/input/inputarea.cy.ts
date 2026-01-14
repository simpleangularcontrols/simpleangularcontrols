import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SacInputAreaComponent } from './inputarea';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('NgInputareaComponent', () => {
    it('should show label and text', () => {
        cy.mount(
            `<form>
      <sac-inputarea name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputarea>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('textarea').should('have.value', 'My Text');
    });

    it('should show required', () => {
        cy.mount(
            `<form>
      <sac-inputarea name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputarea>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid('textarea');

        cy.get('textarea').should('have.value', '');
        cy.get('textarea').type('My Text');

        cy.shouldBeValid('textarea');

        cy.get('textarea').should('have.value', 'My Text');
    });

    it('should hide label', () => {
        cy.mount(
            `<form>
      <sac-inputarea name="field" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputarea>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldNotHaveLabel();
        cy.get('textarea').should('exist');
    });

    it('should have placeholder', () => {
        cy.mount(
            `<form>
      <sac-inputarea name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputarea>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHavePlaceholder('My Placeholder', 'textarea');
    });

    it('should have be readonly', () => {
        cy.mount(
            `<form>
      <sac-inputarea name="field" [label]="label" [readonly]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputarea>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'MyValue',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldBeReadonly('textarea');
    });

    it('should have be disabled', () => {
        cy.mount(
            `<form>
      <sac-inputarea name="field" [label]="label" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputarea>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'MyValue',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldBeDisabled('textarea');
    });

    it('should handle model binding', () => {
        cy.mount(
            `<form>
      <sac-inputarea name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputarea>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'first value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('textarea').should('have.value', 'first value');
        cy.get('textarea').clear().type('second value');
        cy.get('textarea').should('have.value', 'second value');
        cy.validateValueChanged('second value'.length + 1);
    });

    it('should limit string', () => {
        cy.mount(
            `<form>
      <sac-inputarea name="field" [label]="label" [maxtextlength]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputarea>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'first value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('textarea').clear().type('12345678');
        cy.get('textarea').should('have.value', '123456');
        cy.validateValueChanged('123456'.length + 1);
    });

    it('should return length of 0 when value is null', () => {});

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-inputarea name="myControl" label="my Label">
                    </sac-inputarea>
                </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-inputarea > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                    <sac-inputarea name="myControl" e2eidentifier="myTestidentifier" label="my Label">
                    </sac-inputarea>
                </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-inputarea > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                    <sac-inputarea e2eidentifier="myTestidentifier" label="my Label">
                    </sac-inputarea>
                </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-inputarea > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-inputarea label="my Label">
                    </sac-inputarea>
                </form>`,
            {
                declarations: [SacFormDirective, SacInputAreaComponent],
                imports: [FormsModule, SACBootstrap4LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-inputarea > div');
    });
});
