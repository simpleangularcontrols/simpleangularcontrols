import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5TreeviewModule } from '@simpleangularcontrols/sac-bootstrap5';

describe('SacTreeviewComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-treeview name="treeviewControl" [label]="label" [data]="data"></sac-treeview>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5TreeviewModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                    data: [
                        {
                            id: 1,
                            label: 'Root',
                            icon: '',
                            expanded: true,
                            children: [
                                { id: 2, label: 'Sub Item 1', icon: '', expanded: false, children: [] },
                                { id: 3, label: 'Sub Item 2', icon: '', expanded: false, children: [] },
                                { id: 4, label: 'Sub Item 3', icon: '', expanded: false, children: [] },
                            ],
                        },
                    ],
                },
            }
        );

        cy.shouldHaveLabel('My Label');

        cy.get('sac-treeview').should('exist');
        cy.get('li[data-path="/1"]').should('have.text', 'Root');
        cy.get('li[data-path="/1/3"]').should('have.text', 'Sub Item 2');
    });
});
