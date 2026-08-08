import { SacFormDirective } from '../form';
import { SacInputComponent } from '../input';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5ValidationSummaryModule } from './validationsummary.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, Validation } from '@simpleangularcontrols/sac-common';

describe('SACBootstrap5ValidationSummaryModule', () => {
    it('component should exists', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="uploadControl"></sac-validationsummary>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
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

    it('should not show error message when control is valid', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="uploadControl"></sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" [(ngModel)]="value"></sac-input>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    value: '',
                },
            }
        );

        cy.get('sac-validationsummary').should('exist');
        cy.get('#txtinput').shouldBeValid();
        cy.get('div.alert').should('not.exist');
    });

    it('should show custom summary error message when control is invalid', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="uploadControl"></sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" validationmessagesummaryrequired="this is a custom error for field: 'Invalid Input'" [(ngModel)]="value" [isrequired]="true"></sac-input>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
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

    it('should show error message for form group', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="validationsummary" formGroupName="fieldingroup"></sac-validationsummary>
                <sac-input name="txtinput1" label="Invalid Input 1" [(ngModel)]="value1" [isrequired]="true"></sac-input>
                <div ngModelGroup="fieldingroup">
                    <sac-input name="txtinput2" label="Invalid Input 2" [(ngModel)]="value2" [isrequired]="true"></sac-input>
                </div>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    value1: '',
                    value2: '',
                },
            }
        );

        cy.get('sac-validationsummary').should('exist');
        cy.shouldBeInvalid('#txtinput2');
        cy.get('div.alert').should('be.visible');
        cy.get('div.alert ul li').eq(0).should('have.text', 'Feld "Invalid Input 2" ist erforderlich.');
    });

    it('should show error message for form group in group', () => {
        cy.mount(
            `<form>
                <sac-validationsummary name="validationsummary" formGroupName="fieldingroup"></sac-validationsummary>
                <sac-input name="txtinput1" label="Invalid Input 1" [(ngModel)]="value1" [isrequired]="true"></sac-input>
                <div ngModelGroup="parentgroup">
                    <div ngModelGroup="fieldingroup">
                        <sac-input name="txtinput2" label="Invalid Input 2" [(ngModel)]="value2" [isrequired]="true"></sac-input>
                    </div>
                </div>
            </form>`,
            {
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    value1: '',
                    value2: '',
                },
            }
        );

        cy.get('sac-validationsummary').should('exist');
        cy.shouldBeInvalid('#txtinput2');
        cy.get('div.alert').should('be.visible');
        cy.get('div.alert ul li').eq(0).should('have.text', 'Feld "Invalid Input 2" ist erforderlich.');
    });

    it('should work with reactive forms', () => {
        cy.mount(
            `<div [formGroup]="value">
                <sac-validationsummary [form]="value"></sac-validationsummary>
                <sac-input name="txtinput" label="Invalid Input" formControlName="inputvalue"></sac-input>
                <sac-input name="txtinput2" label="Invalid Text" formControlName="secondvalue"></sac-input>
            </div>`,
            {
                imports: [
                    ReactiveFormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    value: new UntypedFormGroup({
                        inputvalue: new UntypedFormControl(
                            '',
                            Validation.required('Custom Error Message', 'Custom Error Message (Field 1)')
                        ),
                        secondvalue: new UntypedFormControl(
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

    it('should work with reactive forms and formgroup', () => {
        cy.mount(
            `<div [formGroup]="value">
                <sac-validationsummary [form]="value" formGroupName="group"></sac-validationsummary>
                <div formGroupName="group">
                    <sac-input name="txtinput" label="Invalid Input" formControlName="inputvalue"></sac-input>
                    <sac-input name="txtinput2" label="Invalid Text" formControlName="secondvalue"></sac-input>
                </div>
            </div>`,
            {
                imports: [
                    ReactiveFormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    value: new FormGroup({
                        group: new FormGroup({
                            inputvalue: new FormControl(
                                '',
                                Validation.required('Custom Error Message', 'Custom Error Message (Field 1)')
                            ),
                            secondvalue: new FormControl(
                                '',
                                Validation.required('Custom Error Message', 'Custom Error Message (Field 2)')
                            ),
                        }),
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
                imports: [
                    ReactiveFormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: {
                    value: new UntypedFormGroup({
                        inputvalue: new UntypedFormControl(''),
                        secondvalue: new UntypedFormControl(''),
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SacInputComponent,
                    SACBootstrap5ValidationSummaryModule,
                    SACBootstrap5LayoutModule,
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SACBootstrap5ValidationSummaryModule,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SACBootstrap5ValidationSummaryModule,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
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
                imports: [
                    FormsModule,
                    SacFormDirective,
                    SACBootstrap5ValidationSummaryModule,
                    SacInputComponent,
                    SACBootstrap5LayoutModule,
                ],
                componentProperties: { value: '' },
            }
        );

        cy.get('#txtinput').shouldBeInvalid();
        cy.shouldHaveDisabledTestAttribute('sac-validationsummary > div');
    });
});
