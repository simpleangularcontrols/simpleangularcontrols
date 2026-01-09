import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SacTooltipComponent } from './tooltip';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';

describe('SacTooltipComponent', () => {
    it('should show tooltip when click on image', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<sac-tooltip name="tooltipControl" [tooltiptext]="tooltiptext">
                <img src="/icons/de.png" />
            </sac-tooltip>
            `,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.in').should('have.text', 'My Label');
    });

    it('should work with inlinemode', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<sac-tooltip name="tooltipControl" [inlinemode]="true" [tooltiptext]="tooltiptext">
                <img src="/icons/de.png" />
            </sac-tooltip>`,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.in').should('have.text', 'My Label');
    });

    it('should hide when click outside tooltip', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<div id="outofscope">out of scope element</div>
            <sac-tooltip name="tooltipControl" [tooltiptext]="tooltiptext">
                <img src="/icons/de.png" />
            </sac-tooltip>`,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.in').should('have.text', 'My Label');

        cy.get('#outofscope').click();

        cy.get('.tooltip').should('not.exist');
    });

    it('should change position on scroll', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<div id="topelement" style="height: 500px;">big element</div>
            <sac-tooltip name="tooltipControl" [tooltiptext]="tooltiptext">
                <img src="/icons/de.png" />
            </sac-tooltip>
            <div id="bottomelement" style="padding-top: 500px;">big element</div>`,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('#topelement').scrollIntoView();

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.in').should('have.text', 'My Label');

        cy.get('.tooltip.in').then(($el) => {
            const initialTop = $el[0].getBoundingClientRect().top;
            cy.scrollTo(0, -10);
            cy.get('.tooltip.in').should(($elAfter) => {
                const newTop = $elAfter[0].getBoundingClientRect().top;
                expect(newTop).to.not.equal(initialTop);
            });
        });
    });

    it('should change position when on right side', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<div style="text-align: right; margin-top: 40px;">
                <sac-tooltip name="tooltipControl" [tooltiptext]="tooltiptext">
                    <img src="/icons/de.png" />
                </sac-tooltip>
            </div>`,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );
        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.in').should('have.text', 'My Label');
        cy.get('.tooltip.in').should('have.class', 'left');
    });

    it('should change position when on top right side', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<div style="text-align: right; margin-top: 1px; margin-right: 40px">
                <sac-tooltip name="tooltipControl" [tooltiptext]="tooltiptext">
                    <img src="/icons/de.png" />
                </sac-tooltip>
            </div>`,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );
        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.in').should('have.text', 'My Label');
        cy.get('.tooltip.in').should('have.class', 'bottom');
    });

    it('should change position when on bottom right side', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<div style="text-align: right; margin-top: 730px; margin-right: 40px">
                <sac-tooltip name="tooltipControl" [tooltiptext]="tooltiptext">
                    <img src="/icons/de.png" />
                </sac-tooltip>
            </div>`,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );
        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.in').should('have.text', 'My Label');
        cy.get('.tooltip.in').should('have.class', 'top');
    });

    it('should has e2 testkey with name', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<sac-tooltip name="myControl" [tooltiptext]="tooltiptext">
                <img src="/icons/de.png" />
            </sac-tooltip>
            `,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
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

        cy.shouldHaveTestAttributeWithName('sac-tooltip > div', 'myControl');
    });

    it('should has e2 testkey with testidentifier when name exists', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<sac-tooltip name="myControl" e2eidentifier="myTestidentifier" [tooltiptext]="tooltiptext">
                <img src="/icons/de.png" />
            </sac-tooltip>
            `,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
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

        cy.shouldHaveTestAttributeWithName('sac-tooltip > div', 'myTestidentifier');
    });

    it('should has e2 testkey with testidentifier when name not exists', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<sac-tooltip e2eidentifier="myTestidentifier" [tooltiptext]="tooltiptext">
                <img src="/icons/de.png" />
            </sac-tooltip>
            `,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
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

        cy.shouldHaveTestAttributeWithName('sac-tooltip > div', 'myTestidentifier');
    });

    it('should not has e2 testkey with name', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<sac-tooltip [tooltiptext]="tooltiptext">
                <img src="/icons/de.png" />
            </sac-tooltip>
            `,
            {
                imports: [SacTooltipComponent, SACBootstrap3LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.shouldHaveDisabledTestAttribute('sac-tooltip > div');
    });
});
