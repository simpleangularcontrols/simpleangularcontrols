import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5DropdownModule } from './dropdown.module';
import { FormsModule } from '@angular/forms';

describe('SacDropdownComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-dropdown name="dropdown" [label]="label" [emptyvalue]="null" emptylabel="Please select" [ngModel]="null"></sac-dropdown>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5DropdownModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').should('exist');
        cy.get('select').should('have.value', '0: null');
    });
});
