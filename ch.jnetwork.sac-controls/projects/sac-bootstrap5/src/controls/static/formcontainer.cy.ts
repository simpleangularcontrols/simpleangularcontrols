import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacStaticFormContainerComponent } from './formcontainer';
import { FormsModule } from '@angular/forms';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';

describe('SacStaticFormContainerComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-staticformcontainer [label]="label">
                  <input  type="range" class="form-range" />
                </sac-staticformcontainer>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticFormContainerComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('sac-staticformcontainer').should('exist');
        cy.get('label').should('exist');
        cy.get('label').should('not.have.class', 'required ');
        cy.get('input').should('exist');
    });

    it('should have required class when required', () => {
        cy.mount(
            `<form>
                <sac-staticformcontainer [label]="label" [isrequired]="true">
                  <input type="range" class="form-range" />
                </sac-staticformcontainer>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticFormContainerComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('sac-staticformcontainer').should('exist');
        cy.get('label').should('exist');
        cy.get('label').should('have.class', 'required');
        cy.get('input').should('exist');
    });

    it('should has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-staticformcontainer label="my Label" name="myControl">
                    <input type="range" class="form-range" />
                </sac-staticformcontainer>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticFormContainerComponent, SACBootstrap5LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-staticformcontainer > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.mount(
            `<form>
                <sac-staticformcontainer label="my Label" name="myControl" e2eidentifier="myTestidentifier">
                    <input type="range" class="form-range" />
                </sac-staticformcontainer>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticFormContainerComponent, SACBootstrap5LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-staticformcontainer > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.mount(
            `<form>
                <sac-staticformcontainer label="my Label" e2eidentifier="myTestidentifier">
                    <input type="range" class="form-range" />
                </sac-staticformcontainer>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticFormContainerComponent, SACBootstrap5LayoutModule],
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

        cy.shouldHaveTestAttributeWithName('sac-staticformcontainer > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.mount(
            `<form>
                <sac-staticformcontainer label="my Label">
                    <input type="range" class="form-range" />
                </sac-staticformcontainer>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticFormContainerComponent, SACBootstrap5LayoutModule],
                componentProperties: {},
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-staticformcontainer > div');
    });
});
