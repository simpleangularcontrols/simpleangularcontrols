import { FormsModule } from '@angular/forms';
import { mount } from '@jscutlery/cypress-angular/mount';
import { JNetworkBootstrap4FormModule } from '../form/form.module';
import { JNetworkBootstrap4InputModule } from './input.module';

describe('inputDecimal', () => {
  it('should show label and text', () => {
    mount(
      '<form><ngInputEmail name="field" label="My Label" [ngModel]="\'0\'"></ngInputEmail></form>',
      {
        imports: [
          FormsModule,
          JNetworkBootstrap4FormModule,
          JNetworkBootstrap4InputModule,
        ],
      }
    );
    cy.get('label').contains('My Label');
    cy.get('input').should('have.value', '0');
  });

  it('should show required', () => {
    mount(
      '<form><ngInputEmail name="field" label="My Label" [isrequired]="true" [ngModel]="\'\'"></ngInputEmail></form>',
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

    cy.get('input').type('max.muster@hotmail.com');
    cy.get('input').should('have.value', 'max.muster@hotmail.com');
    cy.get('input').should('not.have.class', 'is-invalid');
  });

  it('should email validation', () => {
    mount(
      '<form><ngInputEmail name="field" label="My Label" [ngModel]="\'\'"></ngInputEmail></form>',
      {
        imports: [
          FormsModule,
          JNetworkBootstrap4FormModule,
          JNetworkBootstrap4InputModule,
        ],
      }
    );
    cy.get('label').contains('My Label');
    cy.get('input').type('max.muster');
    cy.get('input').focus().blur();
    cy.get('input').should('have.value', 'max.muster');
    cy.get('input').should('have.class', 'is-invalid');

    cy.get('input').clear();
    cy.get('input').type('max.muster@localhost');
    cy.get('input').focus().blur();
    cy.get('input').should('have.value', 'max.muster@localhost');
    cy.get('input').should('not.have.class', 'is-invalid');

    cy.get('input').clear();
    cy.get('input').type('max.muster@hotmail.com');
    cy.get('input').focus().blur();
    cy.get('input').should('have.value', 'max.muster@hotmail.com');
    cy.get('input').should('not.have.class', 'is-invalid');

    cy.get('input').clear();
    cy.get('input').type('max.muster@hotmail.intra.com');
    cy.get('input').focus().blur();
    cy.get('input').should('have.value', 'max.muster@hotmail.intra.com');
    cy.get('input').should('not.have.class', 'is-invalid');

    cy.get('input').clear();
    cy.get('input').type('@hotmail.com');
    cy.get('input').should('have.value', '@hotmail.com');
    cy.get('input').should('have.class', 'is-invalid');

    cy.get('input').clear();
    cy.get('input').type('max.muster@');
    cy.get('input').should('have.value', 'max.muster@');
    cy.get('input').should('have.class', 'is-invalid');
  });
});
