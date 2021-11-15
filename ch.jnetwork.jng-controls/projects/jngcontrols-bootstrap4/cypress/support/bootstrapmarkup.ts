declare namespace Cypress {
  interface Chainable {
    shouldNotHaveLabel(): Chainable;
    shouldHaveLabel(label: string): Chainable;
    shouldBeValid(tagName?: string): Chainable;
    shouldBeInvalid(tagName?: string): Chainable;
  }
}

Cypress.Commands.add('shouldNotHaveLabel', () => {
  cy.get('label').should('have.class', 'sr-only');
});

Cypress.Commands.add('shouldHaveLabel', (label: string) => {
  cy.get('label').contains(label);
});

Cypress.Commands.add('shouldBeValid', (tagName: string = 'input') => {
  cy.get(tagName).focus().blur();
  cy.get(tagName).should('not.have.class', 'is-invalid');
});

Cypress.Commands.add('shouldBeInvalid', (tagName: string = 'input') => {
  cy.get(tagName).focus().blur();
  cy.get(tagName).should('have.class', 'is-invalid');
});
