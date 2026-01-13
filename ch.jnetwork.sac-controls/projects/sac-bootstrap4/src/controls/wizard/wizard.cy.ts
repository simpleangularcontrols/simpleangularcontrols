import { SacFormDirective } from '../form';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4WizardModule } from './wizard.module';
import { FormsModule } from '@angular/forms';

describe('SacWizardComponent', () => {
    it.skip('componen should exist', () => {
        cy.mount(
            `<form>
                <sac-wizard [label]="label"></sac-wizard>
            </form>`,
            {
                declarations: [SacFormDirective],
                imports: [FormsModule, SACBootstrap4WizardModule, SACBootstrap4LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.get('sac-wizard').should('exist');
    });
});
