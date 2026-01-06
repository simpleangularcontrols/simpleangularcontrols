import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacTooltipComponent } from './tooltip';

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
                imports: [SacTooltipComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.show').should('have.text', 'My Label');
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
                imports: [SacTooltipComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.show').should('have.text', 'My Label');
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
                imports: [SacTooltipComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.show').should('have.text', 'My Label');

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
                imports: [SacTooltipComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('#topelement').scrollIntoView();

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.show').should('have.text', 'My Label');

        cy.get('.tooltip.show').then(($el) => {
            const initialTop = $el[0].getBoundingClientRect().top;
            cy.scrollTo(0, -10);
            cy.get('.tooltip.show').should(($elAfter) => {
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
                imports: [SacTooltipComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );
        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.show').should('have.text', 'My Label');
        cy.get('.tooltip.show').should('have.class', 'left');
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
                imports: [SacTooltipComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );
        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.show').should('have.text', 'My Label');
        cy.get('.tooltip.show').should('have.class', 'bottom');
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
                imports: [SacTooltipComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );
        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.show').should('have.text', 'My Label');
        cy.get('.tooltip.show').should('have.class', 'top');
    });
});
