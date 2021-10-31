import { FormsModule } from '@angular/forms';
import { mount } from '@jscutlery/cypress-angular/mount';
import { JNetworkBootstrap4FormModule } from '../form/form.module';
import { JNetworkBootstrap4InputModule } from './input.module';

describe('inputText', () => {
  it('should show label and text', () => {
    mount(
      '<form><ngInput name="field" label="My Label" [ngModel]="\'My Text\'"></ngInput></form>',
      {
        imports: [
          FormsModule,
          JNetworkBootstrap4FormModule,
          JNetworkBootstrap4InputModule,
        ],
      }
    );
    cy.get('label').contains('My Label');
    cy.get('input').should('have.value', 'My Text');
  });

  it('should show required', () => {
    mount(
      '<form><ngInput name="field" label="My Label" [isrequired]="true" [ngModel]="\'\'"></ngInput></form>',
      {
        imports: [
          FormsModule,
          JNetworkBootstrap4FormModule,
          JNetworkBootstrap4InputModule,
        ],
      }
    );
    cy.get('label').contains('My Label');
    cy.get('input').should('not.have.class', 'is-invalid');

    cy.get('input').focus().blur();

    cy.get('input').should('have.class', 'is-invalid');
    cy.get('input').should('have.value', '');

    cy.get('input').type('My Text');
    cy.get('input').should('not.have.class', 'is-invalid');
    cy.get('input').should('have.value', 'My Text');
  });
});
