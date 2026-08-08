import { SacFormDirective } from '../form';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SacStaticLabelComponent } from './staticlabel';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE, SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

describe('SacStaticLabelComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-staticlabel name="staticlabel" [label]="label" [value]="text">
                </sac-staticlabel>
            </form>`,
            {
                declarations: [SacFormDirective, SacStaticLabelComponent],
                imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    text: 'Component Text',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('sac-staticlabel').should('exist');
        cy.get('label').should('exist');
        cy.get('.form-control-static').should('exist');
    });

    it('should call validator without validation', () => {
        cy.mount(
            `<form>
                <sac-staticlabel name="staticlabel" [label]="label" [value]="text" [isrequired]="true">
                </sac-staticlabel>
            </form>`,
            {
                declarations: [SacFormDirective, SacStaticLabelComponent],
                imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    text: 'Component Text',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('sac-staticlabel').should('exist');
        cy.get('label').should('exist');
        cy.get('form').should('have.class', 'ng-valid');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-staticlabel label="my Label" name="myControl" value="Label Value">
                </sac-staticlabel>
            </form>`,
            {
                declarations: [SacFormDirective, SacStaticLabelComponent],
                imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-staticlabel > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-staticlabel label="my Label" name="myControl" e2eidentifier="myTestidentifier" value="Label Value">
                </sac-staticlabel>
            </form>`,
            {
                declarations: [SacFormDirective, SacStaticLabelComponent],
                imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-staticlabel > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-staticlabel label="my Label" e2eidentifier="myTestidentifier" value="Label Value">
                </sac-staticlabel>
            </form>`,
            {
                declarations: [SacFormDirective, SacStaticLabelComponent],
                imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule],
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

        cy.shouldHaveTestAttributeWithName('sac-staticlabel > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-staticlabel label="my Label" value="Label Value">
                </sac-staticlabel>
            </form>`,
            {
                declarations: [SacFormDirective, SacStaticLabelComponent],
                imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-staticlabel > div');
    });

    it('should not create validation error', () => {
        cy.mount(
            `<form #form="sacform">
                <sac-staticlabel label="my Label" name="field" [ngModel]="value">
                </sac-staticlabel>
                <button type="button" (click)="form.updateValueAndValidity()">Validate</button>
            </form>`,
            {
                declarations: [SacFormDirective, SacStaticLabelComponent],
                imports: [FormsModule, SACBootstrap3LayoutModule, SACCommonUtliltiesModule],
                componentProperties: {
                    label: 'My Label',
                    value: 'This is a Text',
                },
            }
        );

        // Click to mark as touched
        cy.get('button').click();
        // Error not should be visible after marking as touched
        cy.get('form').should('not.have.class', 'ng-invalid');
        cy.get('form').should('have.class', 'ng-valid');
    });
});
