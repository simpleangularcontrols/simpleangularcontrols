import { SacFormDirective } from '../form';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3WizardModule } from './wizard.module';
import { FormsModule } from '@angular/forms';

describe('SacWizardComponent', () => {
    it.skip('componen should exist', () => {
        cy.mount(
            `<form>
                <sac-wizard [label]="label"></sac-wizard>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap3WizardModule, SACBootstrap3LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('sac-wizard').should('exist');
    });
});
