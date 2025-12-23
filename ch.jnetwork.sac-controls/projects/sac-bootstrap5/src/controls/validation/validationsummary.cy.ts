import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5ValidationSummaryModule } from './validationsummary.module';
import { FormsModule } from '@angular/forms';

describe('SacValidationSummaryComponent', () => {
    it('should show label and component', () => {
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
});
