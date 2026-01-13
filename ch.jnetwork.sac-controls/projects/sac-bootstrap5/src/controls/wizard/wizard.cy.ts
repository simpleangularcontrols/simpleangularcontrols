import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacWizardComponent } from './wizard';
import { FormsModule } from '@angular/forms';

describe('SacWizardComponent', () => {
    it.skip('componen should exist', () => {
        cy.mount(
            `<form>
                <sac-wizard [label]="label"></sac-wizard>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacWizardComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('sac-wizard').should('exist');
    });
});
