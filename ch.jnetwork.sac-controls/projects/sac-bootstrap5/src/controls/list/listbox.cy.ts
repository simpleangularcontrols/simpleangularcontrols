import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5ListModule } from './list.module';
import { FormsModule } from '@angular/forms';

describe('SacListboxComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-listbox name="listbox" [label]="label" [(ngModel)]="value">
                    <option [ngValue]="1">Value 1</option>
                    <option [ngValue]="2">Value 2</option>
                    <option [ngValue]="3">Value 4</option>                
                </sac-listbox>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5ListModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    value: [1],
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('select').should('exist');
    });
});
