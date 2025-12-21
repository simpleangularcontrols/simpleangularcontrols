import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacStaticLabelComponent } from './staticlabel';
import { FormsModule } from '@angular/forms';

describe('SacStaticLabelComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-staticlabel name="staticlabel" [label]="label" [value]="text">
                </sac-staticlabel>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticLabelComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    text: 'Component Text',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('sac-staticlabel').should('exist');
        cy.get('label').should('exist');
        cy.get('.form-control-plaintext').should('exist');
    });
});
