import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacInputPasswordComponent } from './inputpassword';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';
import { createOutputSpy } from 'cypress/angular';

describe('ngInputPasswordComponent', () => {
    it('should show label and text', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Text',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('input').should('have.value', 'My Text');
    });

    it('should show required', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [isrequired]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.shouldBeInvalid();

        cy.get('input').should('have.value', '');
        cy.get('input').type('My Text');

        cy.shouldBeValid();

        cy.get('input').should('have.value', 'My Text');
    });

    it('should hide label', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [disablelabel]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldNotHaveLabel();
        cy.get('input').should('exist');
    });

    it('should have placeholder', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" placeholder="My Placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: '',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldHavePlaceholder('My Placeholder');
    });

    it('should have be readonly', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [readonly]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'MyValue',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldBeReadonly();
    });

    it('should have be disabled', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [disabled]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'MyValue',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.shouldBeDisabled();
    });

    it('should handle model binding', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'first value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.value', 'first value');
        cy.get('input').clear().type('second value');
        cy.get('input').should('have.value', 'second value');
        cy.validateValueChanged('second value'.length + 1);
    });

    it('should limit string', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [maxtextlength]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'first value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').clear().type('12345678');
        cy.get('input').should('have.value', '123456');
        cy.validateValueChanged('123456'.length + 1);
    });

    it('should have min string', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [mintextlength]="6" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'first value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').clear().type('12345');
        cy.get('input').should('have.value', '12345');
        cy.validateValueChanged('12345'.length + 1);

        cy.shouldBeInvalid();

        cy.shouldHaveErrorMessage('Feld erfordert min. 6 Zeichen.');

        cy.get('input').clear().type('12345678');

        cy.shouldBeValid();
    });

    it('should not show password eye', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').parent().get('a').should('not.exist');
        cy.get('input').parent().get('.btn').should('not.exist');
    });

    it('should show password eye', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [passwordeye]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').parent().get('a').should('exist');
        cy.get('input').parent().get('.btn').should('exist');
    });

    it('password eye enabled should show password', () => {
        cy.mount(
            `<form>
      <sac-inputpassword name="field" [label]="label" [passwordeye]="true" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
      </sac-inputpassword>
      </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'My Value',
                    valueChange: createOutputSpy('valueSpy'),
                },
            }
        );

        cy.get('input').should('have.attr', 'type', 'password');
        cy.get('input').parent().get('a').should('exist');
        cy.get('input').parent().get('.btn').should('exist');

        cy.get('input').parent().get('a').click();
        cy.get('input').should('have.attr', 'type', 'text');

        cy.get('input').parent().get('a').click();
        cy.get('input').should('have.attr', 'type', 'password');
    });

    it('password eye should not work if control disabled', () => {});

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-inputpassword name="myControl" label="my Label">
                    </sac-inputpassword>
                </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-inputpassword > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                    <sac-inputpassword name="myControl" e2eidentifier="myTestidentifier" label="my Label">
                    </sac-inputpassword>
                </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-inputpassword > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                    <sac-inputpassword e2eidentifier="myTestidentifier" label="my Label">
                    </sac-inputpassword>
                </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-inputpassword > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                    <sac-inputpassword label="my Label">
                    </sac-inputpassword>
                </form>`,
            {
                declarations: [SacFormDirective, SacInputPasswordComponent],
                imports: [FormsModule, SACBootstrap5LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-inputpassword > div');
    });
});
