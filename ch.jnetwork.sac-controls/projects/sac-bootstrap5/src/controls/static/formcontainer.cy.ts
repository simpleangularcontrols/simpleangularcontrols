import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacStaticFormContainerComponent } from './formcontainer';
import { FormsModule } from '@angular/forms';

describe('SacStaticFormContainerComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-staticformcontainer [label]="label">
                  <input  type="range" class="form-range" />
                </sac-staticformcontainer>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticFormContainerComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('sac-staticformcontainer').should('exist');
        cy.get('label').should('exist');
        cy.get('label').should('not.have.class', 'required ');
        cy.get('input').should('exist');
    });

    it('should have required class when required', () => {
        cy.mount(
            `<form>
                <sac-staticformcontainer [label]="label" [isrequired]="true">
                  <input  type="range" class="form-range" />
                </sac-staticformcontainer>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SacStaticFormContainerComponent, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
        cy.get('sac-staticformcontainer').should('exist');
        cy.get('label').should('exist');
        cy.get('label').should('have.class', 'required');
        cy.get('input').should('exist');
    });
});
