import { FormsModule } from '@angular/forms';
import { mount } from '@jscutlery/cypress-angular/mount';
import { JNetworkBootstrap4FormModule } from '../form/form.module';
import { JNetworkBootstrap4InputModule } from './input.module';

function createComponent(markup: string) {
  mount('<form>' + markup + '</form>', {
    imports: [
      FormsModule,
      JNetworkBootstrap4FormModule,
      JNetworkBootstrap4InputModule,
    ],
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

describe('inputDecimal', () => {
  it('should show label and text', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" [ngModel]="\'0\'"></ngInputEmail>'
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').should('have.value', '0');
  });

  it('should show required', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" [isrequired]="true" [ngModel]="\'\'"></ngInputEmail>'
    );

    cy.shouldHaveLabel('My Label');
    cy.shouldBeInvalid();
    cy.get('input').should('have.value', '');

    cy.get('input').type('max.muster@hotmail.com');
    cy.get('input').should('have.value', 'max.muster@hotmail.com');

    cy.shouldBeValid();
  });

  it('should email validation', () => {
    createComponent(
      '<ngInputEmail name="field" label="My Label" [ngModel]="\'\'"></ngInputEmail>'
    );

    cy.shouldHaveLabel('My Label');
    cy.get('input').type('max.muster');
    cy.get('input').should('have.value', 'max.muster');
    cy.shouldBeInvalid();

    cy.get('input').clear();
    cy.get('input').type('max.muster@localhost');
    cy.get('input').should('have.value', 'max.muster@localhost');
    cy.get('input').should('not.have.class', 'is-invalid');

    cy.get('input').clear();
    cy.get('input').type('max.muster@hotmail.com');
    cy.get('input').should('have.value', 'max.muster@hotmail.com');
    cy.shouldBeValid();

    cy.get('input').clear();
    cy.get('input').type('max.muster@hotmail.intra.com');
    cy.get('input').should('have.value', 'max.muster@hotmail.intra.com');
    cy.shouldBeValid();

    cy.get('input').clear();
    cy.get('input').type('@hotmail.com');
    cy.get('input').should('have.value', '@hotmail.com');
    cy.shouldBeInvalid();

    cy.get('input').clear();
    cy.get('input').type('max.muster@');
    cy.get('input').should('have.value', 'max.muster@');
    cy.shouldBeInvalid();
  });
});
