import { SacFormDirective } from '../form';
import { SacInputComponent } from '../input';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4ValidationSummaryModule } from './validationsummary.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, SACCommonUtliltiesModule, Validation } from '@simpleangularcontrols/sac-common';

describe('SACBootstrap4ValidationSummaryModule', () => {
    it('component should exists', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="uploadControl"></sac-validationsummary>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [
                    FormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {},
            }
        );

        cy.get('sac-validationsummary').should('exist');
    });

    it('should show error message when control is invalid', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="uploadControl"></sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" [(ngModel)]="value" [isrequired]="true"></sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    FormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    value: '',
                },
            }
        );

        cy.get('sac-validationsummary').should('exist');
        cy.get('#txtinput').shouldBeInvalid();
        cy.get('div.alert').should('be.visible');
        cy.get('div.alert ul li').eq(0).should('have.text', 'Feld "Invalid Input" ist erforderlich.');
    });

    it('should show custom summary error message when control is invalid', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="uploadControl"></sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" validationmessagesummaryrequired="this is a custom error for field: 'Invalid Input'" [(ngModel)]="value" [isrequired]="true"></sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    FormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    value: '',
                },
            }
        );

        cy.get('sac-validationsummary').should('exist');
        cy.get('#txtinput').shouldBeInvalid();
        cy.get('div.alert').should('be.visible');
        cy.get('div.alert ul li').eq(0).should('have.text', "this is a custom error for field: 'Invalid Input'");
    });

    it('should show multiple error messages when multiple controls are invalid', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="uploadControl"></sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" [(ngModel)]="value" [isrequired]="true"></sac-input>
                <sac-input name="txtinput2" label="Invalid Text" [(ngModel)]="value" [isrequired]="true"></sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    FormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    value: '',
                },
            }
        );

        cy.get('sac-validationsummary').should('exist');
        cy.shouldBeInvalid('#txtinput');
        cy.shouldBeInvalid('#txtinput2');
        cy.get('div.alert').should('be.visible');
        cy.get('div.alert ul li').eq(0).should('have.text', 'Feld "Invalid Input" ist erforderlich.');
        cy.get('div.alert ul li').eq(1).should('have.text', 'Feld "Invalid Text" ist erforderlich.');
    });

    it('should work with reactive forms', () => {
        cy.mount(
            `<div [formGroup]="value">
                <sac-validationsummary [form]="value"></sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" formControlName="inputvalue"></sac-input>
                <sac-input name="txtinput2" label="Invalid Text" formControlName="secondvalue"></sac-input>
            </div>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    ReactiveFormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    value: new FormGroup({
                        inputvalue: new FormControl(
                            '',
                            Validation.required('Custom Error Message', 'Custom Error Message (Field 1)')
                        ),
                        secondvalue: new FormControl(
                            '',
                            Validation.required('Custom Error Message', 'Custom Error Message (Field 2)')
                        ),
                    }),
                },
            }
        );

        cy.get('sac-validationsummary').should('exist');
        cy.shouldBeInvalid('#txtinput');
        cy.shouldBeInvalid('#txtinput2');
        cy.get('div.alert').should('be.visible');
        cy.get('div.alert ul li').eq(0).should('have.text', 'Custom Error Message (Field 1)');
        cy.get('div.alert ul li').eq(1).should('have.text', 'Custom Error Message (Field 2)');
    });

    it('should work with reactive forms and integrated validation', () => {
        cy.mount(
            `<div [formGroup]="value">
                <sac-validationsummary [form]="value"></sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" formControlName="inputvalue" [isrequired]="true"></sac-input>
                <sac-input name="txtinput2" label="Invalid Text" formControlName="secondvalue" [isrequired]="true"></sac-input>
            </div>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    ReactiveFormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: {
                    value: new FormGroup({
                        inputvalue: new FormControl(''),
                        secondvalue: new FormControl(''),
                    }),
                },
            }
        );

        cy.get('sac-validationsummary').should('exist');
        cy.shouldBeInvalid('#txtinput');
        cy.shouldBeInvalid('#txtinput2');
        cy.get('div.alert').should('be.visible');
        cy.get('div.alert ul li').eq(0).should('have.text', 'Feld "Invalid Input" ist erforderlich.');
        cy.get('div.alert ul li').eq(1).should('have.text', 'Feld "Invalid Text" ist erforderlich.');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="myControl">
                </sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" [(ngModel)]="value" [isrequired]="true"></sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    FormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: { value: '' },
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

        cy.get('#txtinput').shouldBeInvalid();
        cy.shouldHaveTestAttributeWithName('sac-validationsummary > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="myControl" e2eidentifier="myTestidentifier">
                </sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" [(ngModel)]="value" [isrequired]="true"></sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    FormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: { value: '' },
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

        cy.get('#txtinput').shouldBeInvalid();
        cy.shouldHaveTestAttributeWithName('sac-validationsummary > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-validationsummary e2eidentifier="myTestidentifier">
                </sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" [(ngModel)]="value" [isrequired]="true"></sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    FormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: { value: '' },
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

        cy.get('#txtinput').shouldBeInvalid();
        cy.shouldHaveTestAttributeWithName('sac-validationsummary > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-validationsummary>
                </sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" [(ngModel)]="value" [isrequired]="true"></sac-input>
            </form>`,
            {
                declarations: [SacFormDirective, SacInputComponent],
                imports: [
                    FormsModule,
                    SACBootstrap4ValidationSummaryModule,
                    SACBootstrap4LayoutModule,
                    SACCommonUtliltiesModule,
                ],
                componentProperties: { value: '' },
            }
        );

        cy.get('#txtinput').shouldBeInvalid();
        cy.shouldHaveDisabledTestAttribute('sac-validationsummary > div');
    });
});
