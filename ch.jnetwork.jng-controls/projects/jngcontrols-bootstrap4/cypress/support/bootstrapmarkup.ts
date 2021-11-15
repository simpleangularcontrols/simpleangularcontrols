declare namespace Cypress {
  interface Chainable {
    shouldNotHaveLabel(): Chainable;
    shouldHaveLabel(label: string): Chainable;
    shouldBeValid(): Chainable;
    shouldBeInvalid(): Chainable;
  }
}

Cypress.Commands.add('shouldNotHaveLabel', () => {
  cy.get('label').should('have.class', 'sr-only');
});

Cypress.Commands.add('shouldHaveLabel', (label: string) => {
  cy.get('label').contains(label);
});

Cypress.Commands.add('shouldBeValid', () => {
  cy.get('input').focus().blur();
  cy.get('input').should('not.have.class', 'is-invalid');
});

Cypress.Commands.add('shouldBeInvalid', () => {
  cy.get('input').focus().blur();
  cy.get('input').should('have.class', 'is-invalid');
});
