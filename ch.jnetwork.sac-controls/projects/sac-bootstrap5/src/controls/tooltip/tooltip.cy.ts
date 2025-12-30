import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacTooltipComponent } from './tooltip';
import { FormsModule } from '@angular/forms';

describe('SacTooltipComponent', () => {
    it('should show tooltip when click on image', () => {
        cy.intercept('GET', 'icons/de.png', {
            fixture: 'de.png',
        }).as('tooltipIcon');

        cy.mount(
            `<form>
                <sac-tooltip name="tooltipControl" [tooltiptext]="tooltiptext">
                    <img src="/icons/de.png" />
                </sac-tooltip>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacTooltipComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    tooltiptext: 'My Label',
                },
            }
        );

        cy.get('sac-tooltip').should('exist');
        cy.get('img').click();
        cy.get('.tooltip.show').should('have.text', 'My Label');
    });

    it('should work with inlinemode', () => {});

    it('should hide when click outside tooltip', () => {});

    it('should change position on scroll', () => {});
});
