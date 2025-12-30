import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5ValidationSummaryModule } from './validationsummary.module';
import { FormsModule } from '@angular/forms';

describe('SacValidationSummaryComponent', () => {
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

    it('should show error message when control is invalid', () => {});

    it('should show multiple error messages when multiple controls are invalid', () => {});

    it('should work with reactive forms', () => {});
});
